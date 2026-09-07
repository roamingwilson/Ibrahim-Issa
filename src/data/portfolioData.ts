import { Project, Review, SkillCategory, ExperienceItem, SceneInfo, CapabilitySystem } from '../types';

export const SCENES: SceneInfo[] = [
  { id: 0, code: '01', slug: 'intro', title: { en: 'Intro', ar: 'المقدمة' }, category: { en: 'Identity', ar: 'الهوية' } },
  { id: 1, code: '02', slug: 'impact', title: { en: 'Impact', ar: 'الأرقام' }, category: { en: 'Verified Metrics', ar: 'مؤشرات الأداء' } },
  { id: 2, code: '03', slug: 'philosophy', title: { en: 'Philosophy', ar: 'الرؤية' }, category: { en: 'Principles', ar: 'المبادئ المعمارية' } },
  { id: 3, code: '04', slug: 'capabilities', title: { en: 'Capabilities', ar: 'القدرات' }, category: { en: 'Systems', ar: 'الأنظمة البرمجية' } },
  { id: 4, code: '05', slug: 'projects', title: { en: 'Selected Work', ar: 'الأعمال' }, category: { en: 'Projects', ar: 'المشاريع الحية' } },
  { id: 5, code: '06', slug: 'detail', title: { en: 'Case Study', ar: 'التحليل' }, category: { en: 'Deep Dive', ar: 'التحليل المعماري' } },
  { id: 6, code: '07', slug: 'contact', title: { en: 'Contact', ar: 'التواصل' }, category: { en: 'Collaboration', ar: 'التواصل المباشر' } },
];

export const CAPABILITY_SYSTEMS: CapabilitySystem[] = [
  {
    id: 'web-system',
    code: 'SYS_01',
    title: { en: 'Web Engineering', ar: 'هندسة الويب المتقدمة' },
    subtitle: { en: 'Next.js 15 • React 19 • TypeScript • Tailwind CSS', ar: 'Next.js 15 • React 19 • TypeScript • Tailwind CSS' },
    description: {
      en: 'High-throughput full-stack web platforms built with server streaming, strict typing, and edge caching for sub-second load times.',
      ar: 'منصات ويب متكاملة مبنية بتقنيات البث من الخادم، الكود الصارم، والتخزين المؤقت على الحافة لسرعة تحميل فائقة بأقل من ثانية.'
    },
    metrics: [
      { value: '< 140ms', label: { en: 'SSR Stream Latency', ar: 'سرعة استجابة الخادم' } },
      { value: '99/100', label: { en: 'Lighthouse Performance', ar: 'مقياس لايتهاوس للأداء' } },
      { value: '6+ Years', label: { en: 'Production Web Exp', ar: 'خبرة في بناء منصات الويب' } }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'REST / GraphQL', 'Vercel / Docker'],
    evidence: {
      badge: '99 LIGHTHOUSE // 200 OK',
      text: { en: 'Atomic state management with zero client runtime bloat.', ar: 'إدارة حالة خفيفة وسريعة خالية من الأكواد الزائدة.' }
    },
    highlights: [
      { en: 'Server Components with instantaneous streaming', ar: 'مكونات خادم تعمل بالبث اللحظي دون انتظار' },
      { en: 'Strict zero-any TypeScript with runtime contracts', ar: 'أمان نمطي صارم عبر TypeScript بدون أي ثغرات' },
      { en: 'Full RTL/LTR bidirectional typographic balance', ar: 'تناسق طباعي كامل يدعم الاتجاهين العربي والإنجليزي' }
    ]
  },
  {
    id: 'mobile-system',
    code: 'SYS_02',
    title: { en: 'Flutter Native Mobile', ar: 'تطبيقات فلاتر الأصلية' },
    subtitle: { en: 'Flutter 3.x • Dart • iOS & Android • Cross-Platform', ar: 'Flutter 3.x • Dart • iOS & Android • متعدد المنصات' },
    description: {
      en: 'Cross-platform mobile apps built with Flutter for iOS and Android, featuring clean architecture, responsive animations, and seamless native device integration.',
      ar: 'تطبيقات هاتف ذكية متعددة المنصات لنظامي iOS وأندرويد مبنية بفلاتر، بمعمارية نظيفة وتكامل تام مع عتاد الهاتف.'
    },
    metrics: [
      { value: 'iOS & Android', label: { en: 'Mobile Platforms', ar: 'منصتا الهواتف' } },
      { value: '< 0.05%', label: { en: 'Crash-Free Sessions', ar: 'استقرار تشغيلي تام' } },
      { value: '15+', label: { en: 'Shipped App Store Apps', ar: 'تطبيقات منشورة على المتاجر' } }
    ],
    technologies: ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'SQLite / Isar', 'Method Channels', 'Push Notifications', 'App Store / Play'],
    evidence: {
      badge: 'FLUTTER NATIVE // IOS & ANDROID',
      text: { en: 'Heavy computation offloaded to background Dart Isolates.', ar: 'ترحيل العمليات الحسابية إلى مسارات Dart Isolates الخلفية.' }
    },
    highlights: [
      { en: 'Smooth native gestures and responsive animations on iOS & Android', ar: 'إيماءات سلسة وتفاعلات حركية سريعة على هواتف آيفون وأندرويد' },
      { en: 'Offline-first SQLite synchronization engine', ar: 'نظام مزامنة محلي يعمل دون اتصال بالإنترنت' },
      { en: 'Native platform integration (Bluetooth, Camera, Apple Pay)', ar: 'ربط مباشر مع ميزات الهاتف (البلوتوث، الكاميرا، الدفع الإلكتروني)' }
    ]
  },
  {
    id: 'architecture-system',
    code: 'SYS_03',
    title: { en: 'Clean Architecture', ar: 'المعمارية النظيفة' },
    subtitle: { en: 'Domain-Driven • Feature-First • Single Source of Truth', ar: 'تصميم مبني على منطق العمل • معمارية قابلة للتوسع' },
    description: {
      en: 'Decoupled presentation, domain, and data layers that allow web and mobile teams to share business logic and API contracts cleanly.',
      ar: 'فصل طبقات العرض ومنطق العمل والبيانات، مما يتيح مشاركة المنطق البرمجي وعقود الـ API بين الويب وتطبيقات الهاتف بسلاسة.'
    },
    metrics: [
      { value: '100%', label: { en: 'Contract Consistency', ar: 'تطابق عقود البيانات' } },
      { value: '3x', label: { en: 'Faster Feature Velocity', ar: 'سرعة مضاعفة في إطلاق الميزات' } },
      { value: '35+', label: { en: 'Production Systems Delivered', ar: 'أنظمة برمجية تم تسليمها' } }
    ],
    technologies: ['Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'DTO Mapping', 'CI/CD Pipelines'],
    evidence: {
      badge: 'STRICT DDD // ZERO TIGHT-COUPLING',
      text: { en: 'Independent layers testable in pure isolation.', ar: 'طبقات مستقلة تماماً يمكن اختبارها وتطويرها بشكل معزول.' }
    },
    highlights: [
      { en: 'Single Source of Truth across Web & Mobile endpoints', ar: 'مصدر بيانات موحد يضمن دقة المعلومات عبر الويب والهاتف' },
      { en: 'Feature-first modular directory hierarchy', ar: 'تنظيم برمجي للميزات يسهل صيانة الكود بواسطة فرق العمل' },
      { en: 'Strict isolation of UI from business rules', ar: 'عزل تام لواجهات العرض عن قواعد ومنطق العمل' }
    ]
  },
  {
    id: 'performance-system',
    code: 'SYS_04',
    title: { en: 'Performance & Latency', ar: 'الأداء والسرعة الفائقة' },
    subtitle: { en: 'Zero-Jank Threads • Edge CDNs • Sub-28ms Latency', ar: 'معالجة فورية • استجابة أقل من 28ms • كفاءة الذاكرة' },
    description: {
      en: 'Obsessive latency optimization for real-time applications including high-frequency financial tickers and live medical telemetry.',
      ar: 'تحسين مكثف لسرعة الاستجابة في التطبيقات الحية، مثل منصات التداول المالي وبث البيانات الطبية اللحظية.'
    },
    metrics: [
      { value: '< 28ms', label: { en: 'Real-Time Tick Latency', ar: 'زمن استجابة البيانات الحية' } },
      { value: '0 dropped', label: { en: 'Frames During Transitions', ar: 'ثبات الإطارات دون تقطيع' } },
      { value: '99.9%', label: { en: 'Availability Target', ar: 'نسبة الاستقرار والجاهزية' } }
    ],
    technologies: ['Web Workers', 'Dart Isolates', 'WebSocket Compression', 'Memory Profiling', 'Edge Caching'],
    evidence: {
      badge: 'LATENCY < 28MS // 0 FRAME-DROPS',
      text: { en: 'Benchmarked on low-end hardware under peak concurrency.', ar: 'تم اختباره بنجاح تحت أعلى ضغط تشغيلي وعلى أجهزة متوسطة.' }
    },
    highlights: [
      { en: 'Zero UI-thread blocking via asynchronous background workers', ar: 'عدم تعطيل واجهة المستخدم أبداً بفضل العمال البرمجيين بالخلفية' },
      { en: 'Optimized memory allocation preventing garbage collection pauses', ar: 'إدارة دقيقة للذاكرة تمنع التوقف المفاجئ للتطبيقات' },
      { en: 'Payload compression and differential data updates', ar: 'ضغط حزم البيانات وبث التحديثات المتغيرة فقط لتوفير السرعة' }
    ]
  }
];

export const PERSONAL_INFO = {
  name: { en: 'Ibrahim Issa', ar: 'إبراهيم عيسى' },
  role: { en: 'Senior Web & Flutter Developer', ar: 'مطور ويب وفلاتر أول' },
  experienceYears: '6+',
  email: 'al3almyibrahim@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: { en: 'Remote / Worldwide', ar: 'عن بُعد / عالمياً' },
  availability: {
    status: { en: 'Available for New Projects', ar: 'متاح للمشاريع الجديدة' },
    badge: { en: 'Available', ar: 'متاح للعمل' }
  },
  stats: [
    { value: '6+', label: { en: 'Years Exp', ar: 'سنوات خبرة' } },
    { value: '35+', label: { en: 'Projects', ar: 'مشروع منجز' } },
    { value: 'iOS & Android', label: { en: 'Flutter Apps', ar: 'تطبيقات فلاتر' } },
    { value: '99.9%', label: { en: 'Uptime', ar: 'استقرار تام' } }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'apex-fintech-os',
    title: {
      en: 'Apex Financial Platform',
      ar: 'منصة أبيكس المالية'
    },
    tagline: {
      en: 'Real-time trading web portal and cross-platform Flutter mobile app.',
      ar: 'بوابة ويب متكاملة وتطبيق فلاتر للتداول المالي متعدد المنصات.'
    },
    category: 'cross-platform',
    clientOrOrg: 'Apex Financial Technologies',
    year: '2024 — 2025',
    role: {
      en: 'Lead Developer',
      ar: 'مطور رئيسي'
    },
    description: {
      en: 'High-frequency trading suite with Next.js web portal and high-speed Flutter app.',
      ar: 'منظومة تداول سريعة تجمع بين بوابة Next.js وتطبيق فلاتر عالي الأداء.'
    },
    challenge: {
      en: 'Rendering 50k ticks/sec without mobile UI drops or battery drain.',
      ar: 'معالجة 50 ألف حركة سعرية بالثانية دون تقطيع أو استنزاف للبطارية.'
    },
    solution: {
      en: 'Flutter Isolates for off-thread processing and edge-cached WebSockets.',
      ar: 'معالجة خلفية عبر Flutter Isolates وبث WebSockets فائق السرعة.'
    },
    metrics: [
      { label: { en: 'Latency', ar: 'الاستجابة' }, value: '< 28ms' },
      { label: { en: 'Cross-Platform', ar: 'المنصات' }, value: 'iOS + Android' },
      { label: { en: 'Active Users', ar: 'المستخدمون' }, value: '45k+' }
    ],
    technologies: ['Flutter', 'Next.js', 'TypeScript', 'WebSockets', 'Tailwind CSS'],
    features: {
      en: [
        'Live candlestick charts with sub-second order book updates',
        'Biometric authentication with secure hardware enclave',
        'Offline transaction queuing with instant auto-sync'
      ],
      ar: [
        'رسوم بيانية حية مع تحديث لحظي للأسعار',
        'دخول بالبصمة مع حفظ آمن للمفاتيح',
        'دعم كامل للعمل دون اتصال ومزامنة فورية'
      ]
    },
    architectureNotes: {
      en: 'Clean Architecture with shared API contracts between Dart and TypeScript.',
      ar: 'معمارية نظيفة وعقود موحدة بين دارت وتايب سكريبت.'
    },
    accentColor: '#0284C7',
    webPreview: {
      url: 'https://apex-platform.internal',
      headline: { en: 'Trading Terminal', ar: 'لوحة التداول' },
      subtext: { en: 'Live WebSocket Stream Active', ar: 'بث البيانات اللحظي متصل' },
      stats: [
        { label: 'BTC/USD', value: '$94,280' },
        { label: 'Volume', value: '$1.8B' },
        { label: 'Latency', value: '19ms' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Apex Mobile', ar: 'تطبيق أبيكس' },
      items: [
        { title: 'Portfolio Balance', subtitle: '$284,950 (+14.2%)', tag: 'ACTIVE' },
        { title: 'Instant Execution', subtitle: 'Zero-slippage routing', tag: 'READY' },
        { title: 'Biometric Shield', subtitle: 'Hardware Enclave', tag: 'LOCKED' }
      ]
    }
  },
  {
    id: 'kinetix-health-suite',
    title: {
      en: 'Kinetix Telehealth Suite',
      ar: 'منصة كينيتكس الطبية'
    },
    tagline: {
      en: 'Telehealth app with live Bluetooth ECG sensor streaming and doctor portal.',
      ar: 'منصة طبية تربط أجهزة البلوتوث الحيوية بتطبيق الهاتف وبوابة الأطباء.'
    },
    category: 'cross-platform',
    clientOrOrg: 'Kinetix MedTech',
    year: '2023 — 2024',
    role: {
      en: 'Senior Full-Stack & Mobile Engineer',
      ar: 'مهندس أول ويب وتطبيقات'
    },
    description: {
      en: 'Continuous biometric sensor sync to Flutter with real-time web telemetry.',
      ar: 'ربط أجهزة قياس النبض بتطبيق فلاتر مع لوحة تحكم فورية للأطباء.'
    },
    challenge: {
      en: 'Continuous BLE data streaming without losing critical health packets.',
      ar: 'بث بيانات الحساسات الحيوية لحظياً دون استنزاف البطارية أو فقدان بيانات.'
    },
    solution: {
      en: 'Dart stream filtering and WebAssembly canvas charting for physicians.',
      ar: 'فلترة مسارات البيانات في دارت وتصيير رسومي سريع عبر WebAssembly.'
    },
    metrics: [
      { label: { en: 'Sensors', ar: 'الأجهزة' }, value: '18+ BLE' },
      { label: { en: 'Battery Drain', ar: 'البطارية' }, value: '< 2%/hr' },
      { label: { en: 'Patients', ar: 'المرضى' }, value: '120k+' }
    ],
    technologies: ['Flutter', 'React', 'TypeScript', 'BLE Bluetooth', 'WebRTC'],
    features: {
      en: [
        'Real-time live ECG wave rendering with noise reduction',
        'Secure video consultations with vitals overlay',
        'Instant emergency alerts triggered by vital spikes'
      ],
      ar: [
        'رسم فوري لموجات تخطيط القلب مع فلترة التشويش',
        'مكالمات فيديو آمنة مع عرض مباشر للمؤشرات الحيوية',
        'تنبيهات طوارئ فورية عند تجاوز المؤشرات للحدود'
      ]
    },
    architectureNotes: {
      en: 'HIPAA-compliant modular BLoC state architecture.',
      ar: 'معمارية BLoC مع عزل أمني مطابق للمعايير الطبية.'
    },
    accentColor: '#2D6A4F',
    webPreview: {
      url: 'https://kinetix.med/portal',
      headline: { en: 'Physician Console', ar: 'لوحة متابعة الطبيب' },
      subtext: { en: 'Live Patient Vitals Stream', ar: 'بيانات المريض متصلة مباشرة' },
      stats: [
        { label: 'Vitals', value: 'Normal' },
        { label: 'Sample Rate', value: '400 Hz' },
        { label: 'Encryption', value: 'AES-256' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Kinetix Companion', ar: 'تطبيق المريض' },
      items: [
        { title: 'Bluetooth Monitor', subtitle: 'PulseOx Connected', tag: 'PAIRED' },
        { title: 'Daily Health Score', subtitle: '96/100 Optimal', tag: 'STABLE' },
        { title: 'Doctor Appointment', subtitle: 'Today at 14:00', tag: 'CONFIRMED' }
      ]
    }
  },
  {
    id: 'aura-commerce-studio',
    title: {
      en: 'Aura 3D Luxury Store',
      ar: 'متجر أورا ثلاثي الأبعاد'
    },
    tagline: {
      en: 'Headless 3D luxury store with sub-second checkout and 99/100 Lighthouse score.',
      ar: 'متجر فاخر مع مخصص ساعات ثلاثي الأبعاد ودفع فوري.'
    },
    category: 'web',
    clientOrOrg: 'Aura Luxury Group',
    year: '2023',
    role: {
      en: 'Frontend Architect',
      ar: 'مهندس الواجهات الأمامية'
    },
    description: {
      en: 'Interactive 3D product visualizer built with WebGL and React.',
      ar: 'مستعرض منتجات تفاعلي ثلاثي الأبعاد مبني بـ WebGL وReact.'
    },
    challenge: {
      en: 'Instant 3D rendering on mobile with zero input lag.',
      ar: 'تحميل نماذج ثلاثية الأبعاد فوراً على الهواتف دون أي بطء.'
    },
    solution: {
      en: 'Mesh compression and off-thread WebGL rendering pipelines.',
      ar: 'ضغط المجسمات ومعالجتها في خلفية المتصفح بكفاءة.'
    },
    metrics: [
      { label: { en: 'Lighthouse', ar: 'السرعة' }, value: '99/100' },
      { label: { en: 'Sales Lift', ar: 'المبيعات' }, value: '+42%' },
      { label: { en: 'Load Time', ar: 'التحميل' }, value: '< 180ms' }
    ],
    technologies: ['React', 'TypeScript', 'Three.js', 'Next.js', 'Tailwind CSS'],
    features: {
      en: [
        'Interactive 3D customizer with realistic lighting',
        'Sub-50ms instant cart and checkout interactions',
        'Bilingual Arabic & English typography support'
      ],
      ar: [
        'محرر خامات ثلاثي الأبعاد بإضاءة واقعية',
        'استجابة سريعة لسلة المشتريات بأقل من 50ms',
        'دعم كامل ومتقن للغتين العربية والإنجليزية'
      ]
    },
    architectureNotes: {
      en: 'Isolated 3D canvas lifecycle preventing DOM re-renders.',
      ar: 'عزل دورة حياة الرسوم ثلاثية الأبعاد لأعلى سرعة.'
    },
    accentColor: '#B45309',
    webPreview: {
      url: 'https://aura-store.internal',
      headline: { en: '3D Customizer', ar: 'مستعرض التخصيص' },
      subtext: { en: 'Real-time WebGL Engine', ar: 'محرك ثلاثي الأبعاد فوري' },
      stats: [
        { label: '3D Engine', value: 'WebGL' },
        { label: '3D Size', value: '1.2 MB' },
        { label: 'Checkout', value: 'Instant' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Aura VIP', ar: 'تطبيق أورا' },
      items: [
        { title: 'Custom Chronograph', subtitle: 'Titanium Edition', tag: 'SAVED' },
        { title: 'Order Tracking', subtitle: 'Crafting in Workshop', tag: 'PROCESS' },
        { title: 'VIP Support', subtitle: 'Specialist Available', tag: 'ONLINE' }
      ]
    }
  },
  {
    id: 'omniflow-logistics',
    title: {
      en: 'OmniFlow Driver App',
      ar: 'تطبيق أومني فلو اللوجستي'
    },
    tagline: {
      en: 'Offline-first Flutter driver app with background GPS and fleet dispatch.',
      ar: 'تطبيق فلاتر للسائقين يعمل دون إنترنت مع تتبع GPS ولوحة تحكم.'
    },
    category: 'flutter',
    clientOrOrg: 'OmniFlow Freight',
    year: '2023',
    role: {
      en: 'Mobile Engineer',
      ar: 'مطور تطبيقات'
    },
    description: {
      en: 'Offline-first delivery application serving 12,000+ active truck drivers.',
      ar: 'تطبيق تسليم يعمل بدون اتصال يخدم أكثر من 12 ألف سائق شاحنة.'
    },
    challenge: {
      en: 'Zero packet loss in dead zones while preserving battery life.',
      ar: 'ضمان عدم فقدان أي شحنة في المناطق المعزولة مع حماية البطارية.'
    },
    solution: {
      en: 'SQLite local delta queue with automated cloud sync on reconnect.',
      ar: 'قاعدة بيانات SQLite محلية مع مزامنة ذكية فور توفر الشبكة.'
    },
    metrics: [
      { label: { en: 'Daily Drivers', ar: 'السائقون' }, value: '12.5k+' },
      { label: { en: 'Reliability', ar: 'الموثوقية' }, value: '100%' },
      { label: { en: 'Battery Use', ar: 'البطارية' }, value: '< 2.5%/8h' }
    ],
    technologies: ['Flutter', 'Dart', 'SQLite', 'Background GPS', 'React'],
    features: {
      en: [
        'Works completely offline with instant cloud sync',
        'Battery-optimized background GPS tracking',
        'Digital signature capture and instant delivery receipts'
      ],
      ar: [
        'يعمل بكفاءة تامة دون إنترنت مع مزامنة فورية',
        'تتبع جغرافي ذكي موفر للبطارية لنوبات القيادة',
        'توقيع رقمي مباشر وتأكيد فوري للاستلام'
      ]
    },
    architectureNotes: {
      en: 'Local SQLite cache with bidirectional delta syncing.',
      ar: 'تخزين محلي مع مزامنة ترسل فقط التحديثات الجديدة.'
    },
    accentColor: '#705335',
    webPreview: {
      url: 'https://omniflow.fleet',
      headline: { en: 'Fleet Radar', ar: 'رادار الأسطول' },
      subtext: { en: '1,420 Trucks Active', ar: '1,420 شاحنة نشطة' },
      stats: [
        { label: 'En Route', value: '1,420' },
        { label: 'On Schedule', value: '98.4%' },
        { label: 'Sync Status', value: 'Live' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Driver Console', ar: 'شاشة السائق' },
      items: [
        { title: 'Route to Milan', subtitle: 'Checkpoint 4 of 6', tag: 'EN ROUTE' },
        { title: 'Offline Storage', subtitle: '48 items cached', tag: 'SYNCED' },
        { title: 'Proof of Delivery', subtitle: 'Ready for signature', tag: 'READY' }
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'flutter-mobile',
    title: {
      en: 'Flutter & Mobile',
      ar: 'فلاتر وتطبيقات الهاتف'
    },
    description: {
      en: 'Fast, smooth iOS and Android mobile apps with native Flutter architecture.',
      ar: 'تطبيقات سريعة ومستقرة لآيفون وأندرويد بهندسة فلاتر الأصلية.'
    },
    iconName: 'Smartphone',
    skills: [
      {
        name: 'Flutter & Dart',
        level: '98%',
        experience: '6 Years',
        featured: true,
        description: {
          en: 'Flutter SDK, Dart 3, Isolates, and memory management.',
          ar: 'تطوير متقدم بـ Flutter ولغة Dart مع إدارة الذاكرة والأداء.'
        }
      },
      {
        name: 'State (BLoC & Riverpod)',
        level: '95%',
        experience: '6 Years',
        featured: true,
        description: {
          en: 'Predictable reactive state and modular architecture.',
          ar: 'إدارة الحالة باحترافية وفصل منطق العمل عن الواجهات.'
        }
      },
      {
        name: 'Native Channels',
        level: '90%',
        experience: '5 Years',
        featured: false,
        description: {
          en: 'Hardware bridging for Bluetooth, location, and camera.',
          ar: 'ربط مباشر مع ميزات النظام كالبلوتوث وتحديد الموقع.'
        }
      },
      {
        name: 'Offline-First Storage',
        level: '94%',
        experience: '6 Years',
        featured: false,
        description: {
          en: 'SQLite, Drift, Hive, and auto background sync.',
          ar: 'قواعد بيانات محلية ومزامنة تلقائية دون اتصال.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'Clean Architecture separation',
        'Fluid native animations & gestures',
        'Comprehensive automated tests'
      ],
      ar: [
        'معمارية برمجية نظيفة ومنظمة',
        'حركات سلسة وإيماءات طبيعية',
        'اختبارات آلية شاملة'
      ]
    }
  },
  {
    id: 'web-engineering',
    title: {
      en: 'Web Engineering',
      ar: 'تطوير الويب الحديث'
    },
    description: {
      en: 'High-speed web platforms with sub-second page transitions.',
      ar: 'منصات ويب فائقة السرعة بتحميل فوري وتصميم متجاوب.'
    },
    iconName: 'Globe',
    skills: [
      {
        name: 'React & TypeScript',
        level: '97%',
        experience: '6 Years',
        featured: true,
        description: {
          en: 'Strict type safety, custom hooks, and fast rendering.',
          ar: 'أكواد تايب سكريبت قوية ومكونات سريعة وقابلة لإعادة الاستخدام.'
        }
      },
      {
        name: 'Next.js & SSR',
        level: '94%',
        experience: '5 Years',
        featured: true,
        description: {
          en: 'App Router, server rendering, edge caching, and SEO.',
          ar: 'تصيير على الخادم، تخزين مؤقت، وتحسين محركات البحث.'
        }
      },
      {
        name: 'Tailwind CSS & UI',
        level: '98%',
        experience: '5 Years',
        featured: true,
        description: {
          en: 'Modern responsive layouts with native RTL Arabic.',
          ar: 'تصميم متجاوب وأنيق مع دعم كامل للغة العربية.'
        }
      },
      {
        name: 'Web Performance',
        level: '95%',
        experience: '6 Years',
        featured: false,
        description: {
          en: 'Sub-second loads and 95+ Google Lighthouse scores.',
          ar: 'تحميل بأقل من ثانية ودرجات ممتازة في مؤشرات جوجل.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'Modular reusable components',
        'Sub-second page speeds',
        'Full bilingual Arabic & English'
      ],
      ar: [
        'مكونات برمجية قابلة لإعادة الاستخدام',
        'سرعة تصفح فائقة',
        'دعم كامل للغتين العربية والإنجليزية'
      ]
    }
  },
  {
    id: 'systems-integration',
    title: {
      en: 'APIs & Cloud',
      ar: 'الربط البرمجي والسحاب'
    },
    description: {
      en: 'Connecting web and mobile apps with reliable APIs and CI/CD.',
      ar: 'ربط المنصات بواجهات برمجية رصينة وخطوط نشر سحابية مؤتمتة.'
    },
    iconName: 'Cpu',
    skills: [
      {
        name: 'REST & GraphQL APIs',
        level: '93%',
        experience: '6 Years',
        featured: true,
        description: {
          en: 'Clean endpoints, smart caching, and error resilience.',
          ar: 'واجهات برمجية سريعة مع معالجة رصينة للأخطاء.'
        }
      },
      {
        name: 'App Store & CI/CD',
        level: '89%',
        experience: '5 Years',
        featured: false,
        description: {
          en: 'Automated release pipelines for iOS and Android.',
          ar: 'أتمتة رفع وتحديث التطبيقات على المتاجر.'
        }
      },
      {
        name: 'Security & Auth',
        level: '92%',
        experience: '5 Years',
        featured: false,
        description: {
          en: 'Biometrics, encrypted storage, and OAuth2.',
          ar: 'المصادقة بالبصمة والتخزين المشفر للبيانات.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'End-to-end data encryption',
        'Automated CI/CD deployment',
        'Real-time crash monitoring'
      ],
      ar: [
        'حماية وتشفير متكامل للبيانات',
        'أتمتة النشر والتحديثات',
        'مراقبة فورية للأخطاء'
      ]
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    clientName: 'Alexander Vance',
    clientRole: {
      en: 'VP of Engineering',
      ar: 'نائب رئيس قسم الهندسة'
    },
    company: 'Apex Financial',
    companyDomain: 'apex-engine.internal',
    projectName: {
      en: 'Apex Platform',
      ar: 'منصة أبيكس'
    },
    platform: 'Flutter & Web',
    reviewText: {
      en: 'Ibrahim delivered our trading portal and Flutter app with incredible speed and rock-solid reliability.',
      ar: 'أنجز إبراهيم منصة التداول وتطبيق فلاتر بسرعة مذهلة واستقرار لا تشوبه شائبة.'
    },
    avatarInitials: 'AV',
    verified: true,
    date: 'Jan 2025'
  },
  {
    id: 'rev-02',
    clientName: 'Dr. Elena Rostova',
    clientRole: {
      en: 'CTO',
      ar: 'الرئيس التنفيذي للتكنولوجيا'
    },
    company: 'Kinetix MedTech',
    companyDomain: 'kinetix.med',
    projectName: {
      en: 'Telehealth Suite',
      ar: 'منصة الرعاية الطبية'
    },
    platform: 'Flutter & Web',
    reviewText: {
      en: 'Precise, dependable, and clean. Ibrahim built our Bluetooth medical app and web dashboard flawlessly.',
      ar: 'دقة عالية وكود منظم. طوّر إبراهيم تطبيق الأجهزة الطبية ولوحة التحكم بأعلى كفاءة.'
    },
    avatarInitials: 'ER',
    verified: true,
    date: 'Oct 2024'
  },
  {
    id: 'rev-03',
    clientName: 'Tariq Al-Mansoor',
    clientRole: {
      en: 'Founder & CEO',
      ar: 'المؤسس والرئيس التنفيذي'
    },
    company: 'Aura Luxury Group',
    companyDomain: 'aura-chronos.store',
    projectName: {
      en: '3D Luxury Store',
      ar: 'متجر أورا ثلاثي الأبعاد'
    },
    platform: 'Enterprise Web',
    reviewText: {
      en: 'Outstanding technical skill and refined design sense. Our 3D store loads in under 200ms.',
      ar: 'كفاءة تقنية رفيعة وذوق تصميمي عالٍ. متجرنا ثلاثي الأبعاد يعمل بأقل من 200ms.'
    },
    avatarInitials: 'TM',
    verified: true,
    date: 'Jul 2024'
  },
  {
    id: 'rev-04',
    clientName: 'Marcus Lindholm',
    clientRole: {
      en: 'Head of Product',
      ar: 'رئيس تطوير المنتجات'
    },
    company: 'OmniFlow Freight',
    companyDomain: 'omniflow.fleet',
    projectName: {
      en: 'Driver App',
      ar: 'تطبيق السائقين'
    },
    platform: 'Flutter Native',
    reviewText: {
      en: 'Our 12,000 drivers rely on Ibrahim’s offline sync engine daily. Zero data lost since launch.',
      ar: 'يعتمد 12 ألف سائق على نظام المزامنة الذي بناه إبراهيم. لم نفقد أي شحنة منذ الإطلاق.'
    },
    avatarInitials: 'ML',
    verified: true,
    date: 'Mar 2024'
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-01',
    period: '2023 — Present',
    role: {
      en: 'Lead Web & Flutter Developer',
      ar: 'مطور ويب وفلاتر رئيسي'
    },
    company: {
      en: 'Enterprise & Startups',
      ar: 'شركات ومشاريع ناشئة'
    },
    location: {
      en: 'Remote',
      ar: 'عن بُعد'
    },
    type: 'Lead',
    achievements: {
      en: [
        'Built full-stack web platforms and Flutter apps serving 150k+ users',
        'Maintained high-performance reliability and 99.9% crash-free stability'
      ],
      ar: [
        'بناء منصات ويب وتطبيقات فلاتر تخدم أكثر من 150 ألف مستخدم نشط',
        'تحقيق أداء عالي وسلس مع معدل استقرار 99.9% وخلو تام من الأخطاء'
      ]
    },
    technologies: ['Flutter', 'Next.js', 'React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'exp-02',
    period: '2021 — 2023',
    role: {
      en: 'Senior Mobile & Web Developer',
      ar: 'مطور أول لتطبيقات الهاتف والويب'
    },
    company: {
      en: 'Digital Product Studio',
      ar: 'استوديو المنتجات الرقمية'
    },
    location: {
      en: 'Hybrid',
      ar: 'نمط هجين'
    },
    type: 'Full-time',
    achievements: {
      en: [
        'Shipped 14 Flutter apps to App Store and Google Play',
        'Built fast React dashboards with live data filters'
      ],
      ar: [
        'إطلاق 14 تطبيق فلاتر على متجري آبل وجوجل بلاي',
        'تطوير لوحات تحكم React سريعة مع تحديث فوري للبيانات'
      ]
    },
    technologies: ['Flutter', 'Dart', 'React', 'TypeScript', 'BLoC']
  },
  {
    id: 'exp-03',
    period: '2019 — 2021',
    role: {
      en: 'Web & Mobile Engineer',
      ar: 'مهندس ويب وتطبيقات الهاتف'
    },
    company: {
      en: 'Software Labs',
      ar: 'مختبرات تطوير البرمجيات'
    },
    location: {
      en: 'On-site',
      ar: 'حضوري'
    },
    type: 'Full-time',
    achievements: {
      en: [
        'Boosted app speed by 300% via Flutter migrations',
        'Engineered scalable REST APIs and real-time backend services'
      ],
      ar: [
        'مضاعفة سرعة التطبيقات 3 مرات عبر التحديث إلى فلاتر',
        'برمجة واجهات API وخدمات فورية عالية الكفاءة'
      ]
    },
    technologies: ['TypeScript', 'React', 'Flutter', 'Node.js', 'PostgreSQL']
  }
];

export const CREDIBILITY_METRICS = [
  {
    number: '6+ Years',
    label: { en: 'Industry Experience', ar: 'سنوات خبرة متخصصة' },
    desc: { en: 'Hands-on frontend and mobile engineering.', ar: 'تطوير احترافي لمنصات الويب وتطبيقات الهاتف.' }
  },
  {
    number: '35+',
    label: { en: 'Delivered Projects', ar: 'مشاريع تم إطلاقها' },
    desc: { en: 'Production apps across fintech and commerce.', ar: 'منتجات رقمية حية في مجالات التقنية والتجارة.' }
  },
  {
    number: 'iOS & Android',
    label: { en: 'Flutter Apps', ar: 'تطبيقات فلاتر' },
    desc: { en: 'Cross-platform apps on App Store & Google Play.', ar: 'تطبيقات منشورة على متجري آبل وجوجل بلاي.' }
  },
  {
    number: '99.9%',
    label: { en: 'System Reliability', ar: 'جاهزية واستقرار تام' },
    desc: { en: 'Enterprise-grade stability and architecture.', ar: 'بنية برمجية قوية تضمن استمرار العمل بكفاءة.' }
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: { en: 'Unified Stack', ar: 'تكامل الويب والهاتف' },
    desc: {
      en: 'Shared business logic and consistent UI across all screens.',
      ar: 'منطق عمل موحد وتجربة استخدام متناغمة عبر كافة الشاشات.'
    }
  },
  {
    number: '02',
    title: { en: 'Peak Speed', ar: 'السرعة الفائقة' },
    desc: {
      en: 'Native-feel Flutter apps and sub-second load times on the web.',
      ar: 'تطبيقات فلاتر أصلية وتحميل فوري لمنصات الويب بأقل من ثانية.'
    }
  },
  {
    number: '03',
    title: { en: 'Clean Code', ar: 'كود نظيف' },
    desc: {
      en: 'Modular, maintainable architecture with solid automated tests.',
      ar: 'كود منظم يسهل صيانته وتطويره مع اختبارات تضمن الاستقرار.'
    }
  },
  {
    number: '04',
    title: { en: 'Reliable Results', ar: 'نتائج موثوقة' },
    desc: {
      en: 'High uptime and intuitive user journeys that drive growth.',
      ar: 'استقرار تام وتجربة مستخدم مريحة تدعم نمو الأعمال.'
    }
  }
];
