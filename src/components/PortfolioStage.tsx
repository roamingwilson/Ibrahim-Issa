import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language, Project } from '../types';
import { SCENES, PROJECTS } from '../data/portfolioData';
import { SystemTelemetryBar } from './SystemTelemetryBar';
import { SceneIntro } from '../scenes/SceneIntro';
import { SceneImpact } from '../scenes/SceneImpact';
import { SceneAbout } from '../scenes/SceneAbout';
import { SceneCapabilities } from '../scenes/SceneCapabilities';
import { SceneProjects } from '../scenes/SceneProjects';
import { SceneProjectDetail } from '../scenes/SceneProjectDetail';
import { SceneContact } from '../scenes/SceneContact';
import { FuturisticBackground } from './FuturisticBackground';
import { ElectronicCookieNotice } from './ElectronicCookieNotice';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioStageProps {
  lang: Language;
  onToggleLanguage: () => void;
}

export const PortfolioStage: React.FC<PortfolioStageProps> = ({
  lang,
  onToggleLanguage,
}) => {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Wheel accumulation refs
  const accumulatedDelta = useRef<number>(0);
  const lastWheelTime = useRef<number>(0);
  const transitionLockTimer = useRef<NodeJS.Timeout | null>(null);

  // Touch tracking refs
  const touchStartY = useRef<number>(0);
  const touchStartX = useRef<number>(0);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Safe scene transition handler
  const transitionToScene = useCallback((targetIndex: number) => {
    if (targetIndex === currentScene || targetIndex < 0 || targetIndex >= SCENES.length) {
      return;
    }

    const newDirection = targetIndex > currentScene ? 1 : -1;
    setDirection(newDirection);
    setIsTransitioning(true);
    setCurrentScene(targetIndex);

    if (transitionLockTimer.current) {
      clearTimeout(transitionLockTimer.current);
    }

    // Cooldown lock to prevent accidental multiple skips
    transitionLockTimer.current = setTimeout(() => {
      setIsTransitioning(false);
      accumulatedDelta.current = 0;
    }, 750);
  }, [currentScene]);

  // Navigate relative (+1 or -1)
  const handleNavigateRelative = useCallback((deltaDirection: 1 | -1) => {
    const nextIndex = currentScene + deltaDirection;
    if (nextIndex >= 0 && nextIndex < SCENES.length) {
      transitionToScene(nextIndex);
    }
  }, [currentScene, transitionToScene]);

  // Wheel Gesture Accumulator with threshold
  useEffect(() => {
    const WHEEL_THRESHOLD = 65; // High enough to avoid accidental sensitivity, low enough to feel effortless

    const handleWheel = (e: WheelEvent) => {
      // Check if user is scrolling inside an element that explicitly allows internal scroll
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.allow-native-scroll')) {
        return;
      }

      e.preventDefault();

      if (isTransitioning) {
        return;
      }

      const now = performance.now();
      if (now - lastWheelTime.current > 280) {
        accumulatedDelta.current = 0;
      }
      lastWheelTime.current = now;

      accumulatedDelta.current += e.deltaY;

      if (Math.abs(accumulatedDelta.current) >= WHEEL_THRESHOLD) {
        const dir: 1 | -1 = accumulatedDelta.current > 0 ? 1 : -1;
        handleNavigateRelative(dir);
        accumulatedDelta.current = 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isTransitioning, handleNavigateRelative]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (isTransitioning) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        handleNavigateRelative(1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        handleNavigateRelative(-1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        transitionToScene(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        transitionToScene(SCENES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning, handleNavigateRelative, transitionToScene]);

  // Touch handling for mobile gestures
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;

      const diffY = touchEndY - touchStartY.current;
      const diffX = touchEndX - touchStartX.current;

      // Ensure vertical swipe has higher magnitude than horizontal
      if (Math.abs(diffY) > 45 && Math.abs(diffY) > Math.abs(diffX) * 1.2) {
        if (diffY < 0) {
          // Swiped up -> next scene
          handleNavigateRelative(1);
        } else {
          // Swiped down -> prev scene
          handleNavigateRelative(-1);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTransitioning, handleNavigateRelative]);

  // Clean up lock timer on unmount
  useEffect(() => {
    return () => {
      if (transitionLockTimer.current) {
        clearTimeout(transitionLockTimer.current);
      }
    };
  }, []);

  // Jump handlers for CTAs
  const handleExploreWork = () => transitionToScene(4); // Scene 05: Selected Work
  const handleJumpToContact = (subject?: string) => {
    if (subject) setPrefilledSubject(subject);
    transitionToScene(6); // Scene 07: Contact
  };
  const handleViewProjectDetail = (project: Project) => {
    const idx = PROJECTS.findIndex(p => p.id === project.id);
    if (idx !== -1) setSelectedProjectIndex(idx);
    transitionToScene(5); // Scene 06: Case Study
  };
  const handleRestartExperience = () => transitionToScene(0);

  // Motion variants for scenes
  const sceneVariants = {
    enter: (dir: number) => ({
      y: prefersReducedMotion ? 0 : dir > 0 ? '40px' : '-40px',
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.985,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: 'spring', stiffness: 220, damping: 28 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
      },
    },
    exit: (dir: number) => ({
      y: prefersReducedMotion ? 0 : dir > 0 ? '-40px' : '40px',
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.985,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const currentProject = PROJECTS[selectedProjectIndex] || PROJECTS[0];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#FAF9F6] text-[#1A1816]">
      
      {/* Futuristic AI-style Dotted Grid & Ambient Glow Background (Persistent across scenes) */}
      <FuturisticBackground 
        className="fixed inset-0 z-0 pointer-events-none"
        showDots={true}
        showGlows={true}
        showTechnicalGrid={true}
      />

      {/* Persistent System Telemetry Frame (Top & Bottom bars) */}
      <SystemTelemetryBar
        currentScene={currentScene}
        totalScenes={SCENES.length}
        lang={lang}
        onToggleLanguage={onToggleLanguage}
        onNavigate={handleNavigateRelative}
        onJumpToContact={() => handleJumpToContact()}
      />

      {/* The Visual Stage: Sequenced AnimatePresence */}
      <main className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentScene}
            custom={direction}
            variants={sceneVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full absolute inset-0"
          >
            {currentScene === 0 && (
              <SceneIntro
                lang={lang}
                onExploreWork={handleExploreWork}
                onContact={() => handleJumpToContact()}
                onNextScene={() => transitionToScene(1)}
              />
            )}

            {currentScene === 1 && (
              <SceneImpact
                lang={lang}
                onNextScene={() => transitionToScene(2)}
              />
            )}

            {currentScene === 2 && (
              <SceneAbout
                lang={lang}
                onExploreCapabilities={() => transitionToScene(3)}
              />
            )}

            {currentScene === 3 && (
              <SceneCapabilities
                lang={lang}
                onExploreProjects={handleExploreWork}
              />
            )}

            {currentScene === 4 && (
              <SceneProjects
                lang={lang}
                selectedProjectIndex={selectedProjectIndex}
                onSelectProjectIndex={setSelectedProjectIndex}
                onViewProjectDetail={handleViewProjectDetail}
              />
            )}

            {currentScene === 5 && (
              <SceneProjectDetail
                lang={lang}
                selectedProject={currentProject}
                onSelectProject={(p) => {
                  const idx = PROJECTS.findIndex(item => item.id === p.id);
                  if (idx !== -1) setSelectedProjectIndex(idx);
                }}
                onBackToProjects={() => transitionToScene(4)}
                onProceedToContact={(projTitle) => handleJumpToContact(projTitle)}
              />
            )}

            {currentScene === 6 && (
              <SceneContact
                lang={lang}
                prefilledSubject={prefilledSubject}
                onRestartExperience={handleRestartExperience}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Electronics-style Cookie & Memory Register Notice */}
      <ElectronicCookieNotice lang={lang} />

    </div>
  );
};
