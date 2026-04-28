
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
  Handshake,
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

const navItems = ["Home", "About", "Services", "Get Help", "Donate", "Volunteer", "Events", "Contact"];
const languages = ["English", "Spanish", "Arabic", "Dari", "Pashto", "Swahili", "French"];

const services = [
  { icon: Home, title: "Resettlement Support", text: "Practical help for newly arrived refugee and immigrant families settling into life in Arizona." },
  { icon: Briefcase, title: "Employment Services", text: "Job readiness, workplace preparation, resume help, and local employment resource referrals." },
  { icon: FileText, title: "Immigration Guidance", text: "Support with immigration-related forms, appointments, referrals, and community resources." },
  { icon: GraduationCap, title: "Classes & Education", text: "English learning, orientation classes, life-skills education, and family support workshops." },
  { icon: Truck, title: "Transportation Help", text: "Assistance connecting clients to essential appointments, services, and community support." },
  { icon: ShieldCheck, title: "SIV Family Support", text: "Specialized support for SIV families and refugees rebuilding stability, safety, and independence." },
];

const donationItems = ["Household essentials", "Hygiene products", "School supplies", "Clothing", "Furniture", "Gift cards"];
const volunteerRoles = ["Mentorship", "Transportation support", "Donation sorting", "English class support", "Community events", "Administrative help"];

const events = [
  { title: "Community Orientation", date: "Add date", text: "Welcome session for newly arrived families and community partners." },
  { title: "English Class", date: "Add date", text: "Practical English learning for daily life, work, and appointments." },
  { title: "Donation Drop-Off Day", date: "Add date", text: "Community drop-off event for high-need household and hygiene items." },
];

function SectionLabel({ children, color = "text-teal-700" }) {
  return <p className={`text-sm font-black uppercase tracking-[0.2em] ${color}`}>{children}</p>;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
            <Handshake size={24} />
          </div>
          <div>
            <p className="text-lg font-black leading-tight text-slate-950">AIRS</p>
            <p className="text-xs font-semibold text-slate-500">Arizona Immigrant & Refugee Services</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-bold text-slate-700 transition hover:text-teal-700">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-teal-700" aria-label="Select language">
            {languages.map((lang) => <option key={lang}>{lang}</option>)}
          </select>
          <a href="#donate" className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-orange-600">Donate</a>
        </div>

        <button className="rounded-xl p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open mobile menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
                {item}
              </a>
            ))}
            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold">
              {languages.map((lang) => <option key={lang}>{lang}</option>)}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.38),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.26),_transparent_36%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-teal-100">
            <Languages size={17} /> Multilingual support for Arizona families
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Helping refugees and immigrants build new lives in Arizona.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            AIRS connects families with practical support, community resources, immigration guidance, education, and pathways toward long-term stability.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-help" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 text-base font-black text-white shadow-lg shadow-teal-950/30 transition hover:bg-teal-400">
              Get Help <ArrowRight size={18} />
            </a>
            <a href="#volunteer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-black text-white transition hover:bg-white/15">
              Volunteer With Us
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6">
              <div className="rounded-3xl bg-teal-50 p-6">
                <Users className="mb-4 text-teal-700" size={34} />
                <h2 className="text-2xl font-black text-slate-950">A safer start. A stronger future.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The redesigned website makes it easier for clients, donors, volunteers, and partners to find the right next step.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-100 p-4 text-center"><p className="text-2xl font-black text-teal-700">20+</p><p className="mt-1 text-xs font-bold leading-4 text-slate-500">Years serving community</p></div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center"><p className="text-2xl font-black text-teal-700">6</p><p className="mt-1 text-xs font-bold leading-4 text-slate-500">Core service areas</p></div>
                <div className="rounded-2xl bg-slate-100 p-4 text-center"><p className="text-2xl font-black text-teal-700">7</p><p className="mt-1 text-xs font-bold leading-4 text-slate-500">Language options</p></div>
              </div>
              <div className="mt-4 rounded-3xl bg-orange-50 p-5">
                <p className="text-sm font-black uppercase tracking-wider text-orange-600">Most needed</p>
                <p className="mt-2 text-slate-700">Household items, hygiene products, clothing, school supplies, and community volunteers.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionLabel>About AIRS</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A clearer story builds more trust.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>AIRS supports refugees, immigrants, and SIV families as they navigate resettlement, employment, education, immigration resources, and community life in Arizona.</p>
          <p>The new website should feel welcoming, trustworthy, and easy to use for people who may be under stress, using mobile phones, or reading in a second language.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Accessible", "Multilingual", "Mobile-first"].map((item) => (
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

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="max-w-3xl">
        <SectionLabel>Services</SectionLabel>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Clear support pathways instead of hard-to-scan pages.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">Each service area should have plain-language explanations, eligibility notes, office hours, and a clear next step.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><Icon size={24} /></div>
              <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              <a href="#get-help" className="mt-5 inline-flex items-center gap-2 font-black text-teal-700">Request help <ArrowRight size={17} /></a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function GetHelp() {
  return (
    <section id="get-help" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionLabel color="text-orange-600">Get Help</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A simple intake form for clients.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">This form is a front-end placeholder for now. Later, we can connect it to email, Google Forms, Firebase, Airtable, or a CRM.</p>
          <div className="mt-8 rounded-3xl bg-slate-100 p-6">
            <h3 className="font-black text-slate-950">Office Information</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <p className="flex gap-3"><MapPin className="mt-0.5 text-teal-700" size={19} /> Phoenix, Arizona</p>
              <p className="flex gap-3"><Phone className="mt-0.5 text-teal-700" size={19} /> Add main office phone number</p>
              <p className="flex gap-3"><Mail className="mt-0.5 text-teal-700" size={19} /> Add official intake email</p>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-slate-700">Full Name<input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder="Your name" /></label>
            <label className="grid gap-2 text-sm font-black text-slate-700">Phone or Email<input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder="Best contact" /></label>
            <label className="grid gap-2 text-sm font-black text-slate-700">Preferred Language<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700">{languages.map((lang) => <option key={lang}>{lang}</option>)}</select></label>
            <label className="grid gap-2 text-sm font-black text-slate-700">Service Needed<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700"><option>Immigration support</option><option>Housing support</option><option>Employment support</option><option>Classes or education</option><option>Other</option></select></label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-black text-slate-700">Message<textarea rows="5" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-700" placeholder="Tell us what you need help with" /></label>
          <label className="mt-4 flex gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" className="mt-1" /> I agree that AIRS may contact me about my request.</label>
          <button type="button" className="mt-6 w-full rounded-2xl bg-teal-700 px-6 py-3 font-black text-white transition hover:bg-teal-800">Submit Request</button>
        </form>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section id="donate" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-teal-700 p-8 text-white lg:col-span-1">
          <Heart size={34} />
          <h2 className="mt-5 text-3xl font-black">Your support helps families start again.</h2>
          <p className="mt-4 leading-7 text-teal-50">The donation page should make giving simple: money donations, item donations, drop-off details, and receipts.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-teal-800">Donate Now <ArrowRight size={18} /></a>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
          <SectionLabel color="text-orange-600">Donation categories</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {donationItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4 font-black text-slate-700"><HandHeart className="text-orange-600" size={19} /> {item}</div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-orange-50 p-5 text-slate-700"><strong>Next build step:</strong> add Stripe, PayPal, Donorbox, or the donation system AIRS already uses.</div>
        </div>
      </div>
    </section>
  );
}

function Volunteer() {
  return (
    <section id="volunteer" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionLabel color="text-teal-300">Volunteer</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Replace broken downloads with a real volunteer flow.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">Volunteers should be able to apply online, choose interest areas, and receive clear next steps.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 font-black text-white hover:bg-teal-400">Apply to Volunteer <ArrowRight size={18} /></a>
        </div>
        <div className="grid gap-4">
          {volunteerRoles.map((role) => (
            <div key={role} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-5"><span className="font-black">{role}</span><ArrowRight className="text-teal-300" size={20} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <SectionLabel>Events</SectionLabel>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A real calendar, not an empty page.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-800 shadow-sm">View all events <CalendarDays size={18} /></a>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {events.map((event) => (
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

function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr_0.7fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white"><Handshake size={23} /></div>
            <div><p className="font-black text-slate-950">AIRS</p><p className="text-sm text-slate-500">Arizona Immigrant & Refugee Services</p></div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-600">A modern nonprofit website built around clarity, trust, accessibility, and action.</p>
        </div>
        <div>
          <h3 className="font-black text-slate-950">Contact</h3>
          <div className="mt-4 space-y-3 text-slate-600">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 text-teal-700" /> Phoenix, Arizona</p>
            <p className="flex gap-3"><Phone size={18} className="mt-0.5 text-teal-700" /> Add phone number</p>
            <p className="flex gap-3"><Mail size={18} className="mt-0.5 text-teal-700" /> Add email address</p>
          </div>
        </div>
        <div>
          <h3 className="font-black text-slate-950">Follow</h3>
          <div className="mt-4 flex gap-3">
            <a href="#" className="rounded-2xl bg-slate-100 p-3 text-slate-700 transition hover:bg-teal-50 hover:text-teal-700" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg></a>
            <a href="#" className="rounded-2xl bg-slate-100 p-3 text-slate-700 transition hover:bg-teal-50 hover:text-teal-700" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-sm text-slate-500">© 2026 AIRS. Website redesign prototype.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <GetHelp />
        <Donate />
        <Volunteer />
        <Events />
      </main>
      <ContactFooter />
    </div>
  );
}
