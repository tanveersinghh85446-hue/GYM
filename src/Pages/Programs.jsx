import React, { useState } from "react";

const programs = [
    {
        title: "Strength Training",
        desc: "Build muscle and increase strength with progressive overload techniques.",
        video: "Strength Training.mp4",
        accent: "border-red-600/50",
        tag: "text-red-400 bg-red-950/60 border-red-800/50",
        duration: "45–60 min",
        level: "Intermediate",
        highlight: "120+ Machines",
    },

    {
        title: "Weight Loss",
        desc: "Burn fat efficiently with high-intensity interval workouts and metabolic circuits.",
        video: "Weight Loss.mp4",
        accent: "border-orange-600/50",
        tag: "text-orange-400 bg-orange-950/60 border-orange-800/50",
        duration: "30–45 min",
        level: "All Levels",
        highlight: "98% Success",
    },

    {
        title: "Yoga Training",
        desc: "Improve flexibility, balance and mental clarity with guided yoga sessions.",
        video: "Yoga Training.mp4",
        accent: "border-teal-600/50",
        tag: "text-teal-400 bg-teal-950/60 border-teal-800/50",
        duration: "40–50 min",
        level: "Beginner",
        highlight: "Mind & Body",
    },

    {
        title: "HIIT Training",
        desc: "Max-intensity bursts designed to spike stamina, endurance and caloric burn.",
        video: "HIIT Training.mp4",
        accent: "border-yellow-600/50",
        tag: "text-yellow-400 bg-yellow-950/60 border-yellow-800/50",
        duration: "20–30 min",
        level: "Advanced",
        highlight: "Max Burn",
    },
];

function ProgramCard({ p, i }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative rounded-2xl overflow-hidden group shadow-2xl border ${p.accent} hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background Video */}
            <video
                src={p.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />

            {/* Gradient fallback (shows when video hasn't loaded) */}
            <div className={`absolute inset-0 bg-linear-to-b ${p.gradient} opacity-80`} />

            {/* Fallback icon (behind overlay) */}
            <span className="absolute inset-0 flex items-center justify-center text-8xl opacity-10 pointer-events-none select-none">
                {p.icon}
            </span>

            {/* Dark overlay — lightens on hover */}
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/30 transition duration-400" />

            {/* Top badges */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${p.tag}`}>
                    {p.level}
                </span>
                <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {p.duration}
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-80">
                {/* Icon */}
                <span className="text-3xl mb-3 block group-hover:scale-125 transition duration-300">
                    {p.icon}
                </span>

                <h3 className="text-xl font-black mb-2 text-white group-hover:text-white transition">
                    {p.title}
                </h3>

                <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${hovered ? "opacity-100 max-h-20" : "opacity-70 max-h-12 overflow-hidden"}`}>
                    {p.desc}
                </p>

                {/* Highlight stat + CTA */}
                <div className={`flex items-center justify-between mt-4 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${p.tag}`}>
                        {p.highlight}
                    </span>
                    <button className="text-white text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Enroll Now <span>→</span>
                    </button>
                </div>

                {/* Animated underline */}
                <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-linear-to-r from-transparent via-white to-transparent transition-all duration-500 ${hovered ? "w-full" : "w-0"}`} />
                </div>
            </div>
        </div>
    );
}

function Programs() {
    return (
        <div className="bg-black text-white min-h-screen">

            {/* Hero */}
            <section className="relative py-40 text-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-red-950/40 via-black to-black" />
                <div className="absolute inset-0" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right,#6b7280 1px,transparent 1px),linear-gradient(to bottom,#6b7280 1px,transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="relative max-w-3xl mx-auto px-6">
                    <span className="inline-block text-red-400 text-xs font-bold tracking-widest uppercase border border-red-800 px-4 py-1.5 rounded-full mb-6 bg-red-950/30">
                        Train Smarter
                    </span>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                        Workout <span className="text-red-500">Programs</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                        Structured programs built by expert coaches to help you achieve real, lasting results — no matter your starting point.
                    </p>

                    {/* Stats strip */}
                    <div className="mt-12 inline-flex items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-2xl divide-x divide-white/10 text-sm">
                        {[
                            { val: "4", label: "Programs" },
                            { val: "All Levels", label: "Difficulty" },
                            { val: "Expert", label: "Coaches" },
                        ].map((s, i) => (
                            <div key={i} className="text-center px-5 first:pl-0 last:pr-0">
                                <p className="text-white font-bold">{s.val}</p>
                                <p className="text-gray-500 text-xs">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Cards */}
            <section className="py-10 pb-28 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-black">Choose Your Program</h2>
                        <p className="text-gray-500 text-sm">Hover a card to explore</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((p, i) => (
                            <ProgramCard key={i} p={p} i={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 border-t border-gray-800">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Not sure where to start?</p>
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                        Let Us Build Your <span className="text-red-500">Custom Plan</span>
                    </h2>
                    <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
                        Every body is different. Book a free assessment with one of our coaches and get a program tailored just for you.
                    </p>
                </div>
            </section>
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

        </div>
    );
}

export default Programs;