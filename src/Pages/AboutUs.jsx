import React, { useState, useEffect, useRef } from "react";

/* HERO SECTION */
function AboutHero() {
  return (
    <section className="relative bg-black text-white py-44 overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-linear-to-br from-red-900/30 via-black to-black" />
      <div className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute bottom-0 right-0 w-900 h-96 bg-red-500/10 rounded-full blur-3xl" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6b7280 1px, transparent 1px), linear-gradient(to bottom, #6b7280 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Pill badge */}
        <span className="inline-block text-red-400 text-xs font-bold tracking-widest uppercase border border-red-800 px-4 py-1.5 rounded-full mb-6 bg-red-950/30">
          About Fitness World
        </span>

        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
          Built For{" "}
          <span className="relative inline-block">
            <span className="text-red-500">Champions</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-red-700 to-transparent rounded-full" />
          </span>
        </h1>

        <p className="mt-8 text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Our gym isn't just a place to workout — it's a place where
          discipline, strength and mindset are built from the ground up.
        </p>

        {/* Hero stat strip */}
        <div className="mt-14 inline-flex items-center gap-8 bg-white/5 border border-white/10 backdrop-blur-md px-10 py-5 rounded-2xl divide-x divide-white/10">
          {[
            { val: "9+", label: "Years" },
            { val: "1000+", label: "Members" },
            { val: "50+", label: "Trainers" },
            { val: "4", label: "Locations" },
          ].map((s, i) => (
            <div key={i} className="text-center px-6 first:pl-0 last:pr-0">
              <p className="text-2xl font-black text-red-400">{s.val}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TIMELINE SECTION */
function Timeline() {
  const timeline = [
    {
      year: "2016",
      title: "The Beginning",
      desc: "Our gym started as a small training space with big dreams and a passionate core team of 3 trainers.",
      color: "from-gray-800 to-gray-900",
      accent: "border-gray-500",
    },

    {
      year: "2019",
      title: "Growing Community",
      desc: "Hundreds of members joined our fitness journey. We expanded to a larger facility and added group classes.",
      color: "from-red-950 to-gray-900",
      accent: "border-red-700",
    },

    {
      year: "2022",
      title: "Professional Trainers",
      desc: "We built a team of 30+ certified coaches and introduced specialized programs for every fitness level.",
      color: "from-red-900 to-gray-950",
      accent: "border-red-500",
    },

    {
      year: "2025",
      title: "Elite Fitness Center",
      desc: "Now one of the fastest growing gyms in the region, with premium equipment and 4 locations citywide.",
      color: "from-red-800 to-red-950",
      accent: "border-red-400",
    },
  ];

  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, i])]);
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section className="bg-gray-950 text-white py-28 px-6">
      <div className="text-center mb-20">
        <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Since 2016</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">Our Journey</h2>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">A decade of sweat, growth and community</p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-red-800 to-transparent hidden md:block" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className={`flex flex-col md:flex-row items-center gap-6 transition-all duration-700 ${visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content card */}
              <div className={`flex-1 bg-linear-to-br ${item.color} border ${item.accent} border-opacity-40 p-7 rounded-2xl hover:scale-[1.02] transition duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-red-400 font-black text-sm tracking-widest">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-5 h-5 rounded-full bg-red-500 border-4 border-gray-950 ring-2 ring-red-700 flex-shrink-2 z-10" />

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* HIGHLIGHTS / FEATURES */
function Highlights() {
  const items = [
    {
      label: "Elite Trainers",
      desc: "Certified coaches with proven track records",
      stat: "50+ Coaches",
    },
    {
      label: "Premium Equipment",
      desc: "Latest machines from top fitness brands",
      stat: "120+ Machines",
    },
    {
      label: "Personalized Plans",
      desc: "Custom programs built around your goals",
      stat: "100% Tailored",
    },
    {
      label: "Strong Community",
      desc: "A supportive network of 1000+ members",
      stat: "1000+ Members",
    },
  ];

  return (
    <section className="bg-black py-28 text-white">
      <div className="text-center mb-16">
        <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">What Makes Us Different</h2>
        <p className="text-gray-500 mt-3 max-w-md mx-auto">We don't just build bodies — we build confidence</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:scale-105 hover:border-red-600/40 hover:bg-red-950/20 transition duration-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">
              {item.icon}
            </div>
            <p className="font-bold text-white text-lg">{item.label}</p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
            <div className="mt-5 text-red-400 text-xs font-bold tracking-widest uppercase bg-red-950/40 border border-red-900/40 px-3 py-1.5 rounded-full inline-block">
              {item.stat}
            </div>
          </div>
        ))}
      </div>

      {/* Values strip */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-3 gap-6">
        {[
          { label: "Discipline", desc: "Every session, every rep — no shortcuts." },
          { label: "Community", desc: "We grow stronger together as one team." },
          { label: "Results", desc: "Data-driven coaching for real outcomes." },
        ].map((v, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-gray-950 border border-gray-800 p-6 rounded-xl hover:border-red-800/50 transition"
          >
            <span className="text-2xl flex-shrink-2">{v.icon}</span>
            <div>
              <p className="text-white font-bold">{v.label}</p>
              <p className="text-gray-500 text-sm mt-1">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-black border-t border-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-black text-xl">FW</span>
            <span className="text-white font-bold text-lg">Fitness World</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 Fitness World. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-red-400 transition">Privacy</a>
            <a href="#" className="hover:text-red-400 transition">Terms</a>
            <a href="#" className="hover:text-red-400 transition">Support</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

/* MAIN PAGE */
export default function About() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Highlights />
    </>
  );
}