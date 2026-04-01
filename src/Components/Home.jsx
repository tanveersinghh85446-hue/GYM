import { useState, useEffect } from "react";
import { FaDumbbell, FaRunning, FaSpa, FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";


function HeroBanner() {
  return (
    <section className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="BG.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Background decorative rings — fixed sizes using inline style */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400 opacity-20"
          style={{ width: "min(880px, 90vw)", height: "min(880px, 90vw)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400 opacity-15"
          style={{ width: "min(660px, 70vw)", height: "min(660px, 70vw)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400 opacity-10"
          style={{ width: "min(440px, 50vw)", height: "min(440px, 50vw)" }}
        />
      </div>

      <div className="text-center max-w-3xl relative z-20 w-full">
        <span className="inline-block text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 border border-red-800 px-3 sm:px-4 py-1 rounded-full">
          No Pain, No Gain
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-wide leading-tight">
          Build Your <span className="text-red-500">Strongest</span> Self
        </h1>

        <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-lg max-w-xl mx-auto px-2">
          Discipline, dedication and consistency create unstoppable strength.
          Your fitness journey begins with a single powerful step.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <Link
            to="/Contact"
            className="bg-red-500 px-8 sm:px-10 py-3 rounded-lg hover:bg-red-600 transition font-semibold text-base sm:text-lg shadow-lg shadow-red-900/40 text-center"
          >
            Start Journey
          </Link>

          <Link
            to="/programs"
            className="border border-white/40 px-8 sm:px-10 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold text-base sm:text-lg backdrop-blur-sm text-center"
          >
            Explore Programs
          </Link>
        </div>

        {/* Hero quick stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-md mx-auto border-t border-white/10 pt-6 sm:pt-8 px-2">
          {[
            { val: "1000+", label: "Members" },
            { val: "50+", label: "Trainers" },
            { val: "24/7", label: "Access" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-red-400">{s.val}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

function StatsPanel() {
  const stats = [
    { number: 1000, suffix: "+", label: "Active Members" },
    { number: 350, suffix: "+", label: "Daily Workouts" },
    { number: 98, suffix: "%", label: "Success Rate" },
    { number: 120, suffix: "+", label: "Training Machines" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 15000;
      const stepTime = Math.max(Math.floor(duration / end), 50);

      const interval = setInterval(() => {
        start += Math.ceil(end / 50);
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start > end ? end : start;
          return updated;
        });
        if (start >= end) clearInterval(interval);
      }, stepTime);

      return interval;
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);

  return (
    <section className="bg-linear-to-r from-black via-gray-900 to-red-950 py-14 sm:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl text-white font-bold">Our Impact In Numbers</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">Real results from real members</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-black/60 border border-red-900/40 p-5 sm:p-8 text-center rounded-xl hover:border-red-500/60 transition duration-300 group"
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-red-500 group-hover:scale-110 transition duration-300">
              {counts[index]}
              {item.suffix}
            </h3>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MotivationGrid() {
  const quotes = [
    { text: "Push harder than yesterday." },
    { text: "Strength grows with effort." },
    { text: "Every rep counts." },
    { text: "Consistency beats motivation." },
    { text: "Train with purpose." },
    { text: "Focus on progress." },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-black via-gray-900 to-red-950">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Daily Motivation</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">Words that fuel the grind</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="bg-black/60 border border-gray-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-red-900/30 hover:shadow-xl hover:border-red-700/50 transform hover:-translate-y-2 transition duration-300 group"
          >
            <p className="text-base sm:text-lg font-semibold text-white">{q.text}</p>
            <div className="mt-4 w-10 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryShowcase() {
  const items = [
    { img: "1.jpg" },
    { img: "2.jpg" },
    { img: "3.jpg" },
    { img: "4.jpg" },
  ];

  return (
    <section className="bg-linear-to-r from-black via-gray-900 to-red-950 py-14 sm:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Training Atmosphere</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">State-of-the-art facilities built for champions</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-xl group relative">
            <div className="w-full h-36 sm:h-48 md:h-56 bg-gray-900 flex flex-col items-center justify-center relative">
              <img
                src={item.img}
                alt={`Gallery ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <p className="text-gray-400 mb-4 text-sm sm:text-base">Want to see it in person?</p>
        <button className="border border-red-500 text-red-400 px-6 sm:px-8 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 text-sm sm:text-base">
          Book a Free Tour
        </button>
      </div>
    </section>
  );
}

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) return;
    const h = height / 100;
    const bmi = weight / (h * h);
    setResult(bmi.toFixed(1));
  };

  const getBMICategory = (bmi) => {
    const val = parseFloat(bmi);
    if (val < 18.5) return { label: "Underweight", color: "text-blue-400", tip: "Consider a nutrition-focused plan to build healthy mass." };
    if (val < 25) return { label: "Normal weight", color: "text-green-400", tip: "Great shape! Keep up your balanced routine." };
    if (val < 30) return { label: "Overweight", color: "text-yellow-400", tip: "A mix of cardio and strength training can help." };
    return { label: "Obese", color: "text-red-500", tip: "Start with low-impact cardio and consult a trainer." };
  };

  const category = result ? getBMICategory(result) : null;

  const bmiPercent = result
    ? Math.min(100, Math.max(0, ((parseFloat(result) - 10) / 35) * 100))
    : 0;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-black via-gray-900 to-red-950">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl text-white font-bold">BMI Calculator</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">Know your body mass index instantly</p>
      </div>

      <div className="max-w-xl mx-auto bg-black/70 border border-gray-800 p-6 sm:p-10 rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div>
            <label className="text-gray-400 text-xs sm:text-sm mb-1 block">Weight</label>
            <input
              type="number"
              placeholder="kg"
              className="border border-gray-700 w-full p-2.5 sm:p-3 rounded-lg bg-gray-900 text-white focus:border-red-500 focus:outline-none transition text-sm sm:text-base"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs sm:text-sm mb-1 block">Height</label>
            <input
              type="number"
              placeholder="cm"
              className="border border-gray-700 w-full p-2.5 sm:p-3 rounded-lg bg-gray-900 text-white focus:border-red-500 focus:outline-none transition text-sm sm:text-base"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={calculateBMI}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg w-full font-semibold transition text-sm sm:text-base"
        >
          Calculate BMI
        </button>

        {result && category && (
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">Your BMI</span>
              <span className={`text-2xl sm:text-3xl font-bold ${category.color}`}>{result}</span>
            </div>

            <div className="w-full h-3 rounded-full bg-linear-to-r from-blue-500 via-yellow-400 to-red-500 mb-2 relative">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-900 rounded-full shadow-lg transition-all duration-500"
                style={{ left: `calc(${bmiPercent}% - 8px)` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span>Under</span>
              <span>Normal</span>
              <span>Over</span>
              <span>Obese</span>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-xl p-4">
              <p className={`font-semibold text-base sm:text-lg ${category.color}`}>{category.label}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{category.tip}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ChallengeBoard() {
  const workouts = [
    {
      title: "Strength Training",
      desc: "Build muscle and increase overall strength with weight training exercises.",
      icon: <FaDumbbell />,
      color: "from-red-900/40 to-black",
      accent: "text-red-400",
    },
    {
      title: "Cardio Workout",
      desc: "Improve stamina and burn calories with running, cycling and HIIT sessions.",
      icon: <FaRunning />,
      color: "from-orange-900/40 to-black",
      accent: "text-orange-400",
    },
    {
      title: "Flexibility",
      desc: "Enhance mobility and balance with stretching and flexibility routines.",
      icon: <FaSpa />,
      color: "from-teal-900/40 to-black",
      accent: "text-teal-400",
    },
    {
      title: "Core Training",
      desc: "Strengthen your abs and core muscles for better posture and stability.",
      icon: <FaFire />,
      color: "from-yellow-900/40 to-black",
      accent: "text-yellow-400",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-black via-gray-900 to-red-950">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Workout Categories</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">Choose your path, own your journey</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {workouts.map((w, i) => (
          <div
            key={i}
            className={`bg-linear-to-b ${w.color} border border-gray-800 p-5 sm:p-7 rounded-2xl hover:border-red-700/60 hover:-translate-y-2 transition duration-300 text-center group`}
          >
            <div className={`text-3xl sm:text-4xl ${w.accent} mb-3 sm:mb-5 flex justify-center group-hover:scale-125 transition duration-300`}>
              {w.icon}
            </div>
            <h3 className="font-bold text-white text-sm sm:text-lg mb-2 sm:mb-3">{w.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed hidden sm:block">{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunityWall() {
  const posts = [
    {
      name: "Raj K.",
      initials: "RK",
      text: "Completed his first 100 pushups challenge this week and shared his progress with the community.",
      tag: "#StrengthGoals",
      days: "3 days streak",
    },
    {
      name: "Priya S.",
      initials: "PS",
      text: "Improved her running stamina and finished a 5km run after weeks of consistent training.",
      tag: "#FitnessJourney",
      days: "7 days streak",
    },
    {
      name: "Amit V.",
      initials: "AV",
      text: "Shared his transformation story and motivated others to stay disciplined with their workouts.",
      tag: "#GymCommunity",
      days: "14 days streak",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-black via-gray-900 to-red-950">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Community Wall</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">Real people, real progress</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-black/60 border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-red-700/50 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {post.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{post.name}</p>
                <p className="text-green-400 text-xs">{post.days}</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">{post.text}</p>
            <span className="text-red-400 text-xs font-semibold">{post.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      q: "How often should I train?",
      a: "Consistency is key. 4–5 sessions per week is ideal for steady progress. Beginners can start with 3 sessions and gradually increase intensity and frequency.",
    },
    {
      q: "Is cardio necessary?",
      a: "Yes, cardio improves heart health, endurance, and helps with fat loss. Even 20–30 minutes 3x per week makes a significant difference over time.",
    },
    {
      q: "Do beginners need supplements?",
      a: "Not necessary to start. Focus on balanced whole-food nutrition and consistent training first. Protein shakes can help if you struggle to hit daily protein targets.",
    },
    {
      q: "What time of day is best to work out?",
      a: "The best time is whenever you can stay consistent. Morning workouts boost metabolism for the day; evening workouts often allow peak physical performance.",
    },
    {
      q: "How soon will I see results?",
      a: "Most people notice strength improvements within 2–3 weeks. Visible body composition changes typically appear after 6–8 weeks of consistent training and proper nutrition.",
    },
  ];

  return (
    <section className="bg-linear-to-r from-black via-gray-900 to-red-950 py-14 sm:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl text-white font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">Answers to help you get started with confidence</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-black/60 border border-gray-800 rounded-xl overflow-hidden hover:border-red-800/50 transition duration-300"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="font-semibold text-left w-full px-4 sm:px-6 py-4 text-white flex items-center justify-between gap-4 text-sm sm:text-base"
            >
              <span>{item.q}</span>
              <span className={`text-red-500 text-xl shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {open === i && (
              <div className="px-4 sm:px-6 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-gray-800 pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function AppDownload() {
  return (
    <section className="bg-linear-to-r from-black via-gray-900 to-red-950 text-white py-14 sm:py-20 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center md:text-left">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 pb-3 border-b border-gray-800">Quick Links</h3>
          <div className="flex flex-col gap-2 sm:gap-3 text-gray-300">
            {[
              { to: "/about-us", label: "About Us" },
              { to: "/programs", label: "Programs" },
              { to: "/membership", label: "Membership" },
              { to: "/trainers", label: "Trainers" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <Link
                key={i}
                className="hover:text-red-400 transition flex items-center gap-2 group text-sm sm:text-base justify-center md:justify-start"
                to={link.to}
              >
                <span className="text-red-800 group-hover:text-red-400 transition text-xs">→</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 pb-3 border-b border-gray-800">Follow Us</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
            Stay connected with us on social media for daily fitness tips, workout inspiration and latest updates.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            {[
              {
                icon: <FaInstagram />,
                label: "Instagram",
                link: "https://www.instagram.com/webdaddy_official/",
                color: "hover:text-pink-400 hover:border-pink-700"
              },
              {
                icon: <FaWhatsapp />,
                label: "WhatsApp",
                link: "https://wa.me/919999999999",
                color: "hover:text-green-400 hover:border-green-700"
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/tanveer-singh-ab008637b/",
                color: "hover:text-blue-400 hover:border-blue-700"
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-gray-700 flex items-center justify-center text-lg sm:text-xl text-gray-400 transition duration-300 ${s.color}`}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-black text-xl">FW</span>
          <span className="text-white font-bold text-lg">Fitness World</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">© 2026 Fitness World. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
          <a href="#" className="hover:text-red-400 transition">Privacy</a>
          <a href="#" className="hover:text-red-400 transition">Terms</a>
          <a href="#" className="hover:text-red-400 transition">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <HeroBanner />
      <StatsPanel />
      <MotivationGrid />
      <GalleryShowcase />
      <BMICalculator />
      <ChallengeBoard />
      <CommunityWall />
      <FAQSection />
      <AppDownload />
      <Footer />
    </div>
  );
}