"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  MessageCircleMore,
  Phone,
  Send,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function OwlCreativeGroupWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  const services = (t.services?.items || []).map((item, index) => {
    const icons = [Sparkles, Star, MessageCircleMore, Send, BadgeCheck, ArrowUpRight];
    return {
      ...item,
      icon: icons[index] || Sparkles,
    };
  });

  const socials = [
    {
      title: "WhatsApp",
      value: "+9647701708137",
      href: "https://wa.me/9647701708137",
      tag:
        lang === "ku"
          ? "چات"
          : lang === "ar"
          ? "دردشة"
          : "Chat",
    },
    {
      title: "Viber",
      value: "+9647701708137",
      href: "viber://chat?number=%2B9647701708137",
      tag:
        lang === "ku"
          ? "پەیوەندی / چات"
          : lang === "ar"
          ? "اتصال / دردشة"
          : "Call / Chat",
    },
    {
      title: "Telegram",
      value: "+9647701708137",
      href: "https://t.me/+9647701708137",
      tag:
        lang === "ku"
          ? "نامە"
          : lang === "ar"
          ? "رسالة"
          : "Message",
    },
    {
      title: "Facebook",
      value: "Owl Creative Group",
      href: "https://www.facebook.com/Owlcreativegroup/",
      tag:
        lang === "ku"
          ? "سۆشیال"
          : lang === "ar"
          ? "سوشيال"
          : "Social",
    },
  ];

  const profileLinks = [
    {
      title: "LinkedIn",
      subtitle:
        lang === "ku"
          ? "تۆڕی پیشەیی"
          : lang === "ar"
          ? "شبكة مهنية"
          : "Professional Network",
      href: "https://www.linkedin.com/in/mohammed-hamza-669b76330/",
      icon: Users,
    },
    {
      title: "Behance",
      subtitle:
        lang === "ku"
          ? "پلاتفۆرمی پۆرتفۆلیۆ"
          : lang === "ar"
          ? "منصة الأعمال"
          : "Portfolio Platform",
      href: "https://www.behance.net/mohamza3",
      icon: Globe,
    },
  ];

  const quickLinks = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/Owlcreativegroup/",
      icon: Globe,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-hamza-669b76330/",
      icon: Users,
    },
    {
      title: "Behance",
      href: "https://www.behance.net/mohamza3",
      icon: ExternalLink,
    },
  ];

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.director, href: "#director" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <main className="site-shell">
      <div className="bg-layer bg-base" />
      <div className="bg-layer bg-radial" />
      <div className="bg-layer bg-grid" />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <div className="brand-badge">OCG</div>
            <div>
              <div className="brand-title">OCG</div>
              <div className="brand-subtitle">OWL CREATIVE GROUP</div>
            </div>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className="desktop-cta"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <LanguageSwitcher />
            <a href="#contact" className="primary-btn">
              {t.nav.startProject}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="container mobile-menu-inner">
              <div style={{ marginBottom: "16px" }}>
                <LanguageSwitcher />
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a href="#contact" className="primary-btn mobile-cta">
                {t.nav.startProject}
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <Sparkles size={14} />
              {t.hero.badge}
            </div>

            <h1 className="hero-title">
              {t.hero.title1}
              <span className="hero-gradient">
                {t.hero.title2} {t.hero.title3}
              </span>
            </h1>

            <p className="hero-text">{t.hero.desc}</p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn hero-btn">
                {t.nav.startProject} <ArrowRight size={16} />
              </a>
              <a href="#services" className="secondary-btn hero-btn">
                {lang === "ku"
                  ? "خزمەتگوزارییەکان ببینە"
                  : lang === "ar"
                  ? "استكشف الخدمات"
                  : "Explore Services"}
              </a>
            </div>

            <div className="stats-grid">
              {[
                {
                  label:
                    lang === "ku" ? "سلۆگن" : lang === "ar" ? "الشعار" : "Slogan",
                  value: "Idea • Create • Grow",
                },
                {
                  label:
                    lang === "ku"
                      ? "ڕەنگی سەرەکی"
                      : lang === "ar"
                      ? "اللون الرئيسي"
                      : "Primary Accent",
                  value: "#FCA311",
                },
                {
                  label:
                    lang === "ku"
                      ? "ناسنامە"
                      : lang === "ar"
                      ? "الهوية"
                      : "Identity",
                  value: "Black • Gold • Navy",
                },
              ].map((item) => (
                <div key={item.label} className="glass-card stat-card">
                  <div className="mini-label">{item.label}</div>
                  <div className="stat-value">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-side-wrap"
          >
            <div className="hero-glow" />
            <div className="hero-side-card">
              <div className="hero-side-inner">
                <div className="card-top">
                  <div>
                    <div className="mini-label accent">
                      {lang === "ku"
                        ? "پوختەی براند"
                        : lang === "ar"
                        ? "نظرة عامة على العلامة"
                        : "Brand Overview"}
                    </div>
                    <div className="card-title">Owl Creative Group</div>
                  </div>
                  <div className="pill-badge">OCG</div>
                </div>

                <div className="hero-side-content">
                  <div className="glass-card inner-card">
                    <div className="card-label">
                      {lang === "ku"
                        ? "شارەزایی سەرەکی"
                        : lang === "ar"
                        ? "الخبرات الأساسية"
                        : "Core Expertise"}
                    </div>
                    <div className="card-text">
                      Branding / Photography / Social Media / Motion Graphics / Production Ads / TVC
                    </div>
                  </div>

                  <div className="glass-card inner-card">
                    <div className="card-label">
                      {lang === "ku"
                        ? "تایبەتمەندی خلاق"
                        : lang === "ar"
                        ? "الطابع الإبداعي"
                        : "Creative Character"}
                    </div>
                    <div className="card-text">
                      {lang === "ku"
                        ? "مینیمال، بەهێز، سینەماتیکی و پڕیمیۆم — بۆ ئەوەی کوالێتی ستودیۆ خلاقە گەورەکان نیشان بدات."
                        : lang === "ar"
                        ? "بسيط، قوي، سينمائي ومتميز — ليعكس جودة الاستوديوهات الإبداعية الراقية."
                        : "Minimal, powerful, cinematic, and premium — built to reflect the quality of top-tier creative studios."}
                    </div>
                  </div>

                  <div className="color-grid">
                    {[
                      { hex: "#000000", className: "swatch-black" },
                      { hex: "#FCA311", className: "swatch-gold" },
                      { hex: "#14213D", className: "swatch-navy" },
                    ].map((color) => (
                      <div key={color.hex} className="glass-card color-card">
                        <div className={`swatch ${color.className}`} />
                        <div className="hex-label">{color.hex}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="section-head"
          >
            <div>
              <div className="mini-label accent">
                {lang === "ku"
                  ? "خزمەتگوزارییەکانمان"
                  : lang === "ar"
                  ? "خدماتنا"
                  : "Our Services"}
              </div>
              <h2 className="section-title">{t.services.title}</h2>
            </div>
            <p className="section-text">
              {lang === "ku"
                ? "خزمەتگوزارییەکانمان بۆ دروستکردنی سیستەمی بینراوی بەهێز، کەمپەینی پڕیمیۆم و ئەزموونی کاریگەر دابەشکراون."
                : lang === "ar"
                ? "خدماتنا مصممة لبناء أنظمة بصرية قوية، وحملات متميزة، وتجارب علامة تجارية مؤثرة."
                : "Our services are structured to build strong visual systems, premium campaigns, and impactful brand experiences."}
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="service-card"
                >
                  <div className="service-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="director" className="section-band">
        <div className="container director-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="director-card">
              <div className="director-avatar">MH</div>
              <div className="mini-label accent director-role">
                {t.director.role}
              </div>
              <div className="director-name">{t.director.title}</div>
              <p className="director-text">
                {lang === "ku"
                  ? "بەڕێوەبەری خلاقی OCG، سەرنجی لەسەر بڕاندینگ، پەیوەندی بینراوی، و گەشەپێدانی کارە دیزاینییە بەرزئاستەکانە."
                  : lang === "ar"
                  ? "المدير الإبداعي لـ OCG، يركز على البراندينغ، والتواصل البصري، وتطوير أعمال تصميمية مصقولة بعقلية وكالة متميزة."
                  : "Creative Director of OCG, focused on branding, visual communication, and developing polished design work with a premium agency mindset."}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mini-label accent">
              {lang === "ku"
                ? "پڕۆفایلی بەڕێوەبەر"
                : lang === "ar"
                ? "ملف المدير"
                : "Director Profile"}
            </div>
            <h2 className="section-title">
              {lang === "ku"
                ? "سەرکردایەتی و بینین"
                : lang === "ar"
                ? "القيادة والرؤية"
                : "Leadership & Vision"}
            </h2>
            <p className="section-text director-copy">
              {lang === "ku"
                ? "پڕۆفایلی پیشەیی و کارە خلاقەکانی محمد حمزە لە ڕێگەی LinkedIn و Behance ببینە."
                : lang === "ar"
                ? "استكشف الملف المهني والأعمال الإبداعية لمحمد حمزة عبر LinkedIn و Behance."
                : "Explore the professional profile and creative work of Mohammed Hamza through LinkedIn and Behance."}
            </p>

            <div className="profile-grid">
              {profileLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="profile-card"
                  >
                    <div className="profile-top">
                      <Icon size={18} />
                      {item.subtitle}
                    </div>
                    <div className="profile-title">{item.title}</div>
                    <div className="profile-link">
                      {lang === "ku"
                        ? "کردنەوەی بەستەر"
                        : lang === "ar"
                        ? "فتح الرابط"
                        : "Open Link"}{" "}
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="contact-card"
          >
            <div className="contact-grid">
              <div>
                <div className="mini-label accent">{t.contact.title}</div>
                <h2 className="section-title">
                  {lang === "ku"
                    ? "با شتێکی بەهێز دروست بکەین"
                    : lang === "ar"
                    ? "لنصنع شيئاً قوياً"
                    : "Let’s Build Something Strong"}
                </h2>
                <p className="section-text">
                  {lang === "ku"
                    ? "بۆ هاوکاری، کەمپەین، پڕۆژەی بڕاندینگ، یان بەرهەمهێنانی خلاق، لە ڕێگەی ئیمەیڵ، مۆبایل یان پلاتفۆرمە سۆشیالەکان پەیوەندیمان پێوە بکە."
                    : lang === "ar"
                    ? "للتعاون، والحملات، ومشاريع البراندينغ، أو الإنتاج الإبداعي، تواصل معنا عبر البريد الإلكتروني أو الهاتف أو المنصات الاجتماعية."
                    : "For collaborations, campaigns, branding projects, or creative production, contact Owl Creative Group through email, phone, or social platforms."}
                </p>

                <div className="contact-info-stack">
                  <div className="glass-card contact-info-box">
                    <div className="contact-label">
                      <Mail size={16} /> {t.contact.email}
                    </div>
                    <a href="mailto:owlcreativegroupcompany@gmail.com" className="contact-value">
                      owlcreativegroupcompany@gmail.com
                    </a>
                  </div>

                  <div className="glass-card contact-info-box">
                    <div className="contact-label">
                      <Phone size={16} /> {t.contact.phone}
                    </div>
                    <a href="tel:+9647701708137" className="contact-value">
                      +9647701708137
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-side">
                <div className="social-grid">
                  {socials.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-card"
                    >
                      <div className="mini-label">{item.tag}</div>
                      <div className="social-title">{item.title}</div>
                      <div className="social-value">{item.value}</div>
                    </a>
                  ))}
                </div>

                <div className="slogan-box">
                  <div className="mini-label accent">
                    {lang === "ku"
                      ? "سلۆگنی براند"
                      : lang === "ar"
                      ? "شعار العلامة"
                      : "Brand Slogan"}
                  </div>
                  <div className="slogan-text">Idea • Create • Grow</div>
                </div>

                <div className="quick-links">
                  {quickLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="quick-link"
                      >
                        <Icon size={16} /> {item.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            © 2026 OCG — Owl Creative Group.{" "}
            {lang === "ku"
              ? "هەموو مافەکان پارێزراون."
              : lang === "ar"
              ? "جميع الحقوق محفوظة."
              : "All rights reserved."}
          </div>
          <div className="footer-slogan">Idea • Create • Grow</div>
        </div>
      </footer>
    </main>
  );
}
