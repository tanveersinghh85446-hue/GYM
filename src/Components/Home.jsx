import { useState, useEffect } from "react";

function HeroBanner() {
  return (
    <section className="min-h-screen bg-linear-to-r from-black via-gray-900 to-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6 tracking-wide">
          Build Your Strongest Self
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          Discipline, dedication and consistency create unstoppable strength.
          Your fitness journey begins with a single powerful step.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-red-500 px-8 py-3 rounded-lg hover:bg-red-600 transition">
            Start Journey
          </button>

          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Explore
          </button>
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
    <section className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Impact In Numbers
      </h2>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-10 text-center rounded-xl shadow"
          >
            <h3 className="text-4xl font-bold text-red-500">
              {counts[index]}
              {item.suffix}
            </h3>

            <p className="text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MotivationGrid() {
  const quotes = [
    "Push harder than yesterday.",
    "Strength grows with effort.",
    "Every rep counts.",
    "Consistency beats motivation.",
    "Train with purpose.",
    "Focus on progress.",
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-linear-to-b from-gray-50 to-gray-200">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-800">
        Daily Motivation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
          >
            <p className="text-base sm:text-lg font-medium text-gray-700 text-center">
              {q}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryShowcase() {
  const items = new Array(8).fill(0);

  return (
    <section className="bg-gray-900 py-20 px-6">
      <h2 className="text-3xl text-white font-bold text-center mb-12">
        Training Atmosphere
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 h-48 rounded-lg hover:scale-105 transition"
          ></div>
        ))}
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

    setResult(bmi.toFixed(2));
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        BMI Calculator
      </h2>

      <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="border w-full mb-4 p-3 rounded"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          className="border w-full mb-4 p-3 rounded"
          onChange={(e) => setHeight(e.target.value)}
        />

        <button
          onClick={calculateBMI}
          className="bg-red-500 text-white px-6 py-3 rounded w-full"
        >
          Calculate
        </button>

        {result && (
          <p className="text-center mt-6 text-lg font-semibold">
            Your BMI: {result}
          </p>
        )}
      </div>
    </section>
  );
}

function ChallengeBoard() {
  const challenges = [
    "50 Pushups Challenge",
    "5km Run Challenge",
    "100 Squats Challenge",
    "7 Day Core Challenge",
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Weekly Challenges
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {challenges.map((c, i) => (
          <div
            key={i}
            className="bg-white border p-8 rounded-xl text-center shadow"
          >
            <h3 className="font-semibold text-lg mb-4">{c}</h3>

            <button className="bg-black text-white px-6 py-2 rounded">
              Join
            </button>
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
      a: "Consistency is key. 4-5 sessions per week is ideal for progress.",
    },
    {
      q: "Is cardio necessary?",
      a: "Yes, it improves endurance and heart health.",
    },
    {
      q: "Do beginners need supplements?",
      a: "Not necessary. Focus on nutrition and training first.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="font-semibold text-left w-full"
            >
              {item.q}
            </button>

            {open === i && (
              <p className="text-gray-600 mt-3">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunityWall() {
  const posts = new Array(6).fill(0);

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Community Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 p-8 rounded-xl shadow"
          >
            <p className="text-gray-600">
              Member shared their workout progress and inspired others to stay
              consistent.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppDownload() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Train Anywhere Anytime
      </h2>

      <p className="text-gray-300 mb-8">
        Track workouts, monitor progress and stay motivated with our mobile
        experience.
      </p>

      <div className="flex justify-center gap-6">
        <button className="bg-red-500 px-6 py-3 rounded">
          Android
        </button>

        <button className="border border-white px-6 py-3 rounded">
          iOS
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-10">
      <p>© 2026 Fitness World</p>
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





