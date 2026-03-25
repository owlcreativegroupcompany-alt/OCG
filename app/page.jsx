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

export default function OwlCreativeGroupWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Branding",
      desc: "Complete brand identity systems including logo direction, typography, color strategy, and premium visual consistency.",
      icon: Sparkles,
    },
    {
      title: "Photography",
      desc: "High-end product and brand photography crafted to elevate image quality, storytelling, and market perception.",
      icon: Star,
    },
    {
      title: "Social Media",
      desc: "Creative content design and campaign visuals for a stronger, sharper, and more memorable digital presence.",
      icon: MessageCircleMore,
    },
    {
      title: "Motion Graphics",
      desc: "Dynamic motion design for ads, launches, reels, and branded communication with cinematic impact.",
      icon: Send,
    },
    {
      title: "Production Ads",
      desc: "Creative advertising production for product campaigns, commercial visuals, and premium promotional assets.",
      icon: BadgeCheck,
    },
    {
      title: "TVC",
      desc: "Concept development and creative direction for TV commercials with agency-level polish and storytelling.",
      icon: ArrowUpRight,
    },
  ];

  const socials = [
    {
      title: "WhatsApp",
      value: "+9647701708137",
      href: "https://wa.me/9647701708137",
      tag: "Chat",
    },
    {
      title: "Viber",
      value: "+9647701708137",
      href: "viber://chat?number=%2B9647701708137",
      tag: "Call / Chat",
    },
    {
      title: "Telegram",
      value: "+9647701708137",
      href: "https://t.me/+9647701708137",
      tag: "Message",
    },
    {
      title: "Facebook",
      value: "Owl Creative Group",
      href: "https://www.facebook.com/Owlcreativegroup/",
      tag: "Social",
    },
  ];

  const profileLinks = [
    {
      title: "LinkedIn",
      subtitle: "Professional Network",
      href: "https://www.linkedin.com/in/mohammed-hamza-669b76330/",
      icon: Users,
    },
    {
      title: "Behance",
      subtitle: "Portfolio Platform",
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
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Director", href: "#director" },
    { label: "Contact", href: "#contact" },
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

          <a href="#contact" className="primary-btn desktop-cta">
            Start a Project
          </a>

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
                Start a Project
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
              PREMIUM CREATIVE AGENCY
            </div>

            <h1 className="hero-title">
              Build a Brand
              <span className="hero-gradient">That Looks Powerful</span>
            </h1>

            <p className="hero-text">
              Owl Creative Group is a premium creative advertising agency focused on branding, photography,
              social media, motion graphics, production ads, and TVC. We craft visual identity systems and
              campaigns that feel sharp, modern, and commercially powerful.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn hero-btn">
                Start a Project <ArrowRight size={16} />
              </a>
              <a href="#services" className="secondary-btn hero-btn">
                Explore Services
              </a>
            </div>

            <div className="stats-grid">
              {[
                { label: "Slogan", value: "Idea • Create • Grow" },
                { label: "Primary Accent", value: "#FCA311" },
                { label: "Identity", value: "Black • Gold • Navy" },
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
                    <div className="mini-label accent">Brand Overview</div>
                    <div className="card-title">Owl Creative Group</div>
                  </div>
                  <div className="pill-badge">OCG</div>
                </div>

                <div className="hero-side-content">
                  <div className="glass-card inner-card">
                    <div className="card-label">Core Expertise</div>
                    <div className="card-text">
                      Branding / Photography / Social Media / Motion Graphics / Production Ads / TVC
                    </div>
                  </div>

                  <div className="glass-card inner-card">
                    <div className="card-label">Creative Character</div>
                    <div className="card-text">
                      Minimal, powerful, cinematic, and premium — built to reflect the quality of top-tier creative studios.
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
              <div className="mini-label accent">Our Services</div>
              <h2 className="section-title">Creative Solutions</h2>
            </div>
            <p className="section-text">
              Our services are structured to build strong visual systems, premium campaigns, and impactful brand experiences.
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
              <div className="mini-label accent director-role">Creative Director</div>
              <div className="director-name">Mohammed Hamza</div>
              <p className="director-text">
                Creative Director of OCG, focused on branding, visual communication, and developing polished design work with a premium agency mindset.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mini-label accent">Director Profile</div>
            <h2 className="section-title">Leadership & Vision</h2>
            <p className="section-text director-copy">
              Explore the professional profile and creative work of Mohammed Hamza through LinkedIn and Behance.
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
                      Open Link <ArrowUpRight size={16} />
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
                <div className="mini-label accent">Contact Us</div>
                <h2 className="section-title">Let’s Build Something Strong</h2>
                <p className="section-text">
                  For collaborations, campaigns, branding projects, or creative production, contact Owl Creative Group through email, phone, or social platforms.
                </p>

                <div className="contact-info-stack">
                  <div className="glass-card contact-info-box">
                    <div className="contact-label">
                      <Mail size={16} /> Email
                    </div>
                    <a href="mailto:owlcreativegroupcompany@gmail.com" className="contact-value">
                      owlcreativegroupcompany@gmail.com
                    </a>
                  </div>

                  <div className="glass-card contact-info-box">
                    <div className="contact-label">
                      <Phone size={16} /> Phone Number
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
                  <div className="mini-label accent">Brand Slogan</div>
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
          <div>© 2026 OCG — Owl Creative Group. All rights reserved.</div>
          <div className="footer-slogan">Idea • Create • Grow</div>
        </div>
      </footer>
    </main>
  );
}
