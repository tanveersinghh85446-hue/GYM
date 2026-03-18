import { useState } from "react";

const posts = [
  {
    title: "Best Chest Workout for Beginners",
    desc: "Discover simple chest exercises that help beginners build strength and muscle effectively.",
    img: "Chest Workout .jpg",
    category: "Workout",
    readTime: "5 min read",
    date: "Mar 10, 2026",
    gradient: "from-red-900 to-gray-900",
  },
  {
    title: "10 Fat Loss Tips That Actually Work",
    desc: "Learn practical strategies to burn fat faster and stay consistent with your diet.",
    img: "Fat Loss.jpg",
    category: "Weight Loss",
    readTime: "7 min read",
    date: "Mar 6, 2026",
    gradient: "from-orange-900 to-gray-900",
  },
  {
    title: "Protein Guide for Muscle Growth",
    desc: "Understand how protein helps muscle recovery and how much you really need daily.",
    img: "Protein Guide .jpg",
    category: "Nutrition",
    readTime: "6 min read",
    date: "Feb 28, 2026",
    gradient: "from-green-900 to-gray-900",
  },
  {
    title: "Full Body Workout Plan",
    desc: "A balanced routine targeting all major muscle groups — perfect for any schedule.",
    img: "Full Body.jpg",
    category: "Workout",
    readTime: "8 min read",
    date: "Feb 21, 2026",
    gradient: "from-red-900 to-gray-900",
  },
  {
    title: "Cardio vs Strength Training",
    desc: "Which one is better for fat loss and fitness? Learn the key differences and when to use each.",
    img: "Cardio vs Strength .jpg",
    category: "Fitness",
    readTime: "6 min read",
    date: "Feb 14, 2026",
    gradient: "from-blue-900 to-gray-900",
  },
  {
    title: "Beginner Gym Mistakes",
    desc: "Avoid the most common mistakes that slow down your progress and increase injury risk.",
    img: "Gym Mistakes.jpg",
    category: "Beginner",
    readTime: "4 min read",
    date: "Feb 7, 2026",
    gradient: "from-purple-900 to-gray-900",
  },
];

const categories = ["All", "Workout", "Nutrition", "Weight Loss", "Fitness", "Beginner"];

const categoryColors = {
  Workout: "text-red-400 bg-red-950/50 border-red-900/50",
  Nutrition: "text-green-400 bg-green-950/50 border-green-900/50",
  "Weight Loss": "text-orange-400 bg-orange-950/50 border-orange-900/50",
  Fitness: "text-blue-400 bg-blue-950/50 border-blue-900/50",
  Beginner: "text-purple-400 bg-purple-950/50 border-purple-900/50",
};

function BlogHero() {
  return (
    <section className="relative bg-black text-white py-40 text-center overflow-hidden">
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
          Fitness Knowledge Hub
        </span>
        <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
          Fitness <span className="text-red-500">Blog</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          Tips, workouts and nutrition guides to fuel and improve every step of your fitness journey.
        </p>

        {/* Quick stats */}
        <div className="mt-12 inline-flex items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-2xl divide-x divide-white/10 text-sm">
          {[
            { val: "6", label: "Articles" },
            { val: "5", label: "Categories" },
            { val: "Weekly", label: "Updates" },
          ].map((s, i) => (
            <div key={i} className="text-center px-5 first:pl-0 last:pr-0">
              <p className="text-white font-bold">{s.val}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCategories({ active, setActive }) {
  return (
    <section className="bg-gray-950 py-10 px-6 border-y border-gray-800 sticky top-16 z-30">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold border transition duration-200 ${active === cat
                ? "bg-red-500 text-white border-red-500 shadow-lg shadow-red-900/30"
                : "bg-gray-900 text-gray-400 border-gray-800 hover:border-red-700 hover:text-white"
              }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-2 text-xs opacity-60">
                ({posts.filter((p) => p.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

function BlogPosts({ active }) {
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="bg-linear-to-b from-black via-gray-950 to-black py-20 px-6 min-h-[60vh]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl text-white font-bold">
            {active === "All" ? "Latest Articles" : `${active} Articles`}
          </h2>
          <span className="text-gray-500 text-sm">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-lg">No articles in this category yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <article
                key={i}
                className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-800/60 hover:-translate-y-1 transition duration-300 flex flex-col"
              >
                {/* Image / Fallback */}
                <div className={`relative w-full h-48 bg-linear-to-br ${post.gradient} overflow-hidden flex-shrink-2`}>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300" />
                  {/* Icon fallback center */}
                  <span className="absolute inset-0 flex items-center justify-center text-5xl opacity-30 pointer-events-none select-none">
                    {post.icon}
                  </span>
                  {/* Category badge */}
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-white text-lg font-bold mb-2 leading-snug group-hover:text-red-400 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {post.desc}
                  </p>

                  <button className="mt-5 flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-semibold transition group/btn">
                    Read More
                    <span className="group-hover/btn:translate-x-1 transition duration-200">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
      <BlogHero />
      <BlogCategories active={activeCategory} setActive={setActiveCategory} />
      <BlogPosts active={activeCategory} />
    </div>
  );
}