// ---------------------------------------------
// HelvetiaRide – 12 Language System
// ---------------------------------------------

function applyLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  const elements = document.querySelectorAll("[data-key]");

  // Apply translations
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update dropdown
  const selector = document.getElementById("langSwitcher");
  if (selector) selector.value = lang;

  // -------------------------
  // RTL / LTR MODE SWITCHING
  // -------------------------
  if (lang === "fa" || lang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }
}

// ---------------------------------------------
// TRANSLATIONS – 12 LANGUAGES
// ---------------------------------------------

const translations = {

  // ---------------- ENGLISH ----------------
  en: {
    // NAV
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_fleet: "Fleet",
    nav_pricing: "Pricing",
    nav_contact: "Contact",

    // HOME
    hero_title: "Zurich Airport Transfers & Chauffeur Service",
    hero_sub: "Private rides across Switzerland with premium vehicles and professional chauffeurs.",
    hero_btn: "View Pricing",

    // ABOUT
    about_title: "About HelvetiaRide",
    about_sub: "Premium chauffeur and airport transfer service based in Zurich.",
    about_who_title: "Who We Are",
    about_who_text:
      "HelvetiaRide was created to bring a new standard of comfort, reliability, and professionalism to airport transfers and chauffeur services in Switzerland. Based in Zurich, we focus on delivering a seamless experience for business travelers, tourists, and local clients who expect more than just a ride.",
    about_mission_title: "Our Mission",
    about_mission_text:
      "Our mission is simple: to provide safe, on‑time, and luxurious transportation with a personal touch. From Zurich Airport transfers to long‑distance rides across Switzerland, we ensure every journey feels effortless, comfortable, and premium.",
    about_standards_title: "Our Standards",
    about_standard1_title: "Professional Drivers",
    about_standard1_text:
      "Experienced, discreet, and well‑trained chauffeurs who understand the needs of business and VIP clients.",
    about_standard2_title: "Luxury Vehicles",
    about_standard2_text:
      "Modern Mercedes‑Benz vehicles, maintained to the highest standards of safety and comfort.",
    about_standard3_title: "Swiss Reliability",
    about_standard3_text:
      "On‑time pickups, clear communication, and a service you can trust for every journey.",

    // SERVICES
    services_title: "Our Services",
    services_sub: "Premium chauffeur and airport transfer services tailored to your needs.",
    service1_title: "Zurich Airport Transfers",
    service1_text:
      "Reliable, on‑time pickups and drop‑offs at Zurich Airport with flight monitoring and Meet & Greet on request.",
    service2_title: "Point‑to‑Point Rides",
    service2_text:
      "Comfortable transfers between cities, hotels, offices, and events across Switzerland.",
    service3_title: "Hourly Chauffeur Service",
    service3_text:
      "Book a private chauffeur by the hour for meetings, events, or flexible schedules.",
    service4_title: "Business Travel",
    service4_text:
      "Discreet and professional transportation for executives, delegations, and corporate clients.",
    service5_title: "Long‑Distance Rides",
    service5_text:
      "Comfortable long‑distance trips to destinations across Switzerland and neighboring countries.",
    service6_title: "Event & VIP Service",
    service6_text:
      "Premium transportation for events, conferences, and VIP guests with coordinated logistics.",

    // FLEET
    fleet_title: "Our Fleet",
    fleet_sub: "Carefully selected Mercedes‑Benz vehicles for every type of journey.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz E‑Class or similar.",
    fleet1_text:
      "Perfect for airport transfers and city rides with a balance of comfort and style.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz V‑Class.",
    fleet2_text:
      "Ideal for families, groups, and extra luggage with spacious interiors and premium comfort.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz S‑Class.",
    fleet3_text:
      "For VIP and executive travel where only the highest level of luxury is acceptable.",

    // PRICING
    pricing_title: "Pricing",
    pricing_sub: "Transparent, premium pricing for airport transfers and chauffeur services.",
    price1_title: "Business Class",
    price1_route: "Zurich Airport → City",
    price1_text: "Comfortable sedan for up to 3 passengers and 2 bags.",
    price2_title: "Business Van",
    price2_route: "Zurich Airport → City",
    price2_text: "Spacious van for up to 6 passengers and luggage.",
    price3_title: "First Class",
    price3_route: "Zurich Airport → City",
    price3_text: "Ultimate luxury for VIP and executive guests.",
    pricing_long_title: "Hourly & Long‑Distance",
    pricing_long_text:
      "For hourly bookings and long‑distance rides across Switzerland, pricing depends on distance, duration, and vehicle class. Contact us with your route and schedule, and we will provide a tailored quote.",
    pricing_btn: "Request a Quote",

    // CONTACT
    contact_title: "Contact Us",
    contact_sub:
      "Send us your request and we will get back to you with a tailored offer.",
    contact_name_label: "Name",
    contact_name_placeholder: "Your full name",
    contact_email_label: "Email",
    contact_email_placeholder: "Your email address",
    contact_phone_label: "Phone",
    contact_phone_placeholder: "Your phone number",
    contact_service_label: "Service Type",
    contact_service1: "Zurich Airport Transfer",
    contact_service2: "Point‑to‑Point Ride",
    contact_service3: "Hourly Chauffeur",
    contact_service4: "Long‑Distance Ride",
    contact_service5: "Other",
    contact_message_label: "Message",
    contact_message_placeholder:
      "Tell us about your route, date, time, and any special requests.",
    contact_btn: "Send Request",
    contact_details_title: "Business Details",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
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
    hero_sub:
      "Private Fahrten in der ganzen Schweiz mit Premium-Fahrzeugen und professionellen Chauffeuren.",
    hero_btn: "Preise ansehen",

    about_title: "Über HelvetiaRide",
    about_sub:
      "Premium Chauffeur- und Flughafentransferservice mit Sitz in Zürich.",
    about_who_title: "Wer wir sind",
    about_who_text:
      "HelvetiaRide wurde gegründet, um einen neuen Standard an Komfort, Zuverlässigkeit und Professionalität für Flughafentransfers und Chauffeurdienste in der Schweiz zu setzen.",
    about_mission_title: "Unsere Mission",
    about_mission_text:
      "Unsere Mission ist einfach: sichere, pünktliche und luxuriöse Fahrten mit persönlicher Note zu bieten.",
    about_standards_title: "Unsere Standards",
    about_standard1_title: "Professionelle Fahrer",
    about_standard1_text:
      "Erfahrene, diskrete und gut geschulte Chauffeure, die die Bedürfnisse von Geschäfts- und VIP-Kunden verstehen.",
    about_standard2_title: "Luxusfahrzeuge",
    about_standard2_text:
      "Moderne Mercedes‑Benz Fahrzeuge, gewartet nach höchsten Sicherheits- und Komfortstandards.",
    about_standard3_title: "Schweizer Zuverlässigkeit",
    about_standard3_text:
      "Pünktliche Abholungen, klare Kommunikation und ein Service, dem Sie vertrauen können.",

    services_title: "Unsere Dienstleistungen",
    services_sub:
      "Premium Chauffeur- und Flughafentransfers, abgestimmt auf Ihre Bedürfnisse.",
    service1_title: "Flughafentransfers Zürich",
    service1_text:
      "Zuverlässige, pünktliche Abholungen und Fahrten vom und zum Flughafen Zürich mit Flugüberwachung.",
    service2_title: "Streckenfahrten",
    service2_text:
      "Komfortable Transfers zwischen Städten, Hotels, Büros und Events in der ganzen Schweiz.",
    service3_title: "Stundenweise Chauffeur",
    service3_text:
      "Buchen Sie einen privaten Chauffeur auf Stundenbasis für Meetings oder Events.",
    service4_title: "Geschäftsreisen",
    service4_text:
      "Diskreter und professioneller Transport für Führungskräfte und Delegationen.",
    service5_title: "Langstreckenfahrten",
    service5_text:
      "Komfortable Langstreckenfahrten zu Zielen in der Schweiz und Nachbarländern.",
    service6_title: "Event & VIP Service",
    service6_text:
      "Premium-Transport für Events, Konferenzen und VIP-Gäste.",

    fleet_title: "Unsere Flotte",
    fleet_sub:
      "Sorgfältig ausgewählte Mercedes‑Benz Fahrzeuge für jede Art von Fahrt.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz E‑Klasse oder ähnlich.",
    fleet1_text:
      "Ideal für Flughafentransfers und Stadtfahrten mit Komfort und Stil.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz V‑Klasse.",
    fleet2_text:
      "Perfekt für Familien, Gruppen und zusätzliches Gepäck.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz S‑Klasse.",
    fleet3_text:
      "Für VIP- und Executive-Reisen auf höchstem Luxusniveau.",

    pricing_title: "Preise",
    pricing_sub:
      "Transparente Premium-Preise für Flughafentransfers und Chauffeurservice.",
    price1_title: "Business Class",
    price1_route: "Flughafen Zürich → Stadt",
    price1_text:
      "Komfortable Limousine für bis zu 3 Personen und 2 Koffer.",
    price2_title: "Business Van",
    price2_route: "Flughafen Zürich → Stadt",
    price2_text:
      "Geräumiger Van für bis zu 6 Personen und Gepäck.",
    price3_title: "First Class",
    price3_route: "Flughafen Zürich → Stadt",
    price3_text:
      "Höchster Luxus für VIP- und Executive-Gäste.",
    pricing_long_title: "Stunden- & Langstreckenfahrten",
    pricing_long_text:
      "Für stundenweise Buchungen und Langstreckenfahrten hängen die Preise von Distanz, Dauer und Fahrzeugklasse ab.",
    pricing_btn: "Angebot anfragen",

    contact_title: "Kontakt",
    contact_sub:
      "Senden Sie uns Ihre Anfrage und wir melden uns mit einem individuellen Angebot.",
    contact_name_label: "Name",
    contact_name_placeholder: "Ihr vollständiger Name",
    contact_email_label: "E-Mail",
    contact_email_placeholder: "Ihre E-Mail-Adresse",
    contact_phone_label: "Telefon",
    contact_phone_placeholder: "Ihre Telefonnummer",
    contact_service_label: "Art des Service",
    contact_service1: "Flughafentransfer Zürich",
    contact_service2: "Streckenfahrt",
    contact_service3: "Stundenweise Chauffeur",
    contact_service4: "Langstreckenfahrt",
    contact_service5: "Sonstiges",
    contact_message_label: "Nachricht",
    contact_message_placeholder:
      "Route, Datum, Uhrzeit und besondere Wünsche.",
    contact_btn: "Anfrage senden",
    contact_details_title: "Firmendaten",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "E-Mail:"
  },

  // ---------------- FRENCH ----------------
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_fleet: "Flotte",
    nav_pricing: "Tarifs",
    nav_contact: "Contact",

    hero_title:
      "Transferts Aéroport de Zurich & Service Chauffeur",
    hero_sub:
      "Trajets privés en Suisse avec véhicules premium et chauffeurs professionnels.",
    hero_btn: "Voir les tarifs",

    about_title: "À propos de HelvetiaRide",
    about_sub:
      "Service premium de chauffeur et transferts aéroportuaires basé à Zurich.",
    about_who_title: "Qui sommes-nous",
    about_who_text:
      "HelvetiaRide a été créé pour offrir un nouveau standard de confort, de fiabilité et de professionnalisme pour les transferts aéroportuaires et les services de chauffeur en Suisse.",
    about_mission_title: "Notre mission",
    about_mission_text:
      "Notre mission est simple : fournir un transport sûr, ponctuel et luxueux avec une touche personnelle.",
    about_standards_title: "Nos standards",
    about_standard1_title: "Chauffeurs professionnels",
    about_standard1_text:
      "Des chauffeurs expérimentés, discrets et bien formés, habitués aux clients affaires et VIP.",
    about_standard2_title: "Véhicules de luxe",
    about_standard2_text:
      "Des véhicules Mercedes‑Benz modernes, entretenus selon les plus hauts standards.",
    about_standard3_title: "Fiabilité suisse",
    about_standard3_text:
      "Des prises en charge ponctuelles, une communication claire et un service de confiance.",

    services_title: "Nos services",
    services_sub:
      "Services premium de chauffeur et transferts aéroportuaires adaptés à vos besoins.",
    service1_title: "Transferts Aéroport de Zurich",
    service1_text:
      "Prise en charge ponctuelle à l’aéroport de Zurich avec suivi de vol et accueil personnalisé sur demande.",
    service2_title: "Trajets point à point",
    service2_text:
      "Transferts confortables entre villes, hôtels, bureaux et événements en Suisse.",
    service3_title: "Chauffeur à l’heure",
    service3_text:
      "Réservez un chauffeur privé à l’heure pour vos rendez-vous et événements.",
    service4_title: "Voyages d’affaires",
    service4_text:
      "Transport discret et professionnel pour dirigeants et clients corporate.",
    service5_title: "Longs trajets",
    service5_text:
      "Trajets longue distance confortables à travers la Suisse et les pays voisins.",
    service6_title: "Service Événement & VIP",
    service6_text:
      "Transport premium pour événements, conférences et invités VIP.",

    fleet_title: "Notre flotte",
    fleet_sub:
      "Une sélection soignée de véhicules Mercedes‑Benz pour chaque type de trajet.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz Classe E ou similaire.",
    fleet1_text:
      "Idéal pour les transferts aéroport et les trajets en ville.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz Classe V.",
    fleet2_text:
      "Parfait pour les familles, groupes et bagages supplémentaires.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz Classe S.",
    fleet3_text:
      "Pour les voyages VIP et exécutifs au plus haut niveau de luxe.",

    pricing_title: "Tarifs",
    pricing_sub:
      "Tarification transparente et premium pour les transferts et services chauffeur.",
    price1_title: "Business Class",
    price1_route: "Aéroport de Zurich → Centre-ville",
    price1_text:
      "Berline confortable pour jusqu’à 3 passagers et 2 bagages.",
    price2_title: "Business Van",
    price2_route: "Aéroport de Zurich → Centre-ville",
    price2_text:
      "Van spacieux pour jusqu’à 6 passagers et leurs bagages.",
    price3_title: "First Class",
    price3_route: "Aéroport de Zurich → Centre-ville",
    price3_text:
      "Luxe ultime pour invités VIP et dirigeants.",
    pricing_long_title: "À l’heure & Longue distance",
    pricing_long_text:
      "Pour les réservations à l’heure et les longs trajets, le tarif dépend de la distance, de la durée et de la catégorie de véhicule.",
    pricing_btn: "Demander un devis",

    contact_title: "Contact",
    contact_sub:
      "Envoyez-nous votre demande et nous vous répondrons avec une offre personnalisée.",
    contact_name_label: "Nom",
    contact_name_placeholder: "Votre nom complet",
    contact_email_label: "E‑mail",
    contact_email_placeholder: "Votre adresse e‑mail",
    contact_phone_label: "Téléphone",
    contact_phone_placeholder: "Votre numéro de téléphone",
    contact_service_label: "Type de service",
    contact_service1: "Transfert Aéroport de Zurich",
    contact_service2: "Trajet point à point",
    contact_service3: "Chauffeur à l’heure",
    contact_service4: "Trajet longue distance",
    contact_service5: "Autre",
    contact_message_label: "Message",
    contact_message_placeholder:
      "Indiquez votre trajet, date, heure et demandes particulières.",
    contact_btn: "Envoyer la demande",
    contact_details_title: "Informations professionnelles",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "E‑mail:"
  },

  // ---------------- ITALIAN ----------------
  it: {
    nav_home: "Home",
    nav_about: "Chi siamo",
    nav_services: "Servizi",
    nav_fleet: "Flotta",
    nav_pricing: "Prezzi",
    nav_contact: "Contatto",

    hero_title:
      "Transfer Aeroporto Zurigo & Servizio Chauffeur",
    hero_sub:
      "Trasferimenti privati in tutta la Svizzera con veicoli premium e autisti professionisti.",
    hero_btn: "Vedi prezzi",

    about_title: "Chi è HelvetiaRide",
    about_sub:
      "Servizio premium di chauffeur e transfer aeroportuali con sede a Zurigo.",
    about_who_title: "Chi siamo",
    about_who_text:
      "HelvetiaRide nasce per offrire un nuovo standard di comfort, affidabilità e professionalità nei transfer aeroportuali e nei servizi chauffeur in Svizzera.",
    about_mission_title: "La nostra missione",
    about_mission_text:
      "La nostra missione è semplice: offrire trasporti sicuri, puntuali e di lusso con un tocco personale.",
    about_standards_title: "I nostri standard",
    about_standard1_title: "Autisti professionali",
    about_standard1_text:
      "Autisti esperti, discreti e ben formati, abituati a clienti business e VIP.",
    about_standard2_title: "Veicoli di lusso",
    about_standard2_text:
      "Veicoli Mercedes‑Benz moderni, mantenuti ai massimi standard di sicurezza e comfort.",
    about_standard3_title: "Affidabilità svizzera",
    about_standard3_text:
      "Puntualità, comunicazione chiara e un servizio di cui ci si può fidare.",

    services_title: "I nostri servizi",
    services_sub:
      "Servizi premium di chauffeur e transfer aeroportuali su misura per te.",
    service1_title: "Transfer Aeroporto Zurigo",
    service1_text:
      "Pick‑up puntuali all’aeroporto di Zurigo con monitoraggio voli e Meet & Greet su richiesta.",
    service2_title: "Trasferimenti punto‑punto",
    service2_text:
      "Trasferimenti confortevoli tra città, hotel, uffici ed eventi.",
    service3_title: "Chauffeur a ore",
    service3_text:
      "Prenota un autista privato a ore per riunioni ed eventi.",
    service4_title: "Viaggi business",
    service4_text:
      "Trasporto discreto e professionale per dirigenti e clienti corporate.",
    service5_title: "Lunghe percorrenze",
    service5_text:
      "Viaggi a lunga distanza confortevoli in tutta la Svizzera e nei paesi vicini.",
    service6_title: "Servizio Eventi & VIP",
    service6_text:
      "Trasporto premium per eventi, conferenze e ospiti VIP.",

    fleet_title: "La nostra flotta",
    fleet_sub:
      "Veicoli Mercedes‑Benz selezionati con cura per ogni tipo di viaggio.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz Classe E o simile.",
    fleet1_text:
      "Perfetta per transfer aeroportuali e spostamenti in città.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz Classe V.",
    fleet2_text:
      "Ideale per famiglie, gruppi e bagagli extra.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz Classe S.",
    fleet3_text:
      "Per viaggi VIP ed executive al massimo livello di lusso.",

    pricing_title: "Prezzi",
    pricing_sub:
      "Prezzi premium e trasparenti per transfer e servizi chauffeur.",
    price1_title: "Business Class",
    price1_route: "Aeroporto di Zurigo → Centro città",
    price1_text:
      "Berlina confortevole per fino a 3 passeggeri e 2 bagagli.",
    price2_title: "Business Van",
    price2_route: "Aeroporto di Zurigo → Centro città",
    price2_text:
      "Van spazioso per fino a 6 passeggeri e bagagli.",
    price3_title: "First Class",
    price3_route: "Aeroporto di Zurigo → Centro città",
    price3_text:
      "Lusso assoluto per ospiti VIP ed executive.",
    pricing_long_title: "A ore & Lunghe distanze",
    pricing_long_text:
      "Per prenotazioni a ore e viaggi a lunga distanza, il prezzo dipende da distanza, durata e categoria del veicolo.",
    pricing_btn: "Richiedi un preventivo",

    contact_title: "Contatto",
    contact_sub:
      "Inviaci la tua richiesta e ti risponderemo con un’offerta personalizzata.",
    contact_name_label: "Nome",
    contact_name_placeholder: "Il tuo nome completo",
    contact_email_label: "Email",
    contact_email_placeholder: "Il tuo indirizzo email",
    contact_phone_label: "Telefono",
    contact_phone_placeholder: "Il tuo numero di telefono",
    contact_service_label: "Tipo di servizio",
    contact_service1: "Transfer Aeroporto Zurigo",
    contact_service2: "Trasferimento punto‑punto",
    contact_service3: "Chauffeur a ore",
    contact_service4: "Viaggio a lunga distanza",
    contact_service5: "Altro",
    contact_message_label: "Messaggio",
    contact_message_placeholder:
      "Indica percorso, data, orario e richieste speciali.",
    contact_btn: "Invia richiesta",
    contact_details_title: "Dettagli aziendali",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  },

  // ---------------- SPANISH ----------------
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre nosotros",
    nav_services: "Servicios",
    nav_fleet: "Flota",
    nav_pricing: "Precios",
    nav_contact: "Contacto",

    hero_title:
      "Traslados al Aeropuerto de Zúrich & Servicio de Chofer",
    hero_sub:
      "Viajes privados por Suiza con vehículos premium y conductores profesionales.",
    hero_btn: "Ver precios",

    about_title: "Sobre HelvetiaRide",
    about_sub:
      "Servicio premium de chofer y traslados al aeropuerto con sede en Zúrich.",
    about_who_title: "Quiénes somos",
    about_who_text:
      "HelvetiaRide fue creada para ofrecer un nuevo estándar de comodidad, fiabilidad y profesionalidad en los traslados y servicios de chofer en Suiza.",
    about_mission_title: "Nuestra misión",
    about_mission_text:
      "Nuestra misión es simple: ofrecer transporte seguro, puntual y lujoso con un toque personal.",
    about_standards_title: "Nuestros estándares",
    about_standard1_title: "Conductores profesionales",
    about_standard1_text:
      "Conductores experimentados, discretos y bien formados, acostumbrados a clientes de negocios y VIP.",
    about_standard2_title: "Vehículos de lujo",
    about_standard2_text:
      "Vehículos Mercedes‑Benz modernos, mantenidos con los más altos estándares.",
    about_standard3_title: "Fiabilidad suiza",
    about_standard3_text:
      "Recogidas puntuales, comunicación clara y un servicio en el que puede confiar.",

    services_title: "Nuestros servicios",
    services_sub:
      "Servicios premium de chofer y traslados al aeropuerto adaptados a sus necesidades.",
    service1_title: "Traslados Aeropuerto de Zúrich",
    service1_text:
      "Recogidas puntuales en el aeropuerto de Zúrich con seguimiento de vuelos y Meet & Greet bajo petición.",
    service2_title: "Traslados punto a punto",
    service2_text:
      "Traslados cómodos entre ciudades, hoteles, oficinas y eventos.",
    service3_title: "Chofer por horas",
    service3_text:
      "Reserve un chofer privado por horas para reuniones y eventos.",
    service4_title: "Viajes de negocios",
    service4_text:
      "Transporte discreto y profesional para ejecutivos y clientes corporativos.",
    service5_title: "Viajes de larga distancia",
    service5_text:
      "Viajes de larga distancia cómodos por toda Suiza y países vecinos.",
    service6_title: "Servicio para eventos y VIP",
    service6_text:
      "Transporte premium para eventos, conferencias e invitados VIP.",

    fleet_title: "Nuestra flota",
    fleet_sub:
      "Vehículos Mercedes‑Benz cuidadosamente seleccionados para cada tipo de viaje.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz Clase E o similar.",
    fleet1_text:
      "Perfecto para traslados al aeropuerto y desplazamientos urbanos.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz Clase V.",
    fleet2_text:
      "Ideal para familias, grupos y equipaje adicional.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz Clase S.",
    fleet3_text:
      "Para viajes VIP y ejecutivos con el máximo nivel de lujo.",

    pricing_title: "Precios",
    pricing_sub:
      "Precios premium y transparentes para traslados y servicios de chofer.",
    price1_title: "Business Class",
    price1_route: "Aeropuerto de Zúrich → Centro",
    price1_text:
      "Berlina cómoda para hasta 3 pasajeros y 2 maletas.",
    price2_title: "Business Van",
    price2_route: "Aeropuerto de Zúrich → Centro",
    price2_text:
      "Van espacioso para hasta 6 pasajeros y equipaje.",
    price3_title: "First Class",
    price3_route: "Aeropuerto de Zúrich → Centro",
    price3_text:
      "Máximo lujo para invitados VIP y ejecutivos.",
    pricing_long_title: "Por horas & Larga distancia",
    pricing_long_text:
      "Para reservas por horas y viajes de larga distancia, el precio depende de la distancia, duración y categoría del vehículo.",
    pricing_btn: "Solicitar presupuesto",

    contact_title: "Contacto",
    contact_sub:
      "Envíenos su solicitud y le responderemos con una oferta personalizada.",
    contact_name_label: "Nombre",
    contact_name_placeholder: "Su nombre completo",
    contact_email_label: "Correo electrónico",
    contact_email_placeholder: "Su correo electrónico",
    contact_phone_label: "Teléfono",
    contact_phone_placeholder: "Su número de teléfono",
    contact_service_label: "Tipo de servicio",
    contact_service1: "Traslado Aeropuerto de Zúrich",
    contact_service2: "Traslado punto a punto",
    contact_service3: "Chofer por horas",
    contact_service4: "Viaje de larga distancia",
    contact_service5: "Otro",
    contact_message_label: "Mensaje",
    contact_message_placeholder:
      "Indique ruta, fecha, hora y peticiones especiales.",
    contact_btn: "Enviar solicitud",
    contact_details_title: "Datos de la empresa",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  },

  // ---------------- PORTUGUESE ----------------
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_services: "Serviços",
    nav_fleet: "Frota",
    nav_pricing: "Preços",
    nav_contact: "Contato",

    hero_title:
      "Transfers Aeroporto de Zurique & Serviço de Motorista",
    hero_sub:
      "Viagens privadas pela Suíça com veículos premium e motoristas profissionais.",
    hero_btn: "Ver preços",

    about_title: "Sobre a HelvetiaRide",
    about_sub:
      "Serviço premium de motorista e transfers aeroportuários sediado em Zurique.",
    about_who_title: "Quem somos",
    about_who_text:
      "A HelvetiaRide foi criada para trazer um novo padrão de conforto, confiabilidade e profissionalismo aos transfers e serviços de motorista na Suíça.",
    about_mission_title: "Nossa missão",
    about_mission_text:
      "Nossa missão é simples: oferecer transporte seguro, pontual e luxuoso com um toque pessoal.",
    about_standards_title: "Nossos padrões",
    about_standard1_title: "Motoristas profissionais",
    about_standard1_text:
      "Motoristas experientes, discretos e bem treinados, habituados a clientes corporativos e VIP.",
    about_standard2_title: "Veículos de luxo",
    about_standard2_text:
      "Veículos Mercedes‑Benz modernos, mantidos com os mais altos padrões de segurança e conforto.",
    about_standard3_title: "Confiabilidade suíça",
    about_standard3_text:
      "Recolhas pontuais, comunicação clara e um serviço em que você pode confiar.",

    services_title: "Nossos serviços",
    services_sub:
      "Serviços premium de motorista e transfers aeroportuários adaptados às suas necessidades.",
    service1_title: "Transfers Aeroporto de Zurique",
    service1_text:
      "Recolhas pontuais no Aeroporto de Zurique com monitorização de voo e Meet & Greet sob pedido.",
    service2_title: "Viagens ponto a ponto",
    service2_text:
      "Transfers confortáveis entre cidades, hotéis, escritórios e eventos.",
    service3_title: "Motorista por hora",
    service3_text:
      "Reserve um motorista privado por hora para reuniões e eventos.",
    service4_title: "Viagens de negócios",
    service4_text:
      "Transporte discreto e profissional para executivos e clientes corporativos.",
    service5_title: "Viagens de longa distância",
    service5_text:
      "Viagens de longa distância confortáveis por toda a Suíça e países vizinhos.",
    service6_title: "Serviço para eventos & VIP",
    service6_text:
      "Transporte premium para eventos, conferências e convidados VIP.",

    fleet_title: "Nossa frota",
    fleet_sub:
      "Veículos Mercedes‑Benz cuidadosamente selecionados para cada tipo de viagem.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz Classe E ou similar.",
    fleet1_text:
      "Perfeito para transfers de aeroporto e deslocações na cidade.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz Classe V.",
    fleet2_text:
      "Ideal para famílias, grupos e bagagem extra.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz Classe S.",
    fleet3_text:
      "Para viagens VIP e executivas com o máximo nível de luxo.",

    pricing_title: "Preços",
    pricing_sub:
      "Preços premium e transparentes para transfers e serviços de motorista.",
    price1_title: "Business Class",
    price1_route: "Aeroporto de Zurique → Centro",
    price1_text:
      "Sedan confortável para até 3 passageiros e 2 malas.",
    price2_title: "Business Van",
    price2_route: "Aeroporto de Zurique → Centro",
    price2_text:
      "Van espaçosa para até 6 passageiros e bagagem.",
    price3_title: "First Class",
    price3_route: "Aeroporto de Zurique → Centro",
    price3_text:
      "Luxo máximo para convidados VIP e executivos.",
    pricing_long_title: "Por hora & Longa distância",
    pricing_long_text:
      "Para reservas por hora e viagens de longa distância, o preço depende da distância, duração e categoria do veículo.",
    pricing_btn: "Solicitar orçamento",

    contact_title: "Contato",
    contact_sub:
      "Envie-nos o seu pedido e responderemos com uma oferta personalizada.",
    contact_name_label: "Nome",
    contact_name_placeholder: "Seu nome completo",
    contact_email_label: "Email",
    contact_email_placeholder: "Seu endereço de email",
    contact_phone_label: "Telefone",
    contact_phone_placeholder: "Seu número de telefone",
    contact_service_label: "Tipo de serviço",
    contact_service1: "Transfer Aeroporto de Zurique",
    contact_service2: "Viagem ponto a ponto",
    contact_service3: "Motorista por hora",
    contact_service4: "Viagem de longa distância",
    contact_service5: "Outro",
    contact_message_label: "Mensagem",
    contact_message_placeholder:
      "Informe rota, data, horário e pedidos especiais.",
    contact_btn: "Enviar pedido",
    contact_details_title: "Dados da empresa",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  },

  // ---------------- RUSSIAN ----------------
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    nav_services: "Услуги",
    nav_fleet: "Автопарк",
    nav_pricing: "Цены",
    nav_contact: "Контакты",

    hero_title:
      "Трансферы из аэропорта Цюриха и услуги шофёра",
    hero_sub:
      "Частные поездки по Швейцарии на премиальных автомобилях с профессиональными водителями.",
    hero_btn: "Посмотреть цены",

    about_title: "О HelvetiaRide",
    about_sub:
      "Премиальный сервис трансферов и шофёров, базирующийся в Цюрихе.",
    about_who_title: "Кто мы",
    about_who_text:
      "HelvetiaRide создана, чтобы задать новый стандарт комфорта, надежности и профессионализма в сфере трансферов и услуг шофёра в Швейцарии.",
    about_mission_title: "Наша миссия",
    about_mission_text:
      "Наша миссия проста: обеспечить безопасные, пунктуальные и роскошные поездки с индивидуальным подходом.",
    about_standards_title: "Наши стандарты",
    about_standard1_title: "Профессиональные водители",
    about_standard1_text:
      "Опытные, тактичные и хорошо обученные шофёры, понимающие потребности бизнес‑ и VIP‑клиентов.",
    about_standard2_title: "Премиальные автомобили",
    about_standard2_text:
      "Современные автомобили Mercedes‑Benz, обслуживаемые по высшим стандартам безопасности и комфорта.",
    about_standard3_title: "Швейцарская надежность",
    about_standard3_text:
      "Пунктуальные подачи, четкая коммуникация и сервис, которому можно доверять.",

    services_title: "Наши услуги",
    services_sub:
      "Премиальные услуги шофёра и трансферы, адаптированные под ваши задачи.",
    service1_title: "Трансферы из аэропорта Цюриха",
    service1_text:
      "Надежные и пунктуальные трансферы из/в аэропорт Цюриха с мониторингом рейса и Meet & Greet по запросу.",
    service2_title: "Поездки между городами",
    service2_text:
      "Комфортные поездки между городами, отелями, офисами и мероприятиями по всей Швейцарии.",
    service3_title: "Шофёр по часам",
    service3_text:
      "Аренда личного шофёра на почасовой основе для встреч и мероприятий.",
    service4_title: "Бизнес‑поездки",
    service4_text:
      "Дискретный и профессиональный транспорт для руководителей и делегаций.",
    service5_title: "Дальние поездки",
    service5_text:
      "Комфортные дальние поездки по Швейцарии и в соседние страны.",
    service6_title: "Сервис для мероприятий и VIP",
    service6_text:
      "Премиальный транспорт для мероприятий, конференций и VIP‑гостей.",

    fleet_title: "Наш автопарк",
    fleet_sub:
      "Тщательно подобранные автомобили Mercedes‑Benz для любых поездок.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz E‑Class или аналогичный.",
    fleet1_text:
      "Идеален для трансферов в аэропорт и поездок по городу.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz V‑Class.",
    fleet2_text:
      "Отличный выбор для семей, групп и дополнительного багажа.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz S‑Class.",
    fleet3_text:
      "Для VIP‑и executive‑поездок с максимальным уровнем роскоши.",

    pricing_title: "Цены",
    pricing_sub:
      "Прозрачные премиальные тарифы на трансферы и услуги шофёра.",
    price1_title: "Business Class",
    price1_route: "Аэропорт Цюриха → Центр",
    price1_text:
      "Комфортный седан до 3 пассажиров и 2 чемоданов.",
    price2_title: "Business Van",
    price2_route: "Аэропорт Цюриха → Центр",
    price2_text:
      "Просторный минивэн до 6 пассажиров и багажа.",
    price3_title: "First Class",
    price3_route: "Аэропорт Цюриха → Центр",
    price3_text:
      "Максимальный комфорт и статус для VIP‑гостей.",
    pricing_long_title: "Почасовая аренда и дальние поездки",
    pricing_long_text:
      "Стоимость почасовой аренды и дальних поездок зависит от расстояния, длительности и класса автомобиля.",
    pricing_btn: "Запросить предложение",

    contact_title: "Контакты",
    contact_sub:
      "Отправьте нам запрос, и мы подготовим индивидуальное предложение.",
    contact_name_label: "Имя",
    contact_name_placeholder: "Ваше полное имя",
    contact_email_label: "E‑mail",
    contact_email_placeholder: "Ваш адрес e‑mail",
    contact_phone_label: "Телефон",
    contact_phone_placeholder: "Ваш номер телефона",
    contact_service_label: "Тип услуги",
    contact_service1: "Трансфер из аэропорта Цюриха",
    contact_service2: "Поездка между точками",
    contact_service3: "Почасовой шофёр",
    contact_service4: "Дальняя поездка",
    contact_service5: "Другое",
    contact_message_label: "Сообщение",
    contact_message_placeholder:
      "Укажите маршрут, дату, время и особые пожелания.",
    contact_btn: "Отправить запрос",
    contact_details_title: "Информация о компании",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "E‑mail:"
  },

  // ---------------- TURKISH ----------------
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_fleet: "Filo",
    nav_pricing: "Fiyatlar",
    nav_contact: "İletişim",

    hero_title:
      "Zürih Havalimanı Transferi & Şoför Hizmeti",
    hero_sub:
      "İsviçre genelinde premium araçlarla özel yolculuklar.",
    hero_btn: "Fiyatları Gör",

    about_title: "HelvetiaRide Hakkında",
    about_sub:
      "Zürih merkezli premium şoför ve havalimanı transfer hizmeti.",
    about_who_title: "Biz kimiz",
    about_who_text:
      "HelvetiaRide, İsviçre’de havalimanı transferleri ve şoför hizmetlerinde yeni bir konfor, güvenilirlik ve profesyonellik standardı sunmak için kuruldu.",
    about_mission_title: "Misyonumuz",
    about_mission_text:
      "Misyonumuz basit: kişisel dokunuşla güvenli, zamanında ve lüks ulaşım sağlamak.",
    about_standards_title: "Standartlarımız",
    about_standard1_title: "Profesyonel şoförler",
    about_standard1_text:
      "İş ve VIP müşterilerin ihtiyaçlarını anlayan, deneyimli ve gizliliğe önem veren şoförler.",
    about_standard2_title: "Lüks araçlar",
    about_standard2_text:
      "En yüksek güvenlik ve konfor standartlarında bakımı yapılan modern Mercedes‑Benz araçlar.",
    about_standard3_title: "İsviçre güvenilirliği",
    about_standard3_text:
      "Zamanında karşılama, net iletişim ve güvenebileceğiniz bir hizmet.",

    services_title: "Hizmetlerimiz",
    services_sub:
      "İhtiyaçlarınıza göre şekillenen premium şoför ve havalimanı transfer hizmetleri.",
    service1_title: "Zürih Havalimanı Transferleri",
    service1_text:
      "Uçuş takibi ve talep üzerine karşılama hizmetiyle Zürih Havalimanı’na güvenilir ve zamanında transfer.",
    service2_title: "Nokta‑nokta transferler",
    service2_text:
      "İsviçre genelinde şehirler, oteller, ofisler ve etkinlikler arasında konforlu transferler.",
    service3_title: "Saatlik şoför hizmeti",
    service3_text:
      "Toplantılar ve etkinlikler için saatlik özel şoför.",
    service4_title: "İş seyahatleri",
    service4_text:
      "Yöneticiler ve kurumsal müşteriler için profesyonel ve gizli ulaşım.",
    service5_title: "Uzun mesafe yolculuklar",
    service5_text:
      "İsviçre ve komşu ülkelere konforlu uzun mesafe yolculuklar.",
    service6_title: "Etkinlik & VIP hizmeti",
    service6_text:
      "Etkinlikler, konferanslar ve VIP misafirler için premium ulaşım.",

    fleet_title: "Filomuz",
    fleet_sub:
      "Her yolculuk türü için özenle seçilmiş Mercedes‑Benz araçlar.",
    fleet1_title: "Business Class",
    fleet1_sub: "Mercedes‑Benz E‑Class veya benzeri.",
    fleet1_text:
      "Havalimanı transferleri ve şehir içi yolculuklar için ideal.",
    fleet2_title: "Business Van",
    fleet2_sub: "Mercedes‑Benz V‑Class.",
    fleet2_text:
      "Aileler, gruplar ve ekstra bagaj için mükemmel.",
    fleet3_title: "First Class",
    fleet3_sub: "Mercedes‑Benz S‑Class.",
    fleet3_text:
      "VIP ve üst düzey misafirler için en yüksek lüks seviyesi.",

    pricing_title: "Fiyatlar",
    pricing_sub:
      "Havalimanı transferleri ve şoför hizmetleri için şeffaf, premium fiyatlandırma.",
    price1_title: "Business Class",
    price1_route: "Zürih Havalimanı → Şehir Merkezi",
    price1_text:
      "En fazla 3 yolcu ve 2 bavul için konforlu sedan.",
    price2_title: "Business Van",
    price2_route: "Zürih Havalimanı → Şehir Merkezi",
    price2_text:
      "En fazla 6 yolcu ve bagaj için geniş van.",
    price3_title: "First Class",
    price3_route: "Zürih Havalimanı → Şehir Merkezi",
    price3_text:
      "VIP ve üst düzey misafirler için en üst düzey lüks.",
    pricing_long_title: "Saatlik & Uzun mesafe",
    pricing_long_text:
      "Saatlik rezervasyonlar ve uzun mesafe yolculuklarda fiyat; mesafe, süre ve araç sınıfına göre belirlenir.",
    pricing_btn: "Teklif iste",

    contact_title: "İletişim",
    contact_sub:
      "Talebinizi bize iletin, size özel bir teklif hazırlayalım.",
    contact_name_label: "İsim",
    contact_name_placeholder: "Tam adınız",
    contact_email_label: "E‑posta",
    contact_email_placeholder: "E‑posta adresiniz",
    contact_phone_label: "Telefon",
    contact_phone_placeholder: "Telefon numaranız",
    contact_service_label: "Hizmet türü",
    contact_service1: "Zürih Havalimanı Transferi",
    contact_service2: "Nokta‑nokta transfer",
    contact_service3: "Saatlik şoför",
    contact_service4: "Uzun mesafe yolculuk",
    contact_service5: "Diğer",
    contact_message_label: "Mesaj",
    contact_message_placeholder:
      "Güzergâh, tarih, saat ve özel taleplerinizi yazın.",
    contact_btn: "Talep gönder",
    contact_details_title: "Firma bilgileri",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "E‑posta:"
  },

  // ---------------- ARABIC ----------------
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_fleet: "الأسطول",
    nav_pricing: "الأسعار",
    nav_contact: "اتصل بنا",

    hero_title:
      "خدمة التوصيل من مطار زيورخ وخدمة السائق الخاص",
    hero_sub:
      "رحلات خاصة في جميع أنحاء سويسرا بسيارات فاخرة وسائقين محترفين.",
    hero_btn: "عرض الأسعار",

    about_title: "حول HelvetiaRide",
    about_sub:
      "خدمة سائق خاص ونقل من المطار مقرها زيورخ.",
    about_who_title: "من نحن",
    about_who_text:
      "تم إنشاء HelvetiaRide لتقديم مستوى جديد من الراحة والموثوقية والاحتراف في خدمات النقل من المطار وخدمات السائق الخاص في سويسرا.",
    about_mission_title: "مهمتنا",
    about_mission_text:
      "مهمتنا بسيطة: توفير نقل آمن، في الوقت المحدد، وفاخر مع لمسة شخصية.",
    about_standards_title: "معاييرنا",
    about_standard1_title: "سائقون محترفون",
    about_standard1_text:
      "سائقون ذوو خبرة، محترفون، ويدركون احتياجات عملاء الأعمال وكبار الشخصيات.",
    about_standard2_title: "سيارات فاخرة",
    about_standard2_text:
      "سيارات مرسيدس‑بنز حديثة، تتم صيانتها وفقًا لأعلى معايير السلامة والراحة.",
    about_standard3_title: "موثوقية سويسرية",
    about_standard3_text:
      "وصول في الوقت المحدد، تواصل واضح، وخدمة يمكنك الوثوق بها.",

    services_title: "خدماتنا",
    services_sub:
      "خدمات سائق خاص ونقل من المطار بمستوى فاخر ومصممة حسب احتياجاتك.",
    service1_title: "خدمة التوصيل من مطار زيورخ",
    service1_text:
      "استقبال وتوصيل موثوق في مطار زيورخ مع متابعة للرحلات وخدمة الاستقبال عند الطلب.",
    service2_title: "رحلات من نقطة إلى نقطة",
    service2_text:
      "نقل مريح بين المدن والفنادق والمكاتب والفعاليات في جميع أنحاء سويسرا.",
    service3_title: "سائق بالساعة",
    service3_text:
      "احجز سائقًا خاصًا بالساعة للاجتماعات أو الفعاليات.",
    service4_title: "رحلات الأعمال",
    service4_text:
      "نقل احترافي وهادئ للمديرين والوفود.",
    service5_title: "رحلات طويلة",
    service5_text:
      "رحلات طويلة مريحة داخل سويسرا وإلى الدول المجاورة.",
    service6_title: "خدمة الفعاليات وكبار الشخصيات",
    service6_text:
      "نقل فاخر للفعاليات والمؤتمرات وضيوف كبار الشخصيات.",

    fleet_title: "أسطولنا",
    fleet_sub:
      "مجموعة مختارة بعناية من سيارات مرسيدس‑بنز لكل نوع من الرحلات.",
    fleet1_title: "درجة الأعمال",
    fleet1_sub: "مرسيدس‑بنز الفئة E أو ما شابه.",
    fleet1_text:
      "مثالية لرحلات المطار والتنقل داخل المدينة.",
    fleet2_title: "فان الأعمال",
    fleet2_sub: "مرسيدس‑بنز الفئة V.",
    fleet2_text:
      "مناسب للعائلات والمجموعات والأمتعة الإضافية.",
    fleet3_title: "الدرجة الأولى",
    fleet3_sub: "مرسيدس‑بنز الفئة S.",
    fleet3_text:
      "للرحلات الفاخرة لكبار الشخصيات والمديرين التنفيذيين.",

    pricing_title: "الأسعار",
    pricing_sub:
      "أسعار شفافة ومميزة لخدمات التوصيل والسائق الخاص.",
    price1_title: "درجة الأعمال",
    price1_route: "مطار زيورخ → وسط المدينة",
    price1_text:
      "سيارة سيدان مريحة لما يصل إلى 3 ركاب وحقيبتين.",
    price2_title: "فان الأعمال",
    price2_route: "مطار زيورخ → وسط المدينة",
    price2_text:
      "فان واسع لما يصل إلى 6 ركاب مع الأمتعة.",
    price3_title: "الدرجة الأولى",
    price3_route: "مطار زيورخ → وسط المدينة",
    price3_text:
      "أعلى مستويات الفخامة لضيوف كبار الشخصيات.",
    pricing_long_title: "بالساعة والرحلات الطويلة",
    pricing_long_text:
      "تعتمد الأسعار على المسافة والمدة وفئة السيارة للرحلات الطويلة والحجوزات بالساعة.",
    pricing_btn: "طلب عرض سعر",

    contact_title: "اتصل بنا",
    contact_sub:
      "أرسل لنا طلبك وسنعاود الاتصال بك بعرض مخصص.",
    contact_name_label: "الاسم",
    contact_name_placeholder: "اسمك الكامل",
    contact_email_label: "البريد الإلكتروني",
    contact_email_placeholder: "عنوان بريدك الإلكتروني",
    contact_phone_label: "الهاتف",
    contact_phone_placeholder: "رقم هاتفك",
    contact_service_label: "نوع الخدمة",
    contact_service1: "خدمة التوصيل من مطار زيورخ",
    contact_service2: "رحلة من نقطة إلى نقطة",
    contact_service3: "سائق بالساعة",
    contact_service4: "رحلة طويلة",
    contact_service5: "أخرى",
    contact_message_label: "الرسالة",
    contact_message_placeholder:
      "اذكر خط السير، التاريخ، الوقت وأي طلبات خاصة.",
    contact_btn: "إرسال الطلب",
    contact_details_title: "بيانات العمل",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  },

  // ---------------- PERSIAN ----------------
  fa: {
    nav_home: "خانه",
    nav_about: "درباره ما",
    nav_services: "خدمات",
    nav_fleet: "ناوگان",
    nav_pricing: "قیمت‌ها",
    nav_contact: "تماس",

    hero_title:
      "ترنسفر فرودگاه زوریخ و سرویس راننده اختصاصی",
    hero_sub:
      "سفرهای خصوصی در سراسر سوئیس با خودروهای لوکس و رانندگان حرفه‌ای.",
    hero_btn: "مشاهده قیمت‌ها",

    about_title: "درباره HelvetiaRide",
    about_sub:
      "سرویس لوکس راننده اختصاصی و ترنسفر فرودگاهی مستقر در زوریخ.",
    about_who_title: "ما که هستیم",
    about_who_text:
      "HelvetiaRide برای ایجاد استانداردی جدید از راحتی، قابل‌اعتمادی و حرفه‌ای‌گری در ترنسفر فرودگاهی و سرویس راننده اختصاصی در سوئیس ایجاد شد.",
    about_mission_title: "ماموریت ما",
    about_mission_text:
      "ماموریت ما ساده است: ارائه حمل‌ونقل ایمن، به‌موقع و لوکس با یک لمس شخصی.",
    about_standards_title: "استانداردهای ما",
    about_standard1_title: "رانندگان حرفه‌ای",
    about_standard1_text:
      "رانندگان باتجربه، محترم و آموزش‌دیده که نیازهای مشتریان بیزنسی و VIP را می‌شناسند.",
    about_standard2_title: "خودروهای لوکس",
    about_standard2_text:
      "خودروهای مدرن مرسدس‑بنز با نگهداری در بالاترین سطح ایمنی و راحتی.",
    about_standard3_title: "قابل‌اعتمادی سوئیسی",
    about_standard3_text:
      "دریافت به‌موقع، ارتباط شفاف و سرویسی که می‌توانید به آن تکیه کنید.",

    services_title: "خدمات ما",
    services_sub:
      "خدمات لوکس راننده اختصاصی و ترنسفر فرودگاهی متناسب با نیاز شما.",
    service1_title: "ترنسفر فرودگاه زوریخ",
    service1_text:
      "ترنسفر مطمئن و به‌موقع از/به فرودگاه زوریخ با مانیتورینگ پرواز و استقبال در صورت درخواست.",
    service2_title: "سفرهای نقطه به نقطه",
    service2_text:
      "ترنسفر راحت بین شهرها، هتل‌ها، دفاتر و رویدادها در سراسر سوئیس.",
    service3_title: "راننده ساعتی",
    service3_text:
      "رزرو راننده اختصاصی به‌صورت ساعتی برای جلسات و رویدادها.",
    service4_title: "سفرهای بیزنسی",
    service4_text:
      "حمل‌ونقل حرفه‌ای و محرمانه برای مدیران و میهمانان شرکتی.",
    service5_title: "سفرهای طولانی",
    service5_text:
      "سفرهای طولانی راحت در سراسر سوئیس و کشورهای همسایه.",
    service6_title: "سرویس رویداد و VIP",
    service6_text:
      "ترنسفر لوکس برای رویدادها، کنفرانس‌ها و میهمانان ویژه.",

    fleet_title: "ناوگان ما",
    fleet_sub:
      "خودروهای مرسدس‑بنز انتخاب‌شده برای هر نوع سفر.",
    fleet1_title: "بیزنس کلاس",
    fleet1_sub: "مرسدس‑بنز کلاس E یا مشابه.",
    fleet1_text:
      "مناسب برای ترنسفر فرودگاهی و سفرهای شهری با تعادل بین راحتی و استایل.",
    fleet2_title: "بیزنس ون",
    fleet2_sub: "مرسدس‑بنز کلاس V.",
    fleet2_text:
      "ایده‌آل برای خانواده‌ها، گروه‌ها و بار اضافه.",
    fleet3_title: "فرست کلاس",
    fleet3_sub: "مرسدس‑بنز کلاس S.",
    fleet3_text:
      "برای سفرهای VIP و مدیران ارشد با بالاترین سطح لوکس بودن.",

    pricing_title: "قیمت‌ها",
    pricing_sub:
      "قیمت‌گذاری شفاف و لوکس برای ترنسفر فرودگاهی و سرویس راننده اختصاصی.",
    price1_title: "بیزنس کلاس",
    price1_route: "فرودگاه زوریخ → مرکز شهر",
    price1_text:
      "سدان راحت برای حداکثر ۳ نفر و ۲ چمدان.",
    price2_title: "بیزنس ون",
    price2_route: "فرودگاه زوریخ → مرکز شهر",
    price2_text:
      "ون جادار برای حداکثر ۶ نفر و بار.",
    price3_title: "فرست کلاس",
    price3_route: "فرودگاه زوریخ → مرکز شهر",
    price3_text:
      "بالاترین سطح لوکس بودن برای میهمانان VIP.",
    pricing_long_title: "ساعتی و سفرهای طولانی",
    pricing_long_text:
      "برای رزروهای ساعتی و سفرهای طولانی، قیمت به مسافت، مدت زمان و کلاس خودرو بستگی دارد.",
    pricing_btn: "درخواست قیمت",

    contact_title: "تماس با ما",
    contact_sub:
      "درخواست خود را برای ما ارسال کنید تا یک پیشنهاد اختصاصی برای شما آماده کنیم.",
    contact_name_label: "نام",
    contact_name_placeholder: "نام و نام خانوادگی شما",
    contact_email_label: "ایمیل",
    contact_email_placeholder: "آدرس ایمیل شما",
    contact_phone_label: "تلفن",
    contact_phone_placeholder: "شماره تلفن شما",
    contact_service_label: "نوع سرویس",
    contact_service1: "ترنسفر فرودگاه زوریخ",
    contact_service2: "سفر نقطه به نقطه",
    contact_service3: "راننده ساعتی",
    contact_service4: "سفر طولانی",
    contact_service5: "سایر",
    contact_message_label: "پیام",
    contact_message_placeholder:
      "مسیر، تاریخ، ساعت و هر درخواست ویژه‌ای را بنویسید.",
    contact_btn: "ارسال درخواست",
    contact_details_title: "اطلاعات کسب‌وکار",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  },

  // ---------------- CHINESE ----------------
  zh: {
    nav_home: "首页",
    nav_about: "关于我们",
    nav_services: "服务",
    nav_fleet: "车队",
    nav_pricing: "价格",
    nav_contact: "联系",

    hero_title:
      "苏黎世机场接送与专车服务",
    hero_sub:
      "瑞士境内私人豪华车辆与专业司机服务。",
    hero_btn: "查看价格",

    about_title: "关于 HelvetiaRide",
    about_sub:
      "总部位于苏黎世的豪华专车与机场接送服务。",
    about_who_title: "我们是谁",
    about_who_text:
      "HelvetiaRide 致力于在瑞士的机场接送和专车服务中树立全新的舒适、可靠和专业标准。",
    about_mission_title: "我们的使命",
    about_mission_text:
      "我们的使命很简单：以个性化服务提供安全、准时且豪华的出行体验。",
    about_standards_title: "我们的标准",
    about_standard1_title: "专业司机",
    about_standard1_text:
      "经验丰富、低调专业的司机，熟悉商务与 VIP 客户需求。",
    about_standard2_title: "豪华车辆",
    about_standard2_text:
      "现代 Mercedes‑Benz 车辆，按照最高安全与舒适标准维护。",
    about_standard3_title: "瑞士式可靠",
    about_standard3_text:
      "准时接送、清晰沟通、值得信赖的服务。",

    services_title: "我们的服务",
    services_sub:
      "为您量身定制的豪华专车与机场接送服务。",
    service1_title: "苏黎世机场接送",
    service1_text:
      "提供可靠、准时的苏黎世机场接送服务，可选航班监控与接机服务。",
    service2_title: "点对点接送",
    service2_text:
      "在瑞士各城市、酒店、办公室与活动地点之间提供舒适接送。",
    service3_title: "按小时专车",
    service3_text:
      "按小时预订私人司机，适用于会议与活动。",
    service4_title: "商务出行",
    service4_text:
      "为高管与企业客户提供低调、专业的交通服务。",
    service5_title: "长途行程",
    service5_text:
      "在瑞士及周边国家提供舒适的长途出行服务。",
    service6_title: "活动与 VIP 服务",
    service6_text:
      "为活动、会议与 VIP 嘉宾提供豪华交通。",

    fleet_title: "我们的车队",
    fleet_sub:
      "精心挑选的 Mercedes‑Benz 车辆，适用于各种行程。",
    fleet1_title: "商务级",
    fleet1_sub: "Mercedes‑Benz E‑Class 或同级。",
    fleet1_text:
      "适合机场接送与城市出行，兼具舒适与风格。",
    fleet2_title: "商务厢型车",
    fleet2_sub: "Mercedes‑Benz V‑Class。",
    fleet2_text:
      "非常适合家庭、团队与额外行李。",
    fleet3_title: "头等舱",
    fleet3_sub: "Mercedes‑Benz S‑Class。",
    fleet3_text:
      "为 VIP 与高管提供顶级豪华出行体验。",

    pricing_title: "价格",
    pricing_sub:
      "苏黎世机场接送与专车服务的透明豪华定价。",
    price1_title: "商务级",
    price1_route: "苏黎世机场 → 市中心",
    price1_text:
      "舒适轿车，可容纳最多 3 名乘客与 2 件行李。",
    price2_title: "商务厢型车",
    price2_route: "苏黎世机场 → 市中心",
    price2_text:
      "宽敞厢型车，可容纳最多 6 名乘客与行李。",
    price3_title: "头等舱",
    price3_route: "苏黎世机场 → 市中心",
    price3_text:
      "为 VIP 与高管提供极致豪华体验。",
    pricing_long_title: "按小时 & 长途行程",
    pricing_long_text:
      "按小时预订与长途行程的价格取决于距离、时长与车辆等级。",
    pricing_btn: "获取报价",

    contact_title: "联系我们",
    contact_sub:
      "发送您的需求，我们将为您提供定制报价。",
    contact_name_label: "姓名",
    contact_name_placeholder: "您的全名",
    contact_email_label: "电子邮箱",
    contact_email_placeholder: "您的电子邮箱地址",
    contact_phone_label: "电话",
    contact_phone_placeholder: "您的电话号码",
    contact_service_label: "服务类型",
    contact_service1: "苏黎世机场接送",
    contact_service2: "点对点接送",
    contact_service3: "按小时专车",
    contact_service4: "长途行程",
    contact_service5: "其他",
    contact_message_label: "留言",
    contact_message_placeholder:
      "请填写路线、日期、时间及任何特殊需求。",
    contact_btn: "发送请求",
    contact_details_title: "公司信息",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  },

  // ---------------- JAPANESE ----------------
  ja: {
    nav_home: "ホーム",
    nav_about: "会社情報",
    nav_services: "サービス",
    nav_fleet: "車両",
    nav_pricing: "料金",
    nav_contact: "お問い合わせ",

    hero_title:
      "チューリッヒ空港送迎 & 専属ドライバーサービス",
    hero_sub:
      "スイス全土で提供する高級車とプロドライバーによるプライベート送迎。",
    hero_btn: "料金を見る",

    about_title: "HelvetiaRide について",
    about_sub:
      "チューリッヒを拠点とする高級送迎・空港トランスファーサービス。",
    about_who_title: "私たちについて",
    about_who_text:
      "HelvetiaRide は、スイスにおける空港送迎と専属ドライバーサービスに新たな基準となる快適さ・信頼性・プロフェッショナリズムを提供するために生まれました。",
    about_mission_title: "私たちのミッション",
    about_mission_text:
      "私たちのミッションはシンプルです。安全で時間厳守、そしてラグジュアリーな移動を、パーソナルなサービスとともに提供することです。",
    about_standards_title: "私たちの基準",
    about_standard1_title: "プロフェッショナルドライバー",
    about_standard1_text:
      "ビジネスや VIP のお客様のニーズを理解した、経験豊富で信頼できるドライバー。",
    about_standard2_title: "高級車両",
    about_standard2_text:
      "最高水準の安全性と快適性でメンテナンスされた最新の Mercedes‑Benz 車両。",
    about_standard3_title: "スイスの信頼性",
    about_standard3_text:
      "時間通りのお迎え、明確なコミュニケーション、信頼できるサービス。",

    services_title: "サービス内容",
    services_sub:
      "お客様のニーズに合わせた高級送迎・空港トランスファーサービス。",
    service1_title: "チューリッヒ空港送迎",
    service1_text:
      "フライト状況のモニタリングと、リクエストに応じた Meet & Greet を含む、信頼できる空港送迎。",
    service2_title: "ポイント・トゥ・ポイント送迎",
    service2_text:
      "スイス各地の都市、ホテル、オフィス、イベント会場間の快適な移動。",
    service3_title: "時間制チャーター",
    service3_text:
      "会議やイベント向けに、時間単位で専属ドライバーを手配。",
    service4_title: "ビジネス移動",
    service4_text:
      "エグゼクティブや企業ゲスト向けの、控えめでプロフェッショナルな送迎。",
    service5_title: "長距離移動",
    service5_text:
      "スイス国内および近隣諸国への快適な長距離移動。",
    service6_title: "イベント & VIP サービス",
    service6_text:
      "イベント、カンファレンス、VIP ゲスト向けのプレミアム送迎。",

    fleet_title: "車両ラインナップ",
    fleet_sub:
      "あらゆるシーンに対応する、厳選された Mercedes‑Benz 車両。",
    fleet1_title: "ビジネスクラス",
    fleet1_sub: "Mercedes‑Benz E‑Class など。",
    fleet1_text:
      "空港送迎や市内移動に最適な快適性とスタイル。",
    fleet2_title: "ビジネスバン",
    fleet2_sub: "Mercedes‑Benz V‑Class。",
    fleet2_text:
      "ご家族やグループ、荷物が多いお客様に最適。",
    fleet3_title: "ファーストクラス",
    fleet3_sub: "Mercedes‑Benz S‑Class。",
    fleet3_text:
      "VIP やエグゼクティブ向けの最高級ラグジュアリー体験。",

    pricing_title: "料金",
    pricing_sub:
      "チューリッヒ空港送迎および専属ドライバーサービスの透明なプレミアム料金。",
    price1_title: "ビジネスクラス",
    price1_route: "チューリッヒ空港 → 市内中心部",
    price1_text:
      "最大 3 名様と 2 個のスーツケースに対応する快適なセダン。",
    price2_title: "ビジネスバン",
    price2_route: "チューリッヒ空港 → 市内中心部",
    price2_text:
      "最大 6 名様と荷物に対応する広々としたバン。",
    price3_title: "ファーストクラス",
    price3_route: "チューリッヒ空港 → 市内中心部",
    price3_text:
      "VIP ゲストやエグゼクティブ向けの究極のラグジュアリー。",
    pricing_long_title: "時間制 & 長距離",
    pricing_long_text:
      "時間制チャーターや長距離移動の料金は、距離・時間・車両クラスによって決まります。",
    pricing_btn: "見積もりを依頼",

    contact_title: "お問い合わせ",
    contact_sub:
      "ご希望の内容をお送りいただければ、最適なプランをご提案いたします。",
    contact_name_label: "お名前",
    contact_name_placeholder: "フルネームをご入力ください",
    contact_email_label: "メールアドレス",
    contact_email_placeholder: "メールアドレスをご入力ください",
    contact_phone_label: "電話番号",
    contact_phone_placeholder: "電話番号をご入力ください",
    contact_service_label: "サービス種別",
    contact_service1: "チューリッヒ空港送迎",
    contact_service2: "ポイント・トゥ・ポイント送迎",
    contact_service3: "時間制チャーター",
    contact_service4: "長距離移動",
    contact_service5: "その他",
    contact_message_label: "メッセージ",
    contact_message_placeholder:
      "ルート、日時、特別なご要望などをご記入ください。",
    contact_btn: "送信",
    contact_details_title: "事業情報",
    contact_call_label: "Call/WhatsApp:",
    contact_email_label2: "Email:"
  }

};
