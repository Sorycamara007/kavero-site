"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Scroll fade-in hook
───────────────────────────────────────────── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll<HTMLElement>(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSize, setFormSize] = useState("");

  const refSolution = useFadeUp();
  const refModules = useFadeUp();
  const refWhy = useFadeUp();
  const refContact = useFadeUp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleDemoSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demande de démo Kavero — ${formCompany}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite demander une démo de Kavero.\n\nNom : ${formName}\nEntreprise : ${formCompany}\nEmail : ${formEmail}\nTaille de l'équipe : ${formSize}\n\nMerci.`
    );
    window.location.href = `mailto:iscamara310@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }
      `}</style>

      <main className="antialiased">

        {/* ══════════════════════════════════════
            1. NAVBAR
        ══════════════════════════════════════ */}
        <nav
          className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
            scrolled ? "shadow-md" : "border-b border-slate-100"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="shrink-0">
              <Image
                src="/kavero-logo-transparent.webp"
                alt="Kavero"
                width={130}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-teal-600 transition-colors">
                Produit
              </a>
              <a href="#fonctionnalites" className="hover:text-teal-600 transition-colors">
                Fonctionnalités
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Kavero Jobs
              </a>
              <a href="#contact" className="hover:text-teal-600 transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-3">
              {/* CTA desktop */}
              <a
                href="#contact"
                className="hidden md:inline-flex shrink-0 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
              >
                Demander une démo
              </a>

              {/* Hamburger */}
              <button
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 px-5 py-5 flex flex-col gap-4">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600"
              >
                Produit
              </a>
              <a
                href="#fonctionnalites"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600"
              >
                Fonctionnalités
              </a>
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600"
              >
                Kavero Jobs
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-teal-600"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-teal-600 text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
              >
                Demander une démo
              </a>
            </div>
          )}
        </nav>

        {/* ══════════════════════════════════════
            2. HERO
        ══════════════════════════════════════ */}
        <section
          style={{ backgroundColor: "#0f172a" }}
          className="relative overflow-hidden py-20 lg:py-28 px-5"
        >
          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-teal-900/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-800/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

              {/* Left: copy */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700 text-teal-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
                  📈 Conçu pour l&apos;Afrique de l&apos;Ouest
                </div>

                {/* H1 */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  La plateforme RH des{" "}
                  <br />
                  <span className="text-teal-400">PME africaines</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  Kavero digitalise la gestion RH des PME africaines. Prêt en 5 minutes, sans installation.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-teal-900 hover:-translate-y-0.5 text-base text-center"
                  >
                    Demander une démo gratuite →
                  </a>
                  <a
                    href="#solution"
                    className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base text-center"
                  >
                    Rejoindre la liste d&apos;attente
                  </a>
                </div>

              </div>

              {/* Right: simulated UI card */}
              <div className="flex-1 w-full max-w-sm lg:max-w-md relative">
                <div className="relative bg-slate-800 rounded-2xl border border-slate-700 p-5 shadow-2xl">
                  {/* Floating badge top-left */}
                  <div className="absolute -top-3.5 left-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg z-10 whitespace-nowrap">
                    ✅ Congé validé — Mariama Diallo
                  </div>

                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-5 pt-3">
                    <div>
                      <p className="text-white font-semibold text-sm">Kavero Org</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 bg-teal-400 rounded-full inline-block" />
                        En ligne
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 bg-slate-700 px-2.5 py-1 rounded-lg">
                      Dashboard
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Employés", value: "47" },
                      { label: "Congés", value: "3" },
                      { label: "Présence", value: "92%" },
                    ].map((m) => (
                      <div key={m.label} className="bg-slate-900 rounded-xl p-3 text-center">
                        <p className="text-teal-400 font-bold text-xl">{m.value}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Employee list */}
                  <div className="space-y-2">
                    {[
                      { name: "Mariama Diallo", role: "Marketing Director" },
                      { name: "Kofi Mensah", role: "Dev Frontend" },
                      { name: "Aminata Touré", role: "RH Officer" },
                    ].map((emp) => (
                      <div
                        key={emp.name}
                        className="flex items-center justify-between bg-slate-900/60 rounded-xl px-3 py-2.5"
                      >
                        <div>
                          <p className="text-white text-xs font-medium">{emp.name}</p>
                          <p className="text-slate-500 text-xs">{emp.role}</p>
                        </div>
                        <span className="text-xs text-teal-400 bg-teal-900/40 px-2 py-0.5 rounded-full">
                          Actif
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Floating badge bottom-right */}
                  <div className="absolute -bottom-3.5 right-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    47 Employés actifs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. LA SOLUTION
        ══════════════════════════════════════ */}
        <section
          id="fonctionnalites"
          ref={refSolution}
          className="bg-white py-24 px-5"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="fade-up text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Tout ce dont votre équipe RH a besoin
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-14">
              {/* Points */}
              <div className="flex-1 space-y-8">
                {[
                  {
                    num: "1",
                    title: "Self-serve — Prêt en 5 minutes",
                    desc: "Créez votre compte, invitez vos employés par email. Zéro installation, zéro SQL, zéro commercial.",
                    delay: "delay-1",
                  },
                  {
                    num: "2",
                    title: "100% adapté à l'Afrique de l'Ouest",
                    desc: "FCFA natif, interface en français, hiérarchie flexible, conforme aux pratiques RH locales.",
                    delay: "delay-2",
                  },
                  {
                    num: "3",
                    title: "Adapté à votre croissance",
                    desc: "De la startup à l'entreprise structurée, Kavero grandit avec vous.",
                    delay: "delay-3",
                  },
                  {
                    num: "4",
                    title: "Kavero Jobs intégré",
                    desc: "Publiez vos offres d'emploi directement sur jobs.kaverohr.com depuis votre dashboard RH.",
                    delay: "delay-4",
                  },
                ].map((point) => (
                  <div
                    key={point.num}
                    className={`fade-up ${point.delay} flex items-start gap-4`}
                  >
                    <div className="shrink-0 w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold">
                      {point.num}
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1">{point.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* UI card */}
              <div className="flex-1 w-full max-w-sm lg:max-w-md fade-up delay-4">
                <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white font-semibold text-sm">Kavero Org</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 bg-teal-400 rounded-full inline-block" />
                        En ligne
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 bg-slate-700 px-2.5 py-1 rounded-lg">
                      Dashboard RH
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Effectif", value: "124" },
                      { label: "Absences", value: "7" },
                      { label: "Présence", value: "95%" },
                    ].map((m) => (
                      <div key={m.label} className="bg-slate-900 rounded-xl p-3 text-center">
                        <p className="text-teal-400 font-bold text-xl">{m.value}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Oumar Bâ", role: "DRH" },
                      { name: "Awa Konaté", role: "Comptable" },
                      { name: "Ismaël Traoré", role: "Commercial" },
                    ].map((emp) => (
                      <div
                        key={emp.name}
                        className="flex items-center justify-between bg-slate-900/60 rounded-xl px-3 py-2.5"
                      >
                        <div>
                          <p className="text-white text-xs font-medium">{emp.name}</p>
                          <p className="text-slate-500 text-xs">{emp.role}</p>
                        </div>
                        <span className="text-xs text-teal-400 bg-teal-900/40 px-2 py-0.5 rounded-full">
                          Actif
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. LES MODULES
        ══════════════════════════════════════ */}
        <section
          ref={refModules}
          style={{ backgroundColor: "#0f172a" }}
          className="pt-0 pb-24 px-5 border-t border-slate-800"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="fade-up text-3xl sm:text-4xl font-bold text-white mb-3">
                Une suite RH complète
              </h2>
              <p className="fade-up delay-1 text-slate-400 max-w-lg mx-auto">
                10+ fonctionnalités pour digitaliser 100% de votre gestion RH
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  iconBg: "bg-violet-500",
                  iconSvg: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Gestion des employés",
                  desc: "Fiches complètes, numéros EMP-001, hiérarchie manager, import CSV/Excel.",
                  badge: null,
                  delay: "delay-1",
                },
                {
                  iconBg: "bg-emerald-500",
                  iconSvg: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Congés & Absences",
                  desc: "Demandes en ligne, validation multi-niveaux, solde temps réel, politique configurable.",
                  badge: null,
                  delay: "delay-2",
                },
                {
                  iconBg: "bg-blue-500",
                  iconSvg: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Temps & Présence",
                  desc: "Pointage entrée/sortie, géolocalisation 3 modes, historique mensuel, vue équipe.",
                  badge: null,
                  delay: "delay-3",
                },
                {
                  iconBg: "bg-orange-500",
                  iconSvg: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "Documents RH",
                  desc: "Upload sécurisé, signature électronique hybride, accès depuis le portail employé.",
                  badge: null,
                  delay: "delay-4",
                },
                {
                  iconBg: "bg-teal-500",
                  iconSvg: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                    </svg>
                  ),
                  title: "Recrutement + Kavero Jobs",
                  desc: "Pipeline Kanban, ATS avec scoring IA, CVthèque, offres sur jobs.kaverohr.com.",
                  badge: "Nouveau",
                  delay: "delay-1",
                },
                {
                  iconBg: "bg-indigo-500",
                  iconSvg: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Analytics & Finances RH",
                  desc: "Masse salariale FCFA, bilan social, reporting PDF/Excel, intégration Payroll Yros.",
                  badge: null,
                  delay: "delay-2",
                },
              ].map((mod) => (
                <div
                  key={mod.title}
                  className={`fade-up ${mod.delay} bg-slate-800 rounded-2xl border border-slate-700 p-6 hover:border-teal-700 hover:-translate-y-1 transition-all duration-200`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${mod.iconBg} flex items-center justify-center shadow-lg`}>
                      {mod.iconSvg}
                    </div>
                    {mod.badge && (
                      <span className="text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{mod.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            8. POURQUOI KAVERO
        ══════════════════════════════════════ */}
        <section ref={refWhy} className="bg-white py-24 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="fade-up text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Pourquoi choisir Kavero ?
              </h2>
              <p className="fade-up delay-1 text-slate-600 max-w-lg mx-auto">
                Ce qui nous différencie sur le marché africain
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(
                [
                  {
                    path: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                    title: "Conçu pour l'Afrique",
                    desc: "FCFA natif, pratiques RH locales, conforme au Code du Travail sénégalais",
                    iconBg: "bg-teal-500",
                  },
                  {
                    path: "M13 10V3L4 14h7v7l9-11h-7z",
                    title: "Self-serve",
                    desc: "Créez votre compte en autonomie, sans passer par un commercial",
                    iconBg: "bg-teal-700",
                  },
                  {
                    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Accompagnement dédié",
                    desc: "Une équipe disponible pour vous guider à chaque étape",
                    iconBg: "bg-teal-400",
                  },
                  {
                    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Prêt en 5 minutes",
                    desc: "Setup ultra-rapide, zéro installation, zéro SQL",
                    iconBg: "bg-slate-600",
                  },
                  {
                    path: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                    title: "Support 7j/7",
                    desc: "Assistance en français tous les jours de la semaine",
                    iconBg: "bg-teal-500",
                  },
                  {
                    path: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
                    title: "Interface en français",
                    desc: "100\u202f% pensé pour les équipes francophones",
                    iconBg: "bg-teal-700",
                  },
                  {
                    path: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                    title: "Offboarding automatisé",
                    desc: "Processus de départ structuré et sans friction",
                    iconBg: "bg-teal-400",
                  },
                  {
                    path: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                    title: "AI Insights",
                    desc: "Analytics intelligents et recommandations via Claude API",
                    iconBg: "bg-slate-600",
                  },
                ] as { path: string; title: string; desc: string; iconBg: string }[]
              ).map((feature, i) => (
                <div
                  key={feature.title}
                  className={`fade-up delay-${(i % 4) + 1} flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className={`shrink-0 w-11 h-11 rounded-full ${feature.iconBg} flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.path} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900 text-sm leading-snug">{feature.title}</h3>
                      <span className="shrink-0 text-green-500 font-bold text-sm">✓</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            9. DEMANDER UNE DÉMO
        ══════════════════════════════════════ */}
        <section
          id="contact"
          ref={refContact}
          className="bg-teal-600 py-24 px-5"
        >
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="fade-up text-3xl sm:text-4xl font-bold text-white mb-4">
                Prêt à digitaliser votre RH ?
              </h2>
              <p className="fade-up delay-1 text-teal-100 leading-relaxed">
                Discutons de vos besoins. Une démo de 20 minutes suffit pour voir
                comment Kavero transforme votre gestion RH.
              </p>
            </div>

            <form
              onSubmit={handleDemoSubmit}
              className="fade-up delay-2 flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Votre prénom et nom"
                required
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                required
                value={formCompany}
                onChange={(e) => setFormCompany(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <input
                type="email"
                placeholder="Votre adresse email professionnelle"
                required
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <select
                value={formSize}
                onChange={(e) => setFormSize(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              >
                <option value="" disabled className="text-slate-700 bg-white">
                  Taille de votre équipe
                </option>
                <option value="1-10 employés" className="text-slate-700 bg-white">
                  1-10 employés
                </option>
                <option value="11-25 employés" className="text-slate-700 bg-white">
                  11-25 employés
                </option>
                <option value="26-50 employés" className="text-slate-700 bg-white">
                  26-50 employés
                </option>
                <option value="50+ employés" className="text-slate-700 bg-white">
                  50+ employés
                </option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-teal-700 font-bold py-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 text-sm shadow-lg"
              >
                Demander ma démo gratuite →
              </button>
            </form>

            <div className="fade-up delay-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-teal-100 text-xs">
              <span>✓ Démo gratuite de 20 min</span>
              <span>✓ Sans engagement</span>
              <span>✓ Réponse sous 24h</span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            10. FOOTER
        ══════════════════════════════════════ */}
        <footer className="bg-slate-900 py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Image
                  src="/kavero-logo-transparent.webp"
                  alt="Kavero"
                  width={110}
                  height={34}
                  className="h-8 w-auto object-contain brightness-0 invert opacity-80 mb-3"
                  loading="lazy"
                />
                <p className="text-slate-400 text-sm">
                  La plateforme RH des PME africaines
                </p>
              </div>

              {/* Produit */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Produit</h4>
                <ul className="space-y-2.5">
                  {["Fonctionnalités", "Kavero Jobs", "Roadmap"].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entreprise */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Entreprise</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: "À propos", href: "#" },
                    { label: "Contact", href: "#contact" },
                    { label: "Blog (bientôt)", href: "#" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
                <ul className="space-y-2.5">
                  <li>
                    <span className="text-slate-400 text-sm">kaverohr.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-600 text-xs">
                © 2026 Kavero · Fait avec ❤️ pour l&apos;Afrique
              </p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
