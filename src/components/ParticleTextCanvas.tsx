import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface ParticleTextCanvasProps {
  text?: string;
  className?: string;
  primaryColor?: string;
  repulsionRadius?: number;
  samplingStep?: number;
  align?: 'start' | 'center' | 'left' | 'right';
  isRtl?: boolean;
}

export const ParticleTextCanvas: React.FC<ParticleTextCanvasProps> = ({
  text = 'Ibrahim Issa',
  className = '',
  primaryColor = '#0284C7', // Light Sky Blue accent
  repulsionRadius = 80,
  samplingStep = 2, // Denser dot matrix
  align = 'start',
  isRtl = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = {
      x: -9999,
      y: -9999,
      radius: repulsionRadius,
    };

    // Calculate canvas bounds and setup particles
    const initParticles = () => {
      if (!isMounted) return;
      try {
        const rect = container.getBoundingClientRect();
        const width = Math.max(300, Math.floor(rect.width));
        const height = Math.max(130, Math.floor(rect.height));

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        // 1. Offscreen temporary canvas to render text and scan pixel coordinates
        const offscreen = document.createElement('canvas');
        offscreen.width = width;
        offscreen.height = height;
        const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
        if (!offCtx) return;

        const paddingX = Math.max(8, Math.floor(width * 0.015));
        const availableWidth = width - paddingX * 2;

        // Select optimal font stack based on language script
        const fontStack = isRtl 
          ? '"Alexandria", "Readex Pro", "Cairo", system-ui, sans-serif' 
          : '"Syne", "Plus Jakarta Sans", system-ui, sans-serif';

        // Scale font substantially bigger to fill height and available width
        let fontSize = Math.min(Math.floor(height * 0.78), Math.floor(width * (isRtl ? 0.17 : 0.16)));
        offCtx.font = `800 ${fontSize}px ${fontStack}`;
        try {
          offCtx.direction = isRtl ? 'rtl' : 'ltr';
        } catch {
          // ignore if direction not supported
        }

        let measuredWidth = offCtx.measureText(text).width;
        if (measuredWidth > availableWidth) {
          fontSize = Math.floor(fontSize * (availableWidth / measuredWidth));
          offCtx.font = `800 ${fontSize}px ${fontStack}`;
        }

        offCtx.fillStyle = '#000000';
        
        // Handle text alignment smoothly
        let textX = width / 2;
        if (align === 'start') {
          if (isRtl) {
            offCtx.textAlign = 'right';
            textX = width - paddingX;
          } else {
            offCtx.textAlign = 'left';
            textX = paddingX;
          }
        } else if (align === 'left') {
          offCtx.textAlign = 'left';
          textX = paddingX;
        } else if (align === 'right') {
          offCtx.textAlign = 'right';
          textX = width - paddingX;
        } else {
          offCtx.textAlign = 'center';
          textX = width / 2;
        }

        offCtx.textBaseline = 'middle';
        offCtx.fillText(text, textX, height / 2);

        // Scan for text pixel coordinates
        const imgData = offCtx.getImageData(0, 0, width, height);
        const data = imgData.data;
        const newParticles: Particle[] = [];

        // Denser sampling (step = 2) yields thousands of crisp particles
        const step = Math.max(2, samplingStep);

        for (let y = 0; y < height; y += step) {
          for (let x = 0; x < width; x += step) {
            const index = (y * width + x) * 4;
            const alpha = data[index + 3];

            // Threshold for text pixel presence
            if (alpha > 110) {
              // Spawn particle with spring physics remembering home coordinate
              newParticles.push({
                x: x + (Math.random() - 0.5) * 30,
                y: y + (Math.random() - 0.5) * 30,
                homeX: x,
                homeY: y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                radius: 1.15, // ~2.3px diameter light sky blue dot
                color: primaryColor,
              });
            }
          }
        }

        particles = newParticles;
      } catch (e) {
        console.warn('Particle text canvas error:', e);
      }
    };

    initParticles();
    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (isMounted) initParticles();
      }).catch(() => {});
    }

    // 2. Track mouse movement across the scene
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Track on window for smooth scene-wide mouse responsiveness
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    // Touch support across window
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    // 3. Animation loop with spring & repulsion physics
    const springStrength = 0.082;
    const friction = 0.85;
    const repulsionStrength = 8.5;
    const repulsionRad = mouse.radius;

    const render = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Transparent clear - seamlessly preserves the page background
      ctx.clearRect(0, 0, width, height);

      // High-performance batched canvas rendering
      ctx.fillStyle = primaryColor;
      ctx.beginPath();

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Repulsion physics from mouse cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repulsionRad && dist > 0) {
          const force = (1 - dist / repulsionRad) * repulsionStrength;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force;
          p.vy -= Math.sin(angle) * force;
        }

        // Spring force returning particle to baseline home coordinate
        const homeDx = p.homeX - p.x;
        const homeDy = p.homeY - p.y;

        p.vx += homeDx * springStrength;
        p.vy += homeDy * springStrength;

        // Damping / friction for smooth vector deceleration
        p.vx *= friction;
        p.vy *= friction;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Add to batched path
        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }

      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // 4. Handle resize observer without breaking interactive boundaries
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initParticles();
      }, 100);
    });

    resizeObserver.observe(container);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [text, primaryColor, repulsionRadius, samplingStep, align, isRtl]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full touch-none pointer-events-none"
        aria-label={`Interactive particle text: ${text}`}
      />
    </div>
  );
};
