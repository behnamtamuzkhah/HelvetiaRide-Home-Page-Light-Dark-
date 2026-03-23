// ---------------------------------------------
// HelvetiaRide – 12 Language System
// ---------------------------------------------

// Save selected language
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage();
}

// Apply language to all elements with data-key
function applyLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update dropdown
  const selector = document.getElementById("langSwitcher");
  if (selector) selector.value = lang;
}

// Run on page load
document.addEventListener("DOMContentLoaded", applyLanguage);

// ---------------------------------------------
// TRANSLATIONS – 12 LANGUAGES
// ---------------------------------------------

const translations = {

  // ---------------- ENGLISH ----------------
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_fleet: "Fleet",
    nav_pricing: "Pricing",
    nav_contact: "Contact",

    hero_title: "Zurich Airport Transfers & Chauffeur Service",
    hero_sub: "Private rides across Switzerland with premium vehicles and professional chauffeurs.",
    hero_btn: "View Pricing",

    about_title: "About HelvetiaRide",
    about_sub: "Premium chauffeur and airport transfer service based in Zurich.",
  },

  // ---------------- GERMAN ----------------
  de: {
    nav_home: "Startseite",
    nav_about: "Über uns",
    nav_services: "Dienstleistungen",
    nav_fleet: "Flotte",
    nav_pricing: "Preise",
    nav_contact: "Kontakt",

    hero_title: "Flughafentransfers Zürich & Chauffeurservice",
    hero_sub: "Private Fahrten in der ganzen Schweiz mit Premium-Fahrzeugen und professionellen Chauffeuren.",
    hero_btn: "Preise ansehen",

    about_title: "Über HelvetiaRide",
    about_sub: "Premium Chauffeur- und Flughafentransferservice mit Sitz in Zürich.",
  },

  // ---------------- FRENCH ----------------
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_fleet: "Flotte",
    nav_pricing: "Tarifs",
    nav_contact: "Contact",

    hero_title: "Transferts Aéroport de Zurich & Service Chauffeur",
    hero_sub: "Trajets privés en Suisse avec véhicules premium et chauffeurs professionnels.",
    hero_btn: "Voir les tarifs",

    about_title: "À propos de HelvetiaRide",
    about_sub: "Service premium de chauffeur et transferts aéroportuaires basé à Zurich.",
  },

  // ---------------- ITALIAN ----------------
  it: {
    nav_home: "Home",
    nav_about: "Chi siamo",
    nav_services: "Servizi",
    nav_fleet: "Flotta",
    nav_pricing: "Prezzi",
    nav_contact: "Contatto",

    hero_title: "Transfer Aeroporto Zurigo & Servizio Chauffeur",
    hero_sub: "Trasferimenti privati in tutta la Svizzera con veicoli premium e autisti professionisti.",
    hero_btn: "Vedi prezzi",

    about_title: "Chi è HelvetiaRide",
    about_sub: "Servizio premium di chauffeur e transfer aeroportuali con sede a Zurigo.",
  },

  // ---------------- SPANISH ----------------
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre nosotros",
    nav_services: "Servicios",
    nav_fleet: "Flota",
    nav_pricing: "Precios",
    nav_contact: "Contacto",

    hero_title: "Traslados al Aeropuerto de Zúrich & Servicio de Chofer",
    hero_sub: "Viajes privados por Suiza con vehículos premium y conductores profesionales.",
    hero_btn: "Ver precios",

    about_title: "Sobre HelvetiaRide",
    about_sub: "Servicio premium de chofer y traslados al aeropuerto con sede en Zúrich.",
  },

  // ---------------- PORTUGUESE ----------------
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_services: "Serviços",
    nav_fleet: "Frota",
    nav_pricing: "Preços",
    nav_contact: "Contato",

    hero_title: "Transfers Aeroporto de Zurique & Serviço de Motorista",
    hero_sub: "Viagens privadas pela Suíça com veículos premium e motoristas profissionais.",
    hero_btn: "Ver preços",

    about_title: "Sobre a HelvetiaRide",
    about_sub: "Serviço premium de motorista e transfers aeroportuários sediado em Zurique.",
  },

  // ---------------- RUSSIAN ----------------
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_services: "Услуги",
    nav_fleet: "Автопарк",
    nav_pricing: "Цены",
    nav_contact: "Контакты",

    hero_title: "Трансферы из аэропорта Цюриха и услуги шофёра",
    hero_sub: "Частные поездки по Швейцарии на премиальных автомобилях с профессиональными водителями.",
    hero_btn: "Посмотреть цены",

    about_title: "О HelvetiaRide",
    about_sub: "Премиальный сервис трансферов и шофёров, базирующийся в Цюрихе.",
  },

  // ---------------- TURKISH ----------------
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_fleet: "Filo",
    nav_pricing: "Fiyatlar",
    nav_contact: "İletişim",

    hero_title: "Zürih Havalimanı Transferi & Şoför Hizmeti",
    hero_sub: "İsviçre genelinde premium araçlarla özel yolculuklar.",
    hero_btn: "Fiyatları Gör",

    about_title: "HelvetiaRide Hakkında",
    about_sub: "Zürih merkezli premium şoför ve havalimanı transfer hizmeti.",
  },

  // ---------------- ARABIC ----------------
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_fleet: "الأسطول",
    nav_pricing: "الأسعار",
    nav_contact: "اتصل بنا",

    hero_title: "خدمة التوصيل من مطار زيورخ وخدمة السائق الخاص",
    hero_sub: "رحلات خاصة في جميع أنحاء سويسرا بسيارات فاخرة وسائقين محترفين.",
    hero_btn: "عرض الأسعار",

    about_title: "حول HelvetiaRide",
    about_sub: "خدمة سائق خاص ونقل من المطار مقرها زيورخ.",
  },

  // ---------------- PERSIAN ----------------
  fa: {
    nav_home: "خانه",
    nav_about: "درباره ما",
    nav_services: "خدمات",
    nav_fleet: "ناوگان",
    nav_pricing: "قیمت‌ها",
    nav_contact: "تماس",

    hero_title: "ترنسفر فرودگاه زوریخ و سرویس راننده اختصاصی",
    hero_sub: "سفرهای خصوصی در سراسر سوئیس با خودروهای لوکس و رانندگان حرفه‌ای.",
    hero_btn: "مشاهده قیمت‌ها",

    about_title: "درباره HelvetiaRide",
    about_sub: "سرویس لوکس راننده اختصاصی و ترنسفر فرودگاهی مستقر در زوریخ.",
  },

  // ---------------- CHINESE ----------------
  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_services: "服务",
    nav_fleet: "车队",
    nav_pricing: "价格",
    nav_contact: "联系",

    hero_title: "苏黎世机场接送与专车服务",
    hero_sub: "瑞士境内私人豪华车辆与专业司机服务。",
    hero_btn: "查看价格",

    about_title: "关于 HelvetiaRide",
    about_sub: "总部位于苏黎世的豪华专车与机场接送服务。",
  },

  // ---------------- JAPANESE ----------------
  ja: {
    nav_home: "ホーム",
    nav_about: "会社情報",
    nav_services: "サービス",
    nav_fleet: "車両",
    nav_pricing: "料金",
    nav_contact: "お問い合わせ",

    hero_title: "チューリッヒ空港送迎 & 専属ドライバーサービス",
    hero_sub: "スイス全土で提供する高級車とプロドライバーによるプライベート送迎。",
    hero_btn: "料金を見る",

    about_title: "HelvetiaRide について",
    about_sub: "チューリッヒを拠点とする高級送迎・空港トランスファーサービス。",
  }

};
