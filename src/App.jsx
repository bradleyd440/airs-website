import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock,
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

import airsLogo from "./assets/airs-logo.png";
import refugeeGroupPhoto from "./assets/original-refugees-group.jpg";
import familyFieldPhoto from "./assets/original-family-field.jpg";
import capitolFieldTripPhoto from "./assets/original-capitol-field-trip.jpg";

const originalSitePhotos = [
  { src: capitolFieldTripPhoto, title: "Community field trip", text: "AIRS community members during an Arizona civic field trip." },
  { src: familyFieldPhoto, title: "Resettlement support", text: "Original AIRS website imagery showing refugee family support and resettlement context." },
  { src: refugeeGroupPhoto, title: "Why the work matters", text: "Original AIRS website image used to communicate refugee displacement and humanitarian need." },
];

const languages = ["English", "Spanish", "Arabic", "Dari", "Swahili", "French", "Kinyarwanda"];
const languageDirections = { Arabic: "rtl", Dari: "rtl" };
const languageCodes = {
  English: "en",
  Spanish: "es",
  Arabic: "ar",
  Dari: "fa-AF",
  Swahili: "sw",
  French: "fr",
  Kinyarwanda: "rw",
};

const languageNames = {
  English: { English: "English", Spanish: "Spanish", Arabic: "Arabic", Dari: "Dari", Swahili: "Swahili", French: "French", Kinyarwanda: "Kinyarwanda" },
  Spanish: { English: "Inglés", Spanish: "Español", Arabic: "Árabe", Dari: "Dari", Swahili: "Suajili", French: "Francés", Kinyarwanda: "Kinyarwanda" },
  Arabic: { English: "الإنجليزية", Spanish: "الإسبانية", Arabic: "العربية", Dari: "الدَرية", Swahili: "السواحيلية", French: "الفرنسية", Kinyarwanda: "الكينيارواندا" },
  Dari: { English: "انگلیسی", Spanish: "اسپانیایی", Arabic: "عربی", Dari: "دری", Swahili: "سواحیلی", French: "فرانسوی", Kinyarwanda: "کینیارواندا" },
  Swahili: { English: "Kiingereza", Spanish: "Kihispania", Arabic: "Kiarabu", Dari: "Kidarí", Swahili: "Kiswahili", French: "Kifaransa", Kinyarwanda: "Kinyarwanda" },
  French: { English: "Anglais", Spanish: "Espagnol", Arabic: "Arabe", Dari: "Dari", Swahili: "Swahili", French: "Français", Kinyarwanda: "Kinyarwanda" },
  Kinyarwanda: { English: "Icyongereza", Spanish: "Icyesipanyoli", Arabic: "Icyarabu", Dari: "Ikidari", Swahili: "Igiswahili", French: "Igifaransa", Kinyarwanda: "Ikinyarwanda" },
};

const baseNavIds = ["home", "about", "services", "get-help", "donate", "volunteer", "events", "contact"];

const translations = {
  English: {
    siteName: "AIRS",
    siteFullName: "Arizona Immigrant & Refugee Services",
    nav: ["Home", "About", "Services", "Get Help", "Donate", "Volunteer", "Events", "Contact"],
    donateButton: "Donate",
    languageLabel: "Select language",
    heroBadge: "Multilingual support for Arizona families",
    heroTitle: "Helping refugees and immigrants build new lives in Arizona.",
    heroText: "AIRS connects families with practical support, community resources, immigration guidance, education, and pathways toward long-term stability.",
    getHelpButton: "Get Help",
    volunteerButton: "Volunteer With Us",
    heroImageLabel: "Community support, dignity, and belonging",
    heroCardTitle: "A safer start. A stronger future.",
    heroCardText: "A modern, mobile-first website that helps clients, donors, volunteers, and partners find the right next step quickly.",
    statFounded: "Founded",
    statResettled: "People resettled",
    statServices: "Core service areas",
    statLanguages: "Language options",
    mostNeededLabel: "Most needed",
    mostNeededText: "Gift cards, clean clothing, hygiene products, school supplies, transportation tools, bedding, employment devices, and volunteers.",
    officialInfoLabel: "Official organization info",
    officialInfoTitle: "Serving refugee and immigrant families since 1989.",
    officialInfoText: "AIRS began in 1989 and started refugee resettlement work in 2001. The new website keeps that trusted history while making services easier to access on mobile.",
    missionLabel: "Mission",
    missionText: "AIRS provides social and educational services to meet the needs of refugees and immigrants coming to Arizona by ensuring a successful transition from arrival to self-sufficiency.",
    hoursLabel: "Office Hours",
    hoursText: "Monday to Friday, 9:00 AM – 4:30 PM. Closed on federal holidays.",
    donationEmailLabel: "Donation Receipts",
    donationEmailText: "For a donation receipt, email info@airsaz.org.",
    aboutLabel: "About AIRS",
    aboutTitle: "A clearer story builds more trust.",
    aboutText1: "AIRS supports refugees, immigrants, and SIV families as they navigate resettlement, employment, education, immigration resources, and community life in Arizona.",
    aboutText2: "The new website is designed to feel welcoming, trustworthy, and easy to use for people who may be under stress, using mobile phones, or reading in a second language.",
    aboutBadges: ["Accessible", "Multilingual", "Mobile-first"],
    servicesLabel: "Services",
    servicesTitle: "Clear support pathways instead of hard-to-scan pages.",
    servicesText: "Each service area uses plain language, clear next steps, and mobile-friendly service cards.",
    services: [
      { title: "Resettlement Support", text: "Practical help for newly arrived refugee and immigrant families settling into life in Arizona." },
      { title: "Employment Services", text: "Job readiness, workplace preparation, resume help, and local employment resource referrals." },
      { title: "Immigration Guidance", text: "Support with immigration-related forms, appointments, referrals, and community resources." },
      { title: "Classes & Education", text: "English learning, orientation classes, life-skills education, and family support workshops." },
      { title: "Transportation Help", text: "Assistance connecting clients to essential appointments, services, and community support." },
      { title: "SIV Family Support", text: "Specialized support for SIV families and refugees rebuilding stability, safety, and independence." },
    ],
    requestHelp: "Request help",
    getHelpLabel: "Get Help",
    getHelpTitle: "A simple intake form for clients.",
    getHelpText: "This front-end form is ready for connection to email, Google Forms, Firebase, Airtable, or a CRM.",
    officeInfo: "Office Information",
    location: "10240 N 31st Ave #112, Phoenix, AZ 85051",
    phonePlaceholder: "Call ahead for appointments outside walk-in hours",
    emailPlaceholder: "info@airsaz.org",
    fullName: "Full Name",
    fullNamePlaceholder: "Your name",
    contactMethod: "Phone or Email",
    contactPlaceholder: "Best contact",
    preferredLanguage: "Preferred Language",
    serviceNeeded: "Service Needed",
    serviceOptions: ["Immigration support", "Housing support", "Employment support", "Classes or education", "Other"],
    message: "Message",
    messagePlaceholder: "Tell us what you need help with",
    consent: "I agree that AIRS may contact me about my request.",
    submitRequest: "Submit Request",
    formSuccess: "Thank you. This demo shows how a successful request message will appear once the form is connected.",
    donateTitle: "Your support helps families start again.",
    donateText: "The donation section explains money donations, item donations, drop-off details, and receipts without overwhelming mobile users.",
    donateNow: "Donate Now",
    donationCategories: "Donation categories",
    donationItems: ["Gift cards for professional clothing, groceries, and thrift stores", "Clean clothing", "Deodorant, soap, shampoo, toothpaste, toilet paper, diapers, and wipes", "Bus passes, safe bikes, bike locks, lights, helmets, new car seats, strollers, and wheelchairs", "Dish soap, laundry soap, all-purpose cleaner, and paper towels", "Backpacks, notebooks, pencils, folders, crayons, scissors, glue, and erasers", "Twin sheet sets, blankets, and standard pillows", "Laptops, desktops, smartphones, and tablets"],
    donationNote: "Connect this button to the official donation platform before launch.",
    volunteerLabel: "Volunteer",
    volunteerTitle: "A real volunteer flow instead of broken downloads.",
    volunteerText: "Volunteers can understand the roles available and move quickly toward an application process.",
    applyVolunteer: "Apply to Volunteer",
    volunteerRoles: ["Transportation to and from medical appointments", "Translation and interpretation", "Teaching English as a second language", "Helping with fundraisers or events", "Technical support for the office", "Cultural orientation support", "Picking up donations and transporting them to clients", "Community advocacy", "Mentoring a refugee family", "Community outreach"],
    eventsLabel: "Events",
    eventsTitle: "A simple event section ready for real dates.",
    viewEvents: "View all events",
    events: [
      { title: "Community Orientation", date: "Upcoming", text: "Welcome session for newly arrived families and community partners." },
      { title: "English Class", date: "Upcoming", text: "Practical English learning for daily life, work, and appointments." },
      { title: "Donation Drop-Off Day", date: "Upcoming", text: "Community drop-off event for high-need household and hygiene items." },
    ],
    footerText: "AIRS helps refugee and immigrant families access support, resources, and community connections across Arizona.",
    footerQuickLinks: "Quick Links",
    footerServicesTitle: "Services",
    footerGetInvolved: "Get Involved",
    footerLegalTitle: "Nonprofit Note",
    footerLegalText: "AIRS is a 501(c)(3) nonprofit organization and a subsidiary of ECDC. Update final launch details with official donation, privacy, and registration information.",
    footerCopyright: "© 2026 AIRS. All rights reserved.",
    addPhone: "Add phone number",
    addEmail: "Add email address",
  },
  Spanish: {
    siteFullName: "Servicios para Inmigrantes y Refugiados de Arizona",
    nav: ["Inicio", "Acerca de", "Servicios", "Obtener Ayuda", "Donar", "Voluntariado", "Eventos", "Contacto"],
    donateButton: "Donar",
    languageLabel: "Seleccionar idioma",
    heroBadge: "Apoyo multilingüe para familias de Arizona",
    heroTitle: "Ayudando a refugiados e inmigrantes a construir nuevas vidas en Arizona.",
    heroText: "AIRS conecta a las familias con apoyo práctico, recursos comunitarios, orientación migratoria, educación y caminos hacia la estabilidad a largo plazo.",
    getHelpButton: "Obtener ayuda",
    volunteerButton: "Ser voluntario",
    heroImageLabel: "Apoyo comunitario, dignidad y pertenencia",
    heroCardTitle: "Un comienzo más seguro. Un futuro más fuerte.",
    heroCardText: "Un sitio moderno y pensado para móviles que ayuda a clientes, donantes, voluntarios y socios a encontrar el siguiente paso.",
    statFounded: "Fundada",
    statResettled: "Personas reasentadas",
    statServices: "Áreas principales de servicio",
    statLanguages: "Opciones de idioma",
    mostNeededLabel: "Más necesario",
    mostNeededText: "Artículos del hogar, productos de higiene, ropa, útiles escolares y voluntarios comunitarios.",
    officialInfoLabel: "Información oficial",
    officialInfoTitle: "Sirviendo a familias refugiadas e inmigrantes desde 1989.",
    officialInfoText: "AIRS comenzó en 1989 y empezó el trabajo de reasentamiento de refugiados en 2001. El nuevo sitio mantiene esa historia de confianza y facilita el acceso móvil.",
    missionLabel: "Misión",
    missionText: "Apoyar a refugiados e inmigrantes mediante reasentamiento, empleo, educación, recursos migratorios y conexión comunitaria en Arizona.",
    hoursLabel: "Horario de oficina",
    hoursText: "Lunes a viernes, 9:00 AM – 5:00 PM. Cerrado en feriados federales.",
    donationEmailLabel: "Recibos de donación",
    donationEmailText: "Agregue el correo oficial de recibos antes del lanzamiento.",
    aboutLabel: "Acerca de AIRS",
    aboutTitle: "Una historia más clara genera más confianza.",
    aboutText1: "AIRS apoya a refugiados, inmigrantes y familias SIV mientras navegan el reasentamiento, el empleo, la educación, los recursos migratorios y la vida comunitaria en Arizona.",
    aboutText2: "El nuevo sitio está diseñado para ser acogedor, confiable y fácil de usar para personas que usan teléfonos móviles o leen en un segundo idioma.",
    aboutBadges: ["Accesible", "Multilingüe", "Diseñado para móvil"],
    servicesLabel: "Servicios",
    servicesTitle: "Rutas de apoyo claras en lugar de páginas difíciles de leer.",
    servicesText: "Cada área usa lenguaje simple, pasos claros y tarjetas fáciles de usar en móvil.",
    services: [
      { title: "Apoyo de reasentamiento", text: "Ayuda práctica para familias refugiadas e inmigrantes recién llegadas que se establecen en Arizona." },
      { title: "Servicios de empleo", text: "Preparación para el trabajo, ayuda con currículums y referencias a recursos de empleo locales." },
      { title: "Orientación migratoria", text: "Apoyo con formularios, citas, referencias y recursos comunitarios relacionados con inmigración." },
      { title: "Clases y educación", text: "Aprendizaje de inglés, orientación, habilidades para la vida y talleres de apoyo familiar." },
      { title: "Ayuda con transporte", text: "Asistencia para conectar a clientes con citas, servicios y apoyo comunitario." },
      { title: "Apoyo para familias SIV", text: "Apoyo especializado para familias SIV y refugiados que reconstruyen estabilidad e independencia." },
    ],
    requestHelp: "Solicitar ayuda",
    getHelpLabel: "Obtener ayuda",
    getHelpTitle: "Un formulario sencillo de admisión para clientes.",
    getHelpText: "Este formulario está listo para conectarse a correo electrónico, Google Forms, Firebase, Airtable o un CRM.",
    officeInfo: "Información de oficina",
    location: "Phoenix, Arizona",
    phonePlaceholder: "Agregar número principal de oficina",
    emailPlaceholder: "Agregar correo oficial de admisión",
    fullName: "Nombre completo",
    fullNamePlaceholder: "Su nombre",
    contactMethod: "Teléfono o correo electrónico",
    contactPlaceholder: "Mejor forma de contacto",
    preferredLanguage: "Idioma preferido",
    serviceNeeded: "Servicio necesario",
    serviceOptions: ["Apoyo migratorio", "Apoyo de vivienda", "Apoyo de empleo", "Clases o educación", "Otro"],
    message: "Mensaje",
    messagePlaceholder: "Cuéntenos con qué necesita ayuda",
    consent: "Acepto que AIRS pueda contactarme sobre mi solicitud.",
    submitRequest: "Enviar solicitud",
    formSuccess: "Gracias. Esta demostración muestra cómo aparecerá el mensaje de éxito cuando el formulario esté conectado.",
    donateTitle: "Su apoyo ayuda a las familias a comenzar de nuevo.",
    donateText: "La sección de donaciones explica dinero, artículos, entrega y recibos sin abrumar a usuarios móviles.",
    donateNow: "Donar ahora",
    donationCategories: "Categorías de donación",
    donationItems: ["Artículos esenciales del hogar", "Productos de higiene", "Útiles escolares", "Ropa", "Muebles", "Tarjetas de regalo"],
    donationNote: "Conecte este botón a la plataforma oficial de donaciones antes del lanzamiento.",
    volunteerLabel: "Voluntariado",
    volunteerTitle: "Un flujo real para voluntarios en lugar de descargas rotas.",
    volunteerText: "Los voluntarios pueden entender los roles disponibles y avanzar rápidamente hacia la solicitud.",
    applyVolunteer: "Postularse como voluntario",
    volunteerRoles: ["Mentoría", "Apoyo con transporte", "Clasificación de donaciones", "Apoyo en clases de inglés", "Eventos comunitarios", "Ayuda administrativa"],
    eventsLabel: "Eventos",
    eventsTitle: "Una sección de eventos lista para fechas reales.",
    viewEvents: "Ver todos los eventos",
    events: [
      { title: "Orientación comunitaria", date: "Próximamente", text: "Sesión de bienvenida para familias recién llegadas y socios comunitarios." },
      { title: "Clase de inglés", date: "Próximamente", text: "Aprendizaje práctico de inglés para la vida diaria, el trabajo y las citas." },
      { title: "Día de entrega de donaciones", date: "Próximamente", text: "Evento comunitario de entrega de artículos del hogar y productos de higiene." },
    ],
    footerText: "AIRS ayuda a familias refugiadas e inmigrantes a acceder a apoyo, recursos y conexiones comunitarias en Arizona.",
    footerQuickLinks: "Enlaces rápidos",
    footerServicesTitle: "Servicios",
    footerGetInvolved: "Participar",
    footerLegalTitle: "Nota sin fines de lucro",
    footerLegalText: "Actualice este sitio con información oficial de contacto, enlaces de donación, privacidad y registro sin fines de lucro antes del lanzamiento.",
    footerCopyright: "© 2026 AIRS. Todos los derechos reservados.",
    addPhone: "Agregar número de teléfono",
    addEmail: "Agregar dirección de correo electrónico",
  },
  Arabic: {
    siteFullName: "خدمات المهاجرين واللاجئين في أريزونا",
    nav: ["الرئيسية", "من نحن", "الخدمات", "احصل على المساعدة", "تبرع", "تطوع", "الفعاليات", "اتصل بنا"],
    donateButton: "تبرع",
    languageLabel: "اختر اللغة",
    heroBadge: "دعم متعدد اللغات للعائلات في أريزونا",
    heroTitle: "نساعد اللاجئين والمهاجرين على بناء حياة جديدة في أريزونا.",
    heroText: "تربط AIRS العائلات بالدعم العملي وموارد المجتمع وإرشاد الهجرة والتعليم والمسارات نحو الاستقرار.",
    getHelpButton: "احصل على المساعدة",
    volunteerButton: "تطوع معنا",
    heroImageLabel: "دعم المجتمع والكرامة والانتماء",
    heroCardTitle: "بداية أكثر أمانًا. مستقبل أقوى.",
    heroCardText: "موقع حديث ومناسب للهاتف يساعد العملاء والمتبرعين والمتطوعين والشركاء على العثور على الخطوة التالية.",
    statFounded: "تأسست",
    statResettled: "أشخاص أُعيد توطينهم",
    statServices: "مجالات خدمة أساسية",
    statLanguages: "خيارات اللغة",
    mostNeededLabel: "الأكثر احتياجًا",
    mostNeededText: "مستلزمات منزلية، منتجات نظافة، ملابس، لوازم مدرسية، ومتطوعون.",
    officialInfoLabel: "معلومات رسمية",
    officialInfoTitle: "خدمة العائلات اللاجئة والمهاجرة منذ عام 1989.",
    officialInfoText: "بدأت AIRS عام 1989 وبدأت إعادة توطين اللاجئين عام 2001. يحافظ الموقع الجديد على هذه الثقة ويجعل الوصول للخدمات أسهل.",
    missionLabel: "المهمة",
    missionText: "دعم اللاجئين والمهاجرين من خلال إعادة التوطين والعمل والتعليم وموارد الهجرة والارتباط بالمجتمع في أريزونا.",
    hoursLabel: "ساعات المكتب",
    hoursText: "من الاثنين إلى الجمعة، 9:00 صباحًا – 5:00 مساءً. مغلق في العطلات الفيدرالية.",
    donationEmailLabel: "إيصالات التبرع",
    donationEmailText: "أضف البريد الإلكتروني الرسمي لإيصالات التبرع قبل الإطلاق.",
    aboutLabel: "عن AIRS",
    aboutTitle: "القصة الواضحة تبني ثقة أكبر.",
    aboutText1: "تدعم AIRS اللاجئين والمهاجرين وعائلات SIV أثناء إعادة التوطين والعمل والتعليم وموارد الهجرة والحياة المجتمعية في أريزونا.",
    aboutText2: "تم تصميم الموقع الجديد ليكون مرحبًا وموثوقًا وسهل الاستخدام على الهواتف وللقراءة بلغة ثانية.",
    aboutBadges: ["سهل الوصول", "متعدد اللغات", "مصمم للهاتف"],
    servicesLabel: "الخدمات",
    servicesTitle: "مسارات دعم واضحة بدلًا من صفحات صعبة القراءة.",
    servicesText: "كل مجال خدمة يستخدم لغة بسيطة وخطوات واضحة وبطاقات مناسبة للهاتف.",
    services: [
      { title: "دعم إعادة التوطين", text: "مساعدة عملية للعائلات اللاجئة والمهاجرة الوافدة حديثًا وهي تستقر في أريزونا." },
      { title: "خدمات التوظيف", text: "الاستعداد للعمل والمساعدة في السيرة الذاتية والإحالة إلى موارد توظيف محلية." },
      { title: "إرشاد الهجرة", text: "دعم في النماذج والمواعيد والإحالات والموارد المجتمعية المتعلقة بالهجرة." },
      { title: "الدروس والتعليم", text: "تعلم الإنجليزية ودروس التوجيه ومهارات الحياة وورش دعم الأسرة." },
      { title: "مساعدة النقل", text: "مساعدة العملاء في الوصول إلى المواعيد والخدمات والدعم المجتمعي." },
      { title: "دعم عائلات SIV", text: "دعم متخصص لعائلات SIV واللاجئين لإعادة بناء الاستقرار والاستقلال." },
    ],
    requestHelp: "اطلب المساعدة",
    getHelpLabel: "احصل على المساعدة",
    getHelpTitle: "نموذج استقبال بسيط للعملاء.",
    getHelpText: "هذا النموذج جاهز للربط بالبريد الإلكتروني أو Google Forms أو Firebase أو Airtable أو CRM.",
    officeInfo: "معلومات المكتب",
    location: "فينيكس، أريزونا",
    phonePlaceholder: "أضف رقم هاتف المكتب الرئيسي",
    emailPlaceholder: "أضف البريد الإلكتروني الرسمي للاستقبال",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "اسمك",
    contactMethod: "الهاتف أو البريد الإلكتروني",
    contactPlaceholder: "أفضل وسيلة للتواصل",
    preferredLanguage: "اللغة المفضلة",
    serviceNeeded: "الخدمة المطلوبة",
    serviceOptions: ["دعم الهجرة", "دعم السكن", "دعم التوظيف", "دروس أو تعليم", "أخرى"],
    message: "الرسالة",
    messagePlaceholder: "أخبرنا بما تحتاج إلى مساعدة فيه",
    consent: "أوافق على أن تتواصل AIRS معي بخصوص طلبي.",
    submitRequest: "إرسال الطلب",
    formSuccess: "شكرًا لك. يوضح هذا العرض كيف ستظهر رسالة النجاح بعد ربط النموذج.",
    donateTitle: "دعمك يساعد العائلات على البدء من جديد.",
    donateText: "يوضح قسم التبرعات المال والتبرعات العينية والتسليم والإيصالات بطريقة سهلة للهاتف.",
    donateNow: "تبرع الآن",
    donationCategories: "فئات التبرع",
    donationItems: ["مستلزمات منزلية", "منتجات نظافة", "لوازم مدرسية", "ملابس", "أثاث", "بطاقات هدايا"],
    donationNote: "اربط هذا الزر بمنصة التبرع الرسمية قبل الإطلاق.",
    volunteerLabel: "تطوع",
    volunteerTitle: "تجربة تطوع حقيقية بدلًا من التنزيلات المعطلة.",
    volunteerText: "يمكن للمتطوعين فهم الأدوار المتاحة والتحرك بسرعة نحو عملية التقديم.",
    applyVolunteer: "قدّم للتطوع",
    volunteerRoles: ["الإرشاد", "دعم النقل", "فرز التبرعات", "دعم دروس الإنجليزية", "فعاليات المجتمع", "مساعدة إدارية"],
    eventsLabel: "الفعاليات",
    eventsTitle: "قسم فعاليات جاهز للتواريخ الحقيقية.",
    viewEvents: "عرض كل الفعاليات",
    events: [
      { title: "توجيه مجتمعي", date: "قريبًا", text: "جلسة ترحيب للعائلات الوافدة حديثًا وشركاء المجتمع." },
      { title: "درس إنجليزي", date: "قريبًا", text: "تعلم إنجليزي عملي للحياة اليومية والعمل والمواعيد." },
      { title: "يوم تسليم التبرعات", date: "قريبًا", text: "فعالية مجتمعية لتسليم المستلزمات المنزلية ومنتجات النظافة." },
    ],
    footerText: "تساعد AIRS عائلات اللاجئين والمهاجرين على الوصول إلى الدعم والموارد وروابط المجتمع في أريزونا.",
    footerQuickLinks: "روابط سريعة",
    footerServicesTitle: "الخدمات",
    footerGetInvolved: "شارك معنا",
    footerLegalTitle: "ملاحظة للمنظمة غير الربحية",
    footerLegalText: "حدّث هذا الموقع بمعلومات الاتصال الرسمية وروابط التبرع وتفاصيل الخصوصية ومعلومات التسجيل قبل الإطلاق.",
    footerCopyright: "© 2026 AIRS. جميع الحقوق محفوظة.",
    addPhone: "أضف رقم الهاتف",
    addEmail: "أضف عنوان البريد الإلكتروني",
  },
  Dari: {},
  Swahili: {},
  French: {},
  Kinyarwanda: {},
};

translations.Dari = { ...translations.Arabic, siteFullName: "خدمات مهاجرین و پناهندگان آریزونا", nav: ["خانه", "درباره", "خدمات", "کمک بگیرید", "کمک مالی", "داوطلبی", "رویدادها", "تماس"], donateButton: "کمک مالی", languageLabel: "انتخاب زبان", heroTitle: "کمک به پناهندگان و مهاجرین برای ساختن زندگی تازه در آریزونا.", getHelpButton: "کمک بگیرید", volunteerButton: "با ما داوطلب شوید", footerCopyright: "© 2026 AIRS. تمام حقوق محفوظ است." };
translations.Swahili = { ...translations.English, siteFullName: "Huduma za Wahamiaji na Wakimbizi wa Arizona", nav: ["Nyumbani", "Kuhusu", "Huduma", "Pata Msaada", "Changia", "Jitolee", "Matukio", "Mawasiliano"], donateButton: "Changia", languageLabel: "Chagua lugha", heroTitle: "Kuwasaidia wakimbizi na wahamiaji kujenga maisha mapya Arizona.", getHelpButton: "Pata Msaada", volunteerButton: "Jitolee Nasi", footerQuickLinks: "Viungo vya Haraka", footerGetInvolved: "Shiriki", footerCopyright: "© 2026 AIRS. Haki zote zimehifadhiwa." };
translations.French = { ...translations.English, siteFullName: "Services aux immigrants et réfugiés de l’Arizona", nav: ["Accueil", "À propos", "Services", "Obtenir de l’aide", "Faire un don", "Bénévolat", "Événements", "Contact"], donateButton: "Faire un don", languageLabel: "Choisir la langue", heroTitle: "Aider les réfugiés et les immigrants à construire une nouvelle vie en Arizona.", getHelpButton: "Obtenir de l’aide", volunteerButton: "Devenir bénévole", footerQuickLinks: "Liens rapides", footerGetInvolved: "Participer", footerCopyright: "© 2026 AIRS. Tous droits réservés." };
translations.Kinyarwanda = { ...translations.English, siteFullName: "Serivisi z’Abimukira n’Impunzi muri Arizona", nav: ["Ahabanza", "Ibyerekeye", "Serivisi", "Saba ubufasha", "Tanga inkunga", "Ba umukorerabushake", "Ibikorwa", "Twandikire"], donateButton: "Tanga inkunga", languageLabel: "Hitamo ururimi", heroBadge: "Ubufasha mu ndimi nyinshi ku miryango yo muri Arizona", heroTitle: "Gufasha impunzi n’abimukira kubaka ubuzima bushya muri Arizona.", heroText: "AIRS ihuza imiryango n’ubufasha bufatika, amakuru y’umuryango, uburezi, n’inzira zigana ku mutekano urambye.", getHelpButton: "Saba ubufasha", volunteerButton: "Ba umukorerabushake", heroImageLabel: "Ubufasha bw’umuryango, agaciro, no kubakira", statFounded: "Yashinzwe", statResettled: "Abafashijwe gutuzwa", statServices: "Ibyiciro bya serivisi", statLanguages: "Amahitamo y’indimi", mostNeededLabel: "Ibikenewe cyane", officialInfoLabel: "Amakuru yemewe", officialInfoTitle: "Gufasha imiryango y’impunzi n’abimukira kuva 1989.", missionLabel: "Intego", hoursLabel: "Amasaha y’ibiro", donationEmailLabel: "Inyemezabwishyu z’inkunga", aboutLabel: "Ibyerekeye AIRS", aboutTitle: "Inkuru isobanutse yubaka icyizere.", aboutBadges: ["Byoroshye kugeraho", "Indimi nyinshi", "Byubakiwe telefoni"], servicesLabel: "Serivisi", requestHelp: "Saba ubufasha", getHelpLabel: "Saba ubufasha", officeInfo: "Amakuru y’ibiro", fullName: "Amazina yose", contactMethod: "Telefoni cyangwa Email", preferredLanguage: "Ururimi ukunda", serviceNeeded: "Serivisi ikenewe", message: "Ubutumwa", submitRequest: "Ohereza ubusabe", donateNow: "Tanga inkunga ubu", donationCategories: "Ibyiciro by’inkunga", volunteerLabel: "Ubukorerabushake", applyVolunteer: "Saba kuba umukorerabushake", eventsLabel: "Ibikorwa", viewEvents: "Reba ibikorwa byose", footerQuickLinks: "Amahuriro yihuse", footerServicesTitle: "Serivisi", footerGetInvolved: "Gira uruhare", footerLegalTitle: "Icyitonderwa", footerCopyright: "© 2026 AIRS. Uburenganzira bwose burabitswe.", addPhone: "Ongeramo nimero ya telefoni", addEmail: "Ongeramo aderesi ya email" };

const serviceIcons = [Home, Briefcase, FileText, GraduationCap, Truck, ShieldCheck];

function getSectionId(label) {
  const navMap = {};
  Object.values(translations).forEach((translation) => {
    translation.nav.forEach((navLabel, index) => {
      navMap[navLabel] = baseNavIds[index];
    });
  });
  return navMap[label] || label.toLowerCase().replaceAll(" ", "-");
}

function SectionLabel({ children, color = "text-sky-700" }) {
  return <p className={`text-sm font-black uppercase tracking-[0.22em] ${color}`}>{children}</p>;
}

function DirectionalArrow({ isRtl, size = 18, className = "" }) {
  return <ArrowRight size={size} className={`${isRtl ? "rotate-180" : ""} ${className}`} />;
}

function BrandLogo({ compact = false, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={airsLogo}
        alt="AIRS Arizona Immigrant & Refugee Services logo"
        className={`${compact ? "h-16 w-24" : "h-24 w-36"} object-contain`}
      />
      <span className="sr-only">Arizona Immigrant & Refugee Services</span>
    </div>
  );
}

function Navbar({ language, setLanguage, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home"><BrandLogo compact /></a>
        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => <a key={item} href={`#${getSectionId(item)}`} className="text-sm font-bold text-slate-700 transition hover:text-sky-700">{item}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-sky-600" aria-label={t.languageLabel}>
            {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
          </select>
          <a href="#donate" className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-orange-600">{t.donateButton}</a>
        </div>
        <button className="rounded-xl p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open mobile menu">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {t.nav.map((item) => <a key={item} href={`#${getSectionId(item)}`} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">{item}</a>)}
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
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.16),_transparent_36%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm"><Languages size={17} /> {t.heroBadge}</div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-help" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-base font-black text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-700">{t.getHelpButton} <DirectionalArrow isRtl={isRtl} size={18} /></a>
            <a href="#volunteer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-base font-black text-slate-800 shadow-sm transition hover:bg-slate-50">{t.volunteerButton}</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl">
            <div className="relative min-h-[26rem]">
              <img src={capitolFieldTripPhoto} alt="AIRS community field trip" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm font-black uppercase tracking-wider text-sky-100">{t.heroImageLabel}</p>
                <h2 className="mt-3 text-2xl font-black">{t.heroCardTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-100">{t.heroCardText}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats({ t }) {
  const stats = [
    ["1989", t.statFounded],
    ["1,910+", t.statResettled],
    ["6", t.statServices],
    [String(languages.length), t.statLanguages],
  ];
  return <section className="bg-white"><div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">{stats.map(([num, label]) => <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center"><p className="text-3xl font-black text-sky-700">{num}</p><p className="mt-1 text-sm font-bold text-slate-500">{label}</p></div>)}</div></section>;
}

function OfficialInfo({ t }) {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div><SectionLabel color="text-sky-300">{t.officialInfoLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.officialInfoTitle}</h2><p className="mt-4 text-lg leading-8 text-slate-300">{t.officialInfoText}</p></div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[{ icon: FileText, title: t.missionLabel, text: t.missionText }, { icon: Clock, title: t.hoursLabel, text: t.hoursText }, { icon: Mail, title: t.donationEmailLabel, text: t.donationEmailText }].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-5"><Icon className="text-sky-300" size={24} /><h3 className="mt-4 font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}


function PhotoGallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Original AIRS photos</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Real imagery from the current website.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">These photos help the redesign feel connected to the existing organization while giving the page a stronger visual story.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {originalSitePhotos.map((photo) => (
            <figure key={photo.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <img src={photo.src} alt={photo.title} className="h-56 w-full object-cover" />
              <figcaption className="p-5">
                <h3 className="font-black text-slate-950">{photo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{photo.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


const currentSiteDetails = {
  immigrationServices: ["Relative Petitions", "Citizenship", "Permanent Residency", "Replacement of Lost or Stolen Documents", "Special Protected Status / Deferred Enforced Departure", "Family Reunification"],
  classSchedule: [["First Tuesday @ 11:30 AM", "Financial Class", "Wells Fargo"], ["Second Tuesday @ 11:30 AM", "Police Training", "Phoenix PD"], ["Third Tuesday @ 11:30 AM", "Hygiene & Health Class", ""], ["Last Tuesday @ 11:30 AM", "Bus and Light-rail Training", "Phoenix Valley Metro"]],
  sivServices: ["Reception & Placement", "Matching Grant", "Preferred Communities", "Employment Services", "State RRP Benefits"],
  volunteerProcess: ["Be ready to join the volunteer family and begin volunteer work at AIRS.", "Turn in all volunteer paperwork.", "Wait for an email response from an AIRS team member to schedule volunteer orientation.", "Complete the forms and send them as attachments to info@airsaz.org.", "Download and review the volunteer manual as pre-orientation material for the Refugee Resettlement Program.", "Wait for the volunteer coordinator to set an orientation appointment and start date."],
  donationDropoff: "Drop off small household items, soft goods, and gift cards at AIRS during office hours. Call to make an appointment for furniture and large item drop-off. Gift cards may also be mailed to 10240 N 31st Ave #112, Phoenix, AZ 85051 with your name, address, and gift amount for receipt purposes.",
};

function CurrentSiteDetails() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl"><SectionLabel>Current AIRS site content</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Official details brought into the redesign.</h2><p className="mt-4 text-lg leading-8 text-slate-600">These blocks preserve the useful information from the existing website while presenting it in a cleaner, mobile-friendly format.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-black text-slate-950">Immigration Specialist</h3><p className="mt-2 text-sm font-bold text-sky-700">Walk-in hours: Wednesday and Friday, 11:00 AM – 2:00 PM</p><p className="mt-3 text-sm leading-6 text-slate-600">Please call to make an appointment outside of walk-in hours.</p><ul className="mt-5 grid gap-2 text-sm text-slate-700">{currentSiteDetails.immigrationServices.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={16} /> {item}</li>)}</ul></div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-black text-slate-950">Monthly Class Schedule</h3><div className="mt-5 grid gap-3">{currentSiteDetails.classSchedule.map(([time, title, partner]) => <div key={time} className="rounded-2xl bg-white p-4 shadow-sm"><p className="text-xs font-black uppercase tracking-wider text-orange-600">{time}</p><p className="mt-1 font-black text-slate-900">{title}</p>{partner && <p className="text-sm text-slate-500">{partner}</p>}</div>)}</div></div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><h3 className="text-xl font-black text-slate-950">Walk-In SIV Services</h3><p className="mt-3 text-sm leading-6 text-slate-600">AIRS provides walk-in services to Special Immigrant Visa holders.</p><ul className="mt-5 grid gap-2 text-sm text-slate-700">{currentSiteDetails.sivServices.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={16} /> {item}</li>)}</ul></div>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2"><div className="rounded-3xl border border-orange-100 bg-orange-50 p-6"><h3 className="text-xl font-black text-slate-950">Donation drop-off instructions</h3><p className="mt-3 leading-7 text-slate-700">{currentSiteDetails.donationDropoff}</p></div><div className="rounded-3xl border border-sky-100 bg-sky-50 p-6"><h3 className="text-xl font-black text-slate-950">Volunteer process</h3><ol className="mt-4 grid gap-2 text-sm text-slate-700">{currentSiteDetails.volunteerProcess.map((item, index) => <li key={item} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-700 text-xs font-black text-white">{index + 1}</span><span>{item}</span></li>)}</ol></div></div>
      </div>
    </section>
  );
}

function About({ t }) {
  return <section id="about" className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><SectionLabel>{t.aboutLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.aboutTitle}</h2></div><div className="space-y-5 text-lg leading-8 text-slate-600"><p>{t.aboutText1}</p><p>{t.aboutText2}</p><div className="grid gap-3 sm:grid-cols-3">{t.aboutBadges.map((item) => <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-100 p-4 text-base font-black text-slate-800"><CheckCircle2 className="text-sky-700" size={19} /> {item}</div>)}</div></div></div></section>;
}

function Services({ t, isRtl }) {
  return <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="max-w-3xl"><SectionLabel>{t.servicesLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.servicesTitle}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{t.servicesText}</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{t.services.map((service, index) => { const Icon = serviceIcons[index]; return <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700"><Icon size={24} /></div><h3 className="text-xl font-black text-slate-950">{service.title}</h3><p className="mt-3 leading-7 text-slate-600">{service.text}</p><a href="#get-help" className="mt-5 inline-flex items-center gap-2 font-black text-sky-700">{t.requestHelp} <DirectionalArrow isRtl={isRtl} size={17} /></a></div>; })}</div></section>;
}

function GetHelp({ t, language }) {
  const [submitted, setSubmitted] = useState(false);
  return <section id="get-help" className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div><SectionLabel color="text-orange-600">{t.getHelpLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.getHelpTitle}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{t.getHelpText}</p><div className="mt-8 rounded-3xl bg-slate-100 p-6"><h3 className="font-black text-slate-950">{t.officeInfo}</h3><div className="mt-4 space-y-3 text-slate-600"><p className="flex gap-3"><MapPin className="mt-0.5 text-sky-700" size={19} /> {t.location}</p><p className="flex gap-3"><Phone className="mt-0.5 text-sky-700" size={19} /> {t.phonePlaceholder}</p><p className="flex gap-3"><Mail className="mt-0.5 text-sky-700" size={19} /> {t.emailPlaceholder}</p></div></div></div><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-black text-slate-700">{t.fullName}<input required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-700" placeholder={t.fullNamePlaceholder} /></label><label className="grid gap-2 text-sm font-black text-slate-700">{t.contactMethod}<input required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-700" placeholder={t.contactPlaceholder} /></label><label className="grid gap-2 text-sm font-black text-slate-700">{t.preferredLanguage}<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-700">{languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}</select></label><label className="grid gap-2 text-sm font-black text-slate-700">{t.serviceNeeded}<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-700">{t.serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label></div><label className="mt-4 grid gap-2 text-sm font-black text-slate-700">{t.message}<textarea required rows="5" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-700" placeholder={t.messagePlaceholder} /></label><label className="mt-4 flex gap-3 text-sm leading-6 text-slate-600"><input required type="checkbox" className="mt-1" /> {t.consent}</label><button type="submit" className="mt-6 w-full rounded-2xl bg-sky-700 px-6 py-3 font-black text-white transition hover:bg-sky-800">{t.submitRequest}</button>{submitted && <p className="mt-4 rounded-2xl bg-green-50 p-4 text-sm font-bold text-green-700">{t.formSuccess}</p>}</form></div></section>;
}

function Donate({ t, isRtl }) {
  return <section id="donate" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-8 lg:grid-cols-3"><div className="rounded-[2rem] bg-sky-700 p-8 text-white lg:col-span-1"><Heart size={34} /><h2 className="mt-5 text-3xl font-black">{t.donateTitle}</h2><p className="mt-4 leading-7 text-sky-50">{t.donateText}</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-sky-800">{t.donateNow} <DirectionalArrow isRtl={isRtl} size={18} /></a></div><div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2"><SectionLabel color="text-orange-600">{t.donationCategories}</SectionLabel><div className="mt-6 grid gap-4 sm:grid-cols-2">{t.donationItems.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4 font-black text-slate-700"><HandHeart className="text-orange-600" size={19} /> {item}</div>)}</div><div className="mt-6 rounded-3xl bg-orange-50 p-5 text-slate-700">{t.donationNote}</div></div></div></section>;
}

function Volunteer({ t, isRtl }) {
  return <section id="volunteer" className="bg-slate-950 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8"><div><SectionLabel color="text-sky-300">{t.volunteerLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.volunteerTitle}</h2><p className="mt-4 text-lg leading-8 text-slate-300">{t.volunteerText}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-black text-white hover:bg-sky-400">{t.applyVolunteer} <DirectionalArrow isRtl={isRtl} size={18} /></a></div><div className="grid gap-4">{t.volunteerRoles.map((role) => <div key={role} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5"><span className="font-black">{role}</span><DirectionalArrow isRtl={isRtl} className="text-sky-300" size={20} /></div>)}</div></div></section>;
}

function Events({ t }) {
  return <section id="events" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><SectionLabel>{t.eventsLabel}</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.eventsTitle}</h2></div><a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-800 shadow-sm">{t.viewEvents} <CalendarDays size={18} /></a></div><div className="mt-8 grid gap-5 md:grid-cols-3">{t.events.map((event) => <div key={event.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm font-black text-orange-600">{event.date}</p><h3 className="mt-3 text-xl font-black text-slate-950">{event.title}</h3><p className="mt-3 text-slate-600">{event.text}</p></div>)}</div></section>;
}

function ContactFooter({ t }) {
  const quickLinks = t.nav.map((item) => ({ label: item, href: `#${getSectionId(item)}` }));
  const serviceLinks = (t.services || []).slice(0, 6).map((service) => ({ label: service.title, href: "#services" }));
  const involvedLinks = [{ label: t.donateButton, href: "#donate" }, { label: t.volunteerButton, href: "#volunteer" }, { label: t.getHelpButton, href: "#get-help" }];
  return <footer id="contact" className="border-t border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:px-8"><div><BrandLogo compact /><p className="mt-5 max-w-md leading-7 text-slate-600">{t.footerText}</p><div className="mt-6 space-y-3 text-slate-600"><p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-sky-700" /> {t.location}</p><p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-sky-700" /> {t.addPhone}</p><p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-sky-700" /> {t.addEmail}</p></div></div><div><h3 className="font-black text-slate-950">{t.footerQuickLinks}</h3><div className="mt-4 grid gap-3">{quickLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-sky-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerServicesTitle}</h3><div className="mt-4 grid gap-3">{serviceLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-sky-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerGetInvolved}</h3><div className="mt-4 grid gap-3">{involvedLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-sky-700">{link.label}</a>)}</div></div></div><div className="border-t border-slate-200 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>{t.footerCopyright}</p><p className="max-w-2xl">{t.footerLegalText}</p></div></div></footer>;
}

export default function App() {
  const [language, setLanguage] = useState("English");
  const t = useMemo(() => ({ ...translations.English, ...(translations[language] || {}) }), [language]);
  const direction = languageDirections[language] || "ltr";
  const isRtl = direction === "rtl";
  const languageCode = languageCodes[language] || "en";
  return <div className={`min-h-screen bg-slate-50 text-slate-900 ${isRtl ? "text-right" : "text-left"}`} dir={direction} lang={languageCode}><Navbar language={language} setLanguage={setLanguage} t={t} /><main><Hero t={t} isRtl={isRtl} /><Stats t={t} /><OfficialInfo t={t} /><PhotoGallery /><CurrentSiteDetails /><About t={t} /><Services t={t} isRtl={isRtl} /><GetHelp t={t} language={language} /><Donate t={t} isRtl={isRtl} /><Volunteer t={t} isRtl={isRtl} /><Events t={t} /></main><ContactFooter t={t} /></div>;
}
