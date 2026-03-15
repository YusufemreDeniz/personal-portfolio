import type {
  ContactLink,
  EducationItem,
  ExperienceItem,
  GithubProjectItem,
  Locale,
  Project
} from "@/lib/types";

type Localized = Record<Locale, string>;

interface NavigationItem {
  href: string;
  label: Localized;
}

interface CtaItem {
  label: Localized;
  href: string;
}

interface PortfolioData {
  fullName: string;
  title: Localized;
  shortProfile: Localized;
  profilePhotoAlt: Localized;
  availability: Localized;
  location: Localized;
  navigation: NavigationItem[];
  heroCtas: CtaItem[];
  sectionTitles: Record<string, Localized>;
  sectionDescriptions: Record<string, Localized>;
  aboutParagraphs: Localized[];
  skills: string[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: string[];
  contact: {
    heading: Localized;
    description: Localized;
    links: ContactLink[];
    whatsapp: {
      href: string;
      label: Localized;
    };
  };
  githubSection: {
    title: Localized;
    description: Localized;
  };
}

export const portfolioData: PortfolioData = {
  fullName: "Yusuf Emre Deniz",
  title: {
    tr: "Startup-Minded Software Engineer",
    en: "Startup-Minded Software Engineer"
  },
  shortProfile: {
    tr: "Fırat Üniversitesi Yazılım Mühendisliği mezunuyum. Backend geliştirme alanında uzmanlaşmaya odaklanıyorum. Ticari yazılımlar ve CRM sistemleri geliştiriyorum. Özellikle C#, .NET ve SQL Server tarafında çalışıyorum. Ölçeklenebilir backend sistemleri, veritabanı tasarımı ve gerçek dünyaya uygun yazılım ürünleri geliştirmeye ilgi duyuyorum.",
    en: "I graduated in Software Engineering from Firat University. I focus on specializing in backend development. I build commercial software and CRM systems, mostly with C#, .NET, and SQL Server. I am especially interested in scalable backend architectures, database design, and real-world software products."
  },
  profilePhotoAlt: {
    tr: "Yusuf Emre Deniz profil görseli",
    en: "Yusuf Emre Deniz profile visual"
  },
  availability: {
    tr: "Yeni iş birliklerine açık",
    en: "Open to new collaborations"
  },
  location: {
    tr: "Türkiye",
    en: "Turkey"
  },
  navigation: [
    { href: "#about", label: { tr: "Hakkımda", en: "About" } },
    { href: "#skills", label: { tr: "Yetenekler", en: "Skills" } },
    { href: "#projects", label: { tr: "Projeler", en: "Projects" } },
    { href: "#experience", label: { tr: "Deneyim", en: "Experience" } },
    { href: "#github", label: { tr: "GitHub", en: "GitHub" } },
    { href: "#contact", label: { tr: "İletişim", en: "Contact" } }
  ],
  heroCtas: [
    { label: { tr: "Projeleri Gör", en: "View Projects" }, href: "#projects" },
    { label: { tr: "İletişime Geç", en: "Get in Touch" }, href: "#contact" }
  ],
  sectionTitles: {
    about: { tr: "Hakkımda", en: "About" },
    skills: { tr: "Yetenekler", en: "Skills" },
    featuredProjects: { tr: "Öne Çıkan Projeler", en: "Featured Projects" },
    otherProjects: { tr: "Diğer Projeler", en: "Other Projects" },
    experience: { tr: "Deneyim", en: "Experience" },
    education: { tr: "Eğitim", en: "Education" },
    github: { tr: "GitHub Projeleri", en: "GitHub Projects" },
    contact: { tr: "İletişim", en: "Contact" }
  },
  sectionDescriptions: {
    skills: {
      tr: "Backend odaklı ürün geliştirme yaklaşımımı destekleyen teknik alanlar.",
      en: "Core technical capabilities that support my backend-focused product development approach."
    },
    featuredProjects: {
      tr: "Gerçek iş senaryolarına yönelik, ürün düşüncesiyle geliştirdiğim projeler.",
      en: "Projects built with product thinking for real business and operational scenarios."
    },
    otherProjects: {
      tr: "Farklı problem alanlarında geliştirdiğim tamamlayıcı çalışmalar.",
      en: "Complementary implementations across different problem spaces and technologies."
    },
    experience: {
      tr: "Sistem, altyapı ve yazılım süreçlerinde edindiğim uygulamalı deneyim.",
      en: "Hands-on experience across systems, infrastructure, and software delivery processes."
    },
    github: {
      tr: "Şimdilik mock veriyle sunulan ve gerçek GitHub API entegrasyonuna hazır örnek yapı.",
      en: "A mock-driven section designed to be seamlessly connected to the real GitHub API later."
    },
    contact: {
      tr: "İletişim alanı üretim için hazırdır. Gerçek bilgiler sonradan tek noktadan güncellenebilir.",
      en: "Contact section is production-ready. Real contact details can be updated later from a single source."
    }
  },
  aboutParagraphs: [
    {
      tr: "Yazılım geliştirme yolculuğumda odağım, ölçeklenebilir backend çözümleri ve sürdürülebilir ürün mimarisi kurmaktır. İş değeri üreten sistemler geliştirirken performans, güvenlik ve bakım kolaylığını aynı anda gözetirim.",
      en: "My software journey is focused on building scalable backend solutions and sustainable product architecture. While delivering business value, I prioritize performance, security, and maintainability together."
    },
    {
      tr: "Ticari yazılımlar ve CRM sistemleri tarafında gerçek kullanıcı ihtiyaçlarını merkeze alan çözümler geliştirdim. C#, .NET ve SQL Server ekosisteminde uçtan uca süreç yönetimi, veritabanı modelleme ve API tabanlı entegrasyonlar üzerine çalışıyorum.",
      en: "I have developed solutions in commercial software and CRM domains with a strong focus on real user needs. I work across end-to-end process design, database modeling, and API-driven integrations within the C#, .NET, and SQL Server ecosystem."
    }
  ],
  skills: [
    "C#",
    ".NET",
    "SQL Server",
    "Flutter",
    "Backend Development",
    "REST API",
    "Database Design",
    "Commercial Software Development",
    "CRM Systems"
  ],
  projects: [
    {
      id: "hotel-automation",
      title: "Otel Otomasyonu",
      description: {
        tr: "Oteller için geliştirilen rezervasyon, müşteri, oda ve operasyon yönetimi odaklı ticari bir yazılım ürünü. Gerçek kullanım senaryolarına uygun, yönetim süreçlerini sadeleştiren bir yapı hedeflenmiştir.",
        en: "A commercial software product for hotels, focused on reservation, customer, room, and operations management. Designed to simplify management workflows with real-life usage scenarios in mind."
      },
      technologies: ["C#", ".NET", "SQL Server"],
      featured: true
    },
    {
      id: "nefes360",
      title: "Nefes360",
      description: {
        tr: "Kullanıcıların nefes egzersizi, yaşam tarzı takibi ve alışkanlık süreçlerini desteklemeyi amaçlayan mobil uygulama konsepti.",
        en: "A mobile app concept focused on supporting breathing exercises, lifestyle tracking, and habit-building journeys."
      },
      technologies: ["Flutter"],
      featured: true
    },
    {
      id: "hearing-center-crm",
      title: "İşitme Merkezi / CRM - Muhasebe Uygulaması",
      description: {
        tr: "İşitme cihazı satış ve takip süreçlerine uygun, müşteri, satış, kayıt ve operasyon akışlarını destekleyen masaüstü ticari yazılım çözümü.",
        en: "A desktop commercial software solution tailored to hearing device sales and follow-up processes, covering customer, sales, records, and operational workflows."
      },
      technologies: ["C#", ".NET", "SQL Server"],
      featured: true
    },
    {
      id: "corporate-website",
      title: "Corporate Website",
      description: {
        tr: "ASP.NET MVC ile geliştirilen kurumsal web sitesi. İçerik yönetimi ve kurumsal sunum odaklı yapı.",
        en: "A corporate website developed with ASP.NET MVC, focused on content management and corporate presentation."
      },
      technologies: ["C#", "ASP.NET MVC"],
      featured: false
    },
    {
      id: "football-web-application",
      title: "Football Web Application",
      description: {
        tr: "RapidAPI entegrasyonu kullanan futbol verileri ve istatistikleri gösteren web uygulaması.",
        en: "A web application displaying football data and statistics using RapidAPI integration."
      },
      technologies: ["C#", "ASP.NET MVC", "RapidAPI"],
      featured: false
    },
    {
      id: "recipe-desktop-app",
      title: "Recipe Desktop App",
      description: {
        tr: "Windows Forms ile geliştirilmiş tarif yönetimi uygulaması.",
        en: "A recipe management desktop application built with Windows Forms."
      },
      technologies: ["C#", "Windows Forms"],
      featured: false
    },
    {
      id: "internet-cafe-automation",
      title: "Internet Cafe Automation",
      description: {
        tr: "İnternet kafe operasyonlarını yönetmek için geliştirilmiş masaüstü otomasyon uygulaması.",
        en: "A desktop automation application created to manage internet cafe operations."
      },
      technologies: ["C#", "Windows Forms"],
      featured: false
    },
    {
      id: "whatsapp-clone",
      title: "WhatsApp Clone",
      description: {
        tr: "Socket programlama mantığını göstermek için geliştirilmiş gerçek zamanlı mesajlaşma denemesi.",
        en: "A real-time messaging experiment developed to demonstrate socket programming concepts."
      },
      technologies: ["Python", "Socket Programming"],
      featured: false
    },
    {
      id: "drone-control-panel",
      title: "Drone Control Panel",
      description: {
        tr: "Drone kontrol ve komut süreçleri için hazırlanmış Python tabanlı arayüz denemesi.",
        en: "A Python-based interface experiment designed for drone control and command operations."
      },
      technologies: ["Python"],
      featured: false
    }
  ],
  experience: [
    {
      company: "TÜBİTAK TeknoDC Bilişim Teknolojileri A.Ş.",
      role: {
        tr: "Sistem ve Yazılım Destek",
        en: "System and Software Support"
      },
      year: "2025",
      highlights: [
        {
          tr: "Sunucu kurulumu, yapılandırma ve yönetimi",
          en: "Server setup, configuration, and management"
        },
        {
          tr: "Windows Server, VMware, Proxmox",
          en: "Windows Server, VMware, Proxmox"
        },
        {
          tr: "GPU destekli sanal sunucular üzerinde destek süreçleri",
          en: "Support operations on GPU-enabled virtual servers"
        },
        {
          tr: "Firewall, RAID, BIOS, sanallaştırma ve güvenlik yapılandırmaları",
          en: "Firewall, RAID, BIOS, virtualization, and security configurations"
        }
      ]
    },
    {
      company: "İntellium Bilişim",
      role: {
        tr: "Yazılım Stajyeri",
        en: "Software Intern"
      },
      year: "2024",
      highlights: [
        {
          tr: "C# ile backend geliştirme süreçleri",
          en: "Backend development workflows with C#"
        },
        {
          tr: "Postman ile API testleri",
          en: "API testing with Postman"
        },
        {
          tr: "Entegrasyon, hata ayıklama ve yazılım test süreçleri",
          en: "Integration, debugging, and software testing processes"
        }
      ]
    },
    {
      company: "Van Büyükşehir Belediyesi",
      role: {
        tr: "Yazılım Stajyeri",
        en: "Software Intern"
      },
      year: "2024",
      highlights: [
        {
          tr: "ASP.NET MVC ile kurumsal web geliştirme",
          en: "Corporate web development with ASP.NET MVC"
        },
        {
          tr: "Veritabanı bağlantıları",
          en: "Database connectivity"
        },
        {
          tr: "Kullanıcı yönetimi ve içerik modülleri",
          en: "User management and content modules"
        }
      ]
    }
  ],
  education: [
    {
      school: "Fırat Üniversitesi",
      degree: {
        tr: "Yazılım Mühendisliği",
        en: "Software Engineering"
      },
      period: "2021 - 2025"
    }
  ],
  languages: ["Türkçe", "English"],
  contact: {
    heading: {
      tr: "Yeni projeler ve iş fırsatları için iletişime geçelim.",
      en: "Let us connect for new projects and business opportunities."
    },
    description: {
      tr: "Aşağıdaki alanlar üretim için hazırdır. Gerçek bilgiler eklendiğinde site canlı kullanıma uygundur.",
      en: "The fields below are production-ready placeholders. Once real details are added, the site is ready for live use."
    },
    links: [
      {
        label: {
          tr: "Email",
          en: "Email"
        },
        value: "your-email@example.com",
        href: "mailto:your-email@example.com"
      },
      {
        label: {
          tr: "GitHub",
          en: "GitHub"
        },
        value: "github.com/your-username",
        href: "https://github.com/your-username"
      },
      {
        label: {
          tr: "LinkedIn",
          en: "LinkedIn"
        },
        value: "linkedin.com/in/your-profile",
        href: "https://linkedin.com/in/your-profile"
      },
      {
        label: {
          tr: "Telefon",
          en: "Phone"
        },
        value: "+90 5xx xxx xx xx",
        href: "tel:+905000000000"
      }
    ],
    whatsapp: {
      href: "https://wa.me/905000000000",
      label: {
        tr: "WhatsApp ile iletişim",
        en: "Contact via WhatsApp"
      }
    }
  },
  githubSection: {
    title: {
      tr: "GitHub Projeleri",
      en: "GitHub Projects"
    },
    description: {
      tr: "Bu kartlar mock veri ile üretiliyor. Gerçek API bağlantısı için altyapı hazır.",
      en: "These cards are mock-driven for now. The architecture is ready for a real API integration."
    }
  }
};

export const githubMockProjects: GithubProjectItem[] = [
  {
    id: "github-1",
    name: "backend-crm-foundation",
    description: {
      tr: "Kurumsal CRM süreçleri için katmanlı .NET backend temel yapısı.",
      en: "Layered .NET backend foundation for enterprise CRM workflows."
    },
    stars: 18,
    language: "C#",
    url: "https://github.com/your-username/backend-crm-foundation"
  },
  {
    id: "github-2",
    name: "sql-server-design-playbook",
    description: {
      tr: "SQL Server üzerinde performans ve sürdürülebilirlik odaklı örnek veritabanı tasarım çalışmaları.",
      en: "Sample SQL Server database design work focused on performance and maintainability."
    },
    stars: 11,
    language: "SQL",
    url: "https://github.com/your-username/sql-server-design-playbook"
  },
  {
    id: "github-3",
    name: "flutter-wellness-concept",
    description: {
      tr: "Nefes ve alışkanlık takibi odaklı mobil ürün konsepti denemesi.",
      en: "A mobile product concept experiment for breathing and habit tracking."
    },
    stars: 9,
    language: "Dart",
    url: "https://github.com/your-username/flutter-wellness-concept"
  }
];
