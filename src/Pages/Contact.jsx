import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  };

  const info = [
    { label: "Address", val: "12 Fitness Lane, New Delhi, India" },
    { label: "Phone", val: "+91 98765 43210" },
    { label: "Email", val: "hello@fitnessworld.in" },
    { label: "Hours", val: "Mon–Sat: 5am – 10pm" },
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
            Get In Touch
          </span>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Have a question, want to book a session, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Info */}
          <div>
            <h2 className="text-2xl font-black mb-2">Find Us Here</h2>
            <p className="text-gray-500 text-sm mb-8">
              Walk in, call us, or drop a message — we're here for you.
            </p>

            <div className="space-y-4 mb-10">
              {info.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-red-800/50 transition"
                >
                  <span className="text-2xl flex-shrink-2">{item.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white text-sm font-medium">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social strip */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", color: "hover:border-pink-700 hover:text-pink-400" },
                  { label: "WhatsApp", color: "hover:border-green-700 hover:text-green-400" },
                  { label: "LinkedIn", color: "hover:border-blue-700 hover:text-blue-400" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`px-4 py-2 rounded-xl border border-gray-800 text-gray-400 text-xs font-semibold transition ${s.color}`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="text-6xl mb-6">✅</span>
                <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-8 border border-gray-700 text-gray-300 hover:border-red-600 hover:text-red-400 px-8 py-2.5 rounded-xl text-sm font-semibold transition"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black mb-1">Send a Message</h3>
                <p className="text-gray-500 text-sm mb-7">We typically reply within one business day.</p>

                {/* Name */}
                <div className="mb-5">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">
                    Your Name
                  </label>
                  <input
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full bg-black border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none transition ${errors.name ? "border-red-600 focus:border-red-500" : "border-gray-700 focus:border-red-500"
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">
                    Email Address
                  </label>
                  <input
                    placeholder="you@example.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full bg-black border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none transition ${errors.email ? "border-red-600 focus:border-red-500" : "border-gray-700 focus:border-red-500"
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full bg-black border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none transition resize-none ${errors.message ? "border-red-600 focus:border-red-500" : "border-gray-700 focus:border-red-500"
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <span className="group-hover:translate-x-1 transition">→</span>
                </button>
              </>
            )}
          </div>

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

export default Contact;