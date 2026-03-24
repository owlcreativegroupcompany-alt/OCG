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
import { useState } from "react";

export default function OwlCreativeGroupWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { title: "Branding", desc: "Complete brand identity systems including logo direction, typography, color strategy, and premium visual consistency.", icon: Sparkles },
    { title: "Photography", desc: "High-end product and brand photography crafted to elevate image quality, storytelling, and market perception.", icon: Star },
    { title: "Social Media", desc: "Creative content design and campaign visuals for a stronger, sharper, and more memorable digital presence.", icon: MessageCircleMore },
    { title: "Motion Graphics", desc: "Dynamic motion design for ads, launches, reels, and branded communication with cinematic impact.", icon: Send },
    { title: "Production Ads", desc: "Creative advertising production for product campaigns, commercial visuals, and premium promotional assets.", icon: BadgeCheck },
    { title: "TVC", desc: "Concept development and creative direction for TV commercials with agency-level polish and storytelling.", icon: ArrowUpRight },
  ];

  const socials = [
    { title: "WhatsApp", value: "+9647701708137", href: "https://wa.me/9647701708137", tag: "Chat" },
    { title: "Viber", value: "+9647701708137", href: "viber://chat?number=%2B9647701708137", tag: "Call / Chat" },
    { title: "Telegram", value: "+9647701708137", href: "https://t.me/+9647701708137", tag: "Message" },
    { title: "Facebook", value: "Owl Creative Group", href: "https://www.facebook.com/Owlcreativegroup/", tag: "Social" },
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Director", href: "#director" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#fca311] text-black px-3 py-2 rounded-xl font-bold">OCG</div>
            <div>
              <div className="font-bold">Owl Creative Group</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-[#fca311]">{n.label}</a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-block bg-[#fca311] text-black px-5 py-2 rounded-full">
            Start Project
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="px-6 pb-4 md:hidden">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="block py-2">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">Premium Creative Agency</h1>
        <p className="mt-4 text-zinc-400">Idea • Create • Grow</p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="bg-[#fca311] px-6 py-3 text-black rounded-full">Contact</a>
          <a href="#services" className="border px-6 py-3 rounded-full">Services</a>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="border p-6 rounded-xl">
                <Icon />
                <h3 className="mt-3 font-bold">{s.title}</h3>
                <p className="text-zinc-400">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="director" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Mohammed Hamza</h2>
        <p className="text-zinc-400">Creative Director</p>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p>Email: owlcreativegroupcompany@gmail.com</p>
        <p>Phone: +9647701708137</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {socials.map((s) => (
            <a key={s.title} href={s.href} className="border p-4 rounded-xl">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 border-t border-white/10">
        © 2026 OCG
      </footer>
    </div>
  );
}
