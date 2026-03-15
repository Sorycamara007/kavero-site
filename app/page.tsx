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
   Navbar
───────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none border-b border-slate-100"
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#fonctionnalites" className="hover:text-teal-600 transition-colors">
            Fonctionnalités
          </a>
          <a href="#vision" className="hover:text-teal-600 transition-colors">
            Vision
          </a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="shrink-0 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
        >
          Demander un accès
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50/60 pt-20 pb-28 px-5 text-center">
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-7">
          🌍 Conçu pour l&apos;Afrique de l&apos;Ouest
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          La plateforme RH des{" "}
          <span className="text-teal-600">PME africaines</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Gérez vos employés, congés, recrutement et présences depuis une seule
          plateforme. Simple, moderne, fait pour vous.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-0.5 text-sm"
          >
            Demander un accès anticipé
          </a>
          <a
            href="#fonctionnalites"
            className="w-full sm:w-auto border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm"
          >
            Voir la démo →
          </a>
        </div>

        {/* Stats */}
        <p className="text-sm text-slate-400 font-medium tracking-wide">
          4 rôles&nbsp;&nbsp;·&nbsp;&nbsp;10+ modules&nbsp;&nbsp;·&nbsp;&nbsp;100% en français&nbsp;&nbsp;·&nbsp;&nbsp;FCFA natif
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Features
───────────────────────────────────────────── */
const FEATURES = [
  {
    icon: "👥",
    title: "Gestion des employés",
    desc: "Fiches complètes, numéros EMP-001, statuts actif/inactif et historique RH centralisés.",
    delay: "delay-1",
  },
  {
    icon: "📅",
    title: "Congés & Absences",
    desc: "Demandes en ligne, validation multi-niveaux et consultation du solde en temps réel.",
    delay: "delay-2",
  },
  {
    icon: "⏰",
    title: "Temps & Présence",
    desc: "Pointage entrée/sortie, retards et récapitulatif mensuel par employé.",
    delay: "delay-3",
  },
  {
    icon: "📄",
    title: "Documents RH",
    desc: "Upload sécurisé, signature électronique et accès direct depuis l'espace employé.",
    delay: "delay-4",
  },
  {
    icon: "🎯",
    title: "Recrutement",
    desc: "Pipeline Kanban, suivi candidats de bout en bout et onboarding digital.",
    delay: "delay-5",
  },
  {
    icon: "📊",
    title: "Analytics RH",
    desc: "Masse salariale en FCFA, bilan social et taux d'absentéisme en un coup d'œil.",
    delay: "delay-6",
  },
];

function Features() {
  const ref = useFadeUp();

  return (
    <section
      id="fonctionnalites"
      className="bg-slate-50 py-24 px-5"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="fade-up inline-block bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Fonctionnalités
          </div>
          <h2 className="fade-up delay-1 text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Tout ce dont votre équipe RH a besoin
          </h2>
          <p className="fade-up delay-2 text-slate-500 max-w-lg mx-auto">
            Une suite complète, conçue pour les réalités des PME d&apos;Afrique de l&apos;Ouest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`fade-up ${f.delay} bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250`}
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Pour qui
───────────────────────────────────────────── */
const PROFILES = [
  {
    icon: "🏢",
    role: "Dirigeant",
    desc: "Pilotez votre entreprise avec une vue complète sur vos effectifs, présences et alertes RH.",
    delay: "delay-1",
  },
  {
    icon: "🧑‍💼",
    role: "Responsable RH",
    desc: "Gérez toute la RH depuis une interface simple : congés, contrats, recrutements et documents.",
    delay: "delay-2",
  },
  {
    icon: "📱",
    role: "Employé",
    desc: "Accédez à vos documents et demandes de congé depuis votre téléphone, où que vous soyez.",
    delay: "delay-3",
  },
];

function ForWho() {
  const ref = useFadeUp();

  return (
    <section className="bg-white py-24 px-5" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="fade-up inline-block bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Pour qui
          </div>
          <h2 className="fade-up delay-1 text-3xl sm:text-4xl font-bold text-slate-900">
            Fait pour toute votre équipe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILES.map((p) => (
            <div
              key={p.role}
              className={`fade-up ${p.delay} text-center p-8 rounded-2xl bg-gradient-to-b from-teal-50/60 to-white border border-teal-100`}
            >
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="text-base font-bold text-slate-900 mb-3">{p.role}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Vision
───────────────────────────────────────────── */
function Vision() {
  const ref = useFadeUp();

  return (
    <section id="vision" className="bg-slate-900 py-24 px-5" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-up inline-block bg-teal-900/60 border border-teal-700 text-teal-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Notre vision
        </div>
        <h2 className="fade-up delay-1 text-3xl sm:text-4xl font-bold text-white mb-6">
          Pourquoi Kavero ?
        </h2>
        <p className="fade-up delay-2 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          Les outils RH existants ne sont pas faits pour l&apos;Afrique. Kavero est
          conçu dès le départ pour les réalités des PME africaines : équipes
          mixtes, salaires en FCFA, mobile-first.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "🌍", title: "Fait pour l'Afrique", desc: "Contexte local, langues, devises et pratiques RH africaines.", delay: "delay-3" },
            { icon: "📱", title: "Mobile-first", desc: "Accessible depuis n'importe quel téléphone, même en zone peu connectée.", delay: "delay-4" },
            { icon: "🔒", title: "Données sécurisées", desc: "Hébergement sécurisé, accès par rôle et confidentialité garantie.", delay: "delay-5" },
          ].map((item) => (
            <div
              key={item.title}
              className={`fade-up ${item.delay} bg-slate-800 rounded-2xl p-7 border border-slate-700`}
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Accès anticipé
───────────────────────────────────────────── */
function EarlyAccess() {
  const ref = useFadeUp();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande d'accès anticipé — ${company}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite rejoindre le pilote Kavero.\n\nEntreprise : ${company}\nEmail : ${email}\n\nMerci.`
    );
    window.location.href = `mailto:iscamara310@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-teal-600 py-24 px-5" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <div className="fade-up inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
          Accès anticipé
        </div>
        <h2 className="fade-up delay-1 text-3xl sm:text-4xl font-bold text-white mb-3">
          Rejoignez les premiers
        </h2>
        <p className="fade-up delay-2 text-teal-100 mb-10">
          Kavero arrive bientôt. Laissez votre email pour être parmi les premiers à y avoir accès.
        </p>

        <form
          onSubmit={handleSubmit}
          className="fade-up delay-3 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nom de votre entreprise"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
          <input
            type="email"
            placeholder="Votre adresse email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-white text-teal-700 font-bold py-3.5 rounded-xl hover:bg-teal-50 transition-colors duration-200 text-sm shadow-lg"
          >
            Envoyer ma demande →
          </button>
        </form>

        <p className="fade-up delay-4 text-teal-200 text-xs mt-5">
          Aucun engagement. Nous vous contacterons dès l&apos;ouverture.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-slate-900 py-10 px-5 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <Image
          src="/kavero-logo-transparent.webp"
          alt="Kavero"
          width={110}
          height={34}
          className="h-8 w-auto object-contain brightness-0 invert opacity-80"
          loading="lazy"
        />
        <p className="text-slate-400 text-sm">
          La plateforme RH des PME africaines
        </p>
        <p className="text-slate-600 text-xs">
          © 2026 Kavero · kaverohr.com · Fait avec ❤️ pour l&apos;Afrique
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ForWho />
      <Vision />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
