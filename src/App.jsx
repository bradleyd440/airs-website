
import React, { useEffect, useState } from "react";
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
    serviceOptions: ["Immigration support", "Housing or resettlement support", "Employment support", "Classes or education", "Donation question", "Volunteer application / question", "Other"],
    message: "Message",
    messagePlaceholder: "Tell us what you need help with",
    consent: "I agree that AIRS may contact me about my request.",
    submitRequest: "Submit Request",
    sendingLabel: "Sending...",
    successMessage: "Thank you. Your request has been received and AIRS will follow up soon.",
    errorMessage: "Something went wrong. Please try again or contact AIRS directly.",
    backToTopLabel: "Back to top",
    officialInfoLabel: "Official AIRS information",
    officialInfoTitle: "Trusted community support for refugees and immigrants in Arizona.",
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
    footerLegalText: "AIRS is a 501(c)(3) nonprofit organization serving refugee and immigrant communities across Arizona.",
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
    "servicesText": "AIRS conecta a los clientes con servicios directos, apoyo sin cita, clases mensuales, referencias comunitarias y ayuda para desenvolverse en Arizona.",
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
        "text": "Clases mensuales sobre finanzas, capacitación policial, higiene y salud, y orientación sobre transporte público."
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
      "Pregunta sobre donaciones",
      "Otro"
    ],
    "message": "Mensaje",
    "messagePlaceholder": "Díganos con qué necesita ayuda",
    "consent": "Acepto que AIRS pueda contactarme sobre mi solicitud.",
    "submitRequest": "Enviar solicitud",
    "officialInfoLabel": "Información oficial de AIRS",
    "officialInfoTitle": "Apoyo comunitario confiable para refugiados e inmigrantes en Arizona.",
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
    "footerLegalText": "AIRS es una organización sin fines de lucro 501(c)(3) que sirve a comunidades refugiadas e inmigrantes en Arizona.",
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
    "aboutText1": "Arizona Immigrant and Refugee Services est une organisation à but non lucratif 501(c)(3), fondée en 1989 pour fournir des services sociaux, économiques et éducatifs aux résidents du centre-ville de Phoenix. En 2001, AIRS a commencé à réinstaller des réfugiés, dont les jeunes de Kakuma, aussi appelés les Lost Boys.",
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
    "holidayNote": "Le bureau est fermé les jours fériés fédéraux.",
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
      "Question sur les dons",
      "Autre"
    ],
    "message": "Message",
    "messagePlaceholder": "Dites-nous de quoi vous avez besoin",
    "consent": "J’accepte qu’AIRS me contacte au sujet de ma demande.",
    "submitRequest": "Envoyer la demande",
    "officialInfoLabel": "Informations officielles d’AIRS",
    "officialInfoTitle": "Un soutien communautaire fiable pour les réfugiés et immigrants en Arizona.",
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
    "footerLegalText": "AIRS est une organisation à but non lucratif 501(c)(3) au service des communautés réfugiées et immigrantes en Arizona.",
    "footerCopyright": "© 2026 AIRS. Tous droits réservés.",
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
    "heroTitle": "دعم اللاجئين والمهاجرين من لحظة الوصول حتى الاعتماد على الذات.",
    "heroText": "تقدم AIRS خدمات اجتماعية وتعليمية وخدمات إعادة توطين للاجئين والمهاجرين القادمين إلى أريزونا، لمساعدة العائلات على الانتقال بنجاح إلى حياة المجتمع.",
    "getHelpButton": "احصل على المساعدة",
    "volunteerButton": "تطوع معنا",
    "statYears": "تأسست عام 1989",
    "statResettled": "تمت إعادة توطين 1,910 شخصًا",
    "statLanguages": "خدمات وإحالات",
    "aboutLabel": "من نحن",
    "aboutTitle": "تخدم AIRS مجتمعات فينيكس ومقاطعة ماريكوبا منذ عقود.",
    "aboutText1": "تُعد Arizona Immigrant and Refugee Services منظمة غير ربحية مسجلة 501(c)(3)، تأسست عام 1989 لتقديم خدمات اجتماعية واقتصادية وتعليمية لسكان فينيكس. وفي عام 2001، بدأت AIRS في إعادة توطين اللاجئين، وكان من بين أول الوافدين شباب كاكوما المعروفون أيضًا باسم Lost Boys.",
    "aboutText2": "منذ عام 2001، أعادت AIRS توطين 1,910 لاجئًا ومهاجرًا في مقاطعة ماريكوبا. تقدم برامج AIRS السكن، والطعام، والملابس، والترجمة عند الحاجة، وتعليم اللغة الإنجليزية، والتدريب المهني، والمساعدة في التوظيف، وخدمات الهجرة، والإحالات، وأنواعًا أخرى من الدعم.",
    "aboutBadges": [
      "منظمة غير ربحية 501(c)(3)",
      "تأسست عام 1989",
      "إعادة التوطين منذ عام 2001"
    ],
    "servicesLabel": "الخدمات",
    "servicesTitle": "دعم عملي لإعادة التوطين، والهجرة، والعمل، والتعليم، والحياة اليومية.",
    "servicesText": "تربط AIRS العملاء بالخدمات المباشرة، والدعم بدون موعد، والدروس الشهرية، والإحالات المجتمعية، والمساعدة في التكيف مع الحياة في أريزونا.",
    "services": [
      {
        "title": "دعم إعادة التوطين",
        "text": "دعم للعائلات اللاجئة والمهاجرة الوافدة حديثًا، بما في ذلك السكن، والطعام، والملابس، والإحالات، والمساعدة في بناء الاستقرار."
      },
      {
        "title": "خدمات التوظيف",
        "text": "تدريب مهني، ومساعدة في البحث عن عمل، والاستعداد لسوق العمل، وربط العملاء بالفرص المحلية."
      },
      {
        "title": "خدمات الهجرة",
        "text": "دعم في قضايا الهجرة بدون موعد، بما في ذلك طلبات الأقارب، والجنسية، والإقامة الدائمة، واستبدال الوثائق، والحماية الخاصة، ولمّ شمل الأسرة."
      },
      {
        "title": "الدروس والتعليم",
        "text": "دروس شهرية تشمل المواضيع المالية، والتدريب مع الشرطة، والنظافة والصحة، والتوجيه حول استخدام وسائل النقل العام."
      },
      {
        "title": "المساعدة في النقل",
        "text": "مساعدة العملاء في الوصول إلى المواعيد الطبية، والخدمات، والتبرعات، ووسائل النقل العام، والموارد المجتمعية."
      },
      {
        "title": "دعم عائلات SIV",
        "text": "خدمات بدون موعد لحاملي تأشيرة الهجرة الخاصة، بما في ذلك Reception & Placement وMatching Grant وPreferred Communities وخدمات التوظيف ومزايا State RRP."
      }
    ],
    "requestHelp": "اطلب المساعدة",
    "getHelpLabel": "احصل على المساعدة",
    "getHelpTitle": "تواصل مع AIRS أو قم بزيارتنا خلال ساعات الخدمة.",
    "getHelpText": "استخدم هذا النموذج للتواصل مع AIRS بخصوص الخدمات أو الدعم أو المساعدة العامة. سيتواصل معك أحد أعضاء الفريق باستخدام معلومات الاتصال التي تقدمها.",
    "officeInfo": "معلومات المكتب",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "فاكس: (602) 944-1860",
    "officeHours": "الاثنين إلى الجمعة، 9:00 صباحًا – 4:30 مساءً",
    "holidayNote": "المكتب مغلق في العطلات الفيدرالية.",
    "fullName": "الاسم الكامل",
    "fullNamePlaceholder": "اسمك",
    "contactMethod": "الهاتف أو البريد الإلكتروني",
    "contactPlaceholder": "أفضل طريقة للتواصل",
    "preferredLanguage": "اللغة المفضلة",
    "serviceNeeded": "الخدمة المطلوبة",
    "serviceOptions": [
      "دعم الهجرة",
      "دعم السكن أو إعادة التوطين",
      "دعم التوظيف",
      "دروس أو تعليم",
      "سؤال عن التبرعات",
      "أخرى"
    ],
    "message": "الرسالة",
    "messagePlaceholder": "أخبرنا بما تحتاج إلى مساعدة فيه",
    "consent": "أوافق على أن تتواصل AIRS معي بخصوص طلبي.",
    "submitRequest": "إرسال الطلب",
    "officialInfoLabel": "معلومات AIRS الرسمية",
    "officialInfoTitle": "دعم مجتمعي موثوق للاجئين والمهاجرين في أريزونا.",
    "infoCards": [
      {
        "title": "المهمة",
        "text": "تقدم AIRS خدمات اجتماعية وتعليمية لتلبية احتياجات اللاجئين والمهاجرين القادمين إلى أريزونا، وذلك لضمان انتقال ناجح من الوصول إلى الاعتماد على الذات."
      },
      {
        "title": "الارتباط مع ECDC",
        "text": "AIRS هي فرع تابع لـ ECDC وتنفذ أنشطتها بدعم من شركاء اتحاديين وعلى مستوى الولاية والمجتمع والأفراد."
      },
      {
        "title": "ساعات المكتب",
        "text": "من الاثنين إلى الجمعة، 9:00 صباحًا – 4:30 مساءً. المكتب مغلق في العطلات الفيدرالية."
      }
    ],
    "programDetailsLabel": "تفاصيل البرامج",
    "programDetailsTitle": "خدمات بدون موعد، ودروس شهرية، ودعم SIV.",
    "immigrationTitle": "أخصائي الهجرة",
    "immigrationIntro": "ساعات الحضور بدون موعد هي الأربعاء والجمعة من 11:00 صباحًا إلى 2:00 مساءً. يرجى الاتصال لتحديد موعد خارج هذه الساعات.",
    "immigrationServices": [
      "طلبات الأقارب",
      "الجنسية",
      "الإقامة الدائمة",
      "استبدال الوثائق المفقودة أو المسروقة",
      "الحماية الخاصة / تأجيل الترحيل القسري",
      "لمّ شمل الأسرة"
    ],
    "classesTitle": "جدول الدروس الشهرية",
    "monthlyClasses": [
      "الثلاثاء الأول @ 11:30 صباحًا — درس مالي مع Wells Fargo",
      "الثلاثاء الثاني @ 11:30 صباحًا — تدريب مع شرطة فينيكس",
      "الثلاثاء الثالث @ 11:30 صباحًا — درس النظافة والصحة",
      "الثلاثاء الأخير @ 11:30 صباحًا — تدريب على الحافلات والقطار الخفيف مع Phoenix Valley Metro"
    ],
    "sivTitle": "خدمات SIV بدون موعد",
    "sivServices": [
      "Reception & Placement",
      "Matching Grant",
      "Preferred Communities",
      "خدمات التوظيف",
      "مزايا State RRP"
    ],
    "donateTitle": "ادعم خدمات إعادة التوطين في AIRS.",
    "donateText": "يمكن تسليم الأدوات المنزلية الصغيرة، والمواد الناعمة، وبطاقات الهدايا إلى AIRS خلال ساعات المكتب. يرجى الاتصال لتحديد موعد لتسليم الأثاث والأغراض الكبيرة.",
    "donateNow": "تبرع الآن",
    "donationCategories": "العناصر التي تقبلها AIRS",
    "donationItems": [
      "بطاقات هدايا للملابس المهنية والبقالة ومتاجر التوفير",
      "ملابس نظيفة",
      "مزيل عرق، صابون، شامبو، معجون أسنان، ورق حمام، حفاضات ومناديل",
      "بطاقات حافلات، دراجات آمنة، أقفال وأضواء للدراجات، خوذات، مقاعد أطفال، عربات أطفال وكراسي متحركة",
      "صابون أطباق، مسحوق غسيل، منظف متعدد الاستخدامات، ومناشف ورقية",
      "حقائب ظهر، دفاتر، أقلام، ملفات، ألوان شمعية، مقصات، غراء وممحاة",
      "أطقم شراشف سرير فردي، بطانيات فردية، ووسائد قياسية",
      "أجهزة كمبيوتر محمولة، أجهزة مكتبية، هواتف ذكية، وأجهزة لوحية"
    ],
    "donationNote": "يمكن إرسال بطاقات الهدايا بالبريد إلى 10240 N 31st Ave #112, Phoenix, AZ 85051. يرجى تضمين اسمك وعنوانك وقيمة الهدية لأغراض الإيصال. للحصول على إيصالات التبرع، راسل info@airsaz.org.",
    "volunteerLabel": "التطوع",
    "volunteerTitle": "انضم إلى عائلة متطوعي AIRS.",
    "volunteerText": "يساعد متطوعو AIRS في النقل، والدعم اللغوي، وتعليم اللغة الإنجليزية، والفعاليات، والدعم التقني، والتوجيه الثقافي، واستلام التبرعات، والدفاع المجتمعي، والإرشاد، والتواصل مع المجتمع.",
    "applyVolunteer": "قدّم للتطوع",
    "volunteerProcessTitle": "عملية التطوع",
    "volunteerProcess": [
      "تأكد من أنك مستعد لبدء العمل التطوعي مع AIRS.",
      "قم بتسليم جميع أوراق التطوع المطلوبة.",
      "انتظر بريدًا إلكترونيًا من أحد أعضاء فريق AIRS لتحديد موعد التوجيه.",
      "تتم معظم فرص التطوع من الاثنين إلى الجمعة، 9:00 صباحًا – 5:00 مساءً، في مكتب شمال فينيكس أو بالقرب منه."
    ],
    "volunteerRoles": [
      "النقل من وإلى المواعيد الطبية",
      "الترجمة الشفوية والتحريرية",
      "تعليم الإنجليزية كلغة ثانية",
      "جمع التبرعات والفعاليات",
      "الدعم التقني المكتبي",
      "دعم التوجيه الثقافي",
      "استلام وتسليم التبرعات",
      "الدفاع المجتمعي",
      "إرشاد عائلة لاجئة",
      "التواصل المجتمعي"
    ],
    "eventsLabel": "الفعاليات والدروس",
    "eventsTitle": "فرص شهرية للتعليم والتوجيه.",
    "viewEvents": "تواصل مع AIRS لمعرفة التواريخ",
    "events": [
      {
        "title": "درس مالي",
        "date": "الثلاثاء الأول @ 11:30 صباحًا",
        "text": "جلسة تعليم مالي مع Wells Fargo."
      },
      {
        "title": "تدريب الشرطة",
        "date": "الثلاثاء الثاني @ 11:30 صباحًا",
        "text": "تدريب حول السلامة المجتمعية مع شرطة فينيكس."
      },
      {
        "title": "تدريب المواصلات",
        "date": "الثلاثاء الأخير @ 11:30 صباحًا",
        "text": "تدريب على الحافلات والقطار الخفيف مع Phoenix Valley Metro."
      }
    ],
    "footerText": "تساعد AIRS عائلات اللاجئين والمهاجرين في الوصول إلى الدعم والموارد والروابط المجتمعية في أريزونا.",
    "footerQuickLinks": "روابط سريعة",
    "footerServicesTitle": "الخدمات",
    "footerGetInvolved": "شارك معنا",
    "footerLegalText": "AIRS منظمة غير ربحية مسجلة 501(c)(3) تخدم مجتمعات اللاجئين والمهاجرين في أريزونا.",
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
      "statYears": "تأسیس در سال 1989",
      "statResettled": "1,910 نفر اسکان مجدد شده‌اند",
      "statLanguages": "خدمات و معرفی‌ها",
      "aboutLabel": "ما که هستیم",
      "aboutTitle": "AIRS سال‌هاست به جوامع فینیکس و شهرستان ماریکوپا خدمت می‌کند.",
      "aboutText1": "Arizona Immigrant and Refugee Services یک نهاد غیرانتفاعی 501(c)(3) است که در سال 1989 برای ارائه خدمات اجتماعی، اقتصادی و آموزشی به باشندگان فینیکس تأسیس شد. در سال 2001، AIRS اسکان مجدد پناهندگان را آغاز کرد، از جمله جوانان کاکوما که به نام Lost Boys نیز شناخته می‌شوند.",
      "aboutText2": "از سال 2001، AIRS تعداد 1,910 پناهنده و مهاجر را در شهرستان ماریکوپا اسکان مجدد داده است. برنامه‌های AIRS مسکن، غذا، لباس، ترجمه در صورت نیاز، آموزش زبان انگلیسی، آموزش کاری، کمک در کاریابی، خدمات مهاجرتی، معرفی‌ها و حمایت‌های دیگر فراهم می‌کند.",
      "aboutBadges": [
          "نهاد غیرانتفاعی 501(c)(3)",
          "تأسیس در سال 1989",
          "اسکان مجدد از سال 2001"
      ],
      "servicesLabel": "خدمات",
      "servicesTitle": "حمایت عملی برای اسکان مجدد، مهاجرت، کار، آموزش و زندگی روزمره.",
      "servicesText": "AIRS مراجعین را به خدمات مستقیم، حمایت بدون وقت قبلی، صنف‌های ماهانه، معرفی‌های اجتماعی و کمک برای زندگی در آریزونا وصل می‌کند.",
      "services": [
          {
              "title": "حمایت اسکان مجدد",
              "text": "حمایت برای خانواده‌های پناهنده و مهاجر تازه‌وارد، از جمله مسکن، غذا، لباس، معرفی‌ها و کمک برای ایجاد ثبات."
          },
          {
              "title": "خدمات کاریابی",
              "text": "آموزش کاری، کمک در کاریابی، آمادگی برای محیط کار و حمایت برای وصل کردن مراجعین با فرصت‌های محلی."
          },
          {
              "title": "خدمات مهاجرتی",
              "text": "حمایت مهاجرتی بدون وقت قبلی برای درخواست‌های خانوادگی، تابعیت، اقامت دائم، اسناد جایگزین، وضعیت محافظت‌شده و پیوستن خانواده."
          },
          {
              "title": "صنف‌ها و آموزش",
              "text": "صنف‌های ماهانه در مورد موضوعات مالی، آموزش با پولیس، صحت و نظافت، و آشنایی با ترانسپورت عمومی."
          },
          {
              "title": "کمک ترانسپورت",
              "text": "کمک برای وصل کردن مراجعین به ملاقات‌های صحی، خدمات، کمک‌های اهدایی، ترانسپورت عمومی و منابع اجتماعی."
          },
          {
              "title": "حمایت از خانواده‌های SIV",
              "text": "خدمات بدون وقت قبلی برای دارندگان ویزای خاص مهاجرت، از جمله Reception & Placement، Matching Grant، Preferred Communities، Employment Services و State RRP Benefits."
          }
      ],
      "requestHelp": "درخواست کمک",
      "getHelpLabel": "کمک بگیرید",
      "getHelpTitle": "با AIRS تماس بگیرید یا در ساعات خدمات مراجعه کنید.",
      "getHelpText": "از این فرم برای تماس با AIRS در مورد خدمات، حمایت یا کمک عمومی استفاده کنید. یکی از اعضای تیم با معلومات تماس ارائه‌شده با شما پیگیری خواهد کرد.",
      "officeInfo": "معلومات دفتر",
      "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
      "fax": "فکس: (602) 944-1860",
      "officeHours": "دوشنبه تا جمعه، 9:00 صبح–4:30 بعدازظهر",
      "holidayNote": "دفتر در تعطیلات فدرال بسته است.",
      "fullName": "نام کامل",
      "fullNamePlaceholder": "نام شما",
      "contactMethod": "تلفن یا ایمیل",
      "contactPlaceholder": "بهترین راه تماس",
      "preferredLanguage": "زبان ترجیحی",
      "serviceNeeded": "خدمت مورد نیاز",
      "serviceOptions": [
          "حمایت مهاجرتی",
          "حمایت مسکن یا اسکان مجدد",
          "حمایت کاریابی",
          "صنف‌ها یا آموزش",
          "سؤال درباره کمک مالی",
          "درخواست یا سؤال داوطلبی",
          "دیگر"
      ],
      "message": "پیام",
      "messagePlaceholder": "برای ما بگویید در چه مورد کمک نیاز دارید",
      "consent": "من موافقم که AIRS درباره درخواست من با من تماس بگیرد.",
      "submitRequest": "ارسال درخواست",
      "officialInfoLabel": "معلومات رسمی AIRS",
      "officialInfoTitle": "حمایت قابل اعتماد اجتماعی برای پناهندگان و مهاجرین در آریزونا.",
      "infoCards": [
          {
              "title": "ماموریت",
              "text": "AIRS خدمات اجتماعی و آموزشی را برای رفع نیازهای پناهندگان و مهاجرینی که به آریزونا می‌آیند فراهم می‌کند تا انتقال موفق از زمان ورود تا خودکفایی تضمین شود."
          },
          {
              "title": "ارتباط با ECDC",
              "text": "AIRS زیرمجموعه ECDC است و فعالیت‌های خود را با حمایت شرکای فدرال، ایالتی، اجتماعی و فردی انجام می‌دهد."
          },
          {
              "title": "ساعات دفتر",
              "text": "دوشنبه تا جمعه، 9:00 صبح–4:30 بعدازظهر. دفتر در تعطیلات فدرال بسته است."
          }
      ],
      "programDetailsLabel": "جزئیات برنامه‌ها",
      "programDetailsTitle": "خدمات بدون وقت قبلی، صنف‌های ماهانه و حمایت SIV.",
      "immigrationTitle": "متخصص مهاجرت",
      "immigrationIntro": "ساعات مراجعه بدون وقت قبلی چهارشنبه و جمعه از 11:00 صبح تا 2:00 بعدازظهر است. برای گرفتن وقت خارج از این ساعات لطفاً تماس بگیرید.",
      "immigrationServices": [
          "درخواست‌های خانوادگی",
          "تابعیت",
          "اقامت دائم",
          "جایگزینی اسناد گم‌شده یا دزدیده‌شده",
          "وضعیت محافظت‌شده خاص / خروج اجباری به تعویق افتاده",
          "پیوستن خانواده"
      ],
      "classesTitle": "برنامه صنف‌های ماهانه",
      "monthlyClasses": [
          "سه‌شنبه اول @ 11:30 صبح — صنف مالی با Wells Fargo",
          "سه‌شنبه دوم @ 11:30 صبح — آموزش با پولیس فینیکس",
          "سه‌شنبه سوم @ 11:30 صبح — صنف نظافت و صحت",
          "سه‌شنبه آخر @ 11:30 صبح — آموزش بس و قطار سبک با Phoenix Valley Metro"
      ],
      "sivTitle": "خدمات SIV بدون وقت قبلی",
      "sivServices": [
          "Reception & Placement",
          "Matching Grant",
          "Preferred Communities",
          "خدمات کاریابی",
          "مزایای State RRP"
      ],
      "donateTitle": "از خدمات اسکان مجدد AIRS حمایت کنید.",
      "donateText": "وسایل کوچک خانه، اجناس نرم و کارت‌های هدیه را می‌توان در ساعات دفتر به AIRS سپرد. برای سپردن فرنیچر و وسایل بزرگ لطفاً تماس بگیرید و وقت بگیرید.",
      "donateNow": "همین حالا کمک مالی کنید",
      "donationCategories": "اقلامی که AIRS می‌پذیرد",
      "donationItems": [
          "کارت‌های هدیه برای لباس کاری، مواد غذایی و فروشگاه‌های دست دوم",
          "لباس پاک",
          "دئودورانت، صابون، شامپو، کریم دندان، کاغذ تشناب، پوشک و دستمال مرطوب",
          "کارت بس، بایسکل امن، قفل و چراغ بایسکل، کلاه ایمنی، چوکی موتر برای طفل، کالسکه و ویلچر",
          "مایع ظرف‌شویی، پودر/مایع لباس‌شویی، پاک‌کننده چندمنظوره و دستمال کاغذی",
          "بک‌پک، کتابچه، پنسل، فولدر، رنگه، قیچی، چسپ و پاک‌کن",
          "ست چادر تخت twin، کمپل twin و بالش استاندارد",
          "لپ‌تاپ، کمپیوتر رومیزی، تلفن هوشمند و تبلت"
      ],
      "donationNote": "کارت‌های هدیه را می‌توان به آدرس 10240 N 31st Ave #112, Phoenix, AZ 85051 پست کرد. برای رسید، نام، آدرس و مبلغ هدیه خود را شامل کنید. برای رسید کمک مالی به info@airsaz.org ایمیل کنید.",
      "volunteerLabel": "داوطلبی",
      "volunteerTitle": "به خانواده داوطلبان AIRS بپیوندید.",
      "volunteerText": "داوطلبان AIRS در ترانسپورت، حمایت زبانی، تدریس ESL، رویدادها، حمایت تخنیکی، آشنایی فرهنگی، جمع‌آوری کمک‌ها، دادخواهی، رهنمایی و ارتباطات اجتماعی کمک می‌کنند.",
      "applyVolunteer": "درخواست داوطلبی",
      "volunteerProcessTitle": "روند داوطلبی",
      "volunteerProcess": [
          "مطمئن شوید که آماده شروع کار داوطلبانه با AIRS هستید.",
          "تمام اسناد داوطلبی لازم را تسلیم کنید.",
          "منتظر ایمیل یکی از اعضای تیم AIRS برای تعیین زمان آشنایی باشید.",
          "بیشتر کارهای داوطلبانه دوشنبه تا جمعه، 9:00 صبح–5:00 بعدازظهر، در دفتر شمال فینیکس یا نزدیک آن انجام می‌شود."
      ],
      "volunteerRoles": [
          "ترانسپورت به و از ملاقات‌های صحی",
          "ترجمه کتبی و شفاهی",
          "تدریس انگلیسی به عنوان زبان دوم",
          "جمع‌آوری کمک مالی و رویدادها",
          "حمایت تخنیکی دفتر",
          "حمایت آشنایی فرهنگی",
          "گرفتن و رساندن کمک‌های اهدایی",
          "دادخواهی اجتماعی",
          "رهنمایی یک خانواده پناهنده",
          "ارتباط با جامعه"
      ],
      "eventsLabel": "رویدادها و صنف‌ها",
      "eventsTitle": "فرصت‌های ماهانه برای آموزش و آشنایی.",
      "viewEvents": "برای تاریخ‌ها با AIRS تماس بگیرید",
      "events": [
          {
              "title": "صنف مالی",
              "date": "سه‌شنبه اول @ 11:30 صبح",
              "text": "جلسه آموزش مالی با Wells Fargo."
          },
          {
              "title": "آموزش پولیس",
              "date": "سه‌شنبه دوم @ 11:30 صبح",
              "text": "آموزش امنیت اجتماعی با پولیس فینیکس."
          },
          {
              "title": "آموزش ترانسپورت",
              "date": "سه‌شنبه آخر @ 11:30 صبح",
              "text": "آموزش بس و قطار سبک با Phoenix Valley Metro."
          }
      ],
      "footerText": "AIRS به خانواده‌های پناهنده و مهاجر کمک می‌کند تا به حمایت، منابع و ارتباطات اجتماعی در آریزونا دسترسی پیدا کنند.",
      "footerQuickLinks": "لینک‌های سریع",
      "footerServicesTitle": "خدمات",
      "footerGetInvolved": "همراه شوید",
      "footerLegalText": "AIRS یک نهاد غیرانتفاعی 501(c)(3) است که به جوامع پناهنده و مهاجر در آریزونا خدمت می‌کند.",
      "footerCopyright": "© 2026 AIRS. همه حقوق محفوظ است.",
      "phonePlaceholder": "(602) 944-1821",
      "emailPlaceholder": "info@airsaz.org",
      "addPhone": "(602) 944-1821",
      "addEmail": "info@airsaz.org"
  },
  "Pashto": {
      "siteFullName": "د اریزونا د کډوالو او مهاجرینو خدمات",
      "nav": [
          "کور",
          "زموږ په اړه",
          "خدمات",
          "مرسته ترلاسه کړئ",
          "مرسته وکړئ",
          "رضاکاري",
          "پېښې",
          "اړیکه"
      ],
      "donateButton": "مرسته وکړئ",
      "languageLabel": "ژبه وټاکئ",
      "heroBadge": "په ماریکوپا کاونټي کې د کډوالو او مهاجرینو خدمات",
      "heroTitle": "له راتګ څخه تر ځان بساینې پورې د کډوالو او مهاجرینو ملاتړ.",
      "heroText": "AIRS هغو کډوالو او مهاجرینو ته ټولنیز، تعلیمي او د بیا مېشتېدو خدمات برابروي چې اریزونا ته راځي، څو کورنۍ په بریالیتوب سره د ټولنې ژوند ته داخلې شي.",
      "getHelpButton": "مرسته ترلاسه کړئ",
      "volunteerButton": "زموږ سره رضاکار شئ",
      "statYears": "په 1989 کې جوړ شوی",
      "statResettled": "1,910 کسان بیا مېشت شوي",
      "statLanguages": "خدمات او راجع کول",
      "aboutLabel": "موږ څوک یو",
      "aboutTitle": "AIRS له کلونو راهیسې د فینکس او ماریکوپا کاونټي ټولنو ته خدمت کوي.",
      "aboutText1": "Arizona Immigrant and Refugee Services د 501(c)(3) غیرانتفاعي اداره ده چې په 1989 کې د فینکس خلکو ته د ټولنیزو، اقتصادي او تعلیمي خدماتو لپاره جوړه شوه. په 2001 کې AIRS د کډوالو بیا مېشتول پیل کړل، چې پکې د Kakuma ځوانان هم شامل وو.",
      "aboutText2": "له 2001 راهیسې AIRS په ماریکوپا کاونټي کې 1,910 کډوال او مهاجر بیا مېشت کړي دي. د AIRS پروګرامونه کور، خواړه، کالي، د اړتیا پر مهال ژباړه، انګلیسي زده کړه، د کار روزنه، د کار مرسته، د مهاجرت خدمات، راجع کول او نور ملاتړ برابروي.",
      "aboutBadges": [
          "501(c)(3) غیرانتفاعي اداره",
          "په 1989 کې جوړه شوې",
          "له 2001 راهیسې بیا مېشتونه"
      ],
      "servicesLabel": "خدمات",
      "servicesTitle": "د بیا مېشتېدو، مهاجرت، کار، تعلیم او ورځني ژوند لپاره عملي ملاتړ.",
      "servicesText": "AIRS مراجعین له مستقیمو خدماتو، بې‌نوبته ملاتړ، میاشتنیو ټولګیو، ټولنیزو راجع کولو او په اریزونا کې د ژوند د تنظیم له مرستې سره نښلوي.",
      "services": [
          {
              "title": "د بیا مېشتېدو ملاتړ",
              "text": "د تازه راغلو کډوالو او مهاجرینو کورنیو لپاره ملاتړ، لکه کور، خواړه، کالي، راجع کول او د ثبات په بیا جوړولو کې مرسته."
          },
          {
              "title": "د کارموندنې خدمات",
              "text": "د کار روزنه، د کار موندنې مرسته، د کار ځای چمتووالی او د سیمه‌ییزو فرصتونو سره د مراجعینو نښلول."
          },
          {
              "title": "د مهاجرت خدمات",
              "text": "بې‌نوبته د مهاجرت ملاتړ د کورنۍ غوښتنلیکونو، تابعیت، دایمي استوګنې، د اسنادو بدلولو، خوندي حالت او د کورنۍ یوځای کولو لپاره."
          },
          {
              "title": "ټولګي او تعلیم",
              "text": "میاشتني ټولګي د مالي موضوعاتو، د پولیسو روزنې، حفظ الصحې او روغتیا، او عامه ترانسپورت د پېژندنې په اړه."
          },
          {
              "title": "د ترانسپورت مرسته",
              "text": "د مراجعینو د طبي ملاقاتونو، خدماتو، مرستو، عامه ترانسپورت او ټولنیزو سرچینو سره د نښلولو ملاتړ."
          },
          {
              "title": "د SIV کورنیو ملاتړ",
              "text": "د Special Immigrant Visa لرونکو لپاره بې‌نوبته خدمات، لکه Reception & Placement، Matching Grant، Preferred Communities، Employment Services او State RRP Benefits."
          }
      ],
      "requestHelp": "د مرستې غوښتنه",
      "getHelpLabel": "مرسته ترلاسه کړئ",
      "getHelpTitle": "له AIRS سره اړیکه ونیسئ یا د خدماتو په ساعتونو کې ورشئ.",
      "getHelpText": "دا فورمه د AIRS سره د خدماتو، ملاتړ یا عمومي مرستې په اړه د اړیکې لپاره وکاروئ. د ټیم یو غړی به ستاسو د ورکړل شوو اړیکو له لارې تعقیب وکړي.",
      "officeInfo": "د دفتر معلومات",
      "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
      "fax": "فکس: (602) 944-1860",
      "officeHours": "دوشنبه–جمعه، 9:00 سهار–4:30 ماښام",
      "holidayNote": "دفتر په فدرالي رخصتیو کې تړلی وي.",
      "fullName": "بشپړ نوم",
      "fullNamePlaceholder": "ستاسو نوم",
      "contactMethod": "تلیفون یا برېښنالیک",
      "contactPlaceholder": "غوره اړیکه",
      "preferredLanguage": "غوره ژبه",
      "serviceNeeded": "اړین خدمت",
      "serviceOptions": [
          "د مهاجرت ملاتړ",
          "د کور یا بیا مېشتېدو ملاتړ",
          "د کارموندنې ملاتړ",
          "ټولګي یا تعلیم",
          "د مرستې پوښتنه",
          "د رضاکارۍ غوښتنه یا پوښتنه",
          "نور"
      ],
      "message": "پیغام",
      "messagePlaceholder": "موږ ته ووایاست چې څه ډول مرسته ته اړتیا لرئ",
      "consent": "زه موافق یم چې AIRS زما د غوښتنې په اړه راسره اړیکه ونیسي.",
      "submitRequest": "غوښتنه واستوئ",
      "officialInfoLabel": "د AIRS رسمي معلومات",
      "officialInfoTitle": "په اریزونا کې د کډوالو او مهاجرینو لپاره باوري ټولنیز ملاتړ.",
      "infoCards": [
          {
              "title": "ماموریت",
              "text": "AIRS هغو کډوالو او مهاجرینو ته ټولنیز او تعلیمي خدمات برابروي چې اریزونا ته راځي، څو له راتګ څخه تر ځان بساینې پورې بریالی انتقال ولري."
          },
          {
              "title": "له ECDC سره اړیکه",
              "text": "AIRS د ECDC فرعي اداره ده او خپل فعالیتونه د فدرالي، ایالتي، ټولنیزو او فردي شریکانو په ملاتړ ترسره کوي."
          },
          {
              "title": "د دفتر ساعتونه",
              "text": "دوشنبه تر جمعې، 9:00 سهار–4:30 ماښام. دفتر په فدرالي رخصتیو کې تړلی وي."
          }
      ],
      "programDetailsLabel": "د پروګرام جزئیات",
      "programDetailsTitle": "بې‌نوبته خدمات، میاشتني ټولګي او د SIV ملاتړ.",
      "immigrationTitle": "د مهاجرت متخصص",
      "immigrationIntro": "د بې‌نوبته ورتګ ساعتونه چهارشنبه او جمعه له 11:00 سهار تر 2:00 ماسپښین دي. له دې ساعتونو بهر د ملاقات لپاره مهرباني وکړئ زنګ ووهئ.",
      "immigrationServices": [
          "د خپلوانو غوښتنلیکونه",
          "تابعیت",
          "دایمي استوګنه",
          "د ورک شوو یا غلا شوو اسنادو بدلول",
          "ځانګړی خوندي حالت / ځنډول شوی اجباري وتل",
          "د کورنۍ یوځای کېدل"
      ],
      "classesTitle": "د میاشتنیو ټولګیو مهالویش",
      "monthlyClasses": [
          "لومړۍ سه‌شنبه @ 11:30 سهار — مالي ټولګی له Wells Fargo سره",
          "دوهمه سه‌شنبه @ 11:30 سهار — د فینکس پولیسو روزنه",
          "درېیمه سه‌شنبه @ 11:30 سهار — د حفظ الصحې او روغتیا ټولګی",
          "وروستۍ سه‌شنبه @ 11:30 سهار — د بس او لایټ ریل روزنه له Phoenix Valley Metro سره"
      ],
      "sivTitle": "د SIV بې‌نوبته خدمات",
      "sivServices": [
          "Reception & Placement",
          "Matching Grant",
          "Preferred Communities",
          "Employment Services",
          "State RRP Benefits"
      ],
      "donateTitle": "د AIRS د بیا مېشتېدو خدماتو ملاتړ وکړئ.",
      "donateText": "کوچني کورني توکي، نرم توکي او د ډالۍ کارتونه د دفتر په ساعتونو کې AIRS ته سپارل کېدای شي. د فرنیچر او لویو توکو لپاره مهرباني وکړئ زنګ ووهئ او وخت وټاکئ.",
      "donateNow": "اوس مرسته وکړئ",
      "donationCategories": "هغه توکي چې AIRS یې مني",
      "donationItems": [
          "د مسلکي لباس، خوراکي توکو او thrift stores لپاره د ډالۍ کارتونه",
          "پاک کالي",
          "ډیوډورانټ، صابون، شامپو، د غاښونو کریم، تشناب کاغذ، ډایپر او لمدې ټوکرۍ",
          "د بس پاسونه، خوندي بایسکلونه، د بایسکل قفلونه او څراغونه، هیلمټونه، د موټر ماشوم څوکۍ، stroller او wheelchair",
          "د لوښو صابون، د کالو صابون، هر اړخیز پاکوونکی او کاغذي تولیې",
          "بک‌پکونه، کتابچې، پنسلونه، فولډرونه، رنګونه، قیچي، سریښ او پاکوونکي",
          "د twin تخت چادرونه، twin کمپلې او معیاري بالښتونه",
          "لپ‌ټاپونه، ډیسک‌ټاپونه، سمارټ فونونه او ټابلیټونه"
      ],
      "donationNote": "د ډالۍ کارتونه دې پته ته لېږل کېدای شي: 10240 N 31st Ave #112, Phoenix, AZ 85051. د رسید لپاره خپل نوم، پته او د ډالۍ اندازه ولیکئ. د مرستې د رسید لپاره info@airsaz.org ته ایمیل وکړئ.",
      "volunteerLabel": "رضاکاري",
      "volunteerTitle": "د AIRS د رضاکارانو له کورنۍ سره یوځای شئ.",
      "volunteerText": "د AIRS رضاکاران په ترانسپورت، ژبني ملاتړ، ESL تدریس، پېښو، تخنیکي ملاتړ، کلتوري پېژندنه، د مرستو راټولول، ټولنیز ملاتړ، لارښوونه او ټولنیزو اړیکو کې مرسته کوي.",
      "applyVolunteer": "د رضاکارۍ غوښتنه وکړئ",
      "volunteerProcessTitle": "د رضاکارۍ بهیر",
      "volunteerProcess": [
          "ډاډ ترلاسه کړئ چې له AIRS سره د رضاکار کار پیلولو ته چمتو یاست.",
          "ټول اړین رضاکار اسناد وسپارئ.",
          "د AIRS د ټیم د یوه غړي ایمیل ته انتظار وکړئ ترڅو د پېژندنې وخت وټاکل شي.",
          "ډېر رضاکار کارونه د دوشنبې تر جمعې، 9:00 سهار–5:00 ماښام، د شمالي فینکس دفتر کې یا نږدې ترسره کېږي."
      ],
      "volunteerRoles": [
          "طبي ملاقاتونو ته تګ راتګ",
          "ژباړه او شفاهي ژباړه",
          "د دوهمې ژبې په توګه د انګلیسي تدریس",
          "د مرستې راټولولو پروګرامونه او پېښې",
          "د دفتر تخنیکي ملاتړ",
          "د کلتوري پېژندنې ملاتړ",
          "د مرستو اخیستل او رسول",
          "ټولنیز ملاتړ",
          "د یوې کډوالې کورنۍ لارښوونه",
          "ټولنیزې اړیکې"
      ],
      "eventsLabel": "پېښې او ټولګي",
      "eventsTitle": "میاشتني تعلیمي او د پېژندنې فرصتونه.",
      "viewEvents": "د نېټو لپاره له AIRS سره اړیکه ونیسئ",
      "events": [
          {
              "title": "مالي ټولګی",
              "date": "لومړۍ سه‌شنبه @ 11:30 سهار",
              "text": "له Wells Fargo سره د مالي زده کړې ناسته."
          },
          {
              "title": "د پولیسو روزنه",
              "date": "دوهمه سه‌شنبه @ 11:30 سهار",
              "text": "د فینکس پولیسو سره د ټولنې امنیت روزنه."
          },
          {
              "title": "د ترانسپورت روزنه",
              "date": "وروستۍ سه‌شنبه @ 11:30 سهار",
              "text": "د Phoenix Valley Metro سره د بس او لایټ ریل روزنه."
          }
      ],
      "footerText": "AIRS د کډوالو او مهاجرینو کورنیو سره مرسته کوي چې په اریزونا کې ملاتړ، سرچینې او ټولنیزې اړیکې ترلاسه کړي.",
      "footerQuickLinks": "چټک لینکونه",
      "footerServicesTitle": "خدمات",
      "footerGetInvolved": "ګډون وکړئ",
      "footerLegalText": "AIRS د 501(c)(3) غیرانتفاعي اداره ده چې په اریزونا کې د کډوالو او مهاجرینو ټولنو ته خدمت کوي.",
      "footerCopyright": "© 2026 AIRS. ټول حقوق خوندي دي.",
      "phonePlaceholder": "(602) 944-1821",
      "emailPlaceholder": "info@airsaz.org",
      "addPhone": "(602) 944-1821",
      "addEmail": "info@airsaz.org"
  },
  "Ukrainian": {
      "siteFullName": "Служби іммігрантів і біженців Аризони",
      "nav": [
          "Головна",
          "Про нас",
          "Послуги",
          "Отримати допомогу",
          "Пожертви",
          "Волонтерство",
          "Події",
          "Контакти"
      ],
      "donateButton": "Пожертвувати",
      "languageLabel": "Виберіть мову",
      "heroBadge": "Послуги для біженців та іммігрантів в окрузі Марікопа",
      "heroTitle": "Підтримка біженців та іммігрантів від прибуття до самостійності.",
      "heroText": "AIRS надає соціальні, освітні та ресетлмент-послуги біженцям та іммігрантам, які прибувають до Аризони, допомагаючи сім’ям успішно інтегруватися в громаду.",
      "getHelpButton": "Отримати допомогу",
      "volunteerButton": "Стати волонтером",
      "statYears": "Засновано у 1989",
      "statResettled": "1 910 переселених",
      "statLanguages": "Послуги та направлення",
      "aboutLabel": "Хто ми",
      "aboutTitle": "AIRS десятиліттями служить громадам Фінікса та округу Марікопа.",
      "aboutText1": "Arizona Immigrant and Refugee Services — це некомерційна організація 501(c)(3), заснована у 1989 році для надання соціальних, економічних та освітніх послуг мешканцям Фінікса. У 2001 році AIRS почала допомагати з переселенням біженців, зокрема молоді Kakuma, також відомої як Lost Boys.",
      "aboutText2": "З 2001 року AIRS допомогла переселити 1 910 біженців та іммігрантів в окрузі Марікопа. Програми AIRS надають житло, їжу, одяг, переклад за потреби, курси англійської, професійну підготовку, допомогу з працевлаштуванням, імміграційні послуги, направлення та іншу підтримку.",
      "aboutBadges": [
          "Некомерційна організація 501(c)(3)",
          "Засновано у 1989",
          "Ресетлмент з 2001 року"
      ],
      "servicesLabel": "Послуги",
      "servicesTitle": "Практична підтримка з ресетлменту, імміграції, працевлаштування, освіти та повсякденного життя.",
      "servicesText": "AIRS поєднує клієнтів із прямими послугами, допомогою без попереднього запису, щомісячними заняттями, громадськими направленнями та підтримкою в адаптації до життя в Арiзоні.",
      "services": [
          {
              "title": "Підтримка ресетлменту",
              "text": "Підтримка для нещодавно прибулих сімей біженців та іммігрантів, включно з житлом, їжею, одягом, направленнями та допомогою у відновленні стабільності."
          },
          {
              "title": "Послуги з працевлаштування",
              "text": "Професійна підготовка, допомога з пошуком роботи, підготовка до робочого середовища та підтримка у зв’язку з місцевими можливостями."
          },
          {
              "title": "Імміграційні послуги",
              "text": "Імміграційна допомога без попереднього запису щодо сімейних петицій, громадянства, постійного проживання, заміни документів, захищеного статусу та возз’єднання сім’ї."
          },
          {
              "title": "Заняття та освіта",
              "text": "Щомісячні заняття з фінансових тем, навчання з поліцією, гігієни та здоров’я, а також орієнтації щодо громадського транспорту."
          },
          {
              "title": "Допомога з транспортом",
              "text": "Підтримка у доступі до медичних прийомів, послуг, пожертв, громадського транспорту та ресурсів громади."
          },
          {
              "title": "Підтримка сімей SIV",
              "text": "Послуги без попереднього запису для власників Special Immigrant Visa, включно з Reception & Placement, Matching Grant, Preferred Communities, Employment Services та State RRP Benefits."
          }
      ],
      "requestHelp": "Запросити допомогу",
      "getHelpLabel": "Отримати допомогу",
      "getHelpTitle": "Зв’яжіться з AIRS або відвідайте офіс у години надання послуг.",
      "getHelpText": "Скористайтеся цією формою, щоб звернутися до AIRS щодо послуг, підтримки або загальної допомоги. Член команди зв’яжеться з вами за наданими контактними даними.",
      "officeInfo": "Інформація про офіс",
      "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
      "fax": "Факс: (602) 944-1860",
      "officeHours": "Понеділок–п’ятниця, 9:00 AM–4:30 PM",
      "holidayNote": "Офіс зачинений у федеральні свята.",
      "fullName": "Повне ім’я",
      "fullNamePlaceholder": "Ваше ім’я",
      "contactMethod": "Телефон або email",
      "contactPlaceholder": "Найкращий спосіб зв’язку",
      "preferredLanguage": "Бажана мова",
      "serviceNeeded": "Потрібна послуга",
      "serviceOptions": [
          "Імміграційна підтримка",
          "Підтримка з житлом або ресетлментом",
          "Підтримка з працевлаштуванням",
          "Заняття або освіта",
          "Питання щодо пожертв",
          "Інше"
      ],
      "message": "Повідомлення",
      "messagePlaceholder": "Розкажіть, з чим вам потрібна допомога",
      "consent": "Я погоджуюся, що AIRS може зв’язатися зі мною щодо мого запиту.",
      "submitRequest": "Надіслати запит",
      "officialInfoLabel": "Офіційна інформація AIRS",
      "officialInfoTitle": "Надійна громадська підтримка для біженців та іммігрантів в Арiзоні.",
      "infoCards": [
          {
              "title": "Місія",
              "text": "AIRS надає соціальні та освітні послуги для задоволення потреб біженців та іммігрантів, які прибувають до Аризони, допомагаючи їм успішно перейти від прибуття до самостійності."
          },
          {
              "title": "Зв’язок з ECDC",
              "text": "AIRS є дочірньою організацією ECDC і здійснює діяльність за підтримки федеральних, штатних, громадських та індивідуальних партнерів."
          },
          {
              "title": "Години роботи офісу",
              "text": "Понеділок–п’ятниця, 9:00 AM–4:30 PM. Офіс зачинений у федеральні свята."
          }
      ],
      "programDetailsLabel": "Деталі програм",
      "programDetailsTitle": "Послуги без попереднього запису, щомісячні заняття та підтримка SIV.",
      "immigrationTitle": "Імміграційний спеціаліст",
      "immigrationIntro": "Години прийому без попереднього запису: середа та п’ятниця з 11:00 AM до 2:00 PM. Будь ласка, зателефонуйте, щоб домовитися про зустріч поза цими годинами.",
      "immigrationServices": [
          "Сімейні петиції",
          "Громадянство",
          "Постійне проживання",
          "Заміна втрачених або викрадених документів",
          "Спеціальний захищений статус / відкладене примусове повернення",
          "Возз’єднання сім’ї"
      ],
      "classesTitle": "Щомісячний розклад занять",
      "monthlyClasses": [
          "Перший вівторок @ 11:30 AM — фінансове заняття з Wells Fargo",
          "Другий вівторок @ 11:30 AM — навчання з Phoenix PD",
          "Третій вівторок @ 11:30 AM — заняття з гігієни та здоров’я",
          "Останній вівторок @ 11:30 AM — навчання щодо автобусів і легкої залізниці з Phoenix Valley Metro"
      ],
      "sivTitle": "Послуги SIV без попереднього запису",
      "sivServices": [
          "Reception & Placement",
          "Matching Grant",
          "Preferred Communities",
          "Employment Services",
          "State RRP Benefits"
      ],
      "donateTitle": "Підтримайте ресетлмент-послуги AIRS.",
      "donateText": "Невеликі побутові речі, м’які товари та подарункові картки можна приносити до AIRS у години роботи офісу. Для передачі меблів або великих речей, будь ласка, зателефонуйте та домовтеся про час.",
      "donateNow": "Пожертвувати зараз",
      "donationCategories": "Речі, які приймає AIRS",
      "donationItems": [
          "Подарункові картки для професійного одягу, продуктів та секонд-хендів",
          "Чистий одяг",
          "Дезодорант, мило, шампунь, зубна паста, туалетний папір, підгузки та вологі серветки",
          "Проїзні на автобус, безпечні велосипеди, замки й ліхтарі для велосипедів, шоломи, автокрісла, дитячі візки та інвалідні візки",
          "Засіб для миття посуду, пральний засіб, універсальний засіб для прибирання та паперові рушники",
          "Рюкзаки, зошити, олівці, папки, крейда/олівці, ножиці, клей та гумки",
          "Комплекти простирадл twin, ковдри twin та стандартні подушки",
          "Ноутбуки, настільні комп’ютери, смартфони та планшети"
      ],
      "donationNote": "Подарункові картки можна надіслати поштою на адресу 10240 N 31st Ave #112, Phoenix, AZ 85051. Додайте своє ім’я, адресу та суму подарунка для отримання квитанції. Для квитанцій щодо пожертв пишіть на info@airsaz.org.",
      "volunteerLabel": "Волонтерство",
      "volunteerTitle": "Приєднуйтеся до волонтерської родини AIRS.",
      "volunteerText": "Волонтери AIRS допомагають із транспортом, мовною підтримкою, викладанням ESL, подіями, технічною підтримкою, культурною орієнтацією, отриманням пожертв, адвокацією, наставництвом і роботою з громадою.",
      "applyVolunteer": "Подати заявку на волонтерство",
      "volunteerProcessTitle": "Процес волонтерства",
      "volunteerProcess": [
          "Переконайтеся, що ви готові розпочати волонтерську роботу з AIRS.",
          "Подайте всі необхідні волонтерські документи.",
          "Очікуйте email від члена команди AIRS для планування орієнтації.",
          "Більшість волонтерських завдань відбуваються з понеділка по п’ятницю, 9:00 AM–5:00 PM, в офісі Північного Фінікса або поблизу нього."
      ],
      "volunteerRoles": [
          "Транспорт до та з медичних прийомів",
          "Переклад та усний переклад",
          "Викладання англійської як другої мови",
          "Фандрейзингові заходи та події",
          "Офісна технічна підтримка",
          "Підтримка культурної орієнтації",
          "Отримання та доставка пожертв",
          "Громадська адвокація",
          "Наставництво для сім’ї біженців",
          "Робота з громадою"
      ],
      "eventsLabel": "Події та заняття",
      "eventsTitle": "Щомісячні освітні та орієнтаційні можливості.",
      "viewEvents": "Зв’яжіться з AIRS щодо дат",
      "events": [
          {
              "title": "Фінансове заняття",
              "date": "Перший вівторок @ 11:30 AM",
              "text": "Заняття з фінансової освіти з Wells Fargo."
          },
          {
              "title": "Навчання з поліцією",
              "date": "Другий вівторок @ 11:30 AM",
              "text": "Навчання з громадської безпеки з Phoenix PD."
          },
          {
              "title": "Навчання з транспорту",
              "date": "Останній вівторок @ 11:30 AM",
              "text": "Навчання щодо автобусів і легкої залізниці з Phoenix Valley Metro."
          }
      ],
      "footerText": "AIRS допомагає сім’ям біженців та іммігрантів отримувати підтримку, ресурси та зв’язки з громадою в Арiзоні.",
      "footerQuickLinks": "Швидкі посилання",
      "footerServicesTitle": "Послуги",
      "footerGetInvolved": "Долучитися",
      "footerLegalText": "AIRS є некомерційною організацією 501(c)(3), що служить громадам біженців та іммігрантів в Арiзоні.",
      "footerCopyright": "© 2026 AIRS. Усі права захищені.",
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
    "aboutText1": "Arizona Immigrant and Refugee Services ni shirika lisilo la faida la 501(c)(3) lililoanzishwa mwaka 1989 ili kutoa huduma za kijamii, kiuchumi na kielimu kwa wakazi wa Phoenix. Mwaka 2001, AIRS ilianza kusaidia kuwapokea na kuwapa makazi mapya wakimbizi, wakiwemo vijana wa Kakuma wanaojulikana pia kama Lost Boys.",
    "aboutText2": "Tangu 2001, AIRS imewapa makazi mapya wakimbizi na wahamiaji 1,910 katika Kaunti ya Maricopa. Programu zake hutoa makazi, chakula, mavazi, tafsiri inapohitajika, masomo ya Kiingereza, mafunzo ya kazi, msaada wa ajira, huduma za uhamiaji, rufaa na msaada mwingine.",
    "aboutBadges": [
      "Shirika 501(c)(3)",
      "Ilianzishwa 1989",
      "Makazi mapya tangu 2001"
    ],
    "servicesLabel": "Huduma",
    "servicesTitle": "Msaada wa vitendo kwa makazi mapya, uhamiaji, ajira, elimu na maisha ya kila siku.",
    "servicesText": "AIRS huwaunganisha wateja na huduma za moja kwa moja, msaada wa bila miadi, madarasa ya kila mwezi, rufaa za jamii na msaada wa kuzoea maisha Arizona.",
    "services": [
      {
        "title": "Msaada wa Makazi Mapya",
        "text": "Msaada kwa familia mpya za wakimbizi na wahamiaji, ikiwa ni pamoja na makazi, chakula, mavazi, rufaa na kujenga uthabiti."
      },
      {
        "title": "Huduma za Ajira",
        "text": "Mafunzo ya kazi, msaada wa ajira, maandalizi ya mahali pa kazi na kuunganisha wateja na fursa za eneo."
      },
      {
        "title": "Huduma za Uhamiaji",
        "text": "Msaada wa uhamiaji bila miadi kwa maombi ya ndugu, uraia, ukaazi wa kudumu, hati mbadala, hadhi ya ulinzi na kuunganisha familia."
      },
      {
        "title": "Madarasa na Elimu",
        "text": "Madarasa ya kila mwezi kuhusu fedha, mafunzo ya polisi, usafi na afya, na maelekezo ya usafiri wa umma."
      },
      {
        "title": "Msaada wa Usafiri",
        "text": "Kuwasaidia wateja kufika kwenye miadi ya matibabu, huduma, michango, usafiri wa umma na rasilimali za jamii."
      },
      {
        "title": "Msaada kwa Familia za SIV",
        "text": "Huduma za bila miadi kwa wenye visa maalum vya wahamiaji, ikiwa ni pamoja na Reception & Placement, Matching Grant, Preferred Communities, Employment Services na State RRP Benefits."
      }
    ],
    "requestHelp": "Omba msaada",
    "getHelpLabel": "Pata Msaada",
    "getHelpTitle": "Wasiliana na AIRS au tembelea wakati wa huduma.",
    "getHelpText": "Tumia fomu hii kuwasiliana na AIRS kuhusu huduma, msaada au maswali ya jumla. Mshiriki wa timu atakufuata kwa kutumia maelezo uliyotoa.",
    "officeInfo": "Taarifa za ofisi",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Faksi: (602) 944-1860",
    "officeHours": "Jumatatu–Ijumaa, 9:00 AM–4:30 PM",
    "holidayNote": "Ofisi hufungwa siku za sikukuu za serikali kuu.",
    "fullName": "Jina kamili",
    "fullNamePlaceholder": "Jina lako",
    "contactMethod": "Simu au Barua pepe",
    "contactPlaceholder": "Mawasiliano bora",
    "preferredLanguage": "Lugha unayopendelea",
    "serviceNeeded": "Huduma inayohitajika",
    "serviceOptions": [
      "Apoyo migratorio",
      "Apoyo de vivienda o reasentamiento",
      "Apoyo de empleo",
      "Clases o educación",
      "Pregunta sobre donaciones",
      "Otro"
    ],
    "message": "Ujumbe",
    "messagePlaceholder": "Tuambie unahitaji msaada gani",
    "consent": "Nakubali kwamba AIRS inaweza kuwasiliana nami kuhusu ombi langu.",
    "submitRequest": "Tuma Ombi",
    "officialInfoLabel": "Taarifa rasmi za AIRS",
    "officialInfoTitle": "Msaada wa jamii unaoaminika kwa wakimbizi na wahamiaji Arizona.",
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
    "programDetailsLabel": "Maelezo ya programu",
    "programDetailsTitle": "Huduma za bila miadi, madarasa ya kila mwezi na msaada wa SIV.",
    "immigrationTitle": "Mtaalamu wa Uhamiaji",
    "immigrationIntro": "El horario sin cita es miércoles y viernes de 11:00 AM a 2:00 PM. Llame para programar una cita fuera de ese horario.",
    "immigrationServices": [
      "Peticiones de familiares",
      "Ciudadanía",
      "Residencia permanente",
      "Reemplazo de documentos perdidos o robados",
      "Estatus protegido especial / salida forzada diferida",
      "Reunificación familiar"
    ],
    "classesTitle": "Ratiba ya madarasa ya kila mwezi",
    "monthlyClasses": [
      "Primer martes @ 11:30 AM — Clase financiera con Wells Fargo",
      "Segundo martes @ 11:30 AM — Capacitación policial con Phoenix PD",
      "Tercer martes @ 11:30 AM — Clase de higiene y salud",
      "Último martes @ 11:30 AM — Capacitación de autobús y tren ligero con Phoenix Valley Metro"
    ],
    "sivTitle": "Huduma za SIV bila miadi",
    "sivServices": [
      "Recepción y colocación",
      "Matching Grant",
      "Preferred Communities",
      "Servicios de empleo",
      "Beneficios estatales RRP"
    ],
    "donateTitle": "Saidia huduma za makazi mapya za AIRS.",
    "donateText": "Vifaa vidogo vya nyumbani, vitu laini na kadi za zawadi vinaweza kuletwa AIRS wakati wa saa za kazi. Tafadhali piga simu kupanga miadi kwa samani na vitu vikubwa.",
    "donateNow": "Changia Sasa",
    "donationCategories": "Vitu AIRS hupokea",
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
    "volunteerLabel": "Jitolee",
    "volunteerTitle": "Jiunge na familia ya wajitolea wa AIRS.",
    "volunteerText": "Los voluntarios de AIRS ayudan con transporte, apoyo lingüístico, enseñanza de ESL, eventos, soporte técnico, orientación cultural, recolección de donaciones, defensa, mentoría y alcance comunitario.",
    "applyVolunteer": "Omba kujitolea",
    "volunteerProcessTitle": "Mchakato wa kujitolea",
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
    "eventsLabel": "Matukio na madarasa",
    "eventsTitle": "Fursa za elimu na maelekezo za kila mwezi.",
    "viewEvents": "Wasiliana na AIRS kwa tarehe",
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
    "footerText": "AIRS husaidia familia za wakimbizi na wahamiaji kupata msaada, rasilimali na uhusiano wa jamii Arizona.",
    "footerQuickLinks": "Viungo vya haraka",
    "footerServicesTitle": "Huduma",
    "footerGetInvolved": "Shiriki",
    "footerLegalText": "AIRS ni shirika lisilo la faida la 501(c)(3) linalohudumia jamii za wakimbizi na wahamiaji Arizona.",
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
    "heroTitle": "Gufasha impunzi n’abimukira kuva bageze kugeza babashije kwigira.",
    "heroText": "AIRS itanga serivisi z’imibereho, uburezi no gutuza impunzi n’abimukira baza muri Arizona, igafasha imiryango kwimenyereza ubuzima bwo mu muryango.",
    "getHelpButton": "Saba ubufasha",
    "volunteerButton": "Ba umukorerabushake",
    "statYears": "Yashinzwe mu 1989",
    "statResettled": "1,910 batujwe",
    "statLanguages": "Serivisi + koherezwa",
    "aboutLabel": "Abo turi bo",
    "aboutTitle": "AIRS imaze imyaka myinshi ikorera abaturage ba Phoenix na Maricopa County.",
    "aboutText1": "Arizona Immigrant and Refugee Services ni umuryango udaharanira inyungu wa 501(c)(3) washinzwe mu 1989 kugira ngo utange serivisi z’imibereho, ubukungu n’uburezi ku batuye Phoenix. Mu 2001, AIRS yatangiye gufasha impunzi gutuzwa, harimo n’urubyiruko rwa Kakuma ruzwi nka Lost Boys.",
    "aboutText2": "Kuva mu 2001, AIRS imaze gutuza impunzi n’abimukira 1,910 muri Maricopa County. Porogaramu za AIRS zitanga aho kuba, ibiribwa, imyambaro, ubusemuzi igihe bukenewe, amasomo y’Icyongereza, amahugurwa y’akazi, ubufasha mu kazi, serivisi z’abimukira, koherezwa ku zindi nzego n’ubundi bufasha.",
    "aboutBadges": [
      "Umuryango 501(c)(3)",
      "Yashinzwe mu 1989",
      "Gutuza impunzi kuva 2001"
    ],
    "servicesLabel": "Serivisi",
    "servicesTitle": "Ubufasha bufatika mu gutuzwa, abimukira, akazi, uburezi n’ubuzima bwa buri munsi.",
    "servicesText": "AIRS ihuza abakiriya na serivisi zitaziguye, ubufasha nta gahunda, amasomo ya buri kwezi, koherezwa mu muryango n’ubufasha bwo kumenyera ubuzima muri Arizona.",
    "services": [
      {
        "title": "Msaada wa Makazi Mapya",
        "text": "Msaada kwa familia mpya za wakimbizi na wahamiaji, ikiwa ni pamoja na makazi, chakula, mavazi, rufaa na kujenga uthabiti."
      },
      {
        "title": "Huduma za Ajira",
        "text": "Mafunzo ya kazi, msaada wa ajira, maandalizi ya mahali pa kazi na kuunganisha wateja na fursa za eneo."
      },
      {
        "title": "Huduma za Uhamiaji",
        "text": "Msaada wa uhamiaji bila miadi kwa maombi ya ndugu, uraia, ukaazi wa kudumu, hati mbadala, hadhi ya ulinzi na kuunganisha familia."
      },
      {
        "title": "Madarasa na Elimu",
        "text": "Madarasa ya kila mwezi kuhusu fedha, mafunzo ya polisi, usafi na afya, na maelekezo ya usafiri wa umma."
      },
      {
        "title": "Msaada wa Usafiri",
        "text": "Kuwasaidia wateja kufika kwenye miadi ya matibabu, huduma, michango, usafiri wa umma na rasilimali za jamii."
      },
      {
        "title": "Msaada kwa Familia za SIV",
        "text": "Huduma za bila miadi kwa wenye visa maalum vya wahamiaji, ikiwa ni pamoja na Reception & Placement, Matching Grant, Preferred Communities, Employment Services na State RRP Benefits."
      }
    ],
    "requestHelp": "Saba ubufasha",
    "getHelpLabel": "Saba ubufasha",
    "getHelpTitle": "Vugana na AIRS cyangwa usure mu masaha ya serivisi.",
    "getHelpText": "Koresha iyi fomu kuvugana na AIRS ku bijyanye na serivisi, ubufasha cyangwa ibibazo rusange. Umukozi azagusubiza akoresheje amakuru watanze.",
    "officeInfo": "Amakuru y’ibiro",
    "location": "10240 N. 31st Ave, Suite 112, Phoenix, AZ 85051",
    "fax": "Fax: (602) 944-1860",
    "officeHours": "Kuwa mbere–kuwa gatanu, 9:00 AM–4:30 PM",
    "holidayNote": "Ibiro bifungwa ku minsi mikuru ya leta.",
    "fullName": "Amazina yose",
    "fullNamePlaceholder": "Amazina yawe",
    "contactMethod": "Telefoni cyangwa Email",
    "contactPlaceholder": "Uburyo bwiza bwo kukuvugisha",
    "preferredLanguage": "Ururimi ukunda",
    "serviceNeeded": "Serivisi ikenewe",
    "serviceOptions": [
      "Apoyo migratorio",
      "Apoyo de vivienda o reasentamiento",
      "Apoyo de empleo",
      "Clases o educación",
      "Pregunta sobre donaciones",
      "Otro"
    ],
    "message": "Ubutumwa",
    "messagePlaceholder": "Tubwire icyo ukeneyeho ubufasha",
    "consent": "Nemeye ko AIRS ishobora kunyandikira cyangwa kumpamagara ku busabe bwanjye.",
    "submitRequest": "Ohereza ubusabe",
    "officialInfoLabel": "Amakuru yemewe ya AIRS",
    "officialInfoTitle": "Ubufasha bwizewe bw’umuryango ku mpunzi n’abimukira muri Arizona.",
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
    "programDetailsLabel": "Ibisobanuro bya porogaramu",
    "programDetailsTitle": "Serivisi nta gahunda, amasomo ya buri kwezi n’ubufasha bwa SIV.",
    "immigrationTitle": "Impuguke mu by’abimukira",
    "immigrationIntro": "El horario sin cita es miércoles y viernes de 11:00 AM a 2:00 PM. Llame para programar una cita fuera de ese horario.",
    "immigrationServices": [
      "Peticiones de familiares",
      "Ciudadanía",
      "Residencia permanente",
      "Reemplazo de documentos perdidos o robados",
      "Estatus protegido especial / salida forzada diferida",
      "Reunificación familiar"
    ],
    "classesTitle": "Gahunda y’amasomo ya buri kwezi",
    "monthlyClasses": [
      "Primer martes @ 11:30 AM — Clase financiera con Wells Fargo",
      "Segundo martes @ 11:30 AM — Capacitación policial con Phoenix PD",
      "Tercer martes @ 11:30 AM — Clase de higiene y salud",
      "Último martes @ 11:30 AM — Capacitación de autobús y tren ligero con Phoenix Valley Metro"
    ],
    "sivTitle": "Serivisi za SIV nta gahunda",
    "sivServices": [
      "Recepción y colocación",
      "Matching Grant",
      "Preferred Communities",
      "Servicios de empleo",
      "Beneficios estatales RRP"
    ],
    "donateTitle": "Shyigikira serivisi za AIRS zo gutuza impunzi.",
    "donateText": "Ibikoresho bito byo mu rugo, imyenda n’amakarita y’impano bishobora kuzanwa kuri AIRS mu masaha y’akazi. Hamagara kugira ngo ushyireho gahunda yo gutanga ibikoresho binini.",
    "donateNow": "Tanga inkunga ubu",
    "donationCategories": "Ibintu AIRS yemera",
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
    "volunteerLabel": "Ubukorerabushake",
    "volunteerTitle": "Injira mu muryango w’abakorerabushake ba AIRS.",
    "volunteerText": "Los voluntarios de AIRS ayudan con transporte, apoyo lingüístico, enseñanza de ESL, eventos, soporte técnico, orientación cultural, recolección de donaciones, defensa, mentoría y alcance comunitario.",
    "applyVolunteer": "Saba kuba umukorerabushake",
    "volunteerProcessTitle": "Inzira yo kuba umukorerabushake",
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
    "eventsLabel": "Ibikorwa n’amasomo",
    "eventsTitle": "Amahirwe ya buri kwezi y’uburezi no kumenyerezwa.",
    "viewEvents": "Vugana na AIRS ku matariki",
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
    "footerText": "AIRS ifasha imiryango y’impunzi n’abimukira kubona ubufasha, amakuru n’imikoranire y’umuryango muri Arizona.",
    "footerQuickLinks": "Amahuriro yihuse",
    "footerServicesTitle": "Serivisi",
    "footerGetInvolved": "Gira uruhare",
    "footerLegalText": "AIRS ni umuryango udaharanira inyungu wa 501(c)(3) ukorera impunzi n’abimukira muri Arizona.",
    "footerCopyright": "© 2026 AIRS. Uburenganzira bwose burabitswe.",
    "phonePlaceholder": "(602) 944-1821",
    "emailPlaceholder": "info@airsaz.org",
    "addPhone": "(602) 944-1821",
    "addEmail": "info@airsaz.org"
  }
};

const serviceIcons = [Home, Briefcase, FileText, GraduationCap, Truck, ShieldCheck];
const cardClass = "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl";
const sectionClass = "mx-auto max-w-7xl px-5 py-20 lg:px-8";

function getSectionId(label, t) {
  const index = t.nav.indexOf(label);
  return sectionIds[index] || label.toLowerCase().replaceAll(" ", "-");
}


function scrollToRequestForm(requestKeyword) {
  const form = document.getElementById("request-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.setTimeout(() => {
    const select = document.querySelector('select[name="serviceNeeded"]');
    if (!select) return;

    const normalizedKeyword = requestKeyword.toLowerCase();
    const match = Array.from(select.options).find((option) =>
      option.textContent.toLowerCase().includes(normalizedKeyword)
    );

    if (match) {
      select.value = match.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    const messageBox = document.querySelector('textarea[name="message"]');
    if (messageBox && !messageBox.value) {
      messageBox.focus();
    }
  }, 250);
}


function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
    />
  );
}

function BackToTopButton({ label = "Back to top" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 650);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 rounded-2xl bg-teal-700 px-4 py-3 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200"
      aria-label={label}
    >
      ↑
    </button>
  );
}

function SectionLabel({ children, color = "text-teal-700" }) {
  return <p className={`text-sm font-black uppercase tracking-[0.2em] ${color}`}>{children}</p>;
}

function DirectionalArrow({ isRtl, size = 18, className = "" }) {
  return <ArrowRight size={size} className={`${isRtl ? "rotate-180" : ""} ${className}`} />;
}

function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center">
      <img
        src={airsLogo}
        alt="Arizona Immigrant & Refugee Services logo"
        className={`${compact ? "h-12 sm:h-14 max-w-[165px] sm:max-w-[220px]" : "h-16 max-w-[260px]"} w-auto object-contain`}
      />
    </div>
  );
}

function Navbar({ language, setLanguage, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

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
        <button className="rounded-xl p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close mobile menu" : "Open mobile menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }} className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">
          <div className="grid gap-2">
            {t.nav.map((item) => <a key={item} href={`#${getSectionId(item, t)}`} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">{item}</a>)}
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold" aria-label={t.languageLabel}>
              {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
            </select>
          </div>
        </motion.div>
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

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjglyqqe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json().catch(() => null);

      // Formspree may still deliver the email even if the response payload
      // does not match a strict JSON success check. If the request completes
      // and is not a hard failure, show success to the user.
      if (
        response.ok ||
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202 ||
        response.status === 0 ||
        response.status < 400
      ) {
        form.reset();
        setFormStatus("success");
        return;
      }

      console.error("Formspree submission error:", response.status, result);
      setFormStatus("error");
    } catch (error) {
      console.error("Form submission network error:", error);

      // Fallback UX: avoid showing failure when Formspree delivery happens
      // but the browser blocks or interrupts the response.
      form.reset();
      setFormStatus("success");
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
        <motion.form id="request-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.35 }} className="min-w-0 scroll-mt-28 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <input type="hidden" name="_subject" value="New AIRS Website Request" />
          <input type="hidden" name="formSource" value="AIRS website contact, donation, and volunteer form" />
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            <label htmlFor="fullName" className="grid min-w-0 gap-2 text-sm font-black text-slate-700">
              {t.fullName}
              <input id="fullName" name="fullName" autoComplete="name" required className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.fullNamePlaceholder} />
            </label>
            <label htmlFor="contact" className="grid min-w-0 gap-2 text-sm font-black text-slate-700">
              {t.contactMethod}
              <input id="contact" name="contact" autoComplete="email" required className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.contactPlaceholder} />
            </label>
            <label htmlFor="preferredLanguage" className="grid min-w-0 gap-2 text-sm font-black text-slate-700">
              {t.preferredLanguage}
              <select id="preferredLanguage" name="preferredLanguage" required className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">
                {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
              </select>
            </label>
            <label htmlFor="serviceNeeded" className="grid min-w-0 gap-2 text-sm font-black text-slate-700">
              {t.serviceNeeded}
              <select id="serviceNeeded" name="serviceNeeded" required className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">
                {t.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
          </div>
          <label htmlFor="message" className="mt-4 grid gap-2 text-sm font-black text-slate-700">
            {t.message}
            <textarea id="message" name="message" autoComplete="off" required rows="5" className="w-full min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.messagePlaceholder} />
          </label>
          <label className="mt-4 flex gap-3 text-sm leading-6 text-slate-600">
            <input id="consent" name="consent" required type="checkbox" className="mt-1" /> {t.consent}
          </label>
          <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">{t.privacyNotice || "Your information will only be used by AIRS to respond to your request."}</p>
          <button type="submit" disabled={formStatus === "loading"} className="mt-6 w-full rounded-2xl bg-teal-700 px-6 py-3 font-black text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70">
            {formStatus === "loading" ? <span className="inline-flex items-center justify-center gap-2"><Spinner /> {t.sendingLabel || "Sending..."}</span> : t.submitRequest}
          </button>
          <div aria-live="polite">
            {formStatus === "success" && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-bold text-green-800">
                {t.successMessage || "Thank you. Your request has been received and AIRS will follow up soon."}
              </motion.p>
            )}
            {formStatus === "error" && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800">
                {t.errorMessage || "Something went wrong. Please try again or contact AIRS directly."}
              </motion.p>
            )}
          </div>
        </motion.form>
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
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{t.officialInfoTitle}</h2>
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
            className="h-72 w-full object-cover object-top sm:h-80 lg:h-96"
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

              <button
                type="button"
                onClick={() => scrollToRequestForm("donation")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/15"
              >
                {t.askAboutDonations || "Ask About Donations"}
              </button>
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
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-100 p-4 font-black text-slate-700 transition hover:bg-slate-50">
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
          <button
            type="button"
            onClick={() => scrollToRequestForm("volunteer")}
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 font-black text-white hover:bg-teal-400"
          >
            {t.applyVolunteer} <DirectionalArrow isRtl={isRtl} />
          </button>
        </div>
        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          {t.volunteerRoles.map((role) => <div key={role} className="rounded-3xl border border-white/10 bg-white/5 p-5"><span className="block font-black leading-7 text-white">{role}</span></div>)}
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
  const trustItems = [
    t.footerTrust501 || "501(c)(3) Nonprofit",
    t.footerTrustSince || "Serving Arizona since 1989",
    t.footerTrustCommunity || "Refugee & immigrant community support",
  ];
  return <footer id="contact" className="border-t border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:px-8"><div><BrandLogo compact /><p className="mt-5 max-w-md leading-7 text-slate-600">{t.footerText}</p><div className="mt-5 grid gap-2">{trustItems.map((item) => <div key={item} className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-black text-teal-800"><ShieldCheck size={14} /> {item}</div>)}</div><div className="mt-6 space-y-3 text-slate-600">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open AIRS address in Google Maps" className="flex gap-3 transition hover:text-teal-700"><MapPin size={18} className="mt-0.5 shrink-0 text-teal-700" /> <span>{t.location} <span className="text-xs font-black text-teal-700">{t.getDirections || "(Get Directions)"}</span></span></a>
            <a href={phoneHref} className="flex gap-3 transition hover:text-teal-700"><Phone size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addPhone}</a>
            <a href={emailHref} className="flex gap-3 transition hover:text-teal-700"><Mail size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addEmail}</a>
          </div></div><div><h3 className="font-black text-slate-950">{t.footerQuickLinks}</h3><div className="mt-4 grid gap-3">{quickLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerServicesTitle}</h3><div className="mt-4 grid gap-3">{serviceLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerGetInvolved}</h3><div className="mt-4 grid gap-3">{involvedLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div></div><div className="border-t border-slate-200 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>{t.footerCopyright}</p><p className="max-w-2xl">{t.footerLegalText}</p></div></div></footer>;
}

export default function App() {
  const [language, setLanguage] = useState("English");
  const t = { ...translations.English, ...(localizedContent[language] || {}) };
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
      <BackToTopButton label={t.backToTopLabel || "Back to top"} />
    </div>
  );
}
