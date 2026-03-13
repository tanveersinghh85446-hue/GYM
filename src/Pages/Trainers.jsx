function Trainers() {
  const trainers = [
    {
      name: "Rahul Sharma",
      special: "Strength Coach",
      img: "Strength Coach.jpg",
      exp: "8 Years Exp.",
      bio: "Specializes in powerlifting and hypertrophy programs for all levels.",
      icon: "🏋️",
      gradient: "from-red-900 to-gray-900",
      accent: "border-red-700/50",
      tag: "text-red-400 bg-red-950/50 border-red-900/40",
      stats: [
        { label: "Clients", val: "120+" },
        { label: "Programs", val: "15" },
        { label: "Rating", val: "4.9★" },
      ],
    },

    {
      name: "Aman Singh",
      special: "Cardio Expert",
      img: "Cardio Expert.jpg",
      exp: "6 Years Exp.",
      bio: "Expert in HIIT, endurance training and heart-health conditioning.",
      icon: "🏃",
      gradient: "from-orange-900 to-gray-900",
      accent: "border-orange-700/50",
      tag: "text-orange-400 bg-orange-950/50 border-orange-900/40",
      stats: [
        { label: "Clients", val: "95+" },
        { label: "Programs", val: "10" },
        { label: "Rating", val: "4.8★" },
      ],
    },

    {
      name: "Vikram Patel",
      special: "Fitness Trainer",
      img: "Fitness Trainer.jpg",
      exp: "5 Years Exp.",
      bio: "Focuses on full-body fitness, flexibility and functional movement.",
      icon: "⚡",
      gradient: "from-blue-900 to-gray-900",
      accent: "border-blue-700/50",
      tag: "text-blue-400 bg-blue-950/50 border-blue-900/40",
      stats: [
        { label: "Clients", val: "80+" },
        { label: "Programs", val: "12" },
        { label: "Rating", val: "4.9★" },
      ],
    },
  ];

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
            Expert Team
          </span>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
            Our <span className="text-red-500">Trainers</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Certified professionals dedicated to pushing you beyond your limits
            and helping you reach your strongest self.
          </p>
        </div>
      </section>

      {/* Trainer Cards */}
      <section className="py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((t, i) => (
            <div
              key={i}
              className={`group bg-gray-900 border ${t.accent} rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col`}
            >
              {/* Image / Fallback */}
              <div className={`relative w-full h-64 bg-linear-to-br ${t.gradient} flex-shrink-2 overflow-hidden`}>
                <img
                  src={t.img}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300" />
                {/* Fallback icon */}
                <span className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 pointer-events-none select-none">
                  {t.icon}
                </span>
                {/* Exp badge */}
                <span className="absolute top-3 right-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  {t.exp}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Specialty badge */}
                <span className={`text-xs font-bold px-3 py-1 rounded-full border w-fit mb-3 ${t.tag}`}>
                  {t.special}
                </span>

                <h3 className="text-xl font-black text-white mb-2 group-hover:text-red-400 transition">
                  {t.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {t.bio}
                </p>

                {/* Stats row */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-800 pt-5">
                  {t.stats.map((s, j) => (
                    <div key={j} className="text-center">
                      <p className="text-white font-bold text-sm">{s.val}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="mt-5 w-full py-2.5 rounded-xl border border-gray-700 text-gray-300 text-sm font-semibold hover:border-red-600 hover:text-red-400 hover:bg-red-950/20 transition duration-200">
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Want to train with the best?</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Find Your <span className="text-red-500">Perfect Trainer</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
            Every trainer offers a free consultation session. Tell us your goals and we'll match you with the right coach.
          </p>
          
        </div>
      </section>

    </div>
  );
}

export default Trainers;