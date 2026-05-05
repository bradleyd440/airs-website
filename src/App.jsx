import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  FileText,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  X,
} from "lucide-react";

import originalHeroImage from "./assets/original-refugees-group.jpg";
import familyImage from "./assets/airs-family.jpg";
import officeImage from "./assets/airs-office.jpg";
import donationsImage from "./assets/airs-donations.jpg";
import airsLogo from "./assets/airs-logo.png";

const languages = ["English", "Spanish", "Arabic", "Dari", "Pashto", "Ukrainian", "Swahili", "French", "Kinyarwanda"];
const languageDirections = { Arabic: "rtl", Dari: "rtl", Pashto: "rtl" };
const languageCodes = { English: "en", Spanish: "es", Arabic: "ar", Dari: "fa-AF", Pashto: "ps", Ukrainian: "uk", Swahili: "sw", French: "fr", Kinyarwanda: "rw" };
const sectionIds = ["home", "about", "services", "get-help", "donate", "volunteer", "events", "contact"];
const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=10240+N+31st+Ave+Suite+112+Phoenix+AZ+85051";
const phoneHref = "tel:+16029441821";
const emailHref = "mailto:info@airsaz.org";

const languageNames = {
  English: { English: "English", Spanish: "Spanish", Arabic: "Arabic", Dari: "Dari", Pashto: "Pashto", Ukrainian: "Ukrainian", Swahili: "Swahili", French: "French", Kinyarwanda: "Kinyarwanda" },
  Spanish: { English: "Inglés", Spanish: "Español", Arabic: "Árabe", Dari: "Dari", Pashto: "Pastún", Ukrainian: "Ucraniano", Swahili: "Suajili", French: "Francés", Kinyarwanda: "Kinyarwanda" },
  Arabic: { English: "الإنجليزية", Spanish: "الإسبانية", Arabic: "العربية", Dari: "الدَرية", Pashto: "البشتوية", Ukrainian: "الأوكرانية", Swahili: "السواحيلية", French: "الفرنسية", Kinyarwanda: "الكينيارواندا" },
  Dari: { English: "انگلیسی", Spanish: "اسپانیایی", Arabic: "عربی", Dari: "دری", Pashto: "پشتو", Ukrainian: "اوکراینی", Swahili: "سواحیلی", French: "فرانسوی", Kinyarwanda: "کینیارواندا" },
  Pashto: { English: "انګلیسي", Spanish: "هسپانوي", Arabic: "عربي", Dari: "دري", Pashto: "پښتو", Ukrainian: "اوکرایني", Swahili: "سواحلي", French: "فرانسوي", Kinyarwanda: "کینیارواندا" },
  Ukrainian: { English: "Англійська", Spanish: "Іспанська", Arabic: "Арабська", Dari: "Дарі", Pashto: "Пушту", Ukrainian: "Українська", Swahili: "Суахілі", French: "Французька", Kinyarwanda: "Кіньяруанда" },
  Swahili: { English: "Kiingereza", Spanish: "Kihispania", Arabic: "Kiarabu", Dari: "Kidarí", Pashto: "Kipashto", Ukrainian: "Kiukraini", Swahili: "Kiswahili", French: "Kifaransa", Kinyarwanda: "Kinyarwanda" },
  French: { English: "Anglais", Spanish: "Espagnol", Arabic: "Arabe", Dari: "Dari", Pashto: "Pachto", Ukrainian: "Ukrainien", Swahili: "Swahili", French: "Français", Kinyarwanda: "Kinyarwanda" },
  Kinyarwanda: { English: "Icyongereza", Spanish: "Icyesipanyoli", Arabic: "Icyarabu", Dari: "Ikidari", Pashto: "Igipasito", Ukrainian: "Ikinyayukereni", Swahili: "Igiswahili", French: "Igifaransa", Kinyarwanda: "Ikinyarwanda" },
};

const translations = {
  English: {
    siteName: "AIRS",
    siteFullName: "Arizona Immigrant & Refugee Services",
    nav: ["Home", "About", "Services", "Get Help", "Donate", "Volunteer", "Events", "Contact"],
    donateButton: "Donate",
    languageLabel: "Select language",
    heroBadge: "Refugee and immigrant services in Maricopa County",
    heroTitle: "Supporting refugees and immigrants from arrival to self-sufficiency.",
    heroText: "AIRS provides social, educational, and resettlement services for refugees and immigrants coming to Arizona, helping families transition successfully into community life.",
    getHelpButton: "Get Help",
    volunteerButton: "Volunteer With Us",
    statYears: "Founded in 1989",
    statResettled: "1,910 resettled",
    statLanguages: "Services + referrals",
    aboutLabel: "Who We Are",
    aboutTitle: "AIRS has served Phoenix and Maricopa County communities for decades.",
    aboutText1: "Arizona Immigrant and Refugee Services is a 501(c)(3) nonprofit organization founded in 1989 to provide social, economic, and educational services to inner-city residents of Phoenix. In 2001, AIRS began resettling refugees, including the Kakuma Youth, also known as the Lost Boys, among the agency’s first arrivals.",
    aboutText2: "Since 2001, AIRS has resettled 1,910 refugees and immigrants in Maricopa County. AIRS programs provide recently arrived refugees and legal immigrants with housing, food, clothing, translation as needed, English language instruction, job training, employment assistance, immigration services, referrals, and other support.",
    aboutBadges: ["501(c)(3) nonprofit", "Founded in 1989", "Resettlement since 2001"],
    servicesLabel: "Services",
    servicesTitle: "Practical support for resettlement, immigration, employment, education, and daily life.",
    servicesText: "AIRS connects clients with direct services, walk-in support, monthly classes, community referrals, and help navigating life in Arizona.",
    services: [
      { title: "Resettlement Support", text: "Support for recently arrived refugees and immigrants, including housing, food, clothing, referrals, and help rebuilding stability." },
      { title: "Employment Services", text: "Job training, employment assistance, workplace preparation, and support connecting clients with local opportunities." },
      { title: "Immigration Services", text: "Walk-in immigration support for relative petitions, citizenship, permanent residency, replacement documents, protected status, and family reunification." },
      { title: "Classes & Education", text: "Monthly classes covering financial topics, police training, hygiene and health, and public transportation orientation." },
      { title: "Transportation Help", text: "Support connecting clients to medical appointments, services, donations, public transportation, and community resources." },
      { title: "SIV Family Support", text: "Walk-in services for Special Immigrant Visa holders including Reception & Placement, Matching Grant, Preferred Communities, Employment Services, and State RRP Benefits." },
    ],
    requestHelp: "Request help",
    getHelpLabel: "Get Help",
    getHelpTitle: "Contact AIRS or visit during service hours.",
    getHelpText: "Use this form to contact AIRS about services, support, or general assistance. A team member will follow up using the contact information provided.",
    officeInfo: "Office Information",
    location: "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    phonePlaceholder: "(602) 944-1821",
    emailPlaceholder: "info@airsaz.org",
    fax: "Fax: (602) 944-1860",
    officeHours: "Monday–Friday, 9:00 AM–4:30 PM",
    holidayNote: "Office closed on federal holidays.",
    fullName: "Full Name",
    fullNamePlaceholder: "Your name",
    contactMethod: "Phone or Email",
    contactPlaceholder: "Best contact",
    preferredLanguage: "Preferred Language",
    serviceNeeded: "Service Needed",
    serviceOptions: ["Immigration support", "Housing or resettlement support", "Employment support", "Classes or education", "Donation or volunteer question", "Other"],
    message: "Message",
    messagePlaceholder: "Tell us what you need help with",
    consent: "I agree that AIRS may contact me about my request.",
    submitRequest: "Submit Request",
    officialInfoLabel: "Official AIRS information",
    officialInfoTitle: "Core facts carried over from the current AIRS website.",
    infoCards: [
      { title: "Mission", text: "AIRS provides social and educational services to meet the needs of refugees and immigrants coming to Arizona by ensuring a successful transition from arrival to self-sufficiency." },
      { title: "ECDC Connection", text: "AIRS is a subsidiary of ECDC and conducts activities with support from federal, state, community, and individual partners." },
      { title: "Office Hours", text: "Monday through Friday, 9:00 AM–4:30 PM. The office is closed on federal holidays." },
    ],
    programDetailsLabel: "Program Details",
    programDetailsTitle: "Walk-in services, monthly classes, and SIV support.",
    immigrationTitle: "Immigration Specialist",
    immigrationIntro: "Walk-in hours are Wednesday and Friday from 11:00 AM–2:00 PM. Please call to make an appointment outside walk-in hours.",
    immigrationServices: ["Relative Petitions", "Citizenship", "Permanent Residency", "Replacement of lost or stolen documents", "Special Protected Status / Deferred Enforced Departure", "Family Reunification"],
    classesTitle: "Monthly Class Schedule",
    monthlyClasses: [
      "First Tuesday @ 11:30 AM — Financial Class with Wells Fargo",
      "Second Tuesday @ 11:30 AM — Police Training with Phoenix PD",
      "Third Tuesday @ 11:30 AM — Hygiene & Health Class",
      "Last Tuesday @ 11:30 AM — Bus and Light-rail Training with Phoenix Valley Metro",
    ],
    sivTitle: "Walk-In SIV Services",
    sivServices: ["Reception & Placement", "Matching Grant", "Preferred Communities", "Employment Services", "State RRP Benefits"],
    donateTitle: "Support AIRS resettlement services.",
    donateText: "Small household items, soft goods, and gift cards can be dropped off at AIRS during office hours. Please call to make an appointment for furniture and large item drop-off.",
    donateNow: "Donate Now",
    donationCategories: "Items AIRS accepts",
    donationItems: ["Gift cards for professional clothing, groceries, and thrift stores", "Clean clothing", "Deodorant, soap, shampoo, toothpaste, toilet paper, diapers, and wipes", "Bus passes, safe bikes, bike locks and lights, helmets, car seats, strollers, and wheelchairs", "Dish soap, laundry soap, all-purpose cleaner, and paper towels", "Backpacks, notebooks, pencils, folders, crayons, scissors, glue, and erasers", "Twin sheet sets, twin blankets, and standard bed pillows", "Laptops, desktops, smartphones, and tablets"],
    donationNote: "Gift cards may be mailed to 10240 N 31st Ave #112, Phoenix, AZ 85051. Include your name, address, and gift amount for receipt purposes. For donation receipts, email info@airsaz.org.",
    volunteerLabel: "Volunteer",
    volunteerTitle: "Join the AIRS volunteer family.",
    volunteerText: "AIRS volunteers help clients with transportation, language support, ESL teaching, events, technical support, cultural orientation, donation pickup, advocacy, mentoring, and community outreach.",
    applyVolunteer: "Apply to Volunteer",
    volunteerProcessTitle: "Volunteer process",
    volunteerProcess: ["Make sure you are ready to begin volunteer work with AIRS.", "Turn in all volunteer paperwork.", "Wait for an email from an AIRS team member to schedule orientation.", "Most volunteer jobs occur Monday–Friday, 9:00 AM–5:00 PM, at or near the North Phoenix office."],
    volunteerRoles: ["Transportation to and from medical appointments", "Translation and interpretation", "Teaching English as a second language", "Fundraisers and events", "Office technical support", "Cultural orientation support", "Donation pickup and delivery", "Community advocacy", "Mentoring a refugee family", "Community outreach"],
    eventsLabel: "Events & Classes",
    eventsTitle: "Monthly education and orientation opportunities.",
    viewEvents: "Contact AIRS for dates",
    events: [
      { title: "Financial Class", date: "First Tuesday @ 11:30 AM", text: "Financial education session with Wells Fargo." },
      { title: "Police Training", date: "Second Tuesday @ 11:30 AM", text: "Community safety and police training with Phoenix PD." },
      { title: "Transit Training", date: "Last Tuesday @ 11:30 AM", text: "Bus and Light-rail Training with Phoenix Valley Metro." },
    ],
    footerText: "AIRS helps refugee and immigrant families access support, resources, and community connections across Arizona.",
    footerQuickLinks: "Quick Links",
    footerServicesTitle: "Services",
    footerGetInvolved: "Get Involved",
    footerLegalText: "AIRS is a 501(c)(3) nonprofit organization. Verify final copy, privacy policy, donation links, and nonprofit details with AIRS before launch.",
    footerCopyright: "© 2026 AIRS. All rights reserved.",
    addPhone: "(602) 944-1821",
    addEmail: "info@airsaz.org",
  },
};

const localizedContent = {
  "Spanish": {
    "siteFullName": "Servicios para Inmigrantes y Refugiados de Arizona",
    "nav": [
      "Inicio",
      "Acerca de",
      "Servicios",
      "Obtener Ayuda",
      "Donar",
      "Voluntariado",
      "Eventos",
      "Contacto"
    ],
    "donateButton": "Donar",
    "languageLabel": "Seleccionar idioma",
    "heroBadge": "Servicios para refugiados e inmigrantes en el Condado de Maricopa",
    "heroTitle": "Apoyando a refugiados e inmigrantes desde su llegada hasta la autosuficiencia.",
    "heroText": "AIRS ofrece servicios sociales, educativos y de reasentamiento para refugiados e inmigrantes que llegan a Arizona, ayudando a las familias a integrarse con éxito a la vida comunitaria.",
    "getHelpButton": "Obtener ayuda",
    "volunteerButton": "Ser voluntario",
    "statYears": "Fundada en 1989",
    "statResettled": "1,910 reasentados",
    "statLanguages": "Servicios y referencias",
    "aboutLabel": "Quiénes somos",
    "aboutTitle": "AIRS ha servido a las comunidades de Phoenix y el Condado de Maricopa durante décadas.",
    "aboutText1": "Arizona Immigrant and Refugee Services es una organización sin fines de lucro 501(c)(3) fundada en 1989 para brindar servicios sociales, económicos y educativos a residentes del centro urbano de Phoenix. En 2001, AIRS comenzó a reasentar refugiados, incluyendo a los Jóvenes de Kakuma, también conocidos como los Lost Boys, entre sus primeras llegadas.",
    "aboutText2": "Desde 2001, AIRS ha reasentado a 1,910 refugiados e inmigrantes en el Condado de Maricopa. Los programas de AIRS proporcionan vivienda, alimentos, ropa, traducción según sea necesario, enseñanza de inglés, capacitación laboral, asistencia de empleo, servicios de inmigración, referencias y otros apoyos.",
    "aboutBadges": [
      "Organización 501(c)(3)",
      "Fundada en 1989",
      "Reasentamiento desde 2001"
    ],
    "servicesLabel": "Servicios",
    "servicesTitle": "Apoyo práctico para reasentamiento, inmigración, empleo, educación y vida diaria.",
    "servicesText": "AIRS conecta a los clientes con servicios directos, apoyo sin cita, clases mensuales, referencias comunitarias y ayuda para navegar la vida en Arizona.",
    "services": [
      {
        "title": "Apoyo de reasentamiento",
        "text": "Apoyo para familias refugiadas e inmigrantes recién llegadas, incluyendo vivienda, alimentos, ropa, referencias y ayuda para reconstruir estabilidad."
      },
      {
        "title": "Servicios de empleo",
        "text": "Capacitación laboral, asistencia de empleo, preparación para el trabajo y apoyo para conectar a clientes con oportunidades locales."
      },
      {
        "title": "Servicios de inmigración",
        "text": "Apoyo migratorio sin cita para peticiones familiares, ciudadanía, residencia permanente, documentos de reemplazo, estatus protegido y reunificación familiar."
      },
      {
        "title": "Clases y educación",
        "text": "Clases mensuales sobre finanzas, capacitación policial, higiene y salud, y orientación de transporte público."
      },
      {
        "title": "Ayuda de transporte",
        "text": "Apoyo para conectar a clientes con citas médicas, servicios, donaciones, transporte público y recursos comunitarios."
      },
      {
        "title": "Apoyo a familias SIV",
        "text": "Servicios sin cita para titulares de Visa Especial de Inmigrante, incluyendo Reception & Placement, Matching Grant, Preferred Communities, Employment Services y beneficios estatales RRP."
      }
    ],
    "requestHelp": "Solicitar ayuda",
    "getHelpLabel": "Obtener ayuda",
    "getHelpTitle": "Contacte a AIRS o visite durante el horario de servicio.",
    "getHelpText": "Use este formulario para contactar a AIRS sobre servicios, apoyo o asistencia general. Un miembro del equipo hará seguimiento usando la información de contacto proporcionada.",
    "officeInfo": "Información de oficina",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax: (602) 944-1860",
    "officeHours": "Lunes a viernes, 9:00 AM–4:30 PM",
    "holidayNote": "La oficina cierra en días feriados federales.",
    "fullName": "Nombre completo",
    "fullNamePlaceholder": "Su nombre",
    "contactMethod": "Teléfono o correo electrónico",
    "contactPlaceholder": "Mejor contacto",
    "preferredLanguage": "Idioma preferido",
    "serviceNeeded": "Servicio necesario",
    "serviceOptions": [
      "Apoyo migratorio",
      "Apoyo de vivienda o reasentamiento",
      "Apoyo de empleo",
      "Clases o educación",
      "Pregunta sobre donaciones o voluntariado",
      "Otro"
    ],
    "message": "Mensaje",
    "messagePlaceholder": "Díganos con qué necesita ayuda",
    "consent": "Acepto que AIRS pueda contactarme sobre mi solicitud.",
    "submitRequest": "Enviar solicitud",
    "officialInfoLabel": "Información oficial de AIRS",
    "officialInfoTitle": "Datos principales conservados del sitio actual de AIRS.",
    "infoCards": [
      {
        "title": "Misión",
        "text": "AIRS proporciona servicios sociales y educativos para satisfacer las necesidades de refugiados e inmigrantes que llegan a Arizona, asegurando una transición exitosa desde la llegada hasta la autosuficiencia."
      },
      {
        "title": "Conexión con ECDC",
        "text": "AIRS es una subsidiaria de ECDC y realiza actividades con apoyo de socios federales, estatales, comunitarios e individuales."
      },
      {
        "title": "Horario de oficina",
        "text": "Lunes a viernes, 9:00 AM–4:30 PM. La oficina cierra en días feriados federales."
      }
    ],
    "programDetailsLabel": "Detalles del programa",
    "programDetailsTitle": "Servicios sin cita, clases mensuales y apoyo SIV.",
    "immigrationTitle": "Especialista de inmigración",
    "immigrationIntro": "El horario sin cita es miércoles y viernes de 11:00 AM a 2:00 PM. Llame para programar una cita fuera de ese horario.",
    "immigrationServices": [
      "Peticiones de familiares",
      "Ciudadanía",
      "Residencia permanente",
      "Reemplazo de documentos perdidos o robados",
      "Estatus protegido especial / salida forzada diferida",
      "Reunificación familiar"
    ],
    "classesTitle": "Horario mensual de clases",
    "monthlyClasses": [
      "Primer martes @ 11:30 AM — Clase financiera con Wells Fargo",
      "Segundo martes @ 11:30 AM — Capacitación policial con Phoenix PD",
      "Tercer martes @ 11:30 AM — Clase de higiene y salud",
      "Último martes @ 11:30 AM — Capacitación de autobús y tren ligero con Phoenix Valley Metro"
    ],
    "sivTitle": "Servicios SIV sin cita",
    "sivServices": [
      "Recepción y colocación",
      "Matching Grant",
      "Preferred Communities",
      "Servicios de empleo",
      "Beneficios estatales RRP"
    ],
    "donateTitle": "Apoye los servicios de reasentamiento de AIRS.",
    "donateText": "Se pueden entregar artículos pequeños del hogar, textiles y tarjetas de regalo en AIRS durante el horario de oficina. Llame para programar una cita para muebles y artículos grandes.",
    "donateNow": "Donar ahora",
    "donationCategories": "Artículos que AIRS acepta",
    "donationItems": [
      "Tarjetas de regalo para ropa profesional, comestibles y tiendas de segunda mano",
      "Ropa limpia",
      "Desodorante, jabón, champú, pasta dental, papel higiénico, pañales y toallitas",
      "Pases de autobús, bicicletas seguras, candados y luces, cascos, asientos de auto, carriolas y sillas de ruedas",
      "Jabón para platos, detergente, limpiador multiuso y toallas de papel",
      "Mochilas, cuadernos, lápices, carpetas, crayones, tijeras, pegamento y borradores",
      "Juegos de sábanas individuales, cobijas individuales y almohadas estándar",
      "Laptops, computadoras de escritorio, teléfonos inteligentes y tabletas"
    ],
    "donationNote": "Las tarjetas de regalo pueden enviarse por correo a 10240 N 31st Ave #112, Phoenix, AZ 85051. Incluya su nombre, dirección y monto del regalo para fines de recibo. Para recibos de donación, escriba a info@airsaz.org.",
    "volunteerLabel": "Voluntariado",
    "volunteerTitle": "Únase a la familia de voluntarios de AIRS.",
    "volunteerText": "Los voluntarios de AIRS ayudan con transporte, apoyo lingüístico, enseñanza de ESL, eventos, soporte técnico, orientación cultural, recolección de donaciones, defensa, mentoría y alcance comunitario.",
    "applyVolunteer": "Aplicar como voluntario",
    "volunteerProcessTitle": "Proceso de voluntariado",
    "volunteerProcess": [
      "Asegúrese de estar listo para comenzar el voluntariado con AIRS.",
      "Entregue toda la documentación de voluntariado.",
      "Espere un correo de un miembro del equipo de AIRS para programar la orientación.",
      "La mayoría de los trabajos de voluntariado ocurren de lunes a viernes, 9:00 AM–5:00 PM, en o cerca de la oficina del norte de Phoenix."
    ],
    "volunteerRoles": [
      "Transporte hacia y desde citas médicas",
      "Traducción e interpretación",
      "Enseñanza de inglés como segundo idioma",
      "Recaudaciones y eventos",
      "Soporte técnico de oficina",
      "Apoyo de orientación cultural",
      "Recogida y entrega de donaciones",
      "Defensa comunitaria",
      "Mentoría a una familia refugiada",
      "Alcance comunitario"
    ],
    "eventsLabel": "Eventos y clases",
    "eventsTitle": "Oportunidades mensuales de educación y orientación.",
    "viewEvents": "Contacte a AIRS para fechas",
    "events": [
      {
        "title": "Clase financiera",
        "date": "Primer martes @ 11:30 AM",
        "text": "Sesión de educación financiera con Wells Fargo."
      },
      {
        "title": "Capacitación policial",
        "date": "Segundo martes @ 11:30 AM",
        "text": "Seguridad comunitaria y capacitación policial con Phoenix PD."
      },
      {
        "title": "Capacitación de transporte",
        "date": "Último martes @ 11:30 AM",
        "text": "Capacitación de autobús y tren ligero con Phoenix Valley Metro."
      }
    ],
    "footerText": "AIRS ayuda a familias refugiadas e inmigrantes a acceder a apoyo, recursos y conexiones comunitarias en Arizona.",
    "footerQuickLinks": "Enlaces rápidos",
    "footerServicesTitle": "Servicios",
    "footerGetInvolved": "Participar",
    "footerLegalText": "AIRS es una organización sin fines de lucro 501(c)(3). Verifique el texto final, política de privacidad, enlaces de donación y detalles sin fines de lucro con AIRS antes del lanzamiento.",
    "footerCopyright": "© 2026 AIRS. Todos los derechos reservados.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  },
  "French": {
    "siteFullName": "Services aux immigrants et réfugiés de l’Arizona",
    "nav": [
      "Accueil",
      "À propos",
      "Services",
      "Obtenir de l’aide",
      "Faire un don",
      "Bénévolat",
      "Événements",
      "Contact"
    ],
    "donateButton": "Faire un don",
    "languageLabel": "Choisir la langue",
    "heroBadge": "Services aux réfugiés et immigrants dans le comté de Maricopa",
    "heroTitle": "Soutenir les réfugiés et les immigrants de l’arrivée à l’autonomie.",
    "heroText": "AIRS fournit des services sociaux, éducatifs et de réinstallation aux réfugiés et immigrants arrivant en Arizona, aidant les familles à réussir leur transition vers la vie communautaire.",
    "getHelpButton": "Obtenir de l’aide",
    "volunteerButton": "Devenir bénévole",
    "statYears": "Fondée en 1989",
    "statResettled": "1 910 réinstallés",
    "statLanguages": "Services + orientations",
    "aboutLabel": "Qui nous sommes",
    "aboutTitle": "AIRS sert les communautés de Phoenix et du comté de Maricopa depuis des décennies.",
    "aboutText1": "Arizona Immigrant and Refugee Services est une organisation à but non lucratif 501(c)(3), fondée en 1989 pour fournir des services sociaux, économiques et éducatifs aux résidents du centre-ville de Phoenix. En 2001, AIRS a commencé à réinstaller des réfugiés, dont les jeunes de Kakuma, aussi appelés les Lost Boys, parmi les premières arrivées de l’agence.",
    "aboutText2": "Depuis 2001, AIRS a réinstallé 1 910 réfugiés et immigrants dans le comté de Maricopa. Les programmes d’AIRS offrent logement, nourriture, vêtements, traduction au besoin, cours d’anglais, formation professionnelle, aide à l’emploi, services d’immigration, orientations et autres soutiens.",
    "aboutBadges": [
      "Organisation 501(c)(3)",
      "Fondée en 1989",
      "Réinstallation depuis 2001"
    ],
    "servicesLabel": "Services",
    "servicesTitle": "Soutien pratique pour la réinstallation, l’immigration, l’emploi, l’éducation et la vie quotidienne.",
    "servicesText": "AIRS relie les clients aux services directs, au soutien sans rendez-vous, aux cours mensuels, aux orientations communautaires et à l’aide pour s’adapter à la vie en Arizona.",
    "services": [
      {
        "title": "Soutien à la réinstallation",
        "text": "Soutien aux familles réfugiées et immigrantes récemment arrivées, y compris logement, nourriture, vêtements, orientations et aide à reconstruire la stabilité."
      },
      {
        "title": "Services d’emploi",
        "text": "Formation professionnelle, aide à l’emploi, préparation au travail et soutien pour relier les clients aux opportunités locales."
      },
      {
        "title": "Services d’immigration",
        "text": "Soutien d’immigration sans rendez-vous pour les pétitions familiales, la citoyenneté, la résidence permanente, les documents de remplacement, le statut protégé et la réunification familiale."
      },
      {
        "title": "Cours et éducation",
        "text": "Cours mensuels sur les finances, la formation avec la police, l’hygiène et la santé, et l’orientation au transport public."
      },
      {
        "title": "Aide au transport",
        "text": "Soutien pour relier les clients aux rendez-vous médicaux, services, dons, transport public et ressources communautaires."
      },
      {
        "title": "Soutien aux familles SIV",
        "text": "Services sans rendez-vous pour les titulaires de visa spécial d’immigrant, y compris Reception & Placement, Matching Grant, Preferred Communities, Employment Services et prestations RRP de l’État."
      }
    ],
    "requestHelp": "Demander de l’aide",
    "getHelpLabel": "Obtenir de l’aide",
    "getHelpTitle": "Contactez AIRS ou venez pendant les heures de service.",
    "getHelpText": "Utilisez ce formulaire pour contacter AIRS au sujet des services, du soutien ou d’une aide générale. Un membre de l’équipe vous répondra avec les coordonnées fournies.",
    "officeInfo": "Informations du bureau",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax : (602) 944-1860",
    "officeHours": "Lundi–vendredi, 9:00 AM–4:30 PM",
    "holidayNote": "Bureau fermé les jours fériés fédéraux.",
    "fullName": "Nom complet",
    "fullNamePlaceholder": "Votre nom",
    "contactMethod": "Téléphone ou e-mail",
    "contactPlaceholder": "Meilleur contact",
    "preferredLanguage": "Langue préférée",
    "serviceNeeded": "Service demandé",
    "serviceOptions": [
      "Soutien en immigration",
      "Soutien au logement ou à la réinstallation",
      "Soutien à l’emploi",
      "Cours ou éducation",
      "Question sur les dons ou le bénévolat",
      "Autre"
    ],
    "message": "Message",
    "messagePlaceholder": "Dites-nous de quoi vous avez besoin",
    "consent": "J’accepte qu’AIRS me contacte au sujet de ma demande.",
    "submitRequest": "Envoyer la demande",
    "officialInfoLabel": "Informations officielles d’AIRS",
    "officialInfoTitle": "Faits principaux repris du site actuel d’AIRS.",
    "infoCards": [
      {
        "title": "Mission",
        "text": "AIRS fournit des services sociaux et éducatifs pour répondre aux besoins des réfugiés et immigrants arrivant en Arizona, en assurant une transition réussie de l’arrivée à l’autonomie."
      },
      {
        "title": "Lien avec ECDC",
        "text": "AIRS est une filiale d’ECDC et mène ses activités avec le soutien de partenaires fédéraux, étatiques, communautaires et individuels."
      },
      {
        "title": "Heures de bureau",
        "text": "Lundi à vendredi, 9:00 AM–4:30 PM. Le bureau est fermé les jours fériés fédéraux."
      }
    ],
    "programDetailsLabel": "Détails des programmes",
    "programDetailsTitle": "Services sans rendez-vous, cours mensuels et soutien SIV.",
    "immigrationTitle": "Spécialiste en immigration",
    "immigrationIntro": "Les heures sans rendez-vous sont mercredi et vendredi de 11:00 AM à 2:00 PM. Veuillez appeler pour prendre rendez-vous en dehors de ces heures.",
    "immigrationServices": [
      "Pétitions familiales",
      "Citoyenneté",
      "Résidence permanente",
      "Remplacement de documents perdus ou volés",
      "Statut protégé spécial / départ forcé différé",
      "Réunification familiale"
    ],
    "classesTitle": "Calendrier mensuel des cours",
    "monthlyClasses": [
      "Premier mardi @ 11:30 AM — Cours financier avec Wells Fargo",
      "Deuxième mardi @ 11:30 AM — Formation avec Phoenix PD",
      "Troisième mardi @ 11:30 AM — Cours d’hygiène et santé",
      "Dernier mardi @ 11:30 AM — Formation bus et métro léger avec Phoenix Valley Metro"
    ],
    "sivTitle": "Services SIV sans rendez-vous",
    "sivServices": [
      "Accueil et placement",
      "Matching Grant",
      "Preferred Communities",
      "Services d’emploi",
      "Prestations RRP de l’État"
    ],
    "donateTitle": "Soutenez les services de réinstallation d’AIRS.",
    "donateText": "Les petits articles ménagers, textiles et cartes-cadeaux peuvent être déposés chez AIRS pendant les heures de bureau. Veuillez appeler pour fixer un rendez-vous pour les meubles et gros articles.",
    "donateNow": "Faire un don maintenant",
    "donationCategories": "Articles acceptés par AIRS",
    "donationItems": [
      "Cartes-cadeaux pour vêtements professionnels, épicerie et friperies",
      "Vêtements propres",
      "Déodorant, savon, shampooing, dentifrice, papier toilette, couches et lingettes",
      "Pass de bus, vélos sûrs, antivols et lumières, casques, sièges auto, poussettes et fauteuils roulants",
      "Liquide vaisselle, lessive, nettoyant multi-usage et essuie-tout",
      "Sacs à dos, cahiers, crayons, dossiers, crayons de couleur, ciseaux, colle et gommes",
      "Draps twin, couvertures twin et oreillers standards",
      "Ordinateurs portables, ordinateurs de bureau, téléphones intelligents et tablettes"
    ],
    "donationNote": "Les cartes-cadeaux peuvent être envoyées à 10240 N 31st Ave #112, Phoenix, AZ 85051. Incluez votre nom, adresse et montant du don pour le reçu. Pour les reçus de don, écrivez à info@airsaz.org.",
    "volunteerLabel": "Bénévolat",
    "volunteerTitle": "Rejoignez la famille des bénévoles d’AIRS.",
    "volunteerText": "Les bénévoles d’AIRS aident au transport, au soutien linguistique, à l’enseignement ESL, aux événements, au soutien technique, à l’orientation culturelle, à la collecte de dons, à la défense, au mentorat et à la sensibilisation communautaire.",
    "applyVolunteer": "Postuler comme bénévole",
    "volunteerProcessTitle": "Processus bénévole",
    "volunteerProcess": [
      "Assurez-vous d’être prêt à commencer le bénévolat avec AIRS.",
      "Remettez tous les documents de bénévolat.",
      "Attendez un e-mail d’un membre de l’équipe AIRS pour planifier l’orientation.",
      "La plupart des activités bénévoles ont lieu du lundi au vendredi, 9:00 AM–5:00 PM, au bureau du nord de Phoenix ou à proximité."
    ],
    "volunteerRoles": [
      "Transport vers et depuis les rendez-vous médicaux",
      "Traduction et interprétation",
      "Enseignement de l’anglais comme langue seconde",
      "Collectes de fonds et événements",
      "Soutien technique au bureau",
      "Soutien à l’orientation culturelle",
      "Collecte et livraison de dons",
      "Plaidoyer communautaire",
      "Mentorat d’une famille réfugiée",
      "Sensibilisation communautaire"
    ],
    "eventsLabel": "Événements et cours",
    "eventsTitle": "Possibilités mensuelles d’éducation et d’orientation.",
    "viewEvents": "Contactez AIRS pour les dates",
    "events": [
      {
        "title": "Cours financier",
        "date": "Premier mardi @ 11:30 AM",
        "text": "Séance d’éducation financière avec Wells Fargo."
      },
      {
        "title": "Formation police",
        "date": "Deuxième mardi @ 11:30 AM",
        "text": "Formation sur la sécurité communautaire avec Phoenix PD."
      },
      {
        "title": "Formation transport",
        "date": "Dernier mardi @ 11:30 AM",
        "text": "Formation bus et métro léger avec Phoenix Valley Metro."
      }
    ],
    "footerText": "AIRS aide les familles réfugiées et immigrantes à accéder au soutien, aux ressources et aux liens communautaires en Arizona.",
    "footerQuickLinks": "Liens rapides",
    "footerServicesTitle": "Services",
    "footerGetInvolved": "Participer",
    "footerLegalText": "AIRS est une organisation à but non lucratif 501(c)(3). Vérifiez le texte final, la politique de confidentialité, les liens de don et les détails de l’organisation avec AIRS avant le lancement.",
    "footerCopyright": "© 2026 AIRS. Tous droits réservés.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  },
  "Swahili": {
    "siteFullName": "Huduma za Wahamiaji na Wakimbizi wa Arizona",
    "nav": [
      "Nyumbani",
      "Kuhusu",
      "Huduma",
      "Pata Msaada",
      "Changia",
      "Jitolee",
      "Matukio",
      "Mawasiliano"
    ],
    "donateButton": "Changia",
    "languageLabel": "Chagua lugha",
    "heroBadge": "Huduma kwa wakimbizi na wahamiaji katika Kaunti ya Maricopa",
    "heroTitle": "Kuwasaidia wakimbizi na wahamiaji kutoka kuwasili hadi kujitegemea.",
    "heroText": "AIRS hutoa huduma za kijamii, elimu na makazi mapya kwa wakimbizi na wahamiaji wanaokuja Arizona, kusaidia familia kuingia vizuri katika maisha ya jamii.",
    "getHelpButton": "Pata Msaada",
    "volunteerButton": "Jitolee Nasi",
    "statYears": "Ilianzishwa 1989",
    "statResettled": "1,910 wamepewa makazi mapya",
    "statLanguages": "Huduma + rufaa",
    "aboutLabel": "Sisi ni nani",
    "aboutTitle": "AIRS imehudumia jamii za Phoenix na Kaunti ya Maricopa kwa miongo kadhaa.",
    "aboutText1": "Arizona Immigrant and Refugee Services est une organisation à but non lucratif 501(c)(3), fondée en 1989 pour fournir des services sociaux, économiques et éducatifs aux résidents du centre-ville de Phoenix. En 2001, AIRS a commencé à réinstaller des réfugiés, dont les jeunes de Kakuma, aussi appelés les Lost Boys, parmi les premières arrivées de l’agence.",
    "aboutText2": "Depuis 2001, AIRS a réinstallé 1 910 réfugiés et immigrants dans le comté de Maricopa. Les programmes d’AIRS offrent logement, nourriture, vêtements, traduction au besoin, cours d’anglais, formation professionnelle, aide à l’emploi, services d’immigration, orientations et autres soutiens.",
    "aboutBadges": [
      "Shirika 501(c)(3)",
      "Ilianzishwa 1989",
      "Makazi mapya tangu 2001"
    ],
    "servicesLabel": "Huduma",
    "servicesTitle": "Soutien pratique pour la réinstallation, l’immigration, l’emploi, l’éducation et la vie quotidienne.",
    "servicesText": "AIRS relie les clients aux services directs, au soutien sans rendez-vous, aux cours mensuels, aux orientations communautaires et à l’aide pour s’adapter à la vie en Arizona.",
    "services": [
      {
        "title": "Soutien à la réinstallation",
        "text": "Soutien aux familles réfugiées et immigrantes récemment arrivées, y compris logement, nourriture, vêtements, orientations et aide à reconstruire la stabilité."
      },
      {
        "title": "Services d’emploi",
        "text": "Formation professionnelle, aide à l’emploi, préparation au travail et soutien pour relier les clients aux opportunités locales."
      },
      {
        "title": "Services d’immigration",
        "text": "Soutien d’immigration sans rendez-vous pour les pétitions familiales, la citoyenneté, la résidence permanente, les documents de remplacement, le statut protégé et la réunification familiale."
      },
      {
        "title": "Cours et éducation",
        "text": "Cours mensuels sur les finances, la formation avec la police, l’hygiène et la santé, et l’orientation au transport public."
      },
      {
        "title": "Aide au transport",
        "text": "Soutien pour relier les clients aux rendez-vous médicaux, services, dons, transport public et ressources communautaires."
      },
      {
        "title": "Soutien aux familles SIV",
        "text": "Services sans rendez-vous pour les titulaires de visa spécial d’immigrant, y compris Reception & Placement, Matching Grant, Preferred Communities, Employment Services et prestations RRP de l’État."
      }
    ],
    "requestHelp": "Omba msaada",
    "getHelpLabel": "Pata Msaada",
    "getHelpTitle": "Contactez AIRS ou venez pendant les heures de service.",
    "getHelpText": "Utilisez ce formulaire pour contacter AIRS au sujet des services, du soutien ou d’une aide générale. Un membre de l’équipe vous répondra avec les coordonnées fournies.",
    "officeInfo": "Taarifa za ofisi",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax : (602) 944-1860",
    "officeHours": "Jumatatu–Ijumaa, 9:00 AM–4:30 PM",
    "holidayNote": "Ofisi hufungwa siku za sikukuu za serikali kuu.",
    "fullName": "Jina kamili",
    "fullNamePlaceholder": "Jina lako",
    "contactMethod": "Simu au Barua pepe",
    "contactPlaceholder": "Mawasiliano bora",
    "preferredLanguage": "Lugha unayopendelea",
    "serviceNeeded": "Huduma inayohitajika",
    "serviceOptions": [
      "Msaada wa uhamiaji",
      "Msaada wa makazi au makazi mapya",
      "Msaada wa ajira",
      "Madarasa au elimu",
      "Swali la mchango au kujitolea",
      "Nyingine"
    ],
    "message": "Ujumbe",
    "messagePlaceholder": "Tuambie unahitaji msaada gani",
    "consent": "Nakubali kwamba AIRS inaweza kuwasiliana nami kuhusu ombi langu.",
    "submitRequest": "Tuma Ombi",
    "officialInfoLabel": "Informations officielles d’AIRS",
    "officialInfoTitle": "Faits principaux repris du site actuel d’AIRS.",
    "infoCards": [
      {
        "title": "Mission",
        "text": "AIRS fournit des services sociaux et éducatifs pour répondre aux besoins des réfugiés et immigrants arrivant en Arizona, en assurant une transition réussie de l’arrivée à l’autonomie."
      },
      {
        "title": "Lien avec ECDC",
        "text": "AIRS est une filiale d’ECDC et mène ses activités avec le soutien de partenaires fédéraux, étatiques, communautaires et individuels."
      },
      {
        "title": "Heures de bureau",
        "text": "Lundi à vendredi, 9:00 AM–4:30 PM. Le bureau est fermé les jours fériés fédéraux."
      }
    ],
    "programDetailsLabel": "Détails des programmes",
    "programDetailsTitle": "Services sans rendez-vous, cours mensuels et soutien SIV.",
    "immigrationTitle": "Spécialiste en immigration",
    "immigrationIntro": "Les heures sans rendez-vous sont mercredi et vendredi de 11:00 AM à 2:00 PM. Veuillez appeler pour prendre rendez-vous en dehors de ces heures.",
    "immigrationServices": [
      "Pétitions familiales",
      "Citoyenneté",
      "Résidence permanente",
      "Remplacement de documents perdus ou volés",
      "Statut protégé spécial / départ forcé différé",
      "Réunification familiale"
    ],
    "classesTitle": "Calendrier mensuel des cours",
    "monthlyClasses": [
      "Premier mardi @ 11:30 AM — Cours financier avec Wells Fargo",
      "Deuxième mardi @ 11:30 AM — Formation avec Phoenix PD",
      "Troisième mardi @ 11:30 AM — Cours d’hygiène et santé",
      "Dernier mardi @ 11:30 AM — Formation bus et métro léger avec Phoenix Valley Metro"
    ],
    "sivTitle": "Services SIV sans rendez-vous",
    "sivServices": [
      "Accueil et placement",
      "Matching Grant",
      "Preferred Communities",
      "Services d’emploi",
      "Prestations RRP de l’État"
    ],
    "donateTitle": "Soutenez les services de réinstallation d’AIRS.",
    "donateText": "Les petits articles ménagers, textiles et cartes-cadeaux peuvent être déposés chez AIRS pendant les heures de bureau. Veuillez appeler pour fixer un rendez-vous pour les meubles et gros articles.",
    "donateNow": "Changia Sasa",
    "donationCategories": "Articles acceptés par AIRS",
    "donationItems": [
      "Cartes-cadeaux pour vêtements professionnels, épicerie et friperies",
      "Vêtements propres",
      "Déodorant, savon, shampooing, dentifrice, papier toilette, couches et lingettes",
      "Pass de bus, vélos sûrs, antivols et lumières, casques, sièges auto, poussettes et fauteuils roulants",
      "Liquide vaisselle, lessive, nettoyant multi-usage et essuie-tout",
      "Sacs à dos, cahiers, crayons, dossiers, crayons de couleur, ciseaux, colle et gommes",
      "Draps twin, couvertures twin et oreillers standards",
      "Ordinateurs portables, ordinateurs de bureau, téléphones intelligents et tablettes"
    ],
    "donationNote": "Les cartes-cadeaux peuvent être envoyées à 10240 N 31st Ave #112, Phoenix, AZ 85051. Incluez votre nom, adresse et montant du don pour le reçu. Pour les reçus de don, écrivez à info@airsaz.org.",
    "volunteerLabel": "Jitolee",
    "volunteerTitle": "Rejoignez la famille des bénévoles d’AIRS.",
    "volunteerText": "Les bénévoles d’AIRS aident au transport, au soutien linguistique, à l’enseignement ESL, aux événements, au soutien technique, à l’orientation culturelle, à la collecte de dons, à la défense, au mentorat et à la sensibilisation communautaire.",
    "applyVolunteer": "Omba kujitolea",
    "volunteerProcessTitle": "Processus bénévole",
    "volunteerProcess": [
      "Assurez-vous d’être prêt à commencer le bénévolat avec AIRS.",
      "Remettez tous les documents de bénévolat.",
      "Attendez un e-mail d’un membre de l’équipe AIRS pour planifier l’orientation.",
      "La plupart des activités bénévoles ont lieu du lundi au vendredi, 9:00 AM–5:00 PM, au bureau du nord de Phoenix ou à proximité."
    ],
    "volunteerRoles": [
      "Transport vers et depuis les rendez-vous médicaux",
      "Traduction et interprétation",
      "Enseignement de l’anglais comme langue seconde",
      "Collectes de fonds et événements",
      "Soutien technique au bureau",
      "Soutien à l’orientation culturelle",
      "Collecte et livraison de dons",
      "Plaidoyer communautaire",
      "Mentorat d’une famille réfugiée",
      "Sensibilisation communautaire"
    ],
    "eventsLabel": "Matukio na madarasa",
    "eventsTitle": "Possibilités mensuelles d’éducation et d’orientation.",
    "viewEvents": "Wasiliana na AIRS kwa tarehe",
    "events": [
      {
        "title": "Cours financier",
        "date": "Premier mardi @ 11:30 AM",
        "text": "Séance d’éducation financière avec Wells Fargo."
      },
      {
        "title": "Formation police",
        "date": "Deuxième mardi @ 11:30 AM",
        "text": "Formation sur la sécurité communautaire avec Phoenix PD."
      },
      {
        "title": "Formation transport",
        "date": "Dernier mardi @ 11:30 AM",
        "text": "Formation bus et métro léger avec Phoenix Valley Metro."
      }
    ],
    "footerText": "AIRS aide les familles réfugiées et immigrantes à accéder au soutien, aux ressources et aux liens communautaires en Arizona.",
    "footerQuickLinks": "Viungo vya haraka",
    "footerServicesTitle": "Huduma",
    "footerGetInvolved": "Shiriki",
    "footerLegalText": "AIRS est une organisation à but non lucratif 501(c)(3). Vérifiez le texte final, la politique de confidentialité, les liens de don et les détails de l’organisation avec AIRS avant le lancement.",
    "footerCopyright": "© 2026 AIRS. Haki zote zimehifadhiwa.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  },
  "Kinyarwanda": {
    "siteFullName": "Serivisi z’Abimukira n’Impunzi muri Arizona",
    "nav": [
      "Ahabanza",
      "Ibyerekeye",
      "Serivisi",
      "Saba ubufasha",
      "Tanga inkunga",
      "Ba umukorerabushake",
      "Ibikorwa",
      "Twandikire"
    ],
    "donateButton": "Tanga inkunga",
    "languageLabel": "Hitamo ururimi",
    "heroBadge": "Serivisi z’impunzi n’abimukira muri Maricopa County",
    "heroTitle": "Gushyigikira impunzi n’abimukira kuva bageze kugeza babashije kwigira.",
    "heroText": "AIRS itanga serivisi z’imibereho, uburezi no gutuza impunzi n’abimukira baza muri Arizona, igafasha imiryango kwimenyereza ubuzima bwo mu muryango.",
    "getHelpButton": "Saba ubufasha",
    "volunteerButton": "Ba umukorerabushake",
    "statYears": "Yashinzwe mu 1989",
    "statResettled": "1,910 batujwe",
    "statLanguages": "Serivisi + koherezwa",
    "aboutLabel": "Abo turi bo",
    "aboutTitle": "AIRS imaze imyaka myinshi ikorera abaturage ba Phoenix na Maricopa County.",
    "aboutText1": "Arizona Immigrant and Refugee Services est une organisation à but non lucratif 501(c)(3), fondée en 1989 pour fournir des services sociaux, économiques et éducatifs aux résidents du centre-ville de Phoenix. En 2001, AIRS a commencé à réinstaller des réfugiés, dont les jeunes de Kakuma, aussi appelés les Lost Boys, parmi les premières arrivées de l’agence.",
    "aboutText2": "Depuis 2001, AIRS a réinstallé 1 910 réfugiés et immigrants dans le comté de Maricopa. Les programmes d’AIRS offrent logement, nourriture, vêtements, traduction au besoin, cours d’anglais, formation professionnelle, aide à l’emploi, services d’immigration, orientations et autres soutiens.",
    "aboutBadges": [
      "Umuryango 501(c)(3)",
      "Yashinzwe mu 1989",
      "Gutura kuva 2001"
    ],
    "servicesLabel": "Serivisi",
    "servicesTitle": "Soutien pratique pour la réinstallation, l’immigration, l’emploi, l’éducation et la vie quotidienne.",
    "servicesText": "AIRS relie les clients aux services directs, au soutien sans rendez-vous, aux cours mensuels, aux orientations communautaires et à l’aide pour s’adapter à la vie en Arizona.",
    "services": [
      {
        "title": "Soutien à la réinstallation",
        "text": "Soutien aux familles réfugiées et immigrantes récemment arrivées, y compris logement, nourriture, vêtements, orientations et aide à reconstruire la stabilité."
      },
      {
        "title": "Services d’emploi",
        "text": "Formation professionnelle, aide à l’emploi, préparation au travail et soutien pour relier les clients aux opportunités locales."
      },
      {
        "title": "Services d’immigration",
        "text": "Soutien d’immigration sans rendez-vous pour les pétitions familiales, la citoyenneté, la résidence permanente, les documents de remplacement, le statut protégé et la réunification familiale."
      },
      {
        "title": "Cours et éducation",
        "text": "Cours mensuels sur les finances, la formation avec la police, l’hygiène et la santé, et l’orientation au transport public."
      },
      {
        "title": "Aide au transport",
        "text": "Soutien pour relier les clients aux rendez-vous médicaux, services, dons, transport public et ressources communautaires."
      },
      {
        "title": "Soutien aux familles SIV",
        "text": "Services sans rendez-vous pour les titulaires de visa spécial d’immigrant, y compris Reception & Placement, Matching Grant, Preferred Communities, Employment Services et prestations RRP de l’État."
      }
    ],
    "requestHelp": "Saba ubufasha",
    "getHelpLabel": "Saba ubufasha",
    "getHelpTitle": "Contactez AIRS ou venez pendant les heures de service.",
    "getHelpText": "Utilisez ce formulaire pour contacter AIRS au sujet des services, du soutien ou d’une aide générale. Un membre de l’équipe vous répondra avec les coordonnées fournies.",
    "officeInfo": "Amakuru y’ibiro",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax : (602) 944-1860",
    "officeHours": "Kuwa mbere–kuwa gatanu, 9:00 AM–4:30 PM",
    "holidayNote": "Ibiro bifungwa ku minsi mikuru ya leta.",
    "fullName": "Amazina yose",
    "fullNamePlaceholder": "Amazina yawe",
    "contactMethod": "Telefoni cyangwa Email",
    "contactPlaceholder": "Uburyo bwiza bwo kukuvugisha",
    "preferredLanguage": "Ururimi ukunda",
    "serviceNeeded": "Serivisi ikenewe",
    "serviceOptions": [
      "Ubufasha ku by’abimukira",
      "Ubufasha bw’aho gutura cyangwa gutuzwa",
      "Ubufasha bw’akazi",
      "Amasomo cyangwa uburezi",
      "Ikibazo cy’inkunga cyangwa ubukorerabushake",
      "Ibindi"
    ],
    "message": "Ubutumwa",
    "messagePlaceholder": "Tubwire icyo ukeneyeho ubufasha",
    "consent": "Nemeye ko AIRS ishobora kumpamagara cyangwa kunyandikira ku busabe bwanjye.",
    "submitRequest": "Ohereza ubusabe",
    "officialInfoLabel": "Informations officielles d’AIRS",
    "officialInfoTitle": "Faits principaux repris du site actuel d’AIRS.",
    "infoCards": [
      {
        "title": "Mission",
        "text": "AIRS fournit des services sociaux et éducatifs pour répondre aux besoins des réfugiés et immigrants arrivant en Arizona, en assurant une transition réussie de l’arrivée à l’autonomie."
      },
      {
        "title": "Lien avec ECDC",
        "text": "AIRS est une filiale d’ECDC et mène ses activités avec le soutien de partenaires fédéraux, étatiques, communautaires et individuels."
      },
      {
        "title": "Heures de bureau",
        "text": "Lundi à vendredi, 9:00 AM–4:30 PM. Le bureau est fermé les jours fériés fédéraux."
      }
    ],
    "programDetailsLabel": "Détails des programmes",
    "programDetailsTitle": "Services sans rendez-vous, cours mensuels et soutien SIV.",
    "immigrationTitle": "Spécialiste en immigration",
    "immigrationIntro": "Les heures sans rendez-vous sont mercredi et vendredi de 11:00 AM à 2:00 PM. Veuillez appeler pour prendre rendez-vous en dehors de ces heures.",
    "immigrationServices": [
      "Pétitions familiales",
      "Citoyenneté",
      "Résidence permanente",
      "Remplacement de documents perdus ou volés",
      "Statut protégé spécial / départ forcé différé",
      "Réunification familiale"
    ],
    "classesTitle": "Calendrier mensuel des cours",
    "monthlyClasses": [
      "Premier mardi @ 11:30 AM — Cours financier avec Wells Fargo",
      "Deuxième mardi @ 11:30 AM — Formation avec Phoenix PD",
      "Troisième mardi @ 11:30 AM — Cours d’hygiène et santé",
      "Dernier mardi @ 11:30 AM — Formation bus et métro léger avec Phoenix Valley Metro"
    ],
    "sivTitle": "Services SIV sans rendez-vous",
    "sivServices": [
      "Accueil et placement",
      "Matching Grant",
      "Preferred Communities",
      "Services d’emploi",
      "Prestations RRP de l’État"
    ],
    "donateTitle": "Soutenez les services de réinstallation d’AIRS.",
    "donateText": "Les petits articles ménagers, textiles et cartes-cadeaux peuvent être déposés chez AIRS pendant les heures de bureau. Veuillez appeler pour fixer un rendez-vous pour les meubles et gros articles.",
    "donateNow": "Tanga inkunga ubu",
    "donationCategories": "Articles acceptés par AIRS",
    "donationItems": [
      "Cartes-cadeaux pour vêtements professionnels, épicerie et friperies",
      "Vêtements propres",
      "Déodorant, savon, shampooing, dentifrice, papier toilette, couches et lingettes",
      "Pass de bus, vélos sûrs, antivols et lumières, casques, sièges auto, poussettes et fauteuils roulants",
      "Liquide vaisselle, lessive, nettoyant multi-usage et essuie-tout",
      "Sacs à dos, cahiers, crayons, dossiers, crayons de couleur, ciseaux, colle et gommes",
      "Draps twin, couvertures twin et oreillers standards",
      "Ordinateurs portables, ordinateurs de bureau, téléphones intelligents et tablettes"
    ],
    "donationNote": "Les cartes-cadeaux peuvent être envoyées à 10240 N 31st Ave #112, Phoenix, AZ 85051. Incluez votre nom, adresse et montant du don pour le reçu. Pour les reçus de don, écrivez à info@airsaz.org.",
    "volunteerLabel": "Ubukorerabushake",
    "volunteerTitle": "Rejoignez la famille des bénévoles d’AIRS.",
    "volunteerText": "Les bénévoles d’AIRS aident au transport, au soutien linguistique, à l’enseignement ESL, aux événements, au soutien technique, à l’orientation culturelle, à la collecte de dons, à la défense, au mentorat et à la sensibilisation communautaire.",
    "applyVolunteer": "Saba kuba umukorerabushake",
    "volunteerProcessTitle": "Processus bénévole",
    "volunteerProcess": [
      "Assurez-vous d’être prêt à commencer le bénévolat avec AIRS.",
      "Remettez tous les documents de bénévolat.",
      "Attendez un e-mail d’un membre de l’équipe AIRS pour planifier l’orientation.",
      "La plupart des activités bénévoles ont lieu du lundi au vendredi, 9:00 AM–5:00 PM, au bureau du nord de Phoenix ou à proximité."
    ],
    "volunteerRoles": [
      "Transport vers et depuis les rendez-vous médicaux",
      "Traduction et interprétation",
      "Enseignement de l’anglais comme langue seconde",
      "Collectes de fonds et événements",
      "Soutien technique au bureau",
      "Soutien à l’orientation culturelle",
      "Collecte et livraison de dons",
      "Plaidoyer communautaire",
      "Mentorat d’une famille réfugiée",
      "Sensibilisation communautaire"
    ],
    "eventsLabel": "Ibikorwa n’amasomo",
    "eventsTitle": "Possibilités mensuelles d’éducation et d’orientation.",
    "viewEvents": "Vugana na AIRS ku matariki",
    "events": [
      {
        "title": "Cours financier",
        "date": "Premier mardi @ 11:30 AM",
        "text": "Séance d’éducation financière avec Wells Fargo."
      },
      {
        "title": "Formation police",
        "date": "Deuxième mardi @ 11:30 AM",
        "text": "Formation sur la sécurité communautaire avec Phoenix PD."
      },
      {
        "title": "Formation transport",
        "date": "Dernier mardi @ 11:30 AM",
        "text": "Formation bus et métro léger avec Phoenix Valley Metro."
      }
    ],
    "footerText": "AIRS aide les familles réfugiées et immigrantes à accéder au soutien, aux ressources et aux liens communautaires en Arizona.",
    "footerQuickLinks": "Amahuriro yihuse",
    "footerServicesTitle": "Serivisi",
    "footerGetInvolved": "Gira uruhare",
    "footerLegalText": "AIRS est une organisation à but non lucratif 501(c)(3). Vérifiez le texte final, la politique de confidentialité, les liens de don et les détails de l’organisation avec AIRS avant le lancement.",
    "footerCopyright": "© 2026 AIRS. Uburenganzira bwose burabitswe.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  },
  "Arabic": {
    "siteFullName": "خدمات المهاجرين واللاجئين في أريزونا",
    "nav": [
      "الرئيسية",
      "من نحن",
      "الخدمات",
      "احصل على المساعدة",
      "تبرع",
      "تطوع",
      "الفعاليات",
      "اتصل بنا"
    ],
    "donateButton": "تبرع",
    "languageLabel": "اختر اللغة",
    "heroBadge": "خدمات اللاجئين والمهاجرين في مقاطعة ماريكوبا",
    "heroTitle": "دعم اللاجئين والمهاجرين من الوصول إلى الاعتماد على الذات.",
    "heroText": "تقدم AIRS خدمات اجتماعية وتعليمية وإعادة توطين للاجئين والمهاجرين القادمين إلى أريزونا، لمساعدة العائلات على الانتقال بنجاح إلى الحياة المجتمعية.",
    "getHelpButton": "احصل على المساعدة",
    "volunteerButton": "تطوع معنا",
    "statYears": "تأسست عام 1989",
    "statResettled": "إعادة توطين 1,910",
    "statLanguages": "خدمات وإحالات",
    "aboutLabel": "من نحن",
    "aboutTitle": "خدمت AIRS مجتمعات فينيكس ومقاطعة ماريكوبا لعقود.",
    "aboutText1": "Arizona Immigrant and Refugee Services est une organisation à but non lucratif 501(c)(3), fondée en 1989 pour fournir des services sociaux, économiques et éducatifs aux résidents du centre-ville de Phoenix. En 2001, AIRS a commencé à réinstaller des réfugiés, dont les jeunes de Kakuma, aussi appelés les Lost Boys, parmi les premières arrivées de l’agence.",
    "aboutText2": "Depuis 2001, AIRS a réinstallé 1 910 réfugiés et immigrants dans le comté de Maricopa. Les programmes d’AIRS offrent logement, nourriture, vêtements, traduction au besoin, cours d’anglais, formation professionnelle, aide à l’emploi, services d’immigration, orientations et autres soutiens.",
    "aboutBadges": [
      "منظمة 501(c)(3)",
      "تأسست عام 1989",
      "إعادة التوطين منذ 2001"
    ],
    "servicesLabel": "الخدمات",
    "servicesTitle": "Soutien pratique pour la réinstallation, l’immigration, l’emploi, l’éducation et la vie quotidienne.",
    "servicesText": "AIRS relie les clients aux services directs, au soutien sans rendez-vous, aux cours mensuels, aux orientations communautaires et à l’aide pour s’adapter à la vie en Arizona.",
    "services": [
      {
        "title": "Soutien à la réinstallation",
        "text": "Soutien aux familles réfugiées et immigrantes récemment arrivées, y compris logement, nourriture, vêtements, orientations et aide à reconstruire la stabilité."
      },
      {
        "title": "Services d’emploi",
        "text": "Formation professionnelle, aide à l’emploi, préparation au travail et soutien pour relier les clients aux opportunités locales."
      },
      {
        "title": "Services d’immigration",
        "text": "Soutien d’immigration sans rendez-vous pour les pétitions familiales, la citoyenneté, la résidence permanente, les documents de remplacement, le statut protégé et la réunification familiale."
      },
      {
        "title": "Cours et éducation",
        "text": "Cours mensuels sur les finances, la formation avec la police, l’hygiène et la santé, et l’orientation au transport public."
      },
      {
        "title": "Aide au transport",
        "text": "Soutien pour relier les clients aux rendez-vous médicaux, services, dons, transport public et ressources communautaires."
      },
      {
        "title": "Soutien aux familles SIV",
        "text": "Services sans rendez-vous pour les titulaires de visa spécial d’immigrant, y compris Reception & Placement, Matching Grant, Preferred Communities, Employment Services et prestations RRP de l’État."
      }
    ],
    "requestHelp": "اطلب المساعدة",
    "getHelpLabel": "احصل على المساعدة",
    "getHelpTitle": "Contactez AIRS ou venez pendant les heures de service.",
    "getHelpText": "Utilisez ce formulaire pour contacter AIRS au sujet des services, du soutien ou d’une aide générale. Un membre de l’équipe vous répondra avec les coordonnées fournies.",
    "officeInfo": "معلومات المكتب",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax : (602) 944-1860",
    "officeHours": "الاثنين–الجمعة، 9:00 صباحًا–4:30 مساءً",
    "holidayNote": "المكتب مغلق في العطلات الفدرالية.",
    "fullName": "الاسم الكامل",
    "fullNamePlaceholder": "اسمك",
    "contactMethod": "الهاتف أو البريد الإلكتروني",
    "contactPlaceholder": "أفضل وسيلة تواصل",
    "preferredLanguage": "اللغة المفضلة",
    "serviceNeeded": "الخدمة المطلوبة",
    "serviceOptions": [
      "دعم الهجرة",
      "دعم السكن أو إعادة التوطين",
      "دعم التوظيف",
      "دروس أو تعليم",
      "سؤال عن التبرعات أو التطوع",
      "أخرى"
    ],
    "message": "الرسالة",
    "messagePlaceholder": "أخبرنا بما تحتاج إلى مساعدة فيه",
    "consent": "أوافق على أن تتواصل AIRS معي بخصوص طلبي.",
    "submitRequest": "إرسال الطلب",
    "officialInfoLabel": "Informations officielles d’AIRS",
    "officialInfoTitle": "Faits principaux repris du site actuel d’AIRS.",
    "infoCards": [
      {
        "title": "Mission",
        "text": "AIRS fournit des services sociaux et éducatifs pour répondre aux besoins des réfugiés et immigrants arrivant en Arizona, en assurant une transition réussie de l’arrivée à l’autonomie."
      },
      {
        "title": "Lien avec ECDC",
        "text": "AIRS est une filiale d’ECDC et mène ses activités avec le soutien de partenaires fédéraux, étatiques, communautaires et individuels."
      },
      {
        "title": "Heures de bureau",
        "text": "Lundi à vendredi, 9:00 AM–4:30 PM. Le bureau est fermé les jours fériés fédéraux."
      }
    ],
    "programDetailsLabel": "Détails des programmes",
    "programDetailsTitle": "Services sans rendez-vous, cours mensuels et soutien SIV.",
    "immigrationTitle": "Spécialiste en immigration",
    "immigrationIntro": "Les heures sans rendez-vous sont mercredi et vendredi de 11:00 AM à 2:00 PM. Veuillez appeler pour prendre rendez-vous en dehors de ces heures.",
    "immigrationServices": [
      "Pétitions familiales",
      "Citoyenneté",
      "Résidence permanente",
      "Remplacement de documents perdus ou volés",
      "Statut protégé spécial / départ forcé différé",
      "Réunification familiale"
    ],
    "classesTitle": "Calendrier mensuel des cours",
    "monthlyClasses": [
      "Premier mardi @ 11:30 AM — Cours financier avec Wells Fargo",
      "Deuxième mardi @ 11:30 AM — Formation avec Phoenix PD",
      "Troisième mardi @ 11:30 AM — Cours d’hygiène et santé",
      "Dernier mardi @ 11:30 AM — Formation bus et métro léger avec Phoenix Valley Metro"
    ],
    "sivTitle": "Services SIV sans rendez-vous",
    "sivServices": [
      "Accueil et placement",
      "Matching Grant",
      "Preferred Communities",
      "Services d’emploi",
      "Prestations RRP de l’État"
    ],
    "donateTitle": "Soutenez les services de réinstallation d’AIRS.",
    "donateText": "Les petits articles ménagers, textiles et cartes-cadeaux peuvent être déposés chez AIRS pendant les heures de bureau. Veuillez appeler pour fixer un rendez-vous pour les meubles et gros articles.",
    "donateNow": "تبرع الآن",
    "donationCategories": "Articles acceptés par AIRS",
    "donationItems": [
      "Cartes-cadeaux pour vêtements professionnels, épicerie et friperies",
      "Vêtements propres",
      "Déodorant, savon, shampooing, dentifrice, papier toilette, couches et lingettes",
      "Pass de bus, vélos sûrs, antivols et lumières, casques, sièges auto, poussettes et fauteuils roulants",
      "Liquide vaisselle, lessive, nettoyant multi-usage et essuie-tout",
      "Sacs à dos, cahiers, crayons, dossiers, crayons de couleur, ciseaux, colle et gommes",
      "Draps twin, couvertures twin et oreillers standards",
      "Ordinateurs portables, ordinateurs de bureau, téléphones intelligents et tablettes"
    ],
    "donationNote": "Les cartes-cadeaux peuvent être envoyées à 10240 N 31st Ave #112, Phoenix, AZ 85051. Incluez votre nom, adresse et montant du don pour le reçu. Pour les reçus de don, écrivez à info@airsaz.org.",
    "volunteerLabel": "تطوع",
    "volunteerTitle": "Rejoignez la famille des bénévoles d’AIRS.",
    "volunteerText": "Les bénévoles d’AIRS aident au transport, au soutien linguistique, à l’enseignement ESL, aux événements, au soutien technique, à l’orientation culturelle, à la collecte de dons, à la défense, au mentorat et à la sensibilisation communautaire.",
    "applyVolunteer": "قدّم للتطوع",
    "volunteerProcessTitle": "Processus bénévole",
    "volunteerProcess": [
      "Assurez-vous d’être prêt à commencer le bénévolat avec AIRS.",
      "Remettez tous les documents de bénévolat.",
      "Attendez un e-mail d’un membre de l’équipe AIRS pour planifier l’orientation.",
      "La plupart des activités bénévoles ont lieu du lundi au vendredi, 9:00 AM–5:00 PM, au bureau du nord de Phoenix ou à proximité."
    ],
    "volunteerRoles": [
      "Transport vers et depuis les rendez-vous médicaux",
      "Traduction et interprétation",
      "Enseignement de l’anglais comme langue seconde",
      "Collectes de fonds et événements",
      "Soutien technique au bureau",
      "Soutien à l’orientation culturelle",
      "Collecte et livraison de dons",
      "Plaidoyer communautaire",
      "Mentorat d’une famille réfugiée",
      "Sensibilisation communautaire"
    ],
    "eventsLabel": "الفعاليات والدروس",
    "eventsTitle": "Possibilités mensuelles d’éducation et d’orientation.",
    "viewEvents": "اتصل بـ AIRS لمعرفة التواريخ",
    "events": [
      {
        "title": "Cours financier",
        "date": "Premier mardi @ 11:30 AM",
        "text": "Séance d’éducation financière avec Wells Fargo."
      },
      {
        "title": "Formation police",
        "date": "Deuxième mardi @ 11:30 AM",
        "text": "Formation sur la sécurité communautaire avec Phoenix PD."
      },
      {
        "title": "Formation transport",
        "date": "Dernier mardi @ 11:30 AM",
        "text": "Formation bus et métro léger avec Phoenix Valley Metro."
      }
    ],
    "footerText": "AIRS aide les familles réfugiées et immigrantes à accéder au soutien, aux ressources et aux liens communautaires en Arizona.",
    "footerQuickLinks": "روابط سريعة",
    "footerServicesTitle": "الخدمات",
    "footerGetInvolved": "شارك معنا",
    "footerLegalText": "AIRS est une organisation à but non lucratif 501(c)(3). Vérifiez le texte final, la politique de confidentialité, les liens de don et les détails de l’organisation avec AIRS avant le lancement.",
    "footerCopyright": "© 2026 AIRS. جميع الحقوق محفوظة.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  },
  "Dari": {
    "siteFullName": "خدمات مهاجرین و پناهندگان آریزونا",
    "nav": [
      "خانه",
      "درباره",
      "خدمات",
      "کمک بگیرید",
      "کمک مالی",
      "داوطلبی",
      "رویدادها",
      "تماس"
    ],
    "donateButton": "کمک مالی",
    "languageLabel": "انتخاب زبان",
    "heroBadge": "خدمات پناهندگان و مهاجرین در شهرستان ماریکوپا",
    "heroTitle": "حمایت از پناهندگان و مهاجرین از زمان ورود تا خودکفایی.",
    "heroText": "AIRS خدمات اجتماعی، آموزشی و اسکان مجدد را برای پناهندگان و مهاجرینی که به آریزونا می‌آیند فراهم می‌کند و به خانواده‌ها کمک می‌کند با موفقیت وارد زندگی اجتماعی شوند.",
    "getHelpButton": "کمک بگیرید",
    "volunteerButton": "با ما داوطلب شوید",
    "statYears": "تأسیس در 1989",
    "statResettled": "1,910 نفر اسکان داده شده",
    "statLanguages": "خدمات و معرفی‌ها",
    "aboutLabel": "ما کی هستیم",
    "aboutTitle": "AIRS برای دهه‌ها به جوامع فینیکس و شهرستان ماریکوپا خدمت کرده است.",
    "aboutText1": "Arizona Immigrant and Refugee Services est une organisation à but non lucratif 501(c)(3), fondée en 1989 pour fournir des services sociaux, économiques et éducatifs aux résidents du centre-ville de Phoenix. En 2001, AIRS a commencé à réinstaller des réfugiés, dont les jeunes de Kakuma, aussi appelés les Lost Boys, parmi les premières arrivées de l’agence.",
    "aboutText2": "Depuis 2001, AIRS a réinstallé 1 910 réfugiés et immigrants dans le comté de Maricopa. Les programmes d’AIRS offrent logement, nourriture, vêtements, traduction au besoin, cours d’anglais, formation professionnelle, aide à l’emploi, services d’immigration, orientations et autres soutiens.",
    "aboutBadges": [
      "نهاد 501(c)(3)",
      "تأسیس در 1989",
      "اسکان مجدد از 2001"
    ],
    "servicesLabel": "خدمات",
    "servicesTitle": "Soutien pratique pour la réinstallation, l’immigration, l’emploi, l’éducation et la vie quotidienne.",
    "servicesText": "AIRS relie les clients aux services directs, au soutien sans rendez-vous, aux cours mensuels, aux orientations communautaires et à l’aide pour s’adapter à la vie en Arizona.",
    "services": [
      {
        "title": "Soutien à la réinstallation",
        "text": "Soutien aux familles réfugiées et immigrantes récemment arrivées, y compris logement, nourriture, vêtements, orientations et aide à reconstruire la stabilité."
      },
      {
        "title": "Services d’emploi",
        "text": "Formation professionnelle, aide à l’emploi, préparation au travail et soutien pour relier les clients aux opportunités locales."
      },
      {
        "title": "Services d’immigration",
        "text": "Soutien d’immigration sans rendez-vous pour les pétitions familiales, la citoyenneté, la résidence permanente, les documents de remplacement, le statut protégé et la réunification familiale."
      },
      {
        "title": "Cours et éducation",
        "text": "Cours mensuels sur les finances, la formation avec la police, l’hygiène et la santé, et l’orientation au transport public."
      },
      {
        "title": "Aide au transport",
        "text": "Soutien pour relier les clients aux rendez-vous médicaux, services, dons, transport public et ressources communautaires."
      },
      {
        "title": "Soutien aux familles SIV",
        "text": "Services sans rendez-vous pour les titulaires de visa spécial d’immigrant, y compris Reception & Placement, Matching Grant, Preferred Communities, Employment Services et prestations RRP de l’État."
      }
    ],
    "requestHelp": "درخواست کمک",
    "getHelpLabel": "کمک بگیرید",
    "getHelpTitle": "Contactez AIRS ou venez pendant les heures de service.",
    "getHelpText": "Utilisez ce formulaire pour contacter AIRS au sujet des services, du soutien ou d’une aide générale. Un membre de l’équipe vous répondra avec les coordonnées fournies.",
    "officeInfo": "معلومات دفتر",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax : (602) 944-1860",
    "officeHours": "دوشنبه تا جمعه، 9:00 صبح تا 4:30 بعد از چاشت",
    "holidayNote": "دفتر در رخصتی‌های فدرال بسته است.",
    "fullName": "نام کامل",
    "fullNamePlaceholder": "نام شما",
    "contactMethod": "تلفن یا ایمیل",
    "contactPlaceholder": "بهترین راه تماس",
    "preferredLanguage": "زبان ترجیحی",
    "serviceNeeded": "خدمت مورد نیاز",
    "serviceOptions": [
      "حمایت مهاجرت",
      "حمایت مسکن یا اسکان مجدد",
      "حمایت کاریابی",
      "صنف‌ها یا آموزش",
      "سؤال درباره کمک مالی یا داوطلبی",
      "دیگر"
    ],
    "message": "پیام",
    "messagePlaceholder": "برای ما بگویید در چه مورد به کمک نیاز دارید",
    "consent": "من موافقم که AIRS درباره درخواست من با من تماس بگیرد.",
    "submitRequest": "ارسال درخواست",
    "officialInfoLabel": "Informations officielles d’AIRS",
    "officialInfoTitle": "Faits principaux repris du site actuel d’AIRS.",
    "infoCards": [
      {
        "title": "Mission",
        "text": "AIRS fournit des services sociaux et éducatifs pour répondre aux besoins des réfugiés et immigrants arrivant en Arizona, en assurant une transition réussie de l’arrivée à l’autonomie."
      },
      {
        "title": "Lien avec ECDC",
        "text": "AIRS est une filiale d’ECDC et mène ses activités avec le soutien de partenaires fédéraux, étatiques, communautaires et individuels."
      },
      {
        "title": "Heures de bureau",
        "text": "Lundi à vendredi, 9:00 AM–4:30 PM. Le bureau est fermé les jours fériés fédéraux."
      }
    ],
    "programDetailsLabel": "Détails des programmes",
    "programDetailsTitle": "Services sans rendez-vous, cours mensuels et soutien SIV.",
    "immigrationTitle": "Spécialiste en immigration",
    "immigrationIntro": "Les heures sans rendez-vous sont mercredi et vendredi de 11:00 AM à 2:00 PM. Veuillez appeler pour prendre rendez-vous en dehors de ces heures.",
    "immigrationServices": [
      "Pétitions familiales",
      "Citoyenneté",
      "Résidence permanente",
      "Remplacement de documents perdus ou volés",
      "Statut protégé spécial / départ forcé différé",
      "Réunification familiale"
    ],
    "classesTitle": "Calendrier mensuel des cours",
    "monthlyClasses": [
      "Premier mardi @ 11:30 AM — Cours financier avec Wells Fargo",
      "Deuxième mardi @ 11:30 AM — Formation avec Phoenix PD",
      "Troisième mardi @ 11:30 AM — Cours d’hygiène et santé",
      "Dernier mardi @ 11:30 AM — Formation bus et métro léger avec Phoenix Valley Metro"
    ],
    "sivTitle": "Services SIV sans rendez-vous",
    "sivServices": [
      "Accueil et placement",
      "Matching Grant",
      "Preferred Communities",
      "Services d’emploi",
      "Prestations RRP de l’État"
    ],
    "donateTitle": "Soutenez les services de réinstallation d’AIRS.",
    "donateText": "Les petits articles ménagers, textiles et cartes-cadeaux peuvent être déposés chez AIRS pendant les heures de bureau. Veuillez appeler pour fixer un rendez-vous pour les meubles et gros articles.",
    "donateNow": "اکنون کمک کنید",
    "donationCategories": "Articles acceptés par AIRS",
    "donationItems": [
      "Cartes-cadeaux pour vêtements professionnels, épicerie et friperies",
      "Vêtements propres",
      "Déodorant, savon, shampooing, dentifrice, papier toilette, couches et lingettes",
      "Pass de bus, vélos sûrs, antivols et lumières, casques, sièges auto, poussettes et fauteuils roulants",
      "Liquide vaisselle, lessive, nettoyant multi-usage et essuie-tout",
      "Sacs à dos, cahiers, crayons, dossiers, crayons de couleur, ciseaux, colle et gommes",
      "Draps twin, couvertures twin et oreillers standards",
      "Ordinateurs portables, ordinateurs de bureau, téléphones intelligents et tablettes"
    ],
    "donationNote": "Les cartes-cadeaux peuvent être envoyées à 10240 N 31st Ave #112, Phoenix, AZ 85051. Incluez votre nom, adresse et montant du don pour le reçu. Pour les reçus de don, écrivez à info@airsaz.org.",
    "volunteerLabel": "داوطلبی",
    "volunteerTitle": "Rejoignez la famille des bénévoles d’AIRS.",
    "volunteerText": "Les bénévoles d’AIRS aident au transport, au soutien linguistique, à l’enseignement ESL, aux événements, au soutien technique, à l’orientation culturelle, à la collecte de dons, à la défense, au mentorat et à la sensibilisation communautaire.",
    "applyVolunteer": "درخواست داوطلبی",
    "volunteerProcessTitle": "Processus bénévole",
    "volunteerProcess": [
      "Assurez-vous d’être prêt à commencer le bénévolat avec AIRS.",
      "Remettez tous les documents de bénévolat.",
      "Attendez un e-mail d’un membre de l’équipe AIRS pour planifier l’orientation.",
      "La plupart des activités bénévoles ont lieu du lundi au vendredi, 9:00 AM–5:00 PM, au bureau du nord de Phoenix ou à proximité."
    ],
    "volunteerRoles": [
      "Transport vers et depuis les rendez-vous médicaux",
      "Traduction et interprétation",
      "Enseignement de l’anglais comme langue seconde",
      "Collectes de fonds et événements",
      "Soutien technique au bureau",
      "Soutien à l’orientation culturelle",
      "Collecte et livraison de dons",
      "Plaidoyer communautaire",
      "Mentorat d’une famille réfugiée",
      "Sensibilisation communautaire"
    ],
    "eventsLabel": "رویدادها و صنف‌ها",
    "eventsTitle": "Possibilités mensuelles d’éducation et d’orientation.",
    "viewEvents": "برای تاریخ‌ها با AIRS تماس بگیرید",
    "events": [
      {
        "title": "Cours financier",
        "date": "Premier mardi @ 11:30 AM",
        "text": "Séance d’éducation financière avec Wells Fargo."
      },
      {
        "title": "Formation police",
        "date": "Deuxième mardi @ 11:30 AM",
        "text": "Formation sur la sécurité communautaire avec Phoenix PD."
      },
      {
        "title": "Formation transport",
        "date": "Dernier mardi @ 11:30 AM",
        "text": "Formation bus et métro léger avec Phoenix Valley Metro."
      }
    ],
    "footerText": "AIRS aide les familles réfugiées et immigrantes à accéder au soutien, aux ressources et aux liens communautaires en Arizona.",
    "footerQuickLinks": "لینک‌های سریع",
    "footerServicesTitle": "خدمات",
    "footerGetInvolved": "همراه شوید",
    "footerLegalText": "AIRS est une organisation à but non lucratif 501(c)(3). Vérifiez le texte final, la politique de confidentialité, les liens de don et les détails de l’organisation avec AIRS avant le lancement.",
    "footerCopyright": "© 2026 AIRS. همه حقوق محفوظ است.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  }
};


Object.assign(localizedContent.Spanish, { privacyNotice: "Su información solo será usada por AIRS para responder a su solicitud.", askAboutDonations: "Preguntar sobre donaciones", paypalNotice: "Las donaciones se procesan de forma segura mediante PayPal. Confirme el enlace oficial de donación de AIRS antes del lanzamiento final.", donationNoteLabel: "Nota de donación:", getDirections: "(Obtener indicaciones)" });
Object.assign(localizedContent.French, { privacyNotice: "Vos informations seront utilisées uniquement par AIRS pour répondre à votre demande.", askAboutDonations: "Questions sur les dons", paypalNotice: "Les dons sont traités en toute sécurité par PayPal. Veuillez confirmer le lien officiel de don AIRS avant le lancement final.", donationNoteLabel: "Note de don :", getDirections: "(Itinéraire)" });
Object.assign(localizedContent.Swahili, { privacyNotice: "Taarifa zako zitatumiwa na AIRS kujibu ombi lako pekee.", askAboutDonations: "Uliza Kuhusu Michango", paypalNotice: "Michango huchakatwa kwa usalama kupitia PayPal. Tafadhali thibitisha kiungo rasmi cha AIRS kabla ya uzinduzi wa mwisho.", donationNoteLabel: "Taarifa ya mchango:", getDirections: "(Pata maelekezo)" });
Object.assign(localizedContent.Kinyarwanda, { privacyNotice: "Amakuru yawe azakoreshwa na AIRS gusa mu gusubiza ubusabe bwawe.", askAboutDonations: "Baza ku nkunga", paypalNotice: "Inkunga itunganywa mu mutekano binyuze kuri PayPal. Emeza linki yemewe ya AIRS mbere yo gushyira ku mugaragaro.", donationNoteLabel: "Icyitonderwa cy’inkunga:", getDirections: "(Bona icyerekezo)" });
Object.assign(localizedContent.Arabic, { privacyNotice: "سيتم استخدام معلوماتك فقط من قبل AIRS للرد على طلبك.", askAboutDonations: "اسأل عن التبرعات", paypalNotice: "تتم معالجة التبرعات بأمان عبر PayPal. يرجى تأكيد رابط التبرع الرسمي لـ AIRS قبل الإطلاق النهائي.", donationNoteLabel: "ملاحظة التبرع:", getDirections: "(الحصول على الاتجاهات)" });
Object.assign(localizedContent.Dari, { privacyNotice: "معلومات شما فقط توسط AIRS برای پاسخ به درخواست شما استفاده می‌شود.", askAboutDonations: "درباره کمک مالی بپرسید", paypalNotice: "کمک‌های مالی به‌صورت امن از طریق PayPal پردازش می‌شود. لطفاً لینک رسمی کمک مالی AIRS را پیش از راه‌اندازی نهایی تأیید کنید.", donationNoteLabel: "یادداشت کمک مالی:", getDirections: "(دریافت مسیر)" });

localizedContent.Pashto = {
  ...translations.English,
  siteFullName: "د اریزونا د کډوالو او پناه غوښتونکو خدمتونه",
  nav: ["کور", "زموږ په اړه", "خدمتونه", "مرسته ترلاسه کړئ", "مرسته وکړئ", "رضاکار شئ", "پېښې", "اړیکه"],
  donateButton: "مرسته وکړئ",
  languageLabel: "ژبه وټاکئ",
  heroBadge: "په ماریکوپا کاونټي کې د پناه غوښتونکو او کډوالو خدمتونه",
  heroTitle: "د پناه غوښتونکو او کډوالو ملاتړ، له راتګ څخه تر ځان بساینې پورې.",
  heroText: "AIRS اریزونا ته راتلونکو پناه غوښتونکو او کډوالو ته ټولنیز، تعلیمي او د بیا مېشتېدو خدمتونه برابروي او کورنیو سره مرسته کوي چې په ټولنیز ژوند کې بریالۍ انتقال وکړي.",
  getHelpButton: "مرسته ترلاسه کړئ",
  volunteerButton: "زموږ سره رضاکار شئ",
  statYears: "په ۱۹۸۹ کې تاسیس شوی",
  statResettled: "۱٬۹۱۰ کسان بیا مېشت شوي",
  statLanguages: "خدمتونه او راجع کول",
  aboutLabel: "موږ څوک یو",
  aboutTitle: "AIRS د فینکس او ماریکوپا کاونټي ټولنو ته د لسیزو راهیسې خدمت کوي.",
  aboutText1: "Arizona Immigrant and Refugee Services یو 501(c)(3) غیرانتفاعي سازمان دی چې په ۱۹۸۹ کې د فینکس د داخلي ښار اوسېدونکو ته ټولنیز، اقتصادي او تعلیمي خدمتونو لپاره جوړ شو. په ۲۰۰۱ کې AIRS د پناه غوښتونکو بیا مېشتول پیل کړل، چې د Kakuma Youth یا Lost Boys ډلې د لومړیو راتلونکو کسانو له ډلې څخه وې.",
  aboutText2: "له ۲۰۰۱ راهیسې، AIRS په ماریکوپا کاونټي کې ۱٬۹۱۰ پناه غوښتونکي او کډوال بیا مېشت کړي دي. د AIRS پروګرامونه تازه راغلو پناه غوښتونکو او قانوني کډوالو ته کور، خواړه، کالي، د اړتیا په وخت ژباړه، د انګلیسي زده کړه، د کار روزنه، د کار مرسته، د کډوالۍ خدمتونه، راجع کول او نور ملاتړ برابروي.",
  aboutBadges: ["501(c)(3) غیرانتفاعي", "په ۱۹۸۹ کې تاسیس شوی", "بیا مېشتېدنه له ۲۰۰۱ راهیسې"],
  servicesLabel: "خدمتونه",
  servicesTitle: "د بیا مېشتېدو، کډوالۍ، کار، زده کړې او ورځني ژوند لپاره عملي ملاتړ.",
  servicesText: "AIRS مراجعین له مستقیمو خدمتونو، بې له نوبته ملاتړ، میاشتنیو ټولګیو، ټولنیزو راجع کولو او په اریزونا کې د ژوند له لارښوونې سره نښلوي.",
  services: [
    { title: "د بیا مېشتېدو ملاتړ", text: "تازه راغلو پناه غوښتونکو او کډوالو ته ملاتړ، چې کور، خواړه، کالي، راجع کول او د ثبات بیا جوړولو مرسته پکې شامله ده." },
    { title: "د کار خدمتونه", text: "د کار روزنه، د کار موندنې مرسته، د کار ځای چمتووالی او له ځایي فرصتونو سره د مراجعینو نښلول." },
    { title: "د کډوالۍ خدمتونه", text: "بې له نوبته د کورنۍ عریضو، تابعیت، دایمي استوګنې، بدیلو اسنادو، خوندي حالت او کورنۍ بیا یوځای کولو ملاتړ." },
    { title: "ټولګي او زده کړه", text: "میاشتني ټولګي د مالي موضوعاتو، پولیس روزنې، روغتیا او حفظ الصحې، او عامه ترانسپورت لارښوونې په اړه." },
    { title: "د ترانسپورت مرسته", text: "له طبي ملاقاتونو، خدمتونو، مرستو، عامه ترانسپورت او ټولنیزو سرچینو سره د مراجعینو نښلول." },
    { title: "د SIV کورنیو ملاتړ", text: "د ځانګړي کډوال ویزې لرونکو لپاره بې له نوبته خدمتونه، لکه Reception & Placement، Matching Grant، Preferred Communities، Employment Services او State RRP Benefits." },
  ],
  requestHelp: "د مرستې غوښتنه",
  getHelpLabel: "مرسته ترلاسه کړئ",
  getHelpTitle: "له AIRS سره اړیکه ونیسئ یا د خدمت ساعتونو کې دفتر ته ورشئ.",
  getHelpText: "د خدمتونو، ملاتړ یا عمومي مرستې لپاره له AIRS سره د اړیکې لپاره دا فورمه وکاروئ. د ټیم یو غړی به د ورکړل شوو اړیکو له لارې درسره اړیکه ونیسي.",
  officeInfo: "د دفتر معلومات",
  location: "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
  fax: "فکس: (602) 944-1860",
  officeHours: "دوشنبه تر جمعې، 9:00 AM–4:30 PM",
  holidayNote: "دفتر په فدرالي رخصتیو کې تړلی وي.",
  fullName: "بشپړ نوم",
  fullNamePlaceholder: "ستاسو نوم",
  contactMethod: "تلیفون یا ایمیل",
  contactPlaceholder: "تر ټولو ښه اړیکه",
  preferredLanguage: "غوره ژبه",
  serviceNeeded: "اړین خدمت",
  serviceOptions: ["د کډوالۍ ملاتړ", "د کور یا بیا مېشتېدو ملاتړ", "د کار ملاتړ", "ټولګي یا زده کړه", "د مرستې یا رضاکارۍ پوښتنه", "نور"],
  message: "پیغام",
  messagePlaceholder: "موږ ته ووایاست چې په څه کې مرسته ته اړتیا لرئ",
  consent: "زه منم چې AIRS زما د غوښتنې په اړه له ما سره اړیکه ونیسي.",
  submitRequest: "غوښتنه ولېږئ",
  officialInfoLabel: "د AIRS رسمي معلومات",
  officialInfoTitle: "هغه اصلي معلومات چې د اوسني AIRS ویب پاڼې څخه ساتل شوي دي.",
  infoCards: [
    { title: "ماموریت", text: "AIRS اریزونا ته راتلونکو پناه غوښتونکو او کډوالو اړتیاوو پوره کولو لپاره ټولنیز او تعلیمي خدمتونه وړاندې کوي او له راتګ څخه تر ځان بساینې پورې بریالی انتقال یقیني کوي." },
    { title: "د ECDC اړیکه", text: "AIRS د ECDC فرعي اداره ده او خپل فعالیتونه د فدرالي، ایالتي، ټولنیزو او انفرادي شریکانو په ملاتړ ترسره کوي." },
    { title: "د دفتر ساعتونه", text: "دوشنبه تر جمعې، 9:00 AM–4:30 PM. دفتر په فدرالي رخصتیو کې تړلی وي." },
  ],
  programDetailsLabel: "د پروګرام جزییات",
  programDetailsTitle: "بې له نوبته خدمتونه، میاشتني ټولګي او SIV ملاتړ.",
  immigrationTitle: "د کډوالۍ متخصص",
  immigrationIntro: "بې له نوبته ساعتونه چهارشنبه او جمعه له 11:00 AM څخه تر 2:00 PM پورې دي. له دې ساعتونو بهر د ملاقات لپاره مهرباني وکړئ زنګ ووهئ.",
  immigrationServices: ["د خپلوانو عریضې", "تابعیت", "دایمي استوګنه", "د ورک یا غلا شوو اسنادو بدلول", "ځانګړی خوندي حالت / Deferred Enforced Departure", "د کورنۍ بیا یوځای کول"],
  classesTitle: "د میاشتنیو ټولګیو مهالویش",
  monthlyClasses: ["لومړۍ سه شنبه @ 11:30 AM — د Wells Fargo مالي ټولګی", "دوهمه سه شنبه @ 11:30 AM — د Phoenix PD پولیس روزنه", "درېیمه سه شنبه @ 11:30 AM — د حفظ الصحې او روغتیا ټولګی", "وروستۍ سه شنبه @ 11:30 AM — د Phoenix Valley Metro بس او لایټ رېل روزنه"],
  sivTitle: "بې له نوبته SIV خدمتونه",
  sivServices: ["Reception & Placement", "Matching Grant", "Preferred Communities", "Employment Services", "State RRP Benefits"],
  donateTitle: "د AIRS د بیا مېشتېدو خدمتونو ملاتړ وکړئ.",
  donateText: "کوچني کورني توکي، نرم توکي او ګفټ کارتونه د دفتر په ساعتونو کې AIRS ته سپارل کېدای شي. د فرنیچر او لویو توکو د سپارلو لپاره مهرباني وکړئ د ملاقات لپاره زنګ ووهئ.",
  donateNow: "اوس مرسته وکړئ",
  donationCategories: "هغه توکي چې AIRS یې مني",
  donationItems: ["د مسلکي کالیو، خوراکي توکو او thrift stores لپاره ګفټ کارتونه", "پاک کالي", "ډیوډورنټ، صابون، شامپو، د غاښونو کریم، تشناب کاغذ، ډایپرونه او wipes", "بس پاسونه، خوندي بایسکلونه، قلفونه او څراغونه، هیلمټونه، د موټر څوکۍ، strollers او wheelchairs", "د لوښو صابون، د کاليو صابون، عمومي پاکوونکی او کاغذي تولیې", "بکسونه، کتابچې، پنسلونه، فولډرونه، رنګونه، قیچي، ګلو او پاکوونکي", "د Twin کټ شیتونه، کمپلې او عادي بالښتونه", "لپټاپونه، ډیسټاپونه، سمارټ فونونه او ټابلېټونه"],
  donationNote: "ګفټ کارتونه دې پته ته لېږل کېدای شي: 10240 N 31st Ave #112, Phoenix, AZ 85051. د رسید لپاره خپل نوم، پته او د ډالۍ اندازه ولیکئ. د مرستې رسید لپاره info@airsaz.org ته ایمیل وکړئ.",
  volunteerLabel: "رضاکار",
  volunteerTitle: "د AIRS د رضاکارانو کورنۍ سره یوځای شئ.",
  volunteerText: "د AIRS رضاکاران د ترانسپورت، ژبې ملاتړ، ESL تدریس، پېښو، تخنیکي ملاتړ، کلتوري لارښوونې، د مرستو راټولولو، advocacy، mentorۍ او ټولنیز outreach کې مرسته کوي.",
  applyVolunteer: "د رضاکارۍ لپاره غوښتنه وکړئ",
  volunteerProcessTitle: "د رضاکارۍ پروسه",
  volunteerProcess: ["ډاډ ترلاسه کړئ چې تاسو د AIRS سره رضاکار کار پیلولو ته چمتو یاست.", "ټول رضاکاري اسناد وسپارئ.", "د orientation مهالویش لپاره د AIRS د ټیم له ایمیل څخه انتظار وکړئ.", "ډېری رضاکاري کارونه دوشنبه تر جمعې، 9:00 AM–5:00 PM، د شمالي فینکس دفتر ته نږدې ترسره کېږي."],
  volunteerRoles: ["طبي ملاقاتونو ته ترانسپورت", "ژباړه او تفسیر", "د انګلیسي دوهمې ژبې تدریس", "فنډرېزرونه او پېښې", "د دفتر تخنیکي ملاتړ", "کلتوري orientation ملاتړ", "د مرستو اخیستل او رسول", "ټولنیز advocacy", "د یوې پناه غوښتونکې کورنۍ mentorۍ", "ټولنیز outreach"],
  eventsLabel: "پېښې او ټولګي",
  eventsTitle: "میاشتني تعلیمي او orientation فرصتونه.",
  viewEvents: "د نېټو لپاره AIRS سره اړیکه ونیسئ",
  events: [
    { title: "مالي ټولګی", date: "لومړۍ سه شنبه @ 11:30 AM", text: "د Wells Fargo سره مالي زده کړه." },
    { title: "پولیس روزنه", date: "دوهمه سه شنبه @ 11:30 AM", text: "د Phoenix PD سره د ټولنې خوندیتوب او پولیس روزنه." },
    { title: "د ترانسپورت روزنه", date: "وروستۍ سه شنبه @ 11:30 AM", text: "د Phoenix Valley Metro د بس او لایټ رېل روزنه." },
  ],
  footerText: "AIRS په اریزونا کې د پناه غوښتونکو او کډوالو کورنیو سره مرسته کوي چې خدمتونو، سرچینو او ټولنیزو اړیکو ته لاسرسی ومومي.",
  footerQuickLinks: "چټک لینکونه",
  footerServicesTitle: "خدمتونه",
  footerGetInvolved: "ګډون وکړئ",
  footerLegalText: "AIRS یو 501(c)(3) غیرانتفاعي سازمان دی. وروستۍ لیکنه، د محرمیت پالیسي، د مرستو لینکونه او د غیرانتفاعي معلومات له AIRS سره د پیل مخکې تایید کړئ.",
  footerCopyright: "© 2026 AIRS. ټول حقوق خوندي دي.",
  getDirections: "(لارښوونې ترلاسه کړئ)",
  donationNoteLabel: "د مرستې یادونه:",
  privacyNotice: "ستاسو معلومات به یوازې AIRS وکاروي ترڅو ستاسو غوښتنې ته ځواب ووایي.",
  formSuccess: "مننه. ستاسو غوښتنه ترلاسه شوه او AIRS به ژر تعقیب وکړي.",
  formError: "یو څه ناسم شول. مهرباني وکړئ بیا هڅه وکړئ یا مستقیم له AIRS سره اړیکه ونیسئ.",
  sending: "لېږل کېږي...",
  askAboutDonations: "د مرستو په اړه پوښتنه وکړئ",
  paypalNotice: "مرستې په خوندي ډول د PayPal له لارې پروسس کېږي. مهرباني وکړئ د وروستي پیل مخکې د AIRS رسمي PayPal لینک تایید کړئ."
};

localizedContent.Ukrainian = {
  ...translations.English,
  siteFullName: "Служби іммігрантів і біженців Аризони",
  nav: ["Головна", "Про нас", "Послуги", "Отримати допомогу", "Пожертви", "Волонтерство", "Події", "Контакти"],
  donateButton: "Пожертвувати",
  languageLabel: "Виберіть мову",
  heroBadge: "Послуги для біженців та іммігрантів у окрузі Марікопа",
  heroTitle: "Підтримка біженців та іммігрантів від прибуття до самостійності.",
  heroText: "AIRS надає соціальні, освітні та послуги з переселення для біженців та іммігрантів, які прибувають до Аризони, допомагаючи сім’ям успішно перейти до життя в громаді.",
  getHelpButton: "Отримати допомогу",
  volunteerButton: "Стати волонтером",
  statYears: "Засновано у 1989 році",
  statResettled: "1 910 переселених",
  statLanguages: "Послуги та направлення",
  aboutLabel: "Хто ми",
  aboutTitle: "AIRS десятиліттями служить громадам Фінікса та округу Марікопа.",
  aboutText1: "Arizona Immigrant and Refugee Services — це неприбуткова організація 501(c)(3), заснована у 1989 році для надання соціальних, економічних та освітніх послуг мешканцям внутрішніх районів Фінікса. У 2001 році AIRS почала переселяти біженців, зокрема молодь Kakuma, також відому як Lost Boys, серед перших прибулих.",
  aboutText2: "З 2001 року AIRS переселила 1 910 біженців та іммігрантів в окрузі Марікопа. Програми AIRS забезпечують новоприбулих біженців та легальних іммігрантів житлом, їжею, одягом, перекладом за потреби, навчанням англійської мови, професійною підготовкою, допомогою з працевлаштуванням, імміграційними послугами, направленнями та іншою підтримкою.",
  aboutBadges: ["Неприбуткова 501(c)(3)", "Засновано у 1989 році", "Переселення з 2001 року"],
  servicesLabel: "Послуги",
  servicesTitle: "Практична підтримка з переселення, імміграції, працевлаштування, освіти та повсякденного життя.",
  servicesText: "AIRS поєднує клієнтів із прямими послугами, підтримкою без попереднього запису, щомісячними заняттями, громадськими направленнями та допомогою в адаптації до життя в Аризоні.",
  services: [
    { title: "Підтримка переселення", text: "Підтримка новоприбулих біженців та іммігрантів, включно з житлом, їжею, одягом, направленнями та допомогою у відновленні стабільності." },
    { title: "Послуги працевлаштування", text: "Професійна підготовка, допомога з працевлаштуванням, підготовка до роботи та підтримка у зв’язку з місцевими можливостями." },
    { title: "Імміграційні послуги", text: "Підтримка без попереднього запису для родинних петицій, громадянства, постійного проживання, заміни документів, захищеного статусу та возз’єднання сім’ї." },
    { title: "Заняття та освіта", text: "Щомісячні заняття з фінансових тем, поліцейського тренінгу, гігієни та здоров’я, а також орієнтації щодо громадського транспорту." },
    { title: "Допомога з транспортом", text: "Підтримка у доступі до медичних зустрічей, послуг, пожертв, громадського транспорту та ресурсів громади." },
    { title: "Підтримка сімей SIV", text: "Послуги без попереднього запису для власників Special Immigrant Visa, включно з Reception & Placement, Matching Grant, Preferred Communities, Employment Services та State RRP Benefits." },
  ],
  requestHelp: "Запросити допомогу",
  getHelpLabel: "Отримати допомогу",
  getHelpTitle: "Зв’яжіться з AIRS або відвідайте офіс у години роботи.",
  getHelpText: "Використайте цю форму, щоб звернутися до AIRS щодо послуг, підтримки або загальної допомоги. Член команди зв’яжеться з вами за наданою контактною інформацією.",
  officeInfo: "Інформація про офіс",
  location: "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
  fax: "Факс: (602) 944-1860",
  officeHours: "Понеділок–п’ятниця, 9:00 AM–4:30 PM",
  holidayNote: "Офіс зачинений у федеральні свята.",
  fullName: "Повне ім’я",
  fullNamePlaceholder: "Ваше ім’я",
  contactMethod: "Телефон або електронна пошта",
  contactPlaceholder: "Найкращий спосіб зв’язку",
  preferredLanguage: "Бажана мова",
  serviceNeeded: "Потрібна послуга",
  serviceOptions: ["Імміграційна підтримка", "Підтримка з житлом або переселенням", "Підтримка з працевлаштуванням", "Заняття або освіта", "Питання про пожертви або волонтерство", "Інше"],
  message: "Повідомлення",
  messagePlaceholder: "Розкажіть, з чим вам потрібна допомога",
  consent: "Я погоджуюся, що AIRS може зв’язатися зі мною щодо мого запиту.",
  submitRequest: "Надіслати запит",
  officialInfoLabel: "Офіційна інформація AIRS",
  officialInfoTitle: "Основні факти, перенесені з поточного сайту AIRS.",
  infoCards: [
    { title: "Місія", text: "AIRS надає соціальні та освітні послуги для задоволення потреб біженців та іммігрантів, які прибувають до Аризони, забезпечуючи успішний перехід від прибуття до самостійності." },
    { title: "Зв’язок з ECDC", text: "AIRS є дочірньою організацією ECDC і здійснює діяльність за підтримки федеральних, штатних, громадських та індивідуальних партнерів." },
    { title: "Години роботи офісу", text: "Понеділок–п’ятниця, 9:00 AM–4:30 PM. Офіс зачинений у федеральні свята." },
  ],
  programDetailsLabel: "Деталі програм",
  programDetailsTitle: "Послуги без запису, щомісячні заняття та підтримка SIV.",
  immigrationTitle: "Імміграційний спеціаліст",
  immigrationIntro: "Години прийому без запису: середа та п’ятниця з 11:00 AM до 2:00 PM. Будь ласка, зателефонуйте, щоб записатися поза цими годинами.",
  immigrationServices: ["Родинні петиції", "Громадянство", "Постійне проживання", "Заміна втрачених або викрадених документів", "Спеціальний захищений статус / Deferred Enforced Departure", "Возз’єднання сім’ї"],
  classesTitle: "Щомісячний розклад занять",
  monthlyClasses: ["Перший вівторок @ 11:30 AM — фінансовий клас з Wells Fargo", "Другий вівторок @ 11:30 AM — тренінг з поліцією Phoenix PD", "Третій вівторок @ 11:30 AM — клас з гігієни та здоров’я", "Останній вівторок @ 11:30 AM — тренінг з автобусів і Light-rail з Phoenix Valley Metro"],
  sivTitle: "Послуги SIV без запису",
  sivServices: ["Reception & Placement", "Matching Grant", "Preferred Communities", "Employment Services", "State RRP Benefits"],
  donateTitle: "Підтримайте послуги переселення AIRS.",
  donateText: "Невеликі побутові речі, м’які товари та подарункові картки можна приносити до AIRS у години роботи офісу. Будь ласка, телефонуйте, щоб домовитися про передачу меблів та великих речей.",
  donateNow: "Пожертвувати зараз",
  donationCategories: "Речі, які приймає AIRS",
  donationItems: ["Подарункові картки для професійного одягу, продуктів і секонд-хендів", "Чистий одяг", "Дезодорант, мило, шампунь, зубна паста, туалетний папір, підгузки та серветки", "Автобусні проїзні, безпечні велосипеди, замки й ліхтарі, шоломи, автокрісла, візочки та інвалідні візки", "Засіб для посуду, пральний засіб, універсальний очищувач і паперові рушники", "Рюкзаки, зошити, олівці, папки, крейда, ножиці, клей і гумки", "Комплекти простирадл twin, ковдри twin і стандартні подушки", "Ноутбуки, настільні комп’ютери, смартфони та планшети"],
  donationNote: "Подарункові картки можна надіслати на адресу 10240 N 31st Ave #112, Phoenix, AZ 85051. Для квитанції вкажіть ім’я, адресу та суму подарунка. Для квитанцій про пожертви напишіть на info@airsaz.org.",
  volunteerLabel: "Волонтерство",
  volunteerTitle: "Приєднайтеся до волонтерської родини AIRS.",
  volunteerText: "Волонтери AIRS допомагають з транспортом, мовною підтримкою, викладанням ESL, подіями, технічною підтримкою, культурною орієнтацією, збором пожертв, адвокацією, наставництвом та громадською роботою.",
  applyVolunteer: "Подати заявку на волонтерство",
  volunteerProcessTitle: "Процес волонтерства",
  volunteerProcess: ["Переконайтеся, що ви готові почати волонтерську роботу з AIRS.", "Подайте всі волонтерські документи.", "Очікуйте електронного листа від команди AIRS для планування орієнтації.", "Більшість волонтерських робіт відбувається понеділок–п’ятниця, 9:00 AM–5:00 PM, в офісі Північного Фінікса або поруч."],
  volunteerRoles: ["Транспорт до та з медичних зустрічей", "Переклад і усний переклад", "Викладання англійської як другої мови", "Фандрейзери та події", "Офісна технічна підтримка", "Підтримка культурної орієнтації", "Збір і доставка пожертв", "Громадська адвокація", "Наставництво для сім’ї біженців", "Громадська робота"],
  eventsLabel: "Події та заняття",
  eventsTitle: "Щомісячні освітні та орієнтаційні можливості.",
  viewEvents: "Зв’яжіться з AIRS щодо дат",
  events: [
    { title: "Фінансовий клас", date: "Перший вівторок @ 11:30 AM", text: "Фінансова освіта з Wells Fargo." },
    { title: "Поліцейський тренінг", date: "Другий вівторок @ 11:30 AM", text: "Громадська безпека та поліцейський тренінг з Phoenix PD." },
    { title: "Транспортний тренінг", date: "Останній вівторок @ 11:30 AM", text: "Навчання користуванню автобусом і Light-rail з Phoenix Valley Metro." },
  ],
  footerText: "AIRS допомагає сім’ям біженців та іммігрантів отримувати доступ до підтримки, ресурсів і зв’язків у громаді по всій Аризоні.",
  footerQuickLinks: "Швидкі посилання",
  footerServicesTitle: "Послуги",
  footerGetInvolved: "Долучитися",
  footerLegalText: "AIRS є неприбутковою організацією 501(c)(3). Перевірте остаточний текст, політику конфіденційності, посилання для пожертв та дані неприбуткової організації з AIRS перед запуском.",
  footerCopyright: "© 2026 AIRS. Усі права захищено.",
  getDirections: "(Отримати маршрут)",
  donationNoteLabel: "Примітка щодо пожертв:",
  privacyNotice: "Вашу інформацію AIRS використовуватиме лише для відповіді на ваш запит.",
  formSuccess: "Дякуємо. Ваш запит отримано, і AIRS незабаром зв’яжеться з вами.",
  formError: "Щось пішло не так. Спробуйте ще раз або зв’яжіться з AIRS напряму.",
  sending: "Надсилання...",
  askAboutDonations: "Запитати про пожертви",
  paypalNotice: "Пожертви безпечно обробляються через PayPal. Будь ласка, підтвердьте офіційне посилання AIRS PayPal перед остаточним запуском."
};


const translatedNav = {
  Spanish: ["Inicio", "Acerca de", "Servicios", "Obtener Ayuda", "Donar", "Voluntariado", "Eventos", "Contacto"],
  Arabic: ["الرئيسية", "من نحن", "الخدمات", "احصل على المساعدة", "تبرع", "تطوع", "الفعاليات", "اتصل بنا"],
  Dari: ["خانه", "درباره", "خدمات", "کمک بگیرید", "کمک مالی", "داوطلبی", "رویدادها", "تماس"],
  Pashto: ["کور", "زموږ په اړه", "خدمتونه", "مرسته ترلاسه کړئ", "مرسته وکړئ", "رضاکار شئ", "پېښې", "اړیکه"],
  Ukrainian: ["Головна", "Про нас", "Послуги", "Отримати допомогу", "Пожертви", "Волонтерство", "Події", "Контакти"],
  Swahili: ["Nyumbani", "Kuhusu", "Huduma", "Pata Msaada", "Changia", "Jitolee", "Matukio", "Mawasiliano"],
  French: ["Accueil", "À propos", "Services", "Obtenir de l’aide", "Faire un don", "Bénévolat", "Événements", "Contact"],
  Kinyarwanda: ["Ahabanza", "Ibyerekeye", "Serivisi", "Saba ubufasha", "Tanga inkunga", "Ba umukorerabushake", "Ibikorwa", "Twandikire"],
};

const translatedUi = {
  Spanish: { donateButton: "Donar", getHelpButton: "Obtener ayuda", volunteerButton: "Ser voluntario", languageLabel: "Seleccionar idioma" },
  Arabic: { donateButton: "تبرع", getHelpButton: "احصل على المساعدة", volunteerButton: "تطوع معنا", languageLabel: "اختر اللغة" },
  Dari: { donateButton: "کمک مالی", getHelpButton: "کمک بگیرید", volunteerButton: "با ما داوطلب شوید", languageLabel: "انتخاب زبان" },
  Pashto: { donateButton: "مرسته وکړئ", getHelpButton: "مرسته ترلاسه کړئ", volunteerButton: "زموږ سره رضاکار شئ", languageLabel: "ژبه وټاکئ" },
  Ukrainian: { donateButton: "Пожертвувати", getHelpButton: "Отримати допомогу", volunteerButton: "Стати волонтером", languageLabel: "Виберіть мову" },
  Swahili: { donateButton: "Changia", getHelpButton: "Pata Msaada", volunteerButton: "Jitolee Nasi", languageLabel: "Chagua lugha" },
  French: { donateButton: "Faire un don", getHelpButton: "Obtenir de l’aide", volunteerButton: "Devenir bénévole", languageLabel: "Choisir la langue" },
  Kinyarwanda: { donateButton: "Tanga inkunga", getHelpButton: "Saba ubufasha", volunteerButton: "Ba umukorerabushake", languageLabel: "Hitamo ururimi" },
};

const serviceIcons = [Home, Briefcase, FileText, GraduationCap, Truck, ShieldCheck];
const cardClass = "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl";
const sectionClass = "mx-auto max-w-7xl px-5 py-20 lg:px-8";

function getSectionId(label, t) {
  const index = t.nav.indexOf(label);
  return sectionIds[index] || label.toLowerCase().replaceAll(" ", "-");
}

function SectionLabel({ children, color = "text-teal-700" }) {
  return <p className={`text-sm font-black uppercase tracking-[0.2em] ${color}`}>{children}</p>;
}

function DirectionalArrow({ isRtl, size = 18, className = "" }) {
  return <ArrowRight size={size} className={`${isRtl ? "rotate-180" : ""} ${className}`} />;
}

function BrandLogo({ compact = false, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={airsLogo}
        alt="Arizona Immigrant & Refugee Services logo"
        className={`${compact ? "h-12" : "h-16"} w-auto max-w-[150px] object-contain`}
      />
      <span className="sr-only">Arizona Immigrant & Refugee Services</span>
    </div>
  );
}

function Navbar({ language, setLanguage, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#home" className="flex items-center"><BrandLogo compact /></a>
        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => <a key={item} href={`#${getSectionId(item, t)}`} className="text-sm font-bold text-slate-700 transition hover:text-teal-700">{item}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-teal-700" aria-label={t.languageLabel}>
            {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
          </select>
          <a href="#donate" className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-orange-600">{t.donateButton}</a>
        </div>
        <button className="rounded-xl p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open mobile menu">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {t.nav.map((item) => <a key={item} href={`#${getSectionId(item, t)}`} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">{item}</a>)}
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold" aria-label={t.languageLabel}>
              {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ t, isRtl }) {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.22),_transparent_38%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-teal-100"><Languages size={17} /> {t.heroBadge}</div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-help" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 text-base font-black text-white shadow-lg shadow-teal-950/30 transition hover:bg-teal-400">{t.getHelpButton} <DirectionalArrow isRtl={isRtl} /></a>
            <a href="#volunteer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-black text-white transition hover:bg-white/15">{t.volunteerButton}</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
            <img src={originalHeroImage} alt="AIRS community group photo" className="h-[420px] w-full object-cover brightness-90" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-xl backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[t.statYears, t.statResettled, t.statLanguages].map((stat) => <p key={stat} className="rounded-2xl bg-slate-100 px-3 py-4 text-sm font-black text-slate-700">{stat}</p>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="bg-white">
      <div className={`${sectionClass} grid gap-10 lg:grid-cols-[0.9fr_1.1fr]`}>
        <div><SectionLabel>{t.aboutLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.aboutTitle}</h2></div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>{t.aboutText1}</p><p>{t.aboutText2}</p>
          <div className="grid gap-3 sm:grid-cols-3">{t.aboutBadges.map((item) => <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-100 p-4 text-base font-black text-slate-800"><CheckCircle2 className="text-teal-700" size={19} /> {item}</div>)}</div>
        </div>
      </div>
    </section>
  );
}

function Services({ t, isRtl }) {
  return (
    <section id="services" className={sectionClass}>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionLabel>{t.servicesLabel}</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.servicesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.servicesText}</p>
        </div>
        <img src={officeImage} alt="Client support meeting in an office" className="h-72 w-full rounded-[2rem] object-cover shadow-xl" loading="lazy" />
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.map((service, index) => { const Icon = serviceIcons[index]; return <div key={service.title} className={cardClass}><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24} /></div><h3 className="text-xl font-black text-slate-950">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.text}</p><a href="#get-help" className="mt-5 inline-flex items-center gap-2 font-black text-teal-700">{t.requestHelp} <DirectionalArrow isRtl={isRtl} size={17} /></a></div>; })}
      </div>
    </section>
  );
}

function GetHelp({ t, language }) {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xjglyqqe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        event.currentTarget.reset();
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="get-help" className="bg-white">
      <div className={`${sectionClass} grid gap-10 lg:grid-cols-[0.85fr_1.15fr]`}>
        <div>
          <SectionLabel color="text-orange-600">{t.getHelpLabel}</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.getHelpTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.getHelpText}</p>
          <div className="mt-8 rounded-3xl bg-slate-100 p-6">
            <h3 className="font-black text-slate-950">{t.officeInfo}</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open AIRS address in Google Maps" className="flex gap-3 transition hover:text-teal-700">
                <MapPin className="mt-0.5 text-teal-700" size={19} />
                <span>{t.location} <span className="text-xs font-black text-teal-700">{t.getDirections || "(Get Directions)"}</span></span>
              </a>
              <a href={phoneHref} className="flex gap-3 transition hover:text-teal-700">
                <Phone className="mt-0.5 text-teal-700" size={19} />
                {t.phonePlaceholder}
              </a>
              <a href={emailHref} className="flex gap-3 transition hover:text-teal-700">
                <Mail className="mt-0.5 text-teal-700" size={19} />
                {t.emailPlaceholder}
              </a>
              <p className="flex gap-3"><CalendarDays className="mt-0.5 text-teal-700" size={19} /> {t.officeHours}</p>
              <p className="text-sm font-semibold text-slate-500">{t.holidayNote}</p>
              <p className="text-sm font-semibold text-slate-500">{t.fax}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <input type="hidden" name="_subject" value="New AIRS Help Request" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-slate-700">
              {t.fullName}
              <input name="fullName" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.fullNamePlaceholder} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-700">
              {t.contactMethod}
              <input name="contact" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.contactPlaceholder} />
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-700">
              {t.preferredLanguage}
              <select name="preferredLanguage" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">
                {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-700">
              {t.serviceNeeded}
              <select name="serviceNeeded" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">
                {t.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-black text-slate-700">
            {t.message}
            <textarea name="message" required rows="5" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.messagePlaceholder} />
          </label>
          <label className="mt-4 flex gap-3 text-sm leading-6 text-slate-600">
            <input name="consent" required type="checkbox" className="mt-1" /> {t.consent}
          </label>
          <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">{t.privacyNotice || "Your information will only be used by AIRS to respond to your request."}</p>
          <button type="submit" disabled={formStatus === "loading"} className="mt-6 w-full rounded-2xl bg-teal-700 px-6 py-3 font-black text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70">
            {formStatus === "loading" ? "Sending..." : t.submitRequest}
          </button>
          <div aria-live="polite">
            {formStatus === "success" && <p className="mt-4 rounded-2xl bg-green-50 p-4 text-sm font-bold text-green-800">Thank you. Your request has been received and AIRS will follow up soon.</p>}
            {formStatus === "error" && <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-800">Something went wrong. Please try again or contact AIRS directly.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function OfficialInfo({ t }) {
  return (
    <section className={sectionClass}>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionLabel>{t.officialInfoLabel}</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.officialInfoTitle}</h2>
          <div className="mt-8 grid gap-5">
            {t.infoCards.map((item) => (
              <div key={item.title} className={cardClass}>
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={familyImage} alt="AIRS family and community support" className="h-[34rem] w-full rounded-[2rem] object-cover shadow-xl" loading="lazy" />
      </div>
    </section>
  );
}

function ProgramDetails({ t }) {
  const detailBlocks = [
    { title: t.immigrationTitle, intro: t.immigrationIntro, items: t.immigrationServices },
    { title: t.classesTitle, intro: "", items: t.monthlyClasses },
    { title: t.sivTitle, intro: "", items: t.sivServices },
  ];

  return (
    <section className="bg-white">
      <div className={sectionClass}>
        <SectionLabel color="text-orange-600">{t.programDetailsLabel}</SectionLabel>
        <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.programDetailsTitle}</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {detailBlocks.map((block) => (
            <div key={block.title} className={cardClass}>
              <h3 className="text-xl font-black text-slate-950">{block.title}</h3>
              {block.intro && <p className="mt-3 leading-7 text-slate-600">{block.intro}</p>}
              <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-600">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-teal-700" size={17} /> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donate({ t, isRtl }) {
  const paypalTestLink = "https://www.paypal.com/donate";

  return (
    <section id="donate" className={sectionClass}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="overflow-hidden rounded-[2rem] bg-teal-700 text-white shadow-xl">
          <img
            src={donationsImage}
            alt="Volunteers organizing donation boxes for families"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
          <div className="p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Heart size={34} />
            </div>
            <h2 className="mt-5 text-3xl font-black">{t.donateTitle}</h2>
            <p className="mt-4 leading-7 text-teal-50">{t.donateText}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={paypalTestLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-teal-800 shadow-sm transition hover:bg-teal-50"
              >
                {t.donateNow}
                <DirectionalArrow isRtl={isRtl} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/15"
              >
                {t.askAboutDonations || "Ask About Donations"}
              </a>
            </div>

            <p className="mt-4 text-sm font-semibold leading-6 text-teal-50">
              {t.paypalNotice || "Donations are securely processed through PayPal. Please confirm the official AIRS PayPal donation link before final launch."}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionLabel color="text-orange-600">{t.donationCategories}</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.donationItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-100 p-4 font-black text-slate-700">
                <HandHeart className="mt-0.5 shrink-0 text-orange-600" size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-orange-50 p-5 leading-7 text-slate-700">
            <strong>{t.donationNoteLabel || "Donation note:"}</strong> {t.donationNote}
          </div>
        </div>
      </div>
    </section>
  );
}

function Volunteer({ t, isRtl }) {
  return (
    <section id="volunteer" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel color="text-teal-300">{t.volunteerLabel}</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.volunteerTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{t.volunteerText}</p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
            <h3 className="font-black text-white">{t.volunteerProcessTitle}</h3>
            <ol className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-300">
              {t.volunteerProcess.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
            </ol>
          </div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 font-black text-white hover:bg-teal-400">{t.applyVolunteer} <DirectionalArrow isRtl={isRtl} /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.volunteerRoles.map((role) => <div key={role} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5"><span className="font-black">{role}</span><DirectionalArrow isRtl={isRtl} className="text-teal-300" size={20} /></div>)}
        </div>
      </div>
    </section>
  );
}

function Events({ t }) {
  return <section id="events" className={sectionClass}><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><SectionLabel>{t.eventsLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.eventsTitle}</h2></div><a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-800 shadow-sm">{t.viewEvents} <CalendarDays size={18} /></a></div><div className="mt-8 grid gap-5 md:grid-cols-3">{t.events.map((event) => <div key={event.title} className={cardClass}><p className="text-sm font-black text-orange-600">{event.date}</p><h3 className="mt-3 text-xl font-black text-slate-950">{event.title}</h3><p className="mt-3 text-slate-600">{event.text}</p></div>)}</div></section>;
}

function ContactFooter({ t }) {
  const quickLinks = t.nav.map((item) => ({ label: item, href: `#${getSectionId(item, t)}` }));
  const serviceLinks = t.services.slice(0, 6).map((service) => ({ label: service.title, href: "#services" }));
  const involvedLinks = [{ label: t.donateButton, href: "#donate" }, { label: t.volunteerButton, href: "#volunteer" }, { label: t.getHelpButton, href: "#get-help" }];
  return <footer id="contact" className="border-t border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:px-8"><div><BrandLogo compact /><p className="mt-5 max-w-md leading-7 text-slate-600">{t.footerText}</p><div className="mt-6 space-y-3 text-slate-600">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open AIRS address in Google Maps" className="flex gap-3 transition hover:text-teal-700"><MapPin size={18} className="mt-0.5 shrink-0 text-teal-700" /> <span>{t.location} <span className="text-xs font-black text-teal-700">{t.getDirections || "(Get Directions)"}</span></span></a>
            <a href={phoneHref} className="flex gap-3 transition hover:text-teal-700"><Phone size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addPhone}</a>
            <a href={emailHref} className="flex gap-3 transition hover:text-teal-700"><Mail size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addEmail}</a>
          </div></div><div><h3 className="font-black text-slate-950">{t.footerQuickLinks}</h3><div className="mt-4 grid gap-3">{quickLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerServicesTitle}</h3><div className="mt-4 grid gap-3">{serviceLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerGetInvolved}</h3><div className="mt-4 grid gap-3">{involvedLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div></div><div className="border-t border-slate-200 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>{t.footerCopyright}</p><p className="max-w-2xl">{t.footerLegalText}</p></div></div></footer>;
}

export default function App() {
  const [language, setLanguage] = useState("English");
  const t = { ...translations.English, ...(localizedContent[language] || {}), nav: (localizedContent[language]?.nav || translatedNav[language] || translations.English.nav), ...(translatedUi[language] || {}) };
  const direction = languageDirections[language] || "ltr";
  const isRtl = direction === "rtl";
  const languageCode = languageCodes[language] || "en";

  return (
    <div className={`min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 ${isRtl ? "text-right" : "text-left"}`} dir={direction} lang={languageCode}>
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} isRtl={isRtl} />
        <About t={t} />
        <Services t={t} isRtl={isRtl} />
        <GetHelp t={t} language={language} />
        <OfficialInfo t={t} />
        <ProgramDetails t={t} />
        <Donate t={t} isRtl={isRtl} />
        <Volunteer t={t} isRtl={isRtl} />
        <Events t={t} />
      </main>
      <ContactFooter t={t} />
    </div>
  );
}
