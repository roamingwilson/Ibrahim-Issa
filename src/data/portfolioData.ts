import { Project, Review, SkillCategory, ExperienceItem, SceneInfo, CapabilitySystem } from '../types';

export const SCENES: SceneInfo[] = [
  { id: 0, code: '01', slug: 'intro', title: { en: 'Intro', ar: 'المقدمة' }, category: { en: 'Identity', ar: 'الهوية الشخصية' } },
  { id: 1, code: '02', slug: 'impact', title: { en: 'Impact', ar: 'الأرقام' }, category: { en: 'Verified Metrics', ar: 'مؤشرات الأداء والتقييم' } },
  { id: 2, code: '03', slug: 'philosophy', title: { en: 'Philosophy', ar: 'الرؤية' }, category: { en: 'Principles', ar: 'المبادئ والمعايير' } },
  { id: 3, code: '04', slug: 'capabilities', title: { en: 'Capabilities', ar: 'القدرات' }, category: { en: 'Systems & Skills', ar: 'الأنظمة والمهارات البرمجية' } },
  { id: 4, code: '05', slug: 'projects', title: { en: 'Selected Work', ar: 'الأعمال' }, category: { en: 'Projects', ar: 'المشاريع المنفذة' } },
  { id: 5, code: '06', slug: 'detail', title: { en: 'Case Study', ar: 'التحليل' }, category: { en: 'Deep Dive', ar: 'التفاصيل والمعمارية' } },
  { id: 6, code: '07', slug: 'contact', title: { en: 'Contact', ar: 'التواصل' }, category: { en: 'Hire on Upwork & Mostaql', ar: 'التوظيف عبر Upwork ومستقل' } },
];

export const CAPABILITY_SYSTEMS: CapabilitySystem[] = [
  {
    id: 'php-laravel-system',
    code: 'SYS_01',
    title: { en: 'Full-Stack PHP & Laravel', ar: 'تطوير الويب الكامل - PHP ولارافيل' },
    subtitle: { en: 'PHP 8+ • Laravel 11 • Livewire • MySQL • CodeIgniter • REST APIs', ar: 'PHP 8+ • Laravel 11 • Livewire • MySQL • CodeIgniter • REST APIs' },
    description: {
      en: 'High-throughput full-stack web platforms and backend architectures powered by PHP, Laravel, and MySQL with robust database indexing and sub-35ms query latency.',
      ar: 'منصات ويب متكاملة وخوادم خلفية متينة مبنية بـ PHP و Laravel و MySQL مع فهرسة قواعد بيانات محسنة وزمن استجابة فائق السرعة بأقل من 35ms.'
    },
    metrics: [
      { value: '< 35ms', label: { en: 'DB Query Latency', ar: 'سرعة استعلامات MySQL' } },
      { value: '100%', label: { en: 'Clean PSR Standards', ar: 'معايير الكود النظيف' } },
      { value: '6+ Years', label: { en: 'Production PHP & Laravel', ar: 'سنوات خبرة برمجية' } }
    ],
    technologies: ['PHP 8+', 'Laravel', 'Livewire', 'CodeIgniter', 'MySQL', 'Node.js', 'REST APIs', 'Web Services'],
    evidence: {
      badge: 'LARAVEL 11 // PRODUCTION BACKEND',
      text: { en: 'Optimized Eloquent relationships, caching layers, and secure token authentication.', ar: 'ربط علائقي متقدم، طبقات تخزين مؤقت، ومصادقة مشفرة للبيانات.' }
    },
    highlights: [
      { en: 'Dynamic data filtering and complex multi-parameter database queries', ar: 'برمجة أنظمة التصفية والفلاتر الديناميكية المعقدة للمتاجر' },
      { en: 'High-concurrency queues and automated background job scheduling', ar: 'معالجة المهام وجدولة العمليات بالخلفية لضمان الاستقرار' },
      { en: 'Secure RESTful APIs with Sanctum/JWT authentication and clean contracts', ar: 'واجهات API آمنة موثقة وسريعة الاستجابة لربط الويب والهاتف' }
    ]
  },
  {
    id: 'mobile-system',
    code: 'SYS_02',
    title: { en: 'Cross-Platform Mobile Apps', ar: 'تطبيقات الهواتف الذكية' },
    subtitle: { en: 'Google Flutter • Dart • React Native • Ionic • iOS & Android', ar: 'Google Flutter • Dart • React Native • Ionic • متعدد المنصات' },
    description: {
      en: 'Modern, responsive cross-platform mobile apps for iOS and Android built with Google Flutter, React Native, and Ionic, featuring clean architecture and offline-first SQLite sync.',
      ar: 'تطبيقات هواتف ذكية عصرية لنظامي iOS وأندرويد مبنية بـ Flutter و React Native و Ionic، بمعمارية نظيفة ومزامنة محلية دون اتصال بالإنترنت.'
    },
    metrics: [
      { value: 'iOS & Android', label: { en: 'Mobile Platforms', ar: 'كلا نظامي الهواتف' } },
      { value: '99.9%', label: { en: 'Crash-Free Stability', ar: 'استقرار تشغيلي تام' } },
      { value: '20+', label: { en: 'Shipped Mobile Apps', ar: 'تطبيقات هاتف تم إطلاقها' } }
    ],
    technologies: ['Flutter', 'Dart', 'React Native', 'Ionic', 'BLoC / Riverpod', 'SQLite', 'Background GPS', 'Push Notifications'],
    evidence: {
      badge: 'FLUTTER & MOBILE // IOS & ANDROID',
      text: { en: 'Native performance, 60fps animations, and background isolate processing.', ar: 'أداء أصيل وسلاسة فائقة بمعدل 60 إطاراً في الثانية.' }
    },
    highlights: [
      { en: 'Smooth native gestures and responsive animations on iOS & Android', ar: 'إيماءات طبيعية وسرعة استجابة على هواتف آيفون وأندرويد' },
      { en: 'Offline-first SQLite synchronization engine with delta caching', ar: 'نظام مزامنة محلي يعمل بكفاءة تامة حتى دون اتصال بالشبكة' },
      { en: 'Seamless hardware integration: GPS tracking, camera, biometrics, Apple Pay', ar: 'ربط مباشر مع عتاد الهاتف: التتبع الجغرافي، الكاميرا، والبصمة' }
    ]
  },
  {
    id: 'frontend-ui-system',
    code: 'SYS_03',
    title: { en: 'Modern Frontend & UI/UX', ar: 'الواجهات التفاعلية وتجربة المستخدم' },
    subtitle: { en: 'React.js • Next.js • Angular • TypeScript • Tailwind CSS • RTL', ar: 'React.js • Next.js • Angular • TypeScript • Tailwind CSS • RTL' },
    description: {
      en: 'High-speed interactive frontends, responsive web applications, and optimized product catalogs built with React.js, Next.js, and Angular, with native Arabic RTL support.',
      ar: 'واجهات أمامية تفاعلية فائقة السرعة وتطبيقات متجاوبة مبنية بـ React.js و Next.js و Angular، مع دعم أصيل وتناسق كامل للغة العربية (RTL).'
    },
    metrics: [
      { value: '< 160ms', label: { en: 'First Contentful Paint', ar: 'زمن التحميل اللحظي' } },
      { value: '99/100', label: { en: 'Google Lighthouse', ar: 'مؤشرات الأداء القياسية' } },
      { value: '100% RTL', label: { en: 'Arabic Typographic Harmony', ar: 'تناسق الواجهات العربية' } }
    ],
    technologies: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'UI/UX Design'],
    evidence: {
      badge: 'REACT & NEXT.JS // PIXEL-PERFECT UI',
      text: { en: 'Zero-bloat component architecture with sub-second page transitions.', ar: 'بنية برمجية خفيفة وسريعة خالية من الأكواد الزائدة وبأعلى دقة.' }
    },
    highlights: [
      { en: 'Component-based modular architecture with high reusability', ar: 'مكونات برمجية قابلة لإعادة الاستخدام والصيانة بسهولة' },
      { en: 'Flawless Arabic typography with Alexandria & Readex Pro font systems', ar: 'تنسيق طباعي عربي راقٍ متناسق في مختلف الشاشات' },
      { en: 'UI/UX optimization and redesign boosting e-commerce conversion rates', ar: 'تحسين تجربة وواجهة المستخدم لرفع معدل المبيعات والتفاعل' }
    ]
  },
  {
    id: 'ai-admin-system',
    code: 'SYS_04',
    title: { en: 'AI Integration & Advanced Systems', ar: 'حلول الذكاء الاصطناعي وإدارة المواقع' },
    subtitle: { en: 'AI Features Integration • Dynamic Filtering • Banner Ads • Hosting & Admin', ar: 'دمج الذكاء الاصطناعي • فلاتر ديناميكية • لافتات إعلانية • إدارة المواقع' },
    description: {
      en: 'Smart generative AI features integration, dynamic multi-attribute filtering platforms, automated banner ad management for Laravel+React, and comprehensive server administration.',
      ar: 'دمج ميزات وحلول الذكاء الاصطناعي، تطوير محركات التصفية والفلاتر الذكية، أنظمة إدارة اللافتات الإعلانية لمواقع Laravel + React، وإدارة السيرفرات والمواقع.'
    },
    metrics: [
      { value: 'Real-time', label: { en: 'Dynamic Filtering', ar: 'تصفية فورية فائقة السرعة' } },
      { value: 'AI Powered', label: { en: 'Smart Features', ar: 'ميزات ذكاء اصطناعي ذكية' } },
      { value: '99.9%', label: { en: 'Server & Site Uptime', ar: 'جاهزية واستقرار الخوادم' } }
    ],
    technologies: ['AI Integrations', 'Dynamic Filtering', 'Banner Ad Management', 'Site Administration', 'cPanel / VPS', 'Git / CI-CD'],
    evidence: {
      badge: 'AI & DYNAMIC SYSTEMS // PRO SOLUTIONS',
      text: { en: 'Scalable automation engines running in mission-critical environments.', ar: 'أنظمة أتمتة قابلة للتوسع تعمل بأعلى درجات الكفاءة والموثوقية.' }
    },
    highlights: [
      { en: 'Intelligent AI assistant integration and natural language query workflows', ar: 'دمج نماذج الذكاء الاصطناعي التوليدي والمساعدين الأذكياء' },
      { en: 'Faceted search and dynamic filtering engines for large e-commerce platforms', ar: 'أنظمة الفلاتر والتصفية السريعة ومتعددة الشروط للمتاجر الكبرى' },
      { en: 'Automated advertising banner rotation and scheduling with impression tracking', ar: 'جدولة اللافتات الإعلانية وإدارتها وتتبع نقرات المستخدمين' }
    ]
  }
];

export const PERSONAL_INFO = {
  name: { en: 'Ibrahim Issa', ar: 'إبراهيم عيسى' },
  role: { 
    en: 'Web, Mobile Applications & Software Developer', 
    ar: 'مطور ويب وتطبيقات وبرمجيات' 
  },
  experienceYears: '6+',
  email: 'al3almyibrahim@gmail.com',
  upwork: 'https://www.upwork.com/freelancers/~013011a9e383be71f3',
  mostaql: 'https://mostaql.com/u/ibrahimphp',
  mostaqlUsername: 'ibrahimphp',
  github: 'https://github.com/roamingwilson',
  linkedin: 'https://www.linkedin.com/in/ibrahim-issa-cloud/',
  location: { en: 'Remote / Available Worldwide', ar: 'عن بُعد / متاح للعمل دائماً' },
  availability: {
    status: { 
      en: 'Available for Hire on Upwork & Mostaql', 
      ar: 'متاح للتوظيف والتعاقد عبر Upwork ومنصة مستقل' 
    },
    badge: { en: 'Available on Upwork & Mostaql', ar: 'متاح للعمل عبر Upwork ومستقل' }
  },
  stats: [
    { value: '6+', label: { en: 'Years Exp', ar: 'سنوات خبرة' } },
    { value: '5.0 ★', label: { en: 'Mostaql Rating', ar: 'تقييم ممتاز في مستقل' } },
    { value: 'iOS & Android', label: { en: 'Mobile Apps', ar: 'تطبيقات الهواتف' } },
    { value: '100%', label: { en: 'Client Satisfaction', ar: 'رضا تام للعملاء' } }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'dynamic-filtering-system',
    title: {
      en: 'Dynamic Filtering & Faceted Search System',
      ar: 'نظام الفلاتر والتصفية الديناميكية المتقدمة'
    },
    tagline: {
      en: 'High-speed multi-criteria filtering engine for Laravel + React e-commerce platforms.',
      ar: 'محرك تصفية وفلاتر ديناميكية متعددة المعايير لمواقع ومتاجر Laravel + React.'
    },
    category: 'web',
    clientOrOrg: 'E-Commerce Enterprise Platform',
    year: '2024 — 2025',
    role: {
      en: 'Lead Full-Stack Developer',
      ar: 'مطور أول للمشروع'
    },
    description: {
      en: 'Custom dynamic filtering and faceted search architecture engineered for complex e-commerce catalogs. Delivers instant multi-parameter filtering (categories, specifications, price intervals, brand availability) with zero full-page reload and seamless URL state synchronization.',
      ar: 'بناء نظام فلاتر وتصفية ديناميكية متطورة لمتاجر التجارة الإلكترونية، يتيح للعملاء تصفية المنتجات حسب الأقسام، المواصفات، نطاق السعر، والتوفر، مع استجابة فورية وتحديث لحظي لعنوان الصفحة دون إعادة تحميل.'
    },
    challenge: {
      en: 'Processing multi-attribute filters across 50,000+ products with real-time reactive feedback without slowing down MySQL queries or causing UI layout jitter.',
      ar: 'تصفية أكثر من 50 ألف منتج وفق شروط متعددة ومتغيرة بلحظة واحدة دون إثقال قاعدة البيانات أو حدوث أي بطء بالواجهة.'
    },
    solution: {
      en: 'Built optimized composite indexing in MySQL combined with Laravel query pipeline builders and React memoized filtering hooks, resulting in sub-35ms response times.',
      ar: 'تصميم فهارس مركبة في MySQL مع بناء خطوط معالجة استعلامات في Laravel وربطها بمكونات React السريعة لاستجابة بأقل من 35ms.'
    },
    metrics: [
      { label: { en: 'Query Latency', ar: 'سرعة الاستجابة' }, value: '< 35ms' },
      { label: { en: 'Catalog Scale', ar: 'حجم المنتجات' }, value: '50k+ items' },
      { label: { en: 'Filter Speed', ar: 'سرعة الفلترة' }, value: 'Instant' }
    ],
    technologies: ['Laravel', 'React.js', 'MySQL', 'REST API', 'Tailwind CSS', 'TypeScript'],
    features: {
      en: [
        'Multi-attribute faceted filtering with dynamic count indicators',
        'Bidirectional URL query sync allowing bookmarking and sharing',
        'Debounced interactive price range slider with smart caching'
      ],
      ar: [
        'تصفية متعددة المعايير مع عدادات فورية لعدد المنتجات المتاحة',
        'مزامنة فورية للرابط تتيح حفظ ومشاركة نتائج التصفية بسهولة',
        'شريط تمرير تفاعلي لتحديد الأسعار مع تخزين مؤقت ذكي'
      ]
    },
    architectureNotes: {
      en: 'Decoupled RESTful API endpoints feeding an atomic React client-side filter store.',
      ar: 'فصل نقاط الـ API مع إدارة حالة ذرية سريعة في React تمنع تكرار الطلبات.'
    },
    accentColor: '#0284C7',
    webPreview: {
      url: 'https://store-catalog.demo',
      headline: { en: 'Faceted Filter Console', ar: 'محرك الفلاتر الديناميكية' },
      subtext: { en: 'Live Parameter Processing Active', ar: 'معالجة الشروط متصلة بالخادم' },
      stats: [
        { label: 'Latency', value: '28ms' },
        { label: 'Products', value: '54,210' },
        { label: 'Cache Hit', value: '96.4%' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Mobile Filter Sheet', ar: 'فلاتر الهاتف التفاعلية' },
      items: [
        { title: 'Brand & Category', subtitle: '4 Selected', tag: 'ACTIVE' },
        { title: 'Price Range', subtitle: '$50 — $850', tag: 'FILTERED' },
        { title: 'Instant Matches', subtitle: '184 Items Found', tag: 'READY' }
      ]
    }
  },
  {
    id: 'dynamic-banner-manager',
    title: {
      en: 'Dynamic Banner & Campaign Management Engine',
      ar: 'نظام إدارة اللافتات الإعلانية الديناميكية'
    },
    tagline: {
      en: 'Automated advertising banner scheduler and analytics dashboard for Laravel + React platforms.',
      ar: 'نظام جدولة وإدارة اللافتات الإعلانية التفاعلية وتحليل النقرات لمنصات Laravel + React.'
    },
    category: 'web',
    clientOrOrg: 'Media & Commercial Publishing Network',
    year: '2024',
    role: {
      en: 'Full-Stack Software Engineer',
      ar: 'مهندس برمجيات متكامل'
    },
    description: {
      en: 'Engineered an end-to-end dynamic banner management system for high-traffic Laravel + React websites. Features time-scheduled campaign automation, weighted impression distribution, location-based slots, and real-time impression/click-through tracking.',
      ar: 'تطوير نظام شامل لإدارة اللافتات الإعلانية لمواقع Laravel و React ذات الزيارات العالية. يشمل النظام جدولة زمنية للحملات، توزيع نسب الظهور، تخصيص أماكن الإعلانات حسب الأقسام، وتتبع فوري لعدد المشاهدات والنقرات.'
    },
    challenge: {
      en: 'Delivering dynamic ad banners with zero layout shift (CLS) under millions of monthly impressions without slowing down page rendering.',
      ar: 'عرض اللافتات الإعلانية ديناميكياً لملايين الزوار شهرياً دون التسبب في اهتزاز الصفحة أو التأثير على سرعة التحميل.'
    },
    solution: {
      en: 'Built an asynchronous banner rotation engine with reserved slot dimensions and Redis caching, coupled with background click ingestion.',
      ar: 'برمجة محرك تدوير إعلانات غير متزامن مع حجز مسبق لأبعاد اللافتات وتخزين مؤقت عالي الكفاءة.'
    },
    metrics: [
      { label: { en: 'Monthly Views', ar: 'المشاهدات' }, value: '4.2M/mo' },
      { label: { en: 'CTR Boost', ar: 'نسبة النقر' }, value: '+34%' },
      { label: { en: 'Automation', ar: 'الأتمتة' }, value: '100%' }
    ],
    technologies: ['Laravel', 'React.js', 'MySQL', 'Livewire', 'REST APIs', 'Chart.js'],
    features: {
      en: [
        'Time-based campaign scheduler with start/end automated triggers',
        'Weighted probability rotation algorithm for multiple advertisers',
        'Interactive analytics dashboard displaying impressions and CTR trends'
      ],
      ar: [
        'مجدول زمني للحملات الإعلانية يبدأ وينتهي تلقائياً بدقة',
        'خوارزمية توزيع مرجحة لتدوير إعلانات أكثر من معلن بالقسم الواحد',
        'لوحة تحكم إحصائية تفاعلية تعرض معدلات الظهور والنقر بدقة'
      ]
    },
    architectureNotes: {
      en: 'High-concurrency background counter with aggregated database writes.',
      ar: 'معالجة سريعة لعدادات النقرات بالخلفية لعدم إبطاء تجربة الزائر.'
    },
    accentColor: '#B45309',
    webPreview: {
      url: 'https://ad-engine.portal',
      headline: { en: 'Campaign Command Center', ar: 'مركز إدارة الحملات الإعلانية' },
      subtext: { en: 'Automated Banner Engine Active', ar: 'جدولة وتدوير الإعلانات نشطة' },
      stats: [
        { label: 'Active Slots', value: '12 Areas' },
        { label: 'Avg CTR', value: '4.8%' },
        { label: 'Serving Time', value: '14ms' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Advertiser Dashboard', ar: 'لوحة المعلن' },
      items: [
        { title: 'Header Hero Banner', subtitle: '94.2k Impressions today', tag: 'ACTIVE' },
        { title: 'Sidebar Promo Slot', subtitle: 'Target: Saudi Arabia', tag: 'SCHEDULED' },
        { title: 'Click Conversion', subtitle: '+34% vs baseline', tag: 'HIGH' }
      ]
    }
  },
  {
    id: 'omniflow-logistics',
    title: {
      en: 'Cross-Platform Flutter Delivery & Driver App',
      ar: 'تطبيق التوصيل اللوجستي الذكي متعدد المنصات'
    },
    tagline: {
      en: 'Offline-first Flutter mobile application for iOS & Android with background GPS tracking and auto-sync.',
      ar: 'تطبيق فلاتر ذكي للسائقين يعمل دون اتصال مع تتبع جغرافي دقيق ومزامنة تلقائية.'
    },
    category: 'flutter',
    clientOrOrg: 'Logistics Fleet & Dispatch Tech',
    year: '2023 — 2024',
    role: {
      en: 'Senior Flutter & Mobile Developer',
      ar: 'مطور أول لتطبيقات الهاتف'
    },
    description: {
      en: 'Engineered an offline-first delivery driver application using Google Flutter for iOS and Android. Supports background GPS telemetry, digital proof of delivery with signature capture, and resilient offline SQLite queuing that syncs automatically with a Laravel backend.',
      ar: 'تطوير تطبيق جوال متكامل للسائقين وشركات الشحن باستخدام Google Flutter لنظامي iOS وأندرويد. يدعم التتبع الجغرافي بالخلفية، التوقيع الرقمي عند الاستلام، ومزامنة محلية لقاعدة بيانات SQLite ترسل التحديثات فور توفر الإنترنت.'
    },
    challenge: {
      en: 'Ensuring zero lost delivery updates in rural zones with intermittent cellular coverage while preserving device battery life during 8-hour driving shifts.',
      ar: 'ضمان عدم فقدان أي بيانات توصيل في المناطق ضعيفة التغطية مع توفير استهلاك بطارية الهاتف خلال نوبات العمل الطويلة.'
    },
    solution: {
      en: 'Architected local SQLite delta queue with exponential backoff sync, combined with battery-optimized native GPS location sampling.',
      ar: 'إنشاء طابور محلي بـ SQLite مع مزامنة ذكية وخوارزمية لتوفير طاقة الـ GPS بالخلفية.'
    },
    metrics: [
      { label: { en: 'Daily Drivers', ar: 'السائقون' }, value: '12.5k+' },
      { label: { en: 'Reliability', ar: 'الموثوقية' }, value: '100%' },
      { label: { en: 'Battery Drain', ar: 'استهلاك البطارية' }, value: '< 2.5%/8h' }
    ],
    technologies: ['Flutter', 'Dart', 'SQLite', 'Background GPS', 'Firebase', 'iOS & Android'],
    features: {
      en: [
        'Full offline operability with automated cloud delta synchronization',
        'Battery-optimized native background GPS tracking and breadcrumbs',
        'Digital signature pad capture with instant receipt generation'
      ],
      ar: [
        'تشغيل كامل ومستمر دون إنترنت مع مزامنة فورية عند عودة الاتصال',
        'تتبع جغرافي بالخلفية موفر لطاقة البطارية على مدار اليوم',
        'توقيع إلكتروني مباشر وتوليد إيصالات الاستلام فورياً'
      ]
    },
    architectureNotes: {
      en: 'Clean Architecture with BLoC state management and native platform channels.',
      ar: 'معمارية BLoC النظيفة مع قنوات تواصل مباشرة مع عتاد النظام الأصلي.'
    },
    accentColor: '#705335',
    webPreview: {
      url: 'https://fleet-dispatch.system',
      headline: { en: 'Dispatch Radar', ar: 'لوحة التحكم اللوجستية' },
      subtext: { en: 'Real-Time Driver Fleet Active', ar: 'أسطول السائقين متصل مباشرة' },
      stats: [
        { label: 'Active Drivers', value: '1,420' },
        { label: 'On Schedule', value: '99.1%' },
        { label: 'Sync Status', value: 'Synced' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Driver Console', ar: 'شاشة السائق' },
      items: [
        { title: 'Current Route', subtitle: 'Stop 4 of 8 (Riyadh Hub)', tag: 'EN ROUTE' },
        { title: 'Offline Storage', subtitle: '48 items cached locally', tag: 'SYNCED' },
        { title: 'Proof of Delivery', subtitle: 'Digital Signature Ready', tag: 'READY' }
      ]
    }
  },
  {
    id: 'store-ui-ux-optimization',
    title: {
      en: 'E-Commerce Store UI/UX Redesign & Optimization',
      ar: 'تطوير وتحديث واجهات وتجربة المستخدم لمتجر إلكتروني'
    },
    tagline: {
      en: 'Full UI/UX overhaul and catalog display enhancement with React, Laravel, and responsive Arabic RTL styling.',
      ar: 'إعادة هيكلة وتطوير شامل لواجهات وتجربة المستخدم وعرض الأقسام والمنتجات بـ React و Laravel.'
    },
    category: 'cross-platform',
    clientOrOrg: 'Retail & Multi-Vendor Commerce Group',
    year: '2023 — 2024',
    role: {
      en: 'UI/UX & Frontend Architect',
      ar: 'مهندس الواجهات وتجربة المستخدم'
    },
    description: {
      en: 'Conducted a complete user interface and user experience (UI/UX) overhaul for a multi-category store. Redesigned product grid presentations, section hierarchies, quick-view slide-overs, and mobile shopping flow with native Arabic typography.',
      ar: 'إعادة هيكلة وتصميم واجهات المستخدم وتجربة التسوق (UI/UX) لمتجر إلكتروني شامل. تم تطوير طريقة عرض المنتجات، الأقسام، النوافذ الجانبية السريعة، وتسهيل عملية الدفع عبر الهاتف مع خطوط عربية أنيقة.'
    },
    challenge: {
      en: 'Modernizing legacy confusing layouts that were hurting conversion rates and loading slowly on mid-range mobile devices in Arab markets.',
      ar: 'تحديث واجهات قديمة وبطيئة كانت تتسبب في ضياع المبيعات وصعوبة تصفح المنتجات عبر الهواتف.'
    },
    solution: {
      en: 'Engineered a modern React front layer with Tailwind CSS, custom responsive card components, and optimized image compression pipelines.',
      ar: 'برمجة واجهة أمامية حديثة بـ React و Tailwind CSS بمكونات متجاوبة وضغط فائق للصور.'
    },
    metrics: [
      { label: { en: 'Lighthouse', ar: 'مؤشر لايتهاوس' }, value: '99/100' },
      { label: { en: 'Sales Lift', ar: 'زيادة المبيعات' }, value: '+42%' },
      { label: { en: 'Page Load', ar: 'سرعة التحميل' }, value: '< 180ms' }
    ],
    technologies: ['React.js', 'Laravel', 'Tailwind CSS', 'TypeScript', 'MySQL', 'RTL Arabic'],
    features: {
      en: [
        'Modern product cards with instant variant pickers and stock alerts',
        'Sub-50ms slide-over cart drawer with instant quantity modification',
        'Pixel-perfect Arabic RTL typography using Alexandria and Readex fonts'
      ],
      ar: [
        'بطاقات منتجات عصرية مع اختيار فوري للألوان والخيارات ومؤشر التوفر',
        'سلة مشتريات جانبية سريعة تفتح بأقل من 50ms وتعدل الكميات فوراً',
        'تناسق طباعي عربي مريح للعين باستخدام خطي ألكسندريا وريدكس'
      ]
    },
    architectureNotes: {
      en: 'Optimized state isolation preventing unnecessary parent component rerenders.',
      ar: 'عزل منطق الحالة في React لمنع إعادة تصيير الصفحة وتحقيق أقصى سلاسة.'
    },
    accentColor: '#2D6A4F',
    webPreview: {
      url: 'https://store-showcase.app',
      headline: { en: 'Product Display Engine', ar: 'محرك عرض المنتجات العصري' },
      subtext: { en: 'Optimized Responsive Layout Active', ar: 'التصميم المتجاوب يعمل بأعلى سرعة' },
      stats: [
        { label: 'Mobile Score', value: '98/100' },
        { label: 'Conversion', value: '+42%' },
        { label: 'Checkout Step', value: 'Single Page' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'Mobile Storefront', ar: 'متجر الجوال' },
      items: [
        { title: 'Featured Collection', subtitle: 'Instant Arabic RTL', tag: 'DISPLAY' },
        { title: 'Slide-Over Cart', subtitle: 'Sub-50ms response', tag: 'FAST' },
        { title: 'One-Click Buy', subtitle: 'Apple Pay & Mada', tag: 'ENABLED' }
      ]
    }
  },
  {
    id: 'ai-assistant-portal',
    title: {
      en: 'AI-Powered Smart Assistant & Web Portal',
      ar: 'تطبيق المساعد الذكي وبوابة الويب المدمجة بالذكاء الاصطناعي'
    },
    tagline: {
      en: 'Generative AI assistant integration across cross-platform Flutter mobile app and responsive React web dashboard.',
      ar: 'دمج تقنيات الذكاء الاصطناعي التوليدي عبر تطبيق فلاتر للهواتف وبوابة الويب التفاعلية.'
    },
    category: 'cross-platform',
    clientOrOrg: 'Smart Automation Solutions',
    year: '2024',
    role: {
      en: 'AI & Full-Stack Solutions Engineer',
      ar: 'مهندس حلول الذكاء الاصطناعي والويب'
    },
    description: {
      en: 'Integrated smart generative AI features into a dual-platform system: a cross-platform Flutter mobile app for iOS/Android and a full-stack React management dashboard. Delivers streaming real-time conversations, context memory, and automated inquiry sorting.',
      ar: 'دمج حلول الذكاء الاصطناعي التوليدي في منظومة متكاملة: تطبيق فلاتر للهواتف الذكية وبوابة إدارة متطورة بـ React. يدعم المحادثات التفاعلية الفورية، حفظ سياق المحادثة، والتصنيف التلقائي للاستفسارات.'
    },
    challenge: {
      en: 'Streaming token responses in real-time over mobile networks without UI lag or memory leaks.',
      ar: 'بث إجابات الذكاء الاصطناعي لحظة بلحظة عبر شبكات الهاتف دون أي تقطيع في الواجهة.'
    },
    solution: {
      en: 'Implemented streaming server-sent events (SSE) and WebSockets with optimized Flutter stream builders.',
      ar: 'استخدام تقنية البث اللحظي SSE مع مسارات تدفق سريعة في دارت وفلاتر.'
    },
    metrics: [
      { label: { en: 'Streaming Latency', ar: 'زمن بدء البث' }, value: '< 200ms' },
      { label: { en: 'System Uptime', ar: 'الاستقرار' }, value: '99.8%' },
      { label: { en: 'Queries Handled', ar: 'الاستفسارات' }, value: '25k+' }
    ],
    technologies: ['Flutter', 'React', 'Node.js', 'AI APIs', 'WebSockets', 'Tailwind CSS'],
    features: {
      en: [
        'Real-time token streaming with sub-200ms initial response',
        'Smart conversation memory and automatic intent categorization',
        'Full bilingual Arabic and English natural language prompt processing'
      ],
      ar: [
        'بث فوري للنصوص بالذكاء الاصطناعي بأقل من 200ms للاستجابة الأولى',
        'ذاكرة ذكية لسياق الحوار وتصنيف تلقائي لنية واحتياجات المستخدم',
        'معالجة لغوية ذكية متقنة باللغتين العربية والإنجليزية'
      ]
    },
    architectureNotes: {
      en: 'Server-side streaming gateway with rate limiting and secure key encapsulation.',
      ar: 'بوابة خادم وسيطة تحمي مفاتيح الربط وتدير حجم الاستهلاك بأمان.'
    },
    accentColor: '#1A1816',
    webPreview: {
      url: 'https://ai-assistant.cloud',
      headline: { en: 'AI Orchestration Hub', ar: 'مركز الذكاء الاصطناعي' },
      subtext: { en: 'Live Model Streaming Pipeline Active', ar: 'بث النماذج الذكية متصل ويعمل' },
      stats: [
        { label: 'First Token', value: '185ms' },
        { label: 'Memory Depth', value: '16 Turns' },
        { label: 'Language', value: 'AR / EN' }
      ]
    },
    mobilePreview: {
      screenTitle: { en: 'AI Mobile Assistant', ar: 'المساعد الذكي' },
      items: [
        { title: 'Streaming Answer', subtitle: 'Analyzing query details...', tag: 'STREAMING' },
        { title: 'Smart Summary', subtitle: 'Category: Product Support', tag: 'RESOLVED' },
        { title: 'Voice Input', subtitle: 'Ready for microphone', tag: 'READY' }
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'php-laravel-backend',
    title: {
      en: 'PHP, Laravel & Backend Systems',
      ar: 'تطوير الويب الكامل - PHP ولارافيل'
    },
    description: {
      en: 'Robust web platforms, database optimization, and high-performance REST APIs.',
      ar: 'منصات ويب قوية، تحسين قواعد البيانات، وواجهات برمجية سريعة وموثوقة.'
    },
    iconName: 'Server',
    skills: [
      {
        name: 'PHP & Modern OOP',
        level: '98%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Object-oriented PHP 8+, design patterns, PSR standards, and security.',
          ar: 'برمجة كائنية التوجه PHP 8+ مع تطبيق معايير الأمان والجودة.'
        }
      },
      {
        name: 'Laravel & Livewire',
        level: '96%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Eloquent ORM, authentication, queue workers, and reactive Livewire components.',
          ar: 'هيكلية MVC، معالجة الطوابير، ومكونات تفاعلية باستخدام Livewire.'
        }
      },
      {
        name: 'MySQL Database Tuning',
        level: '95%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Relational schema design, query indexing, and caching performance.',
          ar: 'تصميم قواعد البيانات، بناء الفهارس، وتسريع الاستعلامات المعقدة.'
        }
      },
      {
        name: 'CodeIgniter & MVC',
        level: '92%',
        experience: '5+ Years',
        featured: false,
        description: {
          en: 'Lightweight web applications, legacy migration, and custom routing.',
          ar: 'تطوير وصيانة تطبيقات الويب بالاعتماد على معمارية MVC.'
        }
      },
      {
        name: 'Node.js & Web Services',
        level: '90%',
        experience: '5+ Years',
        featured: false,
        description: {
          en: 'RESTful API contracts, microservices, and WebSockets.',
          ar: 'واجهات برمجية API سريعة وخدمات ويب تربط الأنظمة المختلفة.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'Strict PSR-12 coding compliance',
        'Optimized sub-35ms database queries',
        'Enterprise JWT/Sanctum authentication'
      ],
      ar: [
        'التزام تام بمعايير الكود النظيف',
        'استعلامات قواعد بيانات فائقة السرعة',
        'أنظمة مصادقة وتشفير متقدمة'
      ]
    }
  },
  {
    id: 'mobile-cross-platform',
    title: {
      en: 'Cross-Platform Mobile (Flutter, React Native & Ionic)',
      ar: 'تطبيقات الهواتف - فلاتر ورياكت نيتف وأيونيك'
    },
    description: {
      en: 'Fast, smooth iOS and Android mobile apps with clean native architectures.',
      ar: 'تطبيقات سريعة ومستقرة لآيفون وأندرويد بهندسة فلاتر ورياكت نيتف الأصلية.'
    },
    iconName: 'Smartphone',
    skills: [
      {
        name: 'Google Flutter & Dart',
        level: '98%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Flutter SDK, Dart 3, custom widgets, and memory management.',
          ar: 'تطوير متقدم بـ Flutter ولغة Dart مع إدارة احترافية للذاكرة والأداء.'
        }
      },
      {
        name: 'State Management (BLoC & Riverpod)',
        level: '95%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Predictable reactive state, modular feature trees, and Clean Architecture.',
          ar: 'إدارة الحالة باحترافية عبر BLoC وفصل منطق العمل عن الواجهات.'
        }
      },
      {
        name: 'React Native & Ionic',
        level: '90%',
        experience: '4+ Years',
        featured: true,
        description: {
          en: 'Cross-platform mobile apps using JavaScript/TypeScript and hybrid tools.',
          ar: 'تطوير تطبيقات الجوال متعددة المنصات باستخدام تقنيات الويب الأصلية.'
        }
      },
      {
        name: 'Offline-First SQLite Storage',
        level: '94%',
        experience: '6+ Years',
        featured: false,
        description: {
          en: 'Local databases, background queuing, and automated cloud sync.',
          ar: 'قواعد بيانات محلية ومزامنة تلقائية دون اتصال بالإنترنت.'
        }
      },
      {
        name: 'Hardware & Device APIs',
        level: '92%',
        experience: '5+ Years',
        featured: false,
        description: {
          en: 'Background GPS tracking, camera, biometric auth, and push notifications.',
          ar: 'ربط مباشر مع ميزات الهاتف كالتتبع الجغرافي والكاميرا والبصمة.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'Clean Architecture layer separation',
        'Fluid 60fps native gestures & animations',
        'Automated testing & App Store deployment'
      ],
      ar: [
        'معمارية برمجية نظيفة ومنظمة',
        'حركات سلسة وإيماءات طبيعية بمعدل 60fps',
        'نشر معتمد على متجري آبل وجوجل بلاي'
      ]
    }
  },
  {
    id: 'frontend-ui-ux',
    title: {
      en: 'Modern Frontend, React & UI/UX',
      ar: 'الواجهات الأمامية الحديثة وتجربة المستخدم'
    },
    description: {
      en: 'High-speed web platforms with pixel-perfect responsive Arabic RTL support.',
      ar: 'منصات ويب فائقة السرعة بتحميل فوري وتصميم متجاوب يدعم العربية ببراعة.'
    },
    iconName: 'Globe',
    skills: [
      {
        name: 'React.js & Next.js',
        level: '97%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Server rendering, custom hooks, fast state management, and modern patterns.',
          ar: 'مكونات سريعة، تصيير خادم متطور، وهيكلية معيارية قابلة للتوسع.'
        }
      },
      {
        name: 'HTML5, CSS3 & Tailwind CSS',
        level: '98%',
        experience: '6+ Years',
        featured: true,
        description: {
          en: 'Modern responsive layouts with native RTL Arabic typography.',
          ar: 'تصميم متجاوب وأنيق مع دعم كامل للغة العربية والاتجاه من اليمين لليسار.'
        }
      },
      {
        name: 'UI/UX Redesign & Optimization',
        level: '94%',
        experience: '5+ Years',
        featured: true,
        description: {
          en: 'Streamlining product catalogs, section displays, and cart conversion flows.',
          ar: 'تطوير وتحديث واجهات المتاجر وعرض الأقسام لرفع نسب المبيعات.'
        }
      },
      {
        name: 'Angular & TypeScript',
        level: '89%',
        experience: '4+ Years',
        featured: false,
        description: {
          en: 'Strict typing, reusable enterprise modules, and scalable frontends.',
          ar: 'أمان نمطي صارم ومكونات مؤسسية قابلة لإعادة الاستخدام.'
        }
      },
      {
        name: 'Dynamic Filtering Systems',
        level: '96%',
        experience: '5+ Years',
        featured: true,
        description: {
          en: 'Faceted search engines, URL state sync, and real-time query builders.',
          ar: 'محركات التصفية والفلاتر الذكية وتحديث الروابط اللحظي للمتاجر.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'Modular reusable component design',
        'Sub-second page speeds & 99/100 Lighthouse',
        'Full bilingual Arabic & English parity'
      ],
      ar: [
        'مكونات برمجية قابلة لإعادة الاستخدام',
        'سرعة تصفح فائقة ومؤشرات لايتهاوس ممتازة',
        'دعم كامل واحترافي للغتين العربية والإنجليزية'
      ]
    }
  },
  {
    id: 'specialized-ai-admin',
    title: {
      en: 'AI Solutions, Dynamic Ads & Site Admin',
      ar: 'حلول الذكاء الاصطناعي وإدارة المواقع'
    },
    description: {
      en: 'Smart AI integrations, automated advertising banner systems, and server management.',
      ar: 'دمج تقنيات الذكاء الاصطناعي، إدارة اللافتات الإعلانية، واستضافة وإدارة الخوادم.'
    },
    iconName: 'Cpu',
    skills: [
      {
        name: 'AI Models & Smart Features',
        level: '92%',
        experience: '3+ Years',
        featured: true,
        description: {
          en: 'Integrating conversational AI, automated data categorization, and smart workflows.',
          ar: 'دمج المساعدين الأذكياء وأتمتة المهام وتصنيف البيانات بالذكاء الاصطناعي.'
        }
      },
      {
        name: 'Dynamic Banner Management',
        level: '95%',
        experience: '4+ Years',
        featured: true,
        description: {
          en: 'Automated advertising schedulers, weighted rotation, and click telemetry.',
          ar: 'نظام إدارة اللافتات الإعلانية وجدولتها وتتبع نسب النقر والظهور.'
        }
      },
      {
        name: 'Site Administration & Hosting',
        level: '93%',
        experience: '6+ Years',
        featured: false,
        description: {
          en: 'cPanel, VPS configuration, Linux environments, and SSL setup.',
          ar: 'إدارة المواقع، إعداد خوادم VPS، واستضافات cPanel وتأمين السيرفرات.'
        }
      },
      {
        name: 'CI/CD & App Store Release',
        level: '91%',
        experience: '5+ Years',
        featured: false,
        description: {
          en: 'Automated deployment pipelines for web, App Store, and Google Play.',
          ar: 'أتمتة رفع وتحديث التطبيقات والمواقع على المتاجر والخوادم.'
        }
      }
    ],
    architecturalPillars: {
      en: [
        'End-to-end data security & encryption',
        'Automated CI/CD deployment pipelines',
        '24/7 site stability & performance monitoring'
      ],
      ar: [
        'حماية وتشفير متكامل للبيانات',
        'أتمتة النشر والتحديثات للمشاريع',
        'مراقبة فورية للأداء واستقرار الخوادم'
      ]
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    clientName: 'Sultan Al-Otaibi',
    clientRole: {
      en: 'Founder & Business Owner',
      ar: 'مؤسس منصة تجارة إلكترونية'
    },
    company: 'Saudi Retail Co.',
    companyDomain: 'mostaql.com/u/ibrahimphp',
    projectName: {
      en: 'Dynamic Filtering & Store UI',
      ar: 'نظام الفلاتر الديناميكية وتطوير واجهات المتجر'
    },
    platform: 'Laravel & React',
    reviewText: {
      en: 'Ibrahim demonstrated extraordinary skill in engineering our dynamic filtering system and store UI. High speed, immaculate code quality, and fast delivery. One of the best developers on Mostaql.',
      ar: 'أشكر الأخ إبراهيم على احترافيته العالية في برمجة نظام الفلاتر الديناميكية وتطوير واجهات متجرنا بالـ React ولارافيل. سرعة في التنفيذ، كود مرتب ونظيف جداً، ومتابعة ممتازة بعد التسليم. أنصح الجميع بالتعامل معه بشدة في مستقل.'
    },
    avatarInitials: 'SO',
    verified: true,
    date: 'Feb 2025',
    rating: 5.0
  },
  {
    id: 'rev-02',
    clientName: 'Eng. Tariq Al-Mansoor',
    clientRole: {
      en: 'CTO',
      ar: 'الرئيس التنفيذي للتكنولوجيا'
    },
    company: 'Logistics Fleet Solutions (UAE)',
    companyDomain: 'mostaql.com/u/ibrahimphp',
    projectName: {
      en: 'Cross-Platform Flutter Driver App',
      ar: 'تطبيق فلاتر الذكي للسائقين'
    },
    platform: 'Flutter & Web',
    reviewText: {
      en: 'Ibrahim delivered our cross-platform Flutter mobile app and integrated it seamlessly with our Laravel backend. The offline sync engine works with zero data loss. Dependable and professional.',
      ar: 'قام إبراهيم بتطوير تطبيق فلاتر متكامل لنظامي آيفون وأندرويد مع ربطه بنظام Laravel وإدارته لقواعد البيانات والمزامنة دون اتصال. عمل استثنائي والتزام رائع بالموعد.'
    },
    avatarInitials: 'TM',
    verified: true,
    date: 'Nov 2024',
    rating: 5.0
  },
  {
    id: 'rev-03',
    clientName: 'Dr. Ahmad Radwan',
    clientRole: {
      en: 'Product Manager',
      ar: 'مدير تطوير المنتجات البرمجية'
    },
    company: 'Digital Media Network',
    companyDomain: 'mostaql.com/u/ibrahimphp',
    projectName: {
      en: 'Dynamic Banner & Campaign Engine',
      ar: 'نظام إدارة اللافتات الإعلانية الديناميكية'
    },
    platform: 'Laravel & React',
    reviewText: {
      en: 'A top-tier engineer with profound mastery of PHP, Laravel, and frontend dynamics. He architected our automated banner ad system and live control panel with surgical precision.',
      ar: 'مهندس متميز وخبير في الـ PHP والـ Laravel. أدار وطوّر نظام الإعلانات واللافتات الديناميكية ولوحة التحكم بدقة واحترافية متناهية. تواصل ممتاز ومرونة عالية طوال المشروع.'
    },
    avatarInitials: 'AR',
    verified: true,
    date: 'Aug 2024',
    rating: 5.0
  },
  {
    id: 'rev-04',
    clientName: 'Khaled Al-Mutawa',
    clientRole: {
      en: 'Startup Founder',
      ar: 'مؤسس شركة تقنية ناشئة'
    },
    company: 'Commerce Hub (Kuwait)',
    companyDomain: 'mostaql.com/u/ibrahimphp',
    projectName: {
      en: 'Store UI/UX Redesign & Optimization',
      ar: 'تطوير وتحديث واجهات المتجر وتجربة المستخدم'
    },
    platform: 'Full-Stack & Mobile',
    reviewText: {
      en: 'Ibrahim transformed our e-commerce platform with clean React code and responsive Arabic design. Conversion jumped by 42% right after deployment. Highly recommended!',
      ar: 'إبراهيم من خيرة المبرمجين الذين تعاملت معهم عبر مستقل. فهم متطلبات المشروع بسرعة وطبقها بأعلى معايير الجودة، مع اهتمام فائق بتجربة المستخدم وتصميم الجوال.'
    },
    avatarInitials: 'KM',
    verified: true,
    date: 'May 2024',
    rating: 5.0
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-01',
    period: '2022 — Present',
    role: {
      en: 'Senior Full-Stack Web & Mobile Developer',
      ar: 'مطور أول للويب وتطبيقات الهاتف المستقلة'
    },
    company: {
      en: 'Mostaql Platform & Global Clients',
      ar: 'منصة مستقل وعملاء دوليين'
    },
    location: {
      en: 'Remote / Freelance',
      ar: 'عن بُعد / عمل حر'
    },
    type: 'Lead',
    achievements: {
      en: [
        'Delivered 35+ full-stack web platforms and cross-platform mobile apps for businesses across the GCC and Arab world with a 5.0 rating on Mostaql',
        'Engineered high-performance dynamic filtering engines and automated banner ad systems for Laravel + React platforms',
        'Integrated cutting-edge AI features and offline SQLite sync into production mobile applications'
      ],
      ar: [
        'إنجاز وتسليم أكثر من 35 مشروعاً ناجحاً في تطبيقات الويب والهاتف لعملاء في الخليج والوطن العربي بتقييم 5 نجوم على مستقل',
        'برمجة وتطوير أنظمة الفلاتر والتصفية الديناميكية وإدارة اللافتات الإعلانية لمنصات Laravel + React',
        'دمج حلول الذكاء الاصطناعي ونظم المزامنة دون اتصال في تطبيقات الهواتف الذكية'
      ]
    },
    technologies: ['Laravel', 'Flutter', 'React', 'PHP', 'MySQL', 'TypeScript', 'Tailwind', 'AI APIs']
  },
  {
    id: 'exp-02',
    period: '2020 — 2022',
    role: {
      en: 'Lead Mobile & Full-Stack Engineer',
      ar: 'مهندس برمجيات رئيسي لتطبيقات الهاتف والويب'
    },
    company: {
      en: 'Software Studio',
      ar: 'استوديو تطوير البرمجيات'
    },
    location: {
      en: 'Remote / Hybrid',
      ar: 'عن بُعد / نمط هجين'
    },
    type: 'Full-time',
    achievements: {
      en: [
        'Shipped cross-platform mobile apps to Apple App Store and Google Play using Flutter and React Native',
        'Engineered secure Laravel RESTful APIs with Sanctum authentication, MySQL schema tuning, and Livewire components'
      ],
      ar: [
        'إطلاق تطبيقات متعددة المنصات على متجري آبل وجوجل بلاي باستخدام Flutter و React Native',
        'برمجة واجهات API آمنة باستخدام Laravel و Livewire وقواعد بيانات MySQL المحسنة'
      ]
    },
    technologies: ['Flutter', 'Dart', 'React Native', 'Laravel', 'PHP', 'MySQL', 'BLoC']
  },
  {
    id: 'exp-03',
    period: '2018 — 2020',
    role: {
      en: 'Web & Applications Developer',
      ar: 'مطور مواقع وتطبيقات الويب'
    },
    company: {
      en: 'Digital Solutions Lab',
      ar: 'مختبر الحلول الرقمية'
    },
    location: {
      en: 'On-site',
      ar: 'حضوري'
    },
    type: 'Full-time',
    achievements: {
      en: [
        'Developed custom full-stack web applications using PHP, CodeIgniter, Laravel, and MySQL',
        'Built responsive, fast-loading user interfaces with HTML5, CSS3, JavaScript, and React with full Arabic RTL support'
      ],
      ar: [
        'تطوير وتخصيص تطبيقات الويب باستخدام PHP و CodeIgniter و Laravel وقواعد بيانات MySQL',
        'بناء واجهات مستخدم متجاوبة وسريعة بـ HTML5 و CSS3 و React مع دعم كامل للغة العربية'
      ]
    },
    technologies: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'JavaScript', 'HTML5', 'CSS3']
  }
];

export const CREDIBILITY_METRICS = [
  {
    number: '6+ Years',
    label: { en: 'Industry Experience', ar: 'سنوات خبرة متخصصة' },
    desc: { en: 'Web, mobile, and software engineering.', ar: 'تطوير احترافي لمنصات الويب وتطبيقات الهاتف.' }
  },
  {
    number: '5.0 ★',
    label: { en: 'Mostaql Rating', ar: 'تقييم ممتاز على مستقل' },
    desc: { en: 'Verified client reviews and recommendations.', ar: 'تقييمات موثقة وتوصيات ممتازة من العملاء.' }
  },
  {
    number: '35+',
    label: { en: 'Delivered Projects', ar: 'مشاريع تم إنجازها' },
    desc: { en: 'Full-stack platforms and mobile apps.', ar: 'تطبيقات ومواقع حية في مجالات التجارة والخدمات.' }
  },
  {
    number: 'iOS & Android',
    label: { en: 'Cross-Platform Apps', ar: 'تطبيقات الهواتف' },
    desc: { en: 'Flutter, React Native & Ionic on stores.', ar: 'تطبيقات منشورة على متجري آبل وجوجل بلاي.' }
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: { en: 'Unified Stack', ar: 'تكامل الويب والهاتف' },
    desc: {
      en: 'Cohesive Laravel backends serving responsive React web frontends and native Flutter mobile apps.',
      ar: 'بنية خلفية قوية بـ Laravel تخدم واجهات React وتطبيقات فلاتر للهواتف بتناغم تام.'
    }
  },
  {
    number: '02',
    title: { en: 'Peak Speed & UX', ar: 'السرعة وتجربة المستخدم' },
    desc: {
      en: 'Sub-second page speeds, sub-35ms database queries, and 60fps mobile fluid animations.',
      ar: 'تحميل فوري للمواقع، استعلامات قواعد بيانات بأقل من 35ms، وتطبيقات هواتف فائقة السلاسة.'
    }
  },
  {
    number: '03',
    title: { en: 'Clean Code & Security', ar: 'كود نظيف وأمان صارم' },
    desc: {
      en: 'Modular PSR architecture, strict type contracts, and secure data encryption.',
      ar: 'كود منظم يسهل صيانته وتطويره مع حماية وتشفير متكامل للبيانات.'
    }
  },
  {
    number: '04',
    title: { en: 'Client Trust & Mostaql', ar: 'الالتزام ورضا العملاء' },
    desc: {
      en: '100% on-time project delivery with continuous post-launch support and 5.0 star feedback.',
      ar: 'التزام تام بالمواعيد، دعم مستمر بعد التسليم، وتقييم 5 نجوم يضمن راحة العميل.'
    }
  }
];
