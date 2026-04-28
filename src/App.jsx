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
    footerQuickLinks: "Enlaces rápidos",
    footerServicesTitle: "Servicios",
    footerGetInvolved: "Participar",
    footerLegalTitle: "Nota sin fines de lucro",
    footerLegalText: "Este prototipo debe actualizarse con la información oficial de contacto de AIRS, enlaces de donación, detalles de privacidad e información de registro sin fines de lucro antes del lanzamiento.",
  Arabic: { English: "الإنجليزية", Spanish: "الإسبانية", Arabic: "العربية", Dari: "الدَرية", Swahili: "السواحيلية", French: "الفرنسية", Kinyarwanda: "الكينيارواندا" },
    siteName: "AIRS",
    footerQuickLinks: "روابط سريعة",
    footerServicesTitle: "الخدمات",
    footerGetInvolved: "شارك معنا",
    footerLegalTitle: "ملاحظة للمنظمة غير الربحية",
    footerLegalText: "يجب تحديث هذا النموذج بمعلومات الاتصال الرسمية لـ AIRS وروابط التبرع وتفاصيل الخصوصية ومعلومات التسجيل غير الربحي قبل الإطلاق.",
  Dari: { English: "انگلیسی", Spanish: "اسپانیایی", Arabic: "عربی", Dari: "دری", Swahili: "سواحیلی", French: "فرانسوی", Kinyarwanda: "کینیارواندا" },
    siteName: "AIRS",
    footerQuickLinks: "لینک\u200cهای سریع",
    footerServicesTitle: "خدمات",
    footerGetInvolved: "همراه شوید",
    footerLegalTitle: "یادداشت نهاد غیرانتفاعی",
    footerLegalText: "این نمونه وب\u200cسایت باید پیش از راه\u200cاندازی با معلومات رسمی تماس AIRS، لینک\u200cهای کمک مالی، جزئیات حریم خصوصی و معلومات ثبت غیرانتفاعی به\u200cروزرسانی شود.",
  Swahili: { English: "Kiingereza", Spanish: "Kihispania", Arabic: "Kiarabu", Dari: "Kidarí", Swahili: "Kiswahili", French: "Kifaransa", Kinyarwanda: "Kinyarwanda" },
    siteName: "AIRS",
    footerQuickLinks: "Viungo vya Haraka",
    footerServicesTitle: "Huduma",
    footerGetInvolved: "Shiriki",
    footerLegalTitle: "Taarifa ya Shirika Lisilo la Faida",
    footerLegalText: "Mfano huu wa tovuti unapaswa kusasishwa kwa taarifa rasmi za mawasiliano za AIRS, viungo vya michango, maelezo ya faragha, na taarifa za usajili wa shirika lisilo la faida kabla ya kuzinduliwa.",
  French: { English: "Anglais", Spanish: "Espagnol", Arabic: "Arabe", Dari: "Dari", Swahili: "Swahili", French: "Français", Kinyarwanda: "Kinyarwanda" },
    siteName: "AIRS",
    footerQuickLinks: "Liens rapides",
    footerServicesTitle: "Services",
    footerGetInvolved: "Participer",
    footerLegalTitle: "Note de l’organisation à but non lucratif",
    footerLegalText: "Ce prototype de site doit être mis à jour avec les coordonnées officielles d’AIRS, les liens de don, les informations de confidentialité et les détails d’enregistrement de l’organisation avant le lancement.",
  Kinyarwanda: { English: "Icyongereza", Spanish: "Icyesipanyoli", Arabic: "Icyarabu", Dari: "Ikidari", Swahili: "Igiswahili", French: "Igifaransa", Kinyarwanda: "Ikinyarwanda" },
};

const footerLabels = {
    footerQuickLinks: "Amahuriro yihuse",
    footerServicesTitle: "Serivisi",
    footerGetInvolved: "Gira uruhare",
    footerLegalTitle: "Icyitonderwa cy’umuryango udaharanira inyungu",
    footerLegalText: "Iyi prototype y’urubuga igomba gushyirwamo amakuru yemewe ya AIRS yo kuvugana, amahuza yo gutangiraho inkunga, amakuru yerekeye ibanga, n’amakuru yo kwiyandikisha nk’umuryango udaharanira inyungu mbere yo gutangizwa.",
  English: { footerQuickLinks: "Quick Links", footerServicesTitle: "Services", footerGetInvolved: "Get Involved", footerLegalTitle: "Nonprofit Note", footerLegalText: "This website prototype should be updated with AIRS official contact information, donation links, privacy details, and nonprofit registration information before launch." },
  Spanish: { footerQuickLinks: "Enlaces rápidos", footerServicesTitle: "Servicios", footerGetInvolved: "Participar", footerLegalTitle: "Nota sin fines de lucro", footerLegalText: "Este prototipo debe actualizarse con la información oficial de contacto de AIRS, enlaces de donación, detalles de privacidad e información de registro sin fines de lucro antes del lanzamiento." },
  Arabic: { footerQuickLinks: "روابط سريعة", footerServicesTitle: "الخدمات", footerGetInvolved: "شارك معنا", footerLegalTitle: "ملاحظة للمنظمة غير الربحية", footerLegalText: "يجب تحديث هذا النموذج بمعلومات الاتصال الرسمية لـ AIRS وروابط التبرع وتفاصيل الخصوصية ومعلومات التسجيل غير الربحي قبل الإطلاق." },
  Dari: { footerQuickLinks: "لینک‌های سریع", footerServicesTitle: "خدمات", footerGetInvolved: "همراه شوید", footerLegalTitle: "یادداشت نهاد غیرانتفاعی", footerLegalText: "این نمونه وب‌سایت باید پیش از راه‌اندازی با معلومات رسمی تماس AIRS، لینک‌های کمک مالی، جزئیات حریم خصوصی و معلومات ثبت غیرانتفاعی به‌روزرسانی شود." },
  Swahili: { footerQuickLinks: "Viungo vya Haraka", footerServicesTitle: "Huduma", footerGetInvolved: "Shiriki", footerLegalTitle: "Taarifa ya Shirika Lisilo la Faida", footerLegalText: "Mfano huu wa tovuti unapaswa kusasishwa kwa taarifa rasmi za mawasiliano za AIRS, viungo vya michango, maelezo ya faragha, na taarifa za usajili wa shirika lisilo la faida kabla ya kuzinduliwa." },
  French: { footerQuickLinks: "Liens rapides", footerServicesTitle: "Services", footerGetInvolved: "Participer", footerLegalTitle: "Note de l’organisation à but non lucratif", footerLegalText: "Ce prototype de site doit être mis à jour avec les coordonnées officielles d’AIRS, les liens de don, les informations de confidentialité et les détails d’enregistrement de l’organisation avant le lancement." },
  Kinyarwanda: { footerQuickLinks: "Amahuriro yihuse", footerServicesTitle: "Serivisi", footerGetInvolved: "Gira uruhare", footerLegalTitle: "Icyitonderwa cy’umuryango udaharanira inyungu", footerLegalText: "Iyi prototype y’urubuga igomba gushyirwamo amakuru yemewe ya AIRS yo kuvugana, amahuza yo gutangiraho inkunga, amakuru yerekeye ibanga, n’amakuru yo kwiyandikisha nk’umuryango udaharanira inyungu mbere yo gutangizwa." },
};


const translations = {
  English: {
    siteName: "AIRS",
    siteFullName: "Arizona Immigrant & Refugee Services",
    nav: ["Home", "About", "Services", "Get Help", "Donate", "Volunteer", "Events", "Contact"],
    donateButton: "Donate",
    languageLabel: "Select language",
    heroBadge: "Multilingual support for Arizona families",
    heroTitle: "Helping refugees and immigrants build new lives in Arizona.",
    heroText:
      "AIRS connects families with practical support, community resources, immigration guidance, education, and pathways toward long-term stability.",
    getHelpButton: "Get Help",
    volunteerButton: "Volunteer With Us",
    heroCardTitle: "A safer start. A stronger future.",
    heroCardText:
      "The redesigned website makes it easier for clients, donors, volunteers, and partners to find the right next step.",
    statYears: "Years serving community",
    statServices: "Core service areas",
    statLanguages: "Language options",
    mostNeededLabel: "Most needed",
    mostNeededText: "Household items, hygiene products, clothing, school supplies, and community volunteers.",
    aboutLabel: "About AIRS",
    aboutTitle: "A clearer story builds more trust.",
    aboutText1:
      "AIRS supports refugees, immigrants, and SIV families as they navigate resettlement, employment, education, immigration resources, and community life in Arizona.",
    aboutText2:
      "The new website should feel welcoming, trustworthy, and easy to use for people who may be under stress, using mobile phones, or reading in a second language.",
    aboutBadges: ["Accessible", "Multilingual", "Mobile-first"],
    servicesLabel: "Services",
    servicesTitle: "Clear support pathways instead of hard-to-scan pages.",
    servicesText:
      "Each service area should have plain-language explanations, eligibility notes, office hours, and a clear next step.",
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
    getHelpText:
      "This form is a front-end placeholder for now. Later, we can connect it to email, Google Forms, Firebase, Airtable, or a CRM.",
    officeInfo: "Office Information",
    location: "Phoenix, Arizona",
    phonePlaceholder: "Add main office phone number",
    emailPlaceholder: "Add official intake email",
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
    donateTitle: "Your support helps families start again.",
    donateText:
      "The donation page should make giving simple: money donations, item donations, drop-off details, and receipts.",
    donateNow: "Donate Now",
    donationCategories: "Donation categories",
    donationItems: ["Household essentials", "Hygiene products", "School supplies", "Clothing", "Furniture", "Gift cards"],
    nextBuildStep: "Next build step:",
    nextBuildText: "add Stripe, PayPal, Donorbox, or the donation system AIRS already uses.",
    volunteerLabel: "Volunteer",
    volunteerTitle: "Replace broken downloads with a real volunteer flow.",
    volunteerText:
      "Volunteers should be able to apply online, choose interest areas, and receive clear next steps.",
    applyVolunteer: "Apply to Volunteer",
    volunteerRoles: ["Mentorship", "Transportation support", "Donation sorting", "English class support", "Community events", "Administrative help"],
    eventsLabel: "Events",
    eventsTitle: "A real calendar, not an empty page.",
    viewEvents: "View all events",
    events: [
      { title: "Community Orientation", date: "Add date", text: "Welcome session for newly arrived families and community partners." },
      { title: "English Class", date: "Add date", text: "Practical English learning for daily life, work, and appointments." },
      { title: "Donation Drop-Off Day", date: "Add date", text: "Community drop-off event for high-need household and hygiene items." },
    ],
    contactTitle: "Contact",
    followTitle: "Follow",
    footerText: "AIRS helps refugee and immigrant families access support, resources, and community connections across Arizona.",
    footerQuickLinks: "Quick Links",
    footerServicesTitle: "Services",
    footerGetInvolved: "Get Involved",
    footerLegalTitle: "Nonprofit Note",
    footerLegalText: "This website prototype should be updated with AIRS official contact information, donation links, privacy details, and nonprofit registration information before launch.",
    footerCopyright: "© 2026 AIRS. All rights reserved.",
    addPhone: "Add phone number",
    addEmail: "Add email address",
  },
  Spanish: {
    siteName: "AIRS",
    siteFullName: "Servicios para Inmigrantes y Refugiados de Arizona",
    nav: ["Inicio", "Acerca de", "Servicios", "Obtener Ayuda", "Donar", "Voluntariado", "Eventos", "Contacto"],
    donateButton: "Donar",
    languageLabel: "Seleccionar idioma",
    heroBadge: "Apoyo multilingüe para familias de Arizona",
    heroTitle: "Ayudando a refugiados e inmigrantes a construir nuevas vidas en Arizona.",
    heroText:
      "AIRS conecta a las familias con apoyo práctico, recursos comunitarios, orientación migratoria, educación y caminos hacia la estabilidad a largo plazo.",
    getHelpButton: "Obtener ayuda",
    volunteerButton: "Ser voluntario",
    heroCardTitle: "Un comienzo más seguro. Un futuro más fuerte.",
    heroCardText:
      "El sitio web rediseñado facilita que clientes, donantes, voluntarios y socios encuentren el siguiente paso correcto.",
    statYears: "Años sirviendo a la comunidad",
    statServices: "Áreas principales de servicio",
    statLanguages: "Opciones de idioma",
    mostNeededLabel: "Más necesario",
    mostNeededText: "Artículos del hogar, productos de higiene, ropa, útiles escolares y voluntarios comunitarios.",
    aboutLabel: "Acerca de AIRS",
    aboutTitle: "Una historia más clara genera más confianza.",
    aboutText1:
      "AIRS apoya a refugiados, inmigrantes y familias SIV mientras navegan el reasentamiento, el empleo, la educación, los recursos migratorios y la vida comunitaria en Arizona.",
    aboutText2:
      "El nuevo sitio web debe sentirse acogedor, confiable y fácil de usar para personas que pueden estar bajo estrés, usando teléfonos móviles o leyendo en un segundo idioma.",
    aboutBadges: ["Accesible", "Multilingüe", "Diseñado para móvil"],
    servicesLabel: "Servicios",
    servicesTitle: "Rutas de apoyo claras en lugar de páginas difíciles de leer.",
    servicesText:
      "Cada área de servicio debe tener explicaciones en lenguaje sencillo, notas de elegibilidad, horarios de oficina y un siguiente paso claro.",
    services: [
      { title: "Apoyo de reasentamiento", text: "Ayuda práctica para familias refugiadas e inmigrantes recién llegadas que se están estableciendo en Arizona." },
      { title: "Servicios de empleo", text: "Preparación para el trabajo, orientación laboral, ayuda con currículums y referencias a recursos de empleo locales." },
      { title: "Orientación migratoria", text: "Apoyo con formularios relacionados con inmigración, citas, referencias y recursos comunitarios." },
      { title: "Clases y educación", text: "Aprendizaje de inglés, clases de orientación, educación de habilidades para la vida y talleres de apoyo familiar." },
      { title: "Ayuda con transporte", text: "Asistencia para conectar a clientes con citas esenciales, servicios y apoyo comunitario." },
      { title: "Apoyo para familias SIV", text: "Apoyo especializado para familias SIV y refugiados que reconstruyen estabilidad, seguridad e independencia." },
    ],
    requestHelp: "Solicitar ayuda",
    getHelpLabel: "Obtener ayuda",
    getHelpTitle: "Un formulario sencillo de admisión para clientes.",
    getHelpText:
      "Este formulario es un marcador de posición por ahora. Más adelante, podemos conectarlo a correo electrónico, Google Forms, Firebase, Airtable o un CRM.",
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
    donateTitle: "Su apoyo ayuda a las familias a comenzar de nuevo.",
    donateText:
      "La página de donaciones debe facilitar las contribuciones: donaciones monetarias, artículos, detalles de entrega y recibos.",
    donateNow: "Donar ahora",
    donationCategories: "Categorías de donación",
    donationItems: ["Artículos esenciales del hogar", "Productos de higiene", "Útiles escolares", "Ropa", "Muebles", "Tarjetas de regalo"],
    nextBuildStep: "Siguiente paso de desarrollo:",
    nextBuildText: "agregar Stripe, PayPal, Donorbox o el sistema de donación que AIRS ya utilice.",
    volunteerLabel: "Voluntariado",
    volunteerTitle: "Reemplazar descargas rotas con un flujo real para voluntarios.",
    volunteerText:
      "Los voluntarios deben poder postularse en línea, elegir áreas de interés y recibir pasos claros.",
    applyVolunteer: "Postularse como voluntario",
    volunteerRoles: ["Mentoría", "Apoyo con transporte", "Clasificación de donaciones", "Apoyo en clases de inglés", "Eventos comunitarios", "Ayuda administrativa"],
    eventsLabel: "Eventos",
    eventsTitle: "Un calendario real, no una página vacía.",
    viewEvents: "Ver todos los eventos",
    events: [
      { title: "Orientación comunitaria", date: "Agregar fecha", text: "Sesión de bienvenida para familias recién llegadas y socios comunitarios." },
      { title: "Clase de inglés", date: "Agregar fecha", text: "Aprendizaje práctico de inglés para la vida diaria, el trabajo y las citas." },
      { title: "Día de entrega de donaciones", date: "Agregar fecha", text: "Evento comunitario de entrega de artículos del hogar y productos de higiene muy necesarios." },
    ],
    contactTitle: "Contacto",
    followTitle: "Seguir",
    footerText: "Un sitio web moderno para una organización sin fines de lucro, construido alrededor de claridad, confianza, accesibilidad y acción.",
    footerCopyright: "© 2026 AIRS. Prototipo de rediseño del sitio web.",
    addPhone: "Agregar número de teléfono",
    addEmail: "Agregar dirección de correo electrónico",
    footerQuickLinks: 'Enlaces rápidos',
    footerServicesTitle: 'Servicios',
    footerGetInvolved: 'Participar',
    footerLegalTitle: 'Nota sin fines de lucro',
    footerLegalText: 'Este prototipo debe actualizarse con la información oficial de contacto de AIRS, enlaces de donación, detalles de privacidad e información de registro sin fines de lucro antes del lanzamiento.',
  },

  Arabic: {
    siteFullName: "خدمات المهاجرين واللاجئين في أريزونا",
    nav: ["الرئيسية", "من نحن", "الخدمات", "احصل على المساعدة", "تبرع", "تطوع", "الفعاليات", "اتصل بنا"],
    donateButton: "تبرع",
    languageLabel: "اختر اللغة",
    heroBadge: "دعم متعدد اللغات للعائلات في أريزونا",
    heroTitle: "نساعد اللاجئين والمهاجرين على بناء حياة جديدة في أريزونا.",
    heroText: "تربط AIRS العائلات بالدعم العملي، وموارد المجتمع، والإرشاد المتعلق بالهجرة، والتعليم، والمسارات نحو الاستقرار طويل الأمد.",
    getHelpButton: "احصل على المساعدة",
    volunteerButton: "تطوع معنا",
    heroCardTitle: "بداية أكثر أمانًا. مستقبل أقوى.",
    heroCardText: "يسهّل الموقع المعاد تصميمه على العملاء والمتبرعين والمتطوعين والشركاء العثور على الخطوة التالية المناسبة.",
    statYears: "سنوات في خدمة المجتمع",
    statServices: "مجالات خدمة أساسية",
    statLanguages: "خيارات اللغة",
    mostNeededLabel: "الأكثر احتياجًا",
    mostNeededText: "مستلزمات منزلية، منتجات نظافة، ملابس، لوازم مدرسية، ومتطوعون من المجتمع.",
    aboutLabel: "عن AIRS",
    aboutTitle: "القصة الواضحة تبني ثقة أكبر.",
    aboutText1: "تدعم AIRS اللاجئين والمهاجرين وعائلات SIV أثناء إعادة التوطين والعمل والتعليم وموارد الهجرة والحياة المجتمعية في أريزونا.",
    aboutText2: "يجب أن يكون الموقع الجديد مرحبًا وموثوقًا وسهل الاستخدام للأشخاص الذين يستخدمون الهواتف أو يقرؤون بلغة ثانية.",
    aboutBadges: ["سهل الوصول", "متعدد اللغات", "مصمم للهاتف"],
    servicesLabel: "الخدمات",
    servicesTitle: "مسارات دعم واضحة بدلًا من صفحات صعبة القراءة.",
    servicesText: "يجب أن يحتوي كل مجال خدمة على شرح بسيط، وملاحظات الأهلية، وساعات العمل، وخطوة تالية واضحة.",
    services: [
      { title: "دعم إعادة التوطين", text: "مساعدة عملية للعائلات اللاجئة والمهاجرة الوافدة حديثًا وهي تستقر في أريزونا." },
      { title: "خدمات التوظيف", text: "الاستعداد للعمل، المساعدة في السيرة الذاتية، والإحالة إلى موارد توظيف محلية." },
      { title: "إرشاد الهجرة", text: "دعم في النماذج والمواعيد والإحالات والموارد المجتمعية المتعلقة بالهجرة." },
      { title: "الدروس والتعليم", text: "تعلم الإنجليزية، دروس التوجيه، مهارات الحياة، وورش دعم الأسرة." },
      { title: "مساعدة النقل", text: "مساعدة العملاء في الوصول إلى المواعيد والخدمات والدعم المجتمعي الأساسي." },
      { title: "دعم عائلات SIV", text: "دعم متخصص لعائلات SIV واللاجئين لإعادة بناء الاستقرار والأمان والاستقلال." },
    ],
    requestHelp: "اطلب المساعدة",
    getHelpLabel: "احصل على المساعدة",
    getHelpTitle: "نموذج استقبال بسيط للعملاء.",
    getHelpText: "هذا النموذج مؤقت حاليًا. لاحقًا يمكن ربطه بالبريد الإلكتروني أو Google Forms أو Firebase أو Airtable أو نظام CRM.",
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
    donateTitle: "دعمك يساعد العائلات على البدء من جديد.",
    donateText: "يجب أن تجعل صفحة التبرعات عملية العطاء سهلة: تبرعات مالية، تبرعات عينية، تفاصيل التسليم، والإيصالات.",
    donateNow: "تبرع الآن",
    donationCategories: "فئات التبرع",
    donationItems: ["مستلزمات منزلية", "منتجات نظافة", "لوازم مدرسية", "ملابس", "أثاث", "بطاقات هدايا"],
    nextBuildStep: "الخطوة التالية في التطوير:",
    nextBuildText: "إضافة Stripe أو PayPal أو Donorbox أو نظام التبرع الذي تستخدمه AIRS بالفعل.",
    volunteerLabel: "تطوع",
    volunteerTitle: "استبدال التنزيلات المعطلة بتجربة تطوع حقيقية.",
    volunteerText: "يجب أن يتمكن المتطوعون من التقديم عبر الإنترنت واختيار مجالات الاهتمام والحصول على خطوات تالية واضحة.",
    applyVolunteer: "قدّم للتطوع",
    volunteerRoles: ["الإرشاد", "دعم النقل", "فرز التبرعات", "دعم دروس الإنجليزية", "فعاليات المجتمع", "مساعدة إدارية"],
    eventsLabel: "الفعاليات",
    eventsTitle: "تقويم حقيقي، وليس صفحة فارغة.",
    viewEvents: "عرض كل الفعاليات",
    events: [
      { title: "توجيه مجتمعي", date: "أضف التاريخ", text: "جلسة ترحيب للعائلات الوافدة حديثًا وشركاء المجتمع." },
      { title: "درس إنجليزي", date: "أضف التاريخ", text: "تعلم إنجليزي عملي للحياة اليومية والعمل والمواعيد." },
      { title: "يوم تسليم التبرعات", date: "أضف التاريخ", text: "فعالية مجتمعية لتسليم المستلزمات المنزلية ومنتجات النظافة المطلوبة." },
    ],
    contactTitle: "اتصل بنا",
    followTitle: "تابعنا",
    footerText: "موقع حديث لمنظمة غير ربحية مبني حول الوضوح والثقة وسهولة الوصول والعمل.",
    footerCopyright: "© 2026 AIRS. نموذج أولي لإعادة تصميم الموقع.",
    addPhone: "أضف رقم الهاتف",
    addEmail: "أضف عنوان البريد الإلكتروني",
    siteName: 'AIRS',
    footerQuickLinks: 'روابط سريعة',
    footerServicesTitle: 'الخدمات',
    footerGetInvolved: 'شارك معنا',
    footerLegalTitle: 'ملاحظة للمنظمة غير الربحية',
    footerLegalText: 'يجب تحديث هذا النموذج بمعلومات الاتصال الرسمية لـ AIRS وروابط التبرع وتفاصيل الخصوصية ومعلومات التسجيل غير الربحي قبل الإطلاق.',
  },
  Dari: {
    siteFullName: "خدمات مهاجرین و پناهندگان آریزونا",
    nav: ["خانه", "درباره", "خدمات", "کمک بگیرید", "کمک مالی", "داوطلبی", "رویدادها", "تماس"],
    donateButton: "کمک مالی",
    languageLabel: "انتخاب زبان",
    heroBadge: "حمایت چندزبانه برای خانواده‌های آریزونا",
    heroTitle: "کمک به پناهندگان و مهاجرین برای ساختن زندگی تازه در آریزونا.",
    heroText: "AIRS خانواده‌ها را با حمایت عملی، منابع اجتماعی، راهنمایی مهاجرت، آموزش و مسیرهای رسیدن به ثبات درازمدت وصل می‌کند.",
    getHelpButton: "کمک بگیرید",
    volunteerButton: "با ما داوطلب شوید",
    heroCardTitle: "آغاز امن‌تر. آینده قوی‌تر.",
    heroCardText: "وب‌سایت بازطراحی‌شده به مراجعین، کمک‌کنندگان، داوطلبان و همکاران کمک می‌کند قدم بعدی مناسب را آسان‌تر پیدا کنند.",
    statYears: "سال خدمت به جامعه",
    statServices: "بخش اصلی خدمات",
    statLanguages: "گزینه‌های زبان",
    mostNeededLabel: "بیشترین نیاز",
    mostNeededText: "وسایل خانه، محصولات بهداشتی، لباس، لوازم مکتب و داوطلبان اجتماعی.",
    aboutLabel: "درباره AIRS",
    aboutTitle: "داستان روشن‌تر اعتماد بیشتری می‌سازد.",
    aboutText1: "AIRS از پناهندگان، مهاجرین و خانواده‌های SIV هنگام اسکان مجدد، کار، آموزش، منابع مهاجرت و زندگی اجتماعی در آریزونا حمایت می‌کند.",
    aboutText2: "وب‌سایت جدید باید خوشایند، قابل اعتماد و آسان باشد، مخصوصاً برای کسانی که از موبایل استفاده می‌کنند یا به زبان دوم می‌خوانند.",
    aboutBadges: ["قابل دسترس", "چندزبانه", "اولویت با موبایل"],
    servicesLabel: "خدمات",
    servicesTitle: "راه‌های واضح حمایت به جای صفحات دشوار برای خواندن.",
    servicesText: "هر بخش خدمات باید توضیح ساده، شرایط واجد بودن، ساعات کاری و قدم بعدی روشن داشته باشد.",
    services: [
      { title: "حمایت اسکان مجدد", text: "کمک عملی برای خانواده‌های تازه‌وارد پناهنده و مهاجر که در آریزونا مستقر می‌شوند." },
      { title: "خدمات کاریابی", text: "آمادگی برای کار، کمک در رزومه و معرفی به منابع کاریابی محلی." },
      { title: "راهنمایی مهاجرت", text: "حمایت در فورم‌ها، وعده‌ها، معرفی‌ها و منابع اجتماعی مربوط به مهاجرت." },
      { title: "صنف‌ها و آموزش", text: "آموزش انگلیسی، صنف‌های آشنایی، مهارت‌های زندگی و ورکشاپ‌های حمایت خانواده." },
      { title: "کمک ترانسپورت", text: "کمک برای وصل کردن مراجعین به وعده‌ها، خدمات و حمایت‌های مهم اجتماعی." },
      { title: "حمایت خانواده‌های SIV", text: "حمایت ویژه برای خانواده‌های SIV و پناهندگان برای بازسازی ثبات، امنیت و استقلال." },
    ],
    requestHelp: "درخواست کمک",
    getHelpLabel: "کمک بگیرید",
    getHelpTitle: "یک فورم ساده پذیرش برای مراجعین.",
    getHelpText: "این فورم فعلاً نمونه است. بعداً می‌توانیم آن را به ایمیل، Google Forms، Firebase، Airtable یا CRM وصل کنیم.",
    officeInfo: "معلومات دفتر",
    location: "فینیکس، آریزونا",
    phonePlaceholder: "شماره اصلی دفتر را اضافه کنید",
    emailPlaceholder: "ایمیل رسمی پذیرش را اضافه کنید",
    fullName: "نام کامل",
    fullNamePlaceholder: "نام شما",
    contactMethod: "تلفن یا ایمیل",
    contactPlaceholder: "بهترین راه تماس",
    preferredLanguage: "زبان ترجیحی",
    serviceNeeded: "خدمت مورد نیاز",
    serviceOptions: ["حمایت مهاجرت", "حمایت مسکن", "حمایت کاریابی", "صنف یا آموزش", "دیگر"],
    message: "پیام",
    messagePlaceholder: "برای ما بگویید در چه مورد به کمک نیاز دارید",
    consent: "من موافقم که AIRS درباره درخواست من با من تماس بگیرد.",
    submitRequest: "ارسال درخواست",
    donateTitle: "حمایت شما به خانواده‌ها کمک می‌کند دوباره شروع کنند.",
    donateText: "صفحه کمک مالی باید دادن کمک را ساده کند: کمک پولی، وسایل، جزئیات تحویل و رسیدها.",
    donateNow: "اکنون کمک کنید",
    donationCategories: "دسته‌های کمک",
    donationItems: ["وسایل ضروری خانه", "محصولات بهداشتی", "لوازم مکتب", "لباس", "فرنیچر", "کارت هدیه"],
    nextBuildStep: "قدم بعدی ساخت:",
    nextBuildText: "اضافه کردن Stripe، PayPal، Donorbox یا سیستم کمک مالی که AIRS از قبل استفاده می‌کند.",
    volunteerLabel: "داوطلبی",
    volunteerTitle: "جایگزین کردن دانلودهای خراب با جریان واقعی داوطلبی.",
    volunteerText: "داوطلبان باید بتوانند آنلاین درخواست بدهند، بخش‌های علاقه‌مندی را انتخاب کنند و قدم‌های بعدی واضح دریافت کنند.",
    applyVolunteer: "درخواست داوطلبی",
    volunteerRoles: ["راهنمایی", "حمایت ترانسپورت", "مرتب‌سازی کمک‌ها", "حمایت صنف انگلیسی", "رویدادهای اجتماعی", "کمک اداری"],
    eventsLabel: "رویدادها",
    eventsTitle: "یک تقویم واقعی، نه یک صفحه خالی.",
    viewEvents: "دیدن همه رویدادها",
    events: [
      { title: "آشنایی اجتماعی", date: "تاریخ را اضافه کنید", text: "جلسه خوش‌آمدگویی برای خانواده‌های تازه‌وارد و همکاران اجتماعی." },
      { title: "صنف انگلیسی", date: "تاریخ را اضافه کنید", text: "آموزش انگلیسی عملی برای زندگی روزمره، کار و وعده‌ها." },
      { title: "روز تحویل کمک‌ها", date: "تاریخ را اضافه کنید", text: "رویداد اجتماعی برای تحویل وسایل خانه و محصولات بهداشتی مورد نیاز." },
    ],
    contactTitle: "تماس",
    followTitle: "دنبال کنید",
    footerText: "یک وب‌سایت مدرن برای یک نهاد غیرانتفاعی، ساخته‌شده بر پایه وضاحت، اعتماد، دسترسی و اقدام.",
    footerCopyright: "© 2026 AIRS. نمونه بازطراحی وب‌سایت.",
    addPhone: "شماره تلفن را اضافه کنید",
    addEmail: "آدرس ایمیل را اضافه کنید",
    siteName: 'AIRS',
    footerQuickLinks: 'لینک\u200cهای سریع',
    footerServicesTitle: 'خدمات',
    footerGetInvolved: 'همراه شوید',
    footerLegalTitle: 'یادداشت نهاد غیرانتفاعی',
    footerLegalText: 'این نمونه وب\u200cسایت باید پیش از راه\u200cاندازی با معلومات رسمی تماس AIRS، لینک\u200cهای کمک مالی، جزئیات حریم خصوصی و معلومات ثبت غیرانتفاعی به\u200cروزرسانی شود.',
  },
  Swahili: {
    siteFullName: "Huduma za Wahamiaji na Wakimbizi wa Arizona",
    nav: ["Nyumbani", "Kuhusu", "Huduma", "Pata Msaada", "Changia", "Jitolee", "Matukio", "Mawasiliano"],
    donateButton: "Changia",
    languageLabel: "Chagua lugha",
    heroBadge: "Msaada wa lugha nyingi kwa familia za Arizona",
    heroTitle: "Kuwasaidia wakimbizi na wahamiaji kujenga maisha mapya Arizona.",
    heroText: "AIRS huunganisha familia na msaada wa vitendo, rasilimali za jamii, mwongozo wa uhamiaji, elimu, na njia za kufikia uthabiti wa muda mrefu.",
    getHelpButton: "Pata Msaada",
    volunteerButton: "Jitolee Nasi",
    heroCardTitle: "Mwanzo salama zaidi. Mustakabali imara zaidi.",
    heroCardText: "Tovuti iliyosanifiwa upya hurahisisha wateja, wafadhili, wajitolea na washirika kupata hatua inayofuata.",
    statYears: "Miaka ya kuhudumia jamii",
    statServices: "Maeneo makuu ya huduma",
    statLanguages: "Chaguo za lugha",
    mostNeededLabel: "Vinavyohitajika zaidi",
    mostNeededText: "Vifaa vya nyumbani, bidhaa za usafi, mavazi, vifaa vya shule, na wajitolea wa jamii.",
    aboutLabel: "Kuhusu AIRS",
    aboutTitle: "Hadithi iliyo wazi hujenga uaminifu zaidi.",
    aboutText1: "AIRS husaidia wakimbizi, wahamiaji, na familia za SIV wanapopitia makazi mapya, ajira, elimu, rasilimali za uhamiaji, na maisha ya jamii Arizona.",
    aboutText2: "Tovuti mpya inapaswa kuwa ya kukaribisha, ya kuaminika, na rahisi kutumia kwa watu wanaotumia simu au wanaosoma kwa lugha ya pili.",
    aboutBadges: ["Rahisi kufikia", "Lugha nyingi", "Kipaumbele kwa simu"],
    servicesLabel: "Huduma",
    servicesTitle: "Njia za msaada zilizo wazi badala ya kurasa ngumu kusoma.",
    servicesText: "Kila eneo la huduma linapaswa kuwa na maelezo rahisi, masharti ya kustahiki, saa za ofisi, na hatua inayofuata iliyo wazi.",
    services: [
      { title: "Msaada wa Makazi Mapya", text: "Msaada wa vitendo kwa familia mpya za wakimbizi na wahamiaji zinazoanza maisha Arizona." },
      { title: "Huduma za Ajira", text: "Maandalizi ya kazi, msaada wa wasifu, na rufaa kwa rasilimali za ajira za eneo." },
      { title: "Mwongozo wa Uhamiaji", text: "Msaada kwa fomu, miadi, rufaa, na rasilimali za jamii zinazohusiana na uhamiaji." },
      { title: "Madarasa na Elimu", text: "Kujifunza Kiingereza, madarasa ya mwongozo, elimu ya stadi za maisha, na warsha za msaada wa familia." },
      { title: "Msaada wa Usafiri", text: "Msaada wa kuwaunganisha wateja na miadi muhimu, huduma, na msaada wa jamii." },
      { title: "Msaada kwa Familia za SIV", text: "Msaada maalum kwa familia za SIV na wakimbizi wanaojenga upya uthabiti, usalama, na kujitegemea." },
    ],
    requestHelp: "Omba msaada",
    getHelpLabel: "Pata Msaada",
    getHelpTitle: "Fomu rahisi ya maombi kwa wateja.",
    getHelpText: "Fomu hii ni mfano kwa sasa. Baadaye tunaweza kuiunganisha na barua pepe, Google Forms, Firebase, Airtable, au CRM.",
    officeInfo: "Taarifa za Ofisi",
    location: "Phoenix, Arizona",
    phonePlaceholder: "Ongeza namba kuu ya ofisi",
    emailPlaceholder: "Ongeza barua pepe rasmi ya maombi",
    fullName: "Jina Kamili",
    fullNamePlaceholder: "Jina lako",
    contactMethod: "Simu au Barua Pepe",
    contactPlaceholder: "Njia bora ya kuwasiliana",
    preferredLanguage: "Lugha Unayopendelea",
    serviceNeeded: "Huduma Inayohitajika",
    serviceOptions: ["Msaada wa uhamiaji", "Msaada wa makazi", "Msaada wa ajira", "Madarasa au elimu", "Nyingine"],
    message: "Ujumbe",
    messagePlaceholder: "Tuambie unahitaji msaada gani",
    consent: "Nakubali kwamba AIRS inaweza kuwasiliana nami kuhusu ombi langu.",
    submitRequest: "Tuma Ombi",
    donateTitle: "Msaada wako husaidia familia kuanza tena.",
    donateText: "Ukurasa wa michango unapaswa kurahisisha kutoa: pesa, vitu, maelezo ya mahali pa kuleta, na risiti.",
    donateNow: "Changia Sasa",
    donationCategories: "Aina za michango",
    donationItems: ["Vifaa muhimu vya nyumbani", "Bidhaa za usafi", "Vifaa vya shule", "Mavazi", "Samani", "Kadi za zawadi"],
    nextBuildStep: "Hatua inayofuata ya ujenzi:",
    nextBuildText: "ongeza Stripe, PayPal, Donorbox, au mfumo wa michango ambao AIRS tayari unatumia.",
    volunteerLabel: "Jitolee",
    volunteerTitle: "Badilisha upakuaji uliovunjika na mchakato halisi wa kujitolea.",
    volunteerText: "Wajitolea wanapaswa kuweza kutuma maombi mtandaoni, kuchagua maeneo ya kuvutiwa, na kupata hatua zinazofuata zilizo wazi.",
    applyVolunteer: "Omba Kujitolea",
    volunteerRoles: ["Ushauri", "Msaada wa usafiri", "Kupanga michango", "Msaada wa darasa la Kiingereza", "Matukio ya jamii", "Msaada wa utawala"],
    eventsLabel: "Matukio",
    eventsTitle: "Kalenda halisi, si ukurasa mtupu.",
    viewEvents: "Tazama matukio yote",
    events: [
      { title: "Mwongozo wa Jamii", date: "Ongeza tarehe", text: "Kikao cha kuwakaribisha familia mpya na washirika wa jamii." },
      { title: "Darasa la Kiingereza", date: "Ongeza tarehe", text: "Kujifunza Kiingereza kwa matumizi ya kila siku, kazi, na miadi." },
      { title: "Siku ya Kuleta Michango", date: "Ongeza tarehe", text: "Tukio la jamii la kuleta vifaa vya nyumbani na bidhaa za usafi zinazohitajika sana." },
    ],
    contactTitle: "Mawasiliano",
    followTitle: "Fuatilia",
    footerText: "Tovuti ya kisasa ya shirika lisilo la faida iliyojengwa kwa uwazi, uaminifu, ufikivu, na hatua.",
    footerCopyright: "© 2026 AIRS. Mfano wa usanifu mpya wa tovuti.",
    addPhone: "Ongeza namba ya simu",
    addEmail: "Ongeza anwani ya barua pepe",
    siteName: 'AIRS',
    footerQuickLinks: 'Viungo vya Haraka',
    footerServicesTitle: 'Huduma',
    footerGetInvolved: 'Shiriki',
    footerLegalTitle: 'Taarifa ya Shirika Lisilo la Faida',
    footerLegalText: 'Mfano huu wa tovuti unapaswa kusasishwa kwa taarifa rasmi za mawasiliano za AIRS, viungo vya michango, maelezo ya faragha, na taarifa za usajili wa shirika lisilo la faida kabla ya kuzinduliwa.',
  },
  French: {
    siteFullName: "Services aux immigrants et réfugiés de l’Arizona",
    nav: ["Accueil", "À propos", "Services", "Obtenir de l’aide", "Faire un don", "Bénévolat", "Événements", "Contact"],
    donateButton: "Faire un don",
    languageLabel: "Choisir la langue",
    heroBadge: "Soutien multilingue pour les familles de l’Arizona",
    heroTitle: "Aider les réfugiés et les immigrants à construire une nouvelle vie en Arizona.",
    heroText: "AIRS met les familles en relation avec un soutien pratique, des ressources communautaires, des conseils en immigration, l’éducation et des chemins vers une stabilité durable.",
    getHelpButton: "Obtenir de l’aide",
    volunteerButton: "Devenir bénévole",
    heroCardTitle: "Un départ plus sûr. Un avenir plus solide.",
    heroCardText: "Le site repensé permet aux clients, donateurs, bénévoles et partenaires de trouver plus facilement la bonne prochaine étape.",
    statYears: "Années au service de la communauté",
    statServices: "Domaines de service principaux",
    statLanguages: "Options de langue",
    mostNeededLabel: "Besoins prioritaires",
    mostNeededText: "Articles ménagers, produits d’hygiène, vêtements, fournitures scolaires et bénévoles communautaires.",
    aboutLabel: "À propos d’AIRS",
    aboutTitle: "Une histoire plus claire inspire plus de confiance.",
    aboutText1: "AIRS soutient les réfugiés, les immigrants et les familles SIV dans leur réinstallation, l’emploi, l’éducation, les ressources d’immigration et la vie communautaire en Arizona.",
    aboutText2: "Le nouveau site doit être accueillant, fiable et facile à utiliser pour les personnes qui utilisent un téléphone mobile ou lisent dans une deuxième langue.",
    aboutBadges: ["Accessible", "Multilingue", "Pensé pour mobile"],
    servicesLabel: "Services",
    servicesTitle: "Des parcours de soutien clairs au lieu de pages difficiles à parcourir.",
    servicesText: "Chaque domaine de service doit proposer des explications simples, des notes d’éligibilité, les horaires de bureau et une prochaine étape claire.",
    services: [
      { title: "Soutien à la réinstallation", text: "Aide pratique pour les familles réfugiées et immigrantes nouvellement arrivées qui s’installent en Arizona." },
      { title: "Services d’emploi", text: "Préparation à l’emploi, aide au CV et orientation vers des ressources locales d’emploi." },
      { title: "Conseils en immigration", text: "Soutien pour les formulaires, rendez-vous, orientations et ressources communautaires liés à l’immigration." },
      { title: "Cours et éducation", text: "Apprentissage de l’anglais, cours d’orientation, compétences de vie et ateliers de soutien familial." },
      { title: "Aide au transport", text: "Aide pour relier les clients aux rendez-vous essentiels, aux services et au soutien communautaire." },
      { title: "Soutien aux familles SIV", text: "Soutien spécialisé pour les familles SIV et les réfugiés qui reconstruisent stabilité, sécurité et autonomie." },
    ],
    requestHelp: "Demander de l’aide",
    getHelpLabel: "Obtenir de l’aide",
    getHelpTitle: "Un formulaire d’accueil simple pour les clients.",
    getHelpText: "Ce formulaire est pour l’instant un espace réservé. Plus tard, nous pourrons le connecter à l’e-mail, Google Forms, Firebase, Airtable ou un CRM.",
    officeInfo: "Informations du bureau",
    location: "Phoenix, Arizona",
    phonePlaceholder: "Ajouter le numéro principal du bureau",
    emailPlaceholder: "Ajouter l’e-mail officiel d’accueil",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom",
    contactMethod: "Téléphone ou e-mail",
    contactPlaceholder: "Meilleur moyen de contact",
    preferredLanguage: "Langue préférée",
    serviceNeeded: "Service nécessaire",
    serviceOptions: ["Soutien en immigration", "Soutien au logement", "Soutien à l’emploi", "Cours ou éducation", "Autre"],
    message: "Message",
    messagePlaceholder: "Dites-nous de quoi vous avez besoin",
    consent: "J’accepte qu’AIRS me contacte au sujet de ma demande.",
    submitRequest: "Envoyer la demande",
    donateTitle: "Votre soutien aide les familles à recommencer.",
    donateText: "La page de dons doit rendre le don simple : dons financiers, dons d’articles, détails de dépôt et reçus.",
    donateNow: "Faire un don maintenant",
    donationCategories: "Catégories de dons",
    donationItems: ["Articles ménagers essentiels", "Produits d’hygiène", "Fournitures scolaires", "Vêtements", "Meubles", "Cartes-cadeaux"],
    nextBuildStep: "Prochaine étape de développement :",
    nextBuildText: "ajouter Stripe, PayPal, Donorbox ou le système de dons qu’AIRS utilise déjà.",
    volunteerLabel: "Bénévolat",
    volunteerTitle: "Remplacer les téléchargements cassés par un vrai parcours bénévole.",
    volunteerText: "Les bénévoles devraient pouvoir postuler en ligne, choisir leurs domaines d’intérêt et recevoir des prochaines étapes claires.",
    applyVolunteer: "Postuler comme bénévole",
    volunteerRoles: ["Mentorat", "Soutien au transport", "Tri des dons", "Soutien aux cours d’anglais", "Événements communautaires", "Aide administrative"],
    eventsLabel: "Événements",
    eventsTitle: "Un vrai calendrier, pas une page vide.",
    viewEvents: "Voir tous les événements",
    events: [
      { title: "Orientation communautaire", date: "Ajouter une date", text: "Séance d’accueil pour les familles nouvellement arrivées et les partenaires communautaires." },
      { title: "Cours d’anglais", date: "Ajouter une date", text: "Apprentissage pratique de l’anglais pour la vie quotidienne, le travail et les rendez-vous." },
      { title: "Journée de dépôt des dons", date: "Ajouter une date", text: "Événement communautaire de dépôt d’articles ménagers et de produits d’hygiène très demandés." },
    ],
    contactTitle: "Contact",
    followTitle: "Suivre",
    footerText: "Un site moderne pour une organisation à but non lucratif, conçu autour de la clarté, de la confiance, de l’accessibilité et de l’action.",
    footerCopyright: "© 2026 AIRS. Prototype de refonte du site web.",
    addPhone: "Ajouter un numéro de téléphone",
    addEmail: "Ajouter une adresse e-mail",
    siteName: 'AIRS',
    footerQuickLinks: 'Liens rapides',
    footerServicesTitle: 'Services',
    footerGetInvolved: 'Participer',
    footerLegalTitle: 'Note de l’organisation à but non lucratif',
    footerLegalText: 'Ce prototype de site doit être mis à jour avec les coordonnées officielles d’AIRS, les liens de don, les informations de confidentialité et les détails d’enregistrement de l’organisation avant le lancement.',
  },
  Kinyarwanda: {
    siteName: "AIRS",
    siteFullName: "Serivisi z’Abimukira n’Impunzi muri Arizona",
    nav: ["Ahabanza", "Ibyerekeye", "Serivisi", "Saba ubufasha", "Tanga inkunga", "Ba umukorerabushake", "Ibikorwa", "Twandikire"],
    donateButton: "Tanga inkunga",
    languageLabel: "Hitamo ururimi",
    heroBadge: "Ubufasha mu ndimi nyinshi ku miryango yo muri Arizona",
    heroTitle: "Gufasha impunzi n’abimukira kubaka ubuzima bushya muri Arizona.",
    heroText: "AIRS ihuza imiryango n’ubufasha bufatika, amakuru y’umuryango, ubujyanama ku byerekeye kwimukira mu gihugu, uburezi, n’inzira zigana ku mutekano urambye.",
    getHelpButton: "Saba ubufasha",
    volunteerButton: "Ba umukorerabushake",
    heroCardTitle: "Intangiriro itekanye. Ejo hazaza hakomeye.",
    heroCardText: "Urubuga rushya rufasha abakiriya, abatanga inkunga, abakorerabushake, n’abafatanyabikorwa kubona intambwe ikurikira ibakwiriye.",
    statYears: "Imyaka yo gukorera umuryango",
    statServices: "Ibyiciro by’ingenzi bya serivisi",
    statLanguages: "Amahitamo y’indimi",
    mostNeededLabel: "Ibikenewe cyane",
    mostNeededText: "Ibikoresho byo mu rugo, ibikoresho by’isuku, imyambaro, ibikoresho by’ishuri, n’abakorerabushake bo mu muryango.",
    aboutLabel: "Ibyerekeye AIRS",
    aboutTitle: "Inkuru isobanutse yubaka icyizere kurushaho.",
    aboutText1: "AIRS ifasha impunzi, abimukira, n’imiryango ya SIV mu kwimukira no gutura, akazi, uburezi, amakuru ajyanye n’abimukira, n’ubuzima bwo mu muryango muri Arizona.",
    aboutText2: "Urubuga rushya rugomba kuba rwakira abantu, rwizewe, kandi rworoshye gukoresha ku bantu bashobora kuba bafite umunaniro, bakoresha telefoni, cyangwa basoma mu rurimi rwa kabiri.",
    aboutBadges: ["Rworoshye kugeraho", "Indimi nyinshi", "Rwubakiwe telefoni mbere"],
    servicesLabel: "Serivisi",
    servicesTitle: "Inzira zisobanutse zo kubona ubufasha aho kuba amapaji agoye gusoma.",
    servicesText: "Buri cyiciro cya serivisi kigomba kugira ibisobanuro byoroshye, ibisabwa, amasaha y’akazi, n’intambwe ikurikira isobanutse.",
    services: [
      { title: "Ubufasha bwo gutura", text: "Ubufasha bufatika ku miryango y’impunzi n’abimukira bageze vuba batangira ubuzima muri Arizona." },
      { title: "Serivisi z’akazi", text: "Kwitegura akazi, ubufasha mu gukora CV, no koherezwa ku makuru y’akazi yo hafi." },
      { title: "Ubuyobozi ku by’abimukira", text: "Ubufasha ku mafishi, gahunda, koherezwa ku nzego zikwiye, n’amakuru y’umuryango ajyanye n’abimukira." },
      { title: "Amasomo n’uburezi", text: "Kwiga Icyongereza, amasomo yo kumenyera, ubumenyi bw’ubuzima, n’amahugurwa afasha imiryango." },
      { title: "Ubufasha bw’ingendo", text: "Gufasha abakiriya kugera kuri gahunda z’ingenzi, serivisi, n’ubufasha bwo mu muryango." },
      { title: "Ubufasha ku miryango ya SIV", text: "Ubufasha bwihariye ku miryango ya SIV n’impunzi mu kongera kubaka umutekano, ituze, n’ubwigenge." },
    ],
    requestHelp: "Saba ubufasha",
    getHelpLabel: "Saba ubufasha",
    getHelpTitle: "Ifishi yoroshye yo kwakira abakiriya.",
    getHelpText: "Iyi fishi ni urugero rwa front-end kuri ubu. Nyuma dushobora kuyihuza na email, Google Forms, Firebase, Airtable, cyangwa CRM.",
    officeInfo: "Amakuru y’ibiro",
    location: "Phoenix, Arizona",
    phonePlaceholder: "Ongeramo nimero nyamukuru y’ibiro",
    emailPlaceholder: "Ongeramo email yemewe yo kwakira ubusabe",
    fullName: "Amazina yose",
    fullNamePlaceholder: "Amazina yawe",
    contactMethod: "Telefoni cyangwa Email",
    contactPlaceholder: "Uburyo bwiza bwo kukuvugisha",
    preferredLanguage: "Ururimi ukunda",
    serviceNeeded: "Serivisi ikenewe",
    serviceOptions: ["Ubufasha ku by’abimukira", "Ubufasha bw’aho gutura", "Ubufasha bw’akazi", "Amasomo cyangwa uburezi", "Ibindi"],
    message: "Ubutumwa",
    messagePlaceholder: "Tubwire icyo ukeneyeho ubufasha",
    consent: "Nemeye ko AIRS ishobora kunyandikira cyangwa kumpamagara ku bijyanye n’ubusabe bwanjye.",
    submitRequest: "Ohereza ubusabe",
    donateTitle: "Inkunga yawe ifasha imiryango gutangira bundi bushya.",
    donateText: "Ipaji y’inkunga igomba koroshya gutanga: amafaranga, ibikoresho, aho kubishyira, n’inyemezabwishyu.",
    donateNow: "Tanga inkunga ubu",
    donationCategories: "Ibyiciro by’inkunga",
    donationItems: ["Ibikoresho by’ingenzi byo mu rugo", "Ibikoresho by’isuku", "Ibikoresho by’ishuri", "Imyambaro", "Ibikoresho byo mu nzu", "Amakarita y’impano"],
    nextBuildStep: "Intambwe ikurikira yo kubaka:",
    nextBuildText: "ongeramo Stripe, PayPal, Donorbox, cyangwa uburyo bwo gutanga inkunga AIRS isanzwe ikoresha.",
    volunteerLabel: "Ubukorerabushake",
    volunteerTitle: "Gusimbuza ama-download adakora inzira nyayo y’abakorerabushake.",
    volunteerText: "Abakorerabushake bagomba gusaba online, guhitamo ibyo bashaka gufashamo, no kubona intambwe zikurikira zisobanutse.",
    applyVolunteer: "Saba kuba umukorerabushake",
    volunteerRoles: ["Kuyobora no gufasha", "Ubufasha bw’ingendo", "Gutondeka inkunga", "Gufasha mu masomo y’Icyongereza", "Ibikorwa by’umuryango", "Ubufasha mu biro"],
    eventsLabel: "Ibikorwa",
    eventsTitle: "Kalendari nyayo, si ipaji irimo ubusa.",
    viewEvents: "Reba ibikorwa byose",
    events: [
      { title: "Kumenyereza umuryango", date: "Ongeramo itariki", text: "Ikiganiro cyo kwakira imiryango mishya n’abafatanyabikorwa bo mu muryango." },
      { title: "Isomo ry’Icyongereza", date: "Ongeramo itariki", text: "Kwiga Icyongereza gifatika ku buzima bwa buri munsi, akazi, na gahunda." },
      { title: "Umunsi wo gutanga inkunga", date: "Ongeramo itariki", text: "Igikorwa cy’umuryango cyo gutanga ibikoresho byo mu rugo n’ibikoresho by’isuku bikenewe cyane." },
    ],
    contactTitle: "Twandikire",
    followTitle: "Dukurikire",
    footerText: "AIRS ifasha imiryango y’impunzi n’abimukira kubona ubufasha, amakuru, n’imikoranire y’umuryango muri Arizona.",
    footerCopyright: "© 2026 AIRS. Uburenganzira bwose burabitswe.",
    addPhone: "Ongeramo nimero ya telefoni",
    addEmail: "Ongeramo aderesi ya email",
    footerQuickLinks: 'Amahuriro yihuse',
    footerServicesTitle: 'Serivisi',
    footerGetInvolved: 'Gira uruhare',
    footerLegalTitle: 'Icyitonderwa cy’umuryango udaharanira inyungu',
    footerLegalText: 'Iyi prototype y’urubuga igomba gushyirwamo amakuru yemewe ya AIRS yo kuvugana, amahuza yo gutangiraho inkunga, amakuru yerekeye ibanga, n’amakuru yo kwiyandikisha nk’umuryango udaharanira inyungu mbere yo gutangizwa.',
  },

};

const serviceIcons = [Home, Briefcase, FileText, GraduationCap, Truck, ShieldCheck];

function getSectionId(label) {
  const navMap = {};

  Object.values(translations).forEach((translation) => {
    translation.nav.forEach((navLabel, index) => {
      navMap[navLabel] = ["home", "about", "services", "get-help", "donate", "volunteer", "events", "contact"][index];
    });
  });

  return navMap[label] || label.toLowerCase().replaceAll(" ", "-");
}

function SectionLabel({ children, color = "text-teal-700" }) {
  return <p className={`text-sm font-black uppercase tracking-[0.2em] ${color}`}>{children}</p>;
}

function DirectionalArrow({ isRtl, size = 18, className = "" }) {
  return <ArrowRight size={size} className={`${isRtl ? "rotate-180" : ""} ${className}`} />;
}


function BrandLogo({ t, compact = false, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex ${compact ? "h-11 w-11" : "h-14 w-14"} shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm ring-1 ring-teal-900/10`}>
        <span className={`${compact ? "text-sm" : "text-base"} font-black tracking-tight`}>AIRS</span>
      </div>
      <div>
        <p className={`${compact ? "text-lg" : "text-xl"} font-black leading-tight ${light ? "text-white" : "text-slate-950"}`}>{t.siteName}</p>
        <p className={`max-w-[15rem] text-xs font-semibold leading-4 ${light ? "text-slate-200" : "text-slate-500"}`}>{t.siteFullName}</p>
      </div>
    </div>
  );
}

function PartnerLogos({ t }) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Brand & Partner Identity</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <BrandLogo t={t} />
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <span className="text-sm font-black tracking-tight">ECDC</span>
              </div>
              <div>
                <p className="text-xl font-black leading-tight text-slate-950">ECDC</p>
                <p className="text-xs font-semibold leading-4 text-slate-500">AIRS subsidiary / partner reference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Navbar({ language, setLanguage, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <BrandLogo t={t} compact />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {t.nav.map((item) => (
            <a key={item} href={`#${getSectionId(item)}`} className="text-sm font-bold text-slate-700 transition hover:text-teal-700">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-teal-700" aria-label={t.languageLabel}>
            {languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}
          </select>
          <a href="#donate" className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-orange-600">{t.donateButton}</a>
        </div>

        <button className="rounded-xl p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open mobile menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {t.nav.map((item) => (
              <a key={item} href={`#${getSectionId(item)}`} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
                {item}
              </a>
            ))}
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.38),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.26),_transparent_36%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-teal-100">
            <Languages size={17} /> {t.heroBadge}
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-help" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 text-base font-black text-white shadow-lg shadow-teal-950/30 transition hover:bg-teal-400">
              {t.getHelpButton} <DirectionalArrow isRtl={isRtl} size={18} />
            </a>
            <a href="#volunteer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-black text-white transition hover:bg-white/15">
              {t.volunteerButton}
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6">
              <div className="rounded-3xl bg-teal-50 p-6">
                <Users className="mb-4 text-teal-700" size={34} />
                <h2 className="text-2xl font-black text-slate-950">{t.heroCardTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{t.heroCardText}</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-100 p-4 text-center"><p className="text-2xl font-black text-teal-700">20+</p><p className="mt-1 text-xs font-bold leading-4 text-slate-500">{t.statYears}</p></div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center"><p className="text-2xl font-black text-teal-700">6</p><p className="mt-1 text-xs font-bold leading-4 text-slate-500">{t.statServices}</p></div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center"><p className="text-2xl font-black text-teal-700">{languages.length}</p><p className="mt-1 text-xs font-bold leading-4 text-slate-500">{t.statLanguages}</p></div>
              </div>
              <div className="mt-4 rounded-3xl bg-orange-50 p-5">
                <p className="text-sm font-black uppercase tracking-wider text-orange-600">{t.mostNeededLabel}</p>
                <p className="mt-2 text-slate-700">{t.mostNeededText}</p>
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
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionLabel>{t.aboutLabel}</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.aboutTitle}</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>{t.aboutText1}</p>
          <p>{t.aboutText2}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.aboutBadges.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-100 p-4 text-base font-black text-slate-800">
                <CheckCircle2 className="text-teal-700" size={19} /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ t, isRtl }) {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="max-w-3xl">
        <SectionLabel>{t.servicesLabel}</SectionLabel>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.servicesTitle}</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">{t.servicesText}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24} /></div>
              <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              <a href="#get-help" className="mt-5 inline-flex items-center gap-2 font-black text-teal-700">{t.requestHelp} <DirectionalArrow isRtl={isRtl} size={17} /></a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function GetHelp({ t, language }) {
  return (
    <section id="get-help" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionLabel color="text-orange-600">{t.getHelpLabel}</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.getHelpTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.getHelpText}</p>
          <div className="mt-8 rounded-3xl bg-slate-100 p-6">
            <h3 className="font-black text-slate-950">{t.officeInfo}</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <p className="flex gap-3"><MapPin className="mt-0.5 text-teal-700" size={19} /> {t.location}</p>
              <p className="flex gap-3"><Phone className="mt-0.5 text-teal-700" size={19} /> {t.phonePlaceholder}</p>
              <p className="flex gap-3"><Mail className="mt-0.5 text-teal-700" size={19} /> {t.emailPlaceholder}</p>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-slate-700">{t.fullName}<input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.fullNamePlaceholder} /></label>
            <label className="grid gap-2 text-sm font-black text-slate-700">{t.contactMethod}<input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.contactPlaceholder} /></label>
            <label className="grid gap-2 text-sm font-black text-slate-700">{t.preferredLanguage}<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">{languages.map((lang) => <option key={lang} value={lang}>{languageNames[language]?.[lang] || lang}</option>)}</select></label>
            <label className="grid gap-2 text-sm font-black text-slate-700">{t.serviceNeeded}<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">{t.serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-black text-slate-700">{t.message}<textarea rows="5" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder={t.messagePlaceholder} /></label>
          <label className="mt-4 flex gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" className="mt-1" /> {t.consent}</label>
          <button type="button" className="mt-6 w-full rounded-2xl bg-teal-700 px-6 py-3 font-black text-white transition hover:bg-teal-800">{t.submitRequest}</button>
        </form>
      </div>
    </section>
  );
}

function Donate({ t, isRtl }) {
  return (
    <section id="donate" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-teal-700 p-8 text-white lg:col-span-1">
          <Heart size={34} />
          <h2 className="mt-5 text-3xl font-black">{t.donateTitle}</h2>
          <p className="mt-4 leading-7 text-teal-50">{t.donateText}</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-teal-800">{t.donateNow} <DirectionalArrow isRtl={isRtl} size={18} /></a>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
          <SectionLabel color="text-orange-600">{t.donationCategories}</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.donationItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4 font-black text-slate-700"><HandHeart className="text-orange-600" size={19} /> {item}</div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-orange-50 p-5 text-slate-700"><strong>{t.nextBuildStep}</strong> {t.nextBuildText}</div>
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
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 font-black text-white hover:bg-teal-400">{t.applyVolunteer} <DirectionalArrow isRtl={isRtl} size={18} /></a>
        </div>
        <div className="grid gap-4">
          {t.volunteerRoles.map((role) => (
            <div key={role} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5"><span className="font-black">{role}</span><DirectionalArrow isRtl={isRtl} className="text-teal-300" size={20} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events({ t }) {
  return (
    <section id="events" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <SectionLabel>{t.eventsLabel}</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{t.eventsTitle}</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-800 shadow-sm">{t.viewEvents} <CalendarDays size={18} /></a>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.events.map((event) => (
          <div key={event.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-black text-orange-600">{event.date}</p>
            <h3 className="mt-3 text-xl font-black text-slate-950">{event.title}</h3>
            <p className="mt-3 text-slate-600">{event.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactFooter({ t }) {
  const quickLinks = t.nav.map((item) => ({ label: item, href: `#${getSectionId(item)}` }));
  const serviceLinks = (t.services || []).slice(0, 6).map((service) => ({ label: service.title, href: "#services" }));
  const involvedLinks = [
    { label: t.donateButton, href: "#donate" },
    { label: t.volunteerButton, href: "#volunteer" },
    { label: t.getHelpButton, href: "#get-help" },
  ];

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:px-8">
        <div>
          <BrandLogo t={t} compact />
          <p className="mt-5 max-w-md leading-7 text-slate-600">{t.footerText}</p>
          <div className="mt-6 space-y-3 text-slate-600">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.location}</p>
            <p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addPhone}</p>
            <p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addEmail}</p>
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">{t.footerQuickLinks || "Quick Links"}</h3>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">{t.footerServicesTitle || t.servicesLabel}</h3>
          <div className="mt-4 grid gap-3">
            {serviceLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-950">{t.footerGetInvolved || "Get Involved"}</h3>
          <div className="mt-4 grid gap-3">
            {involvedLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{t.footerCopyright}</p>
          <p className="max-w-2xl">{t.footerLegalText || "Update this section with official nonprofit, privacy, and donation information before launch."}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState("English");
  const t = { ...translations.English, ...footerLabels.English, ...(translations[language] || {}), ...(footerLabels[language] || {}) };
  const direction = languageDirections[language] || "ltr";
  const isRtl = direction === "rtl";
  const languageCode = languageCodes[language] || "en";

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${isRtl ? "text-right" : "text-left"}`} dir={direction} lang={languageCode}>
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} isRtl={isRtl} />
        <PartnerLogos t={t} />
        <About t={t} />
        <Services t={t} isRtl={isRtl} />
        <GetHelp t={t} language={language} />
        <Donate t={t} isRtl={isRtl} />
        <Volunteer t={t} isRtl={isRtl} />
        <Events t={t} />
      </main>
      <ContactFooter t={t} />
    </div>
  );
}
