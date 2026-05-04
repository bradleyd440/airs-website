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

const languages = ["English", "Spanish", "Arabic", "Dari", "Swahili", "French", "Kinyarwanda"];
const languageDirections = { Arabic: "rtl", Dari: "rtl" };
const languageCodes = { English: "en", Spanish: "es", Arabic: "ar", Dari: "fa-AF", Swahili: "sw", French: "fr", Kinyarwanda: "rw" };
const sectionIds = ["home", "about", "services", "get-help", "donate", "volunteer", "events", "contact"];

const languageNames = {
  English: { English: "English", Spanish: "Spanish", Arabic: "Arabic", Dari: "Dari", Swahili: "Swahili", French: "French", Kinyarwanda: "Kinyarwanda" },
  Spanish: { English: "Inglés", Spanish: "Español", Arabic: "Árabe", Dari: "Dari", Swahili: "Suajili", French: "Francés", Kinyarwanda: "Kinyarwanda" },
  Arabic: { English: "الإنجليزية", Spanish: "الإسبانية", Arabic: "العربية", Dari: "الدَرية", Swahili: "السواحيلية", French: "الفرنسية", Kinyarwanda: "الكينيارواندا" },
  Dari: { English: "انگلیسی", Spanish: "اسپانیایی", Arabic: "عربی", Dari: "دری", Swahili: "سواحیلی", French: "فرانسوی", Kinyarwanda: "کینیارواندا" },
  Swahili: { English: "Kiingereza", Spanish: "Kihispania", Arabic: "Kiarabu", Dari: "Kidarí", Swahili: "Kiswahili", French: "Kifaransa", Kinyarwanda: "Kinyarwanda" },
  French: { English: "Anglais", Spanish: "Espagnol", Arabic: "Arabe", Dari: "Dari", Swahili: "Swahili", French: "Français", Kinyarwanda: "Kinyarwanda" },
  Kinyarwanda: { English: "Icyongereza", Spanish: "Icyesipanyoli", Arabic: "Icyarabu", Dari: "Ikidari", Swahili: "Igiswahili", French: "Igifaransa", Kinyarwanda: "Ikinyarwanda" },
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
    getHelpText: "Use this form as a simple online intake pathway. Before launch, connect it to AIRS’s official email or approved intake process so requests reach the right team.",
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

const translatedNav = {
  Spanish: ["Inicio", "Acerca de", "Servicios", "Obtener Ayuda", "Donar", "Voluntariado", "Eventos", "Contacto"],
  Arabic: ["الرئيسية", "من نحن", "الخدمات", "احصل على المساعدة", "تبرع", "تطوع", "الفعاليات", "اتصل بنا"],
  Dari: ["خانه", "درباره", "خدمات", "کمک بگیرید", "کمک مالی", "داوطلبی", "رویدادها", "تماس"],
  Swahili: ["Nyumbani", "Kuhusu", "Huduma", "Pata Msaada", "Changia", "Jitolee", "Matukio", "Mawasiliano"],
  French: ["Accueil", "À propos", "Services", "Obtenir de l’aide", "Faire un don", "Bénévolat", "Événements", "Contact"],
  Kinyarwanda: ["Ahabanza", "Ibyerekeye", "Serivisi", "Saba ubufasha", "Tanga inkunga", "Ba umukorerabushake", "Ibikorwa", "Twandikire"],
};

const translatedUi = {
  Spanish: { donateButton: "Donar", getHelpButton: "Obtener ayuda", volunteerButton: "Ser voluntario", languageLabel: "Seleccionar idioma" },
  Arabic: { donateButton: "تبرع", getHelpButton: "احصل على المساعدة", volunteerButton: "تطوع معنا", languageLabel: "اختر اللغة" },
  Dari: { donateButton: "کمک مالی", getHelpButton: "کمک بگیرید", volunteerButton: "با ما داوطلب شوید", languageLabel: "انتخاب زبان" },
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
    <div className={light ? "text-white" : "text-slate-950"}>
      <p className={`${compact ? "text-3xl" : "text-4xl"} font-black leading-none tracking-tight`}>AIRS</p>
      <p className={`${compact ? "text-[11px]" : "text-sm"} mt-1 max-w-[16rem] font-semibold leading-4 ${light ? "text-slate-200" : "text-slate-600"}`}>
        Arizona Immigrant & Refugee Services
      </p>
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
          <div className="mt-8 rounded-3xl bg-slate-100 p-6"><h3 className="font-black text-slate-950">{t.officeInfo}</h3><div className="mt-4 space-y-3 text-slate-600"><p className="flex gap-3"><MapPin className="mt-0.5 text-teal-700" size={19} /> {t.location}</p><p className="flex gap-3"><Phone className="mt-0.5 text-teal-700" size={19} /> {t.phonePlaceholder}</p><p className="flex gap-3"><Mail className="mt-0.5 text-teal-700" size={19} /> {t.emailPlaceholder}</p><p className="flex gap-3"><CalendarDays className="mt-0.5 text-teal-700" size={19} /> {t.officeHours}</p><p className="text-sm font-semibold text-slate-500">{t.holidayNote}</p><p className="text-sm font-semibold text-slate-500">{t.fax}</p></div></div>
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
                Ask About Donations
              </a>
            </div>

            <p className="mt-4 text-sm font-semibold leading-6 text-teal-50">
              Donations are securely processed through PayPal. The current PayPal button is a test link and should be replaced with AIRS’s official donation link before launch.
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
            <strong>Donation note:</strong> {t.donationNote}
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
  return <footer id="contact" className="border-t border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:px-8"><div><BrandLogo compact /><p className="mt-5 max-w-md leading-7 text-slate-600">{t.footerText}</p><div className="mt-6 space-y-3 text-slate-600"><p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.location}</p><p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addPhone}</p><p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-teal-700" /> {t.addEmail}</p></div></div><div><h3 className="font-black text-slate-950">{t.footerQuickLinks}</h3><div className="mt-4 grid gap-3">{quickLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerServicesTitle}</h3><div className="mt-4 grid gap-3">{serviceLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div><div><h3 className="font-black text-slate-950">{t.footerGetInvolved}</h3><div className="mt-4 grid gap-3">{involvedLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-teal-700">{link.label}</a>)}</div></div></div><div className="border-t border-slate-200 bg-slate-50"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>{t.footerCopyright}</p><p className="max-w-2xl">{t.footerLegalText}</p></div></div></footer>;
}

export default function App() {
  const [language, setLanguage] = useState("English");
  const t = { ...translations.English, nav: translatedNav[language] || translations.English.nav, ...(translatedUi[language] || {}) };
  const direction = languageDirections[language] || "ltr";
  const isRtl = direction === "rtl";
  const languageCode = languageCodes[language] || "en";

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${isRtl ? "text-right" : "text-left"}`} dir={direction} lang={languageCode}>
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
