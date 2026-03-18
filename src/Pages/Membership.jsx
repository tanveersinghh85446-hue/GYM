import { useState } from "react";

const plans = [
    {
        name: "Basic",
        price: "₹999",
        period: "/ month",
        tagline: "Perfect to get started",
        features: [
            { text: "Gym Access", included: true },
            { text: "Locker", included: true },
            { text: "Group Classes", included: false },
            { text: "Personal Trainer", included: false },
            { text: "Diet Plan", included: false },
            { text: "Priority Support", included: false },
        ],
        gradient: "from-gray-900 to-black",
        accent: "border-gray-700",
        btnStyle: "border border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400",
        badge: null,
    },

    {
        name: "Pro",
        price: "₹1,999",
        period: "/ month",
        tagline: "Most popular choice",
        features: [
            { text: "Gym Access", included: true },
            { text: "Locker", included: true },
            { text: "Group Classes", included: true },
            { text: "Personal Trainer", included: true },
            { text: "Diet Plan", included: true },
            { text: "Priority Support", included: false },
        ],
        gradient: "from-red-950 to-black",
        accent: "border-red-600",
        btnStyle: "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-900/40",
        badge: "Most Popular",
    },
    
    {
        name: "Elite",
        price: "₹2,999",
        period: "/ month",
        tagline: "For serious athletes",
        features: [
            { text: "Gym Access", included: true },
            { text: "Locker", included: true },
            { text: "Group Classes", included: true },
            { text: "Personal Trainer", included: true },
            { text: "Diet Plan", included: true },
            { text: "Priority Support", included: true },
        ],
        gradient: "from-yellow-950 to-black",
        accent: "border-yellow-700",
        btnStyle: "border border-yellow-700 text-yellow-400 hover:bg-yellow-500 hover:text-black",
        badge: "All Inclusive",
    },
];

function Membership() {
    const [billing, setBilling] = useState("monthly");

    const discount = billing === "yearly" ? 0.75 : 1;

    const getPrice = (raw) => {
        const num = parseInt(raw.replace(/[^\d]/g, ""));
        const final = Math.round(num * discount);
        return "₹" + final.toLocaleString("en-IN");
    };

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
                        Flexible Pricing
                    </span>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                        Membership <span className="text-red-500">Plans</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                        Choose the plan that fits your goals and budget. Cancel or upgrade anytime — no hidden fees.
                    </p>

                    {/* Billing toggle */}
                    <div className="mt-10 inline-flex items-center bg-gray-900 border border-gray-800 rounded-2xl p-1 gap-1">
                        {["monthly", "yearly"].map((b) => (
                            <button
                                key={b}
                                onClick={() => setBilling(b)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition capitalize ${billing === b
                                    ? "bg-red-500 text-white shadow-md"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {b === "yearly" ? "Yearly  —  25% Off" : "Monthly"}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-10 pb-28 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`relative bg-linear-to-b ${plan.gradient} border ${plan.accent} rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition duration-300 ${plan.badge === "Most Popular" ? "ring-1 ring-red-500/40" : ""
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full whitespace-nowrap ${plan.badge === "Most Popular"
                                    ? "bg-red-500 text-white"
                                    : "bg-yellow-500 text-black"
                                    }`}>
                                    {plan.badge}
                                </span>
                            )}

                            {/* Header */}
                            <div className="text-center mb-8">
                                <span className="text-4xl block mb-3">{plan.icon}</span>
                                <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                                <p className="text-gray-500 text-sm">{plan.tagline}</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-8 pb-8 border-b border-white/10">
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-5xl font-black text-white transition-all duration-300">
                                        {getPrice(plan.price)}
                                    </span>
                                    <span className="text-gray-500 text-sm mb-2">{plan.period}</span>
                                </div>
                                {billing === "yearly" && (
                                    <p className="text-green-400 text-xs font-semibold mt-2 animate-pulse">
                                        You save ₹{Math.round(parseInt(plan.price.replace(/[^\d]/g, "")) * 0.25 * 12).toLocaleString("en-IN")}/yr
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((f, j) => (
                                    <li key={j} className={`flex items-center gap-3 text-sm ${f.included ? "text-gray-200" : "text-gray-600 line-through"}`}>
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-2 text-xs font-bold ${f.included
                                            ? "bg-green-500/20 text-green-400 border border-green-700/40"
                                            : "bg-gray-800 text-gray-600 border border-gray-700/40"
                                            }`}>
                                            {f.included ? "✓" : "✕"}
                                        </span>
                                        {f.text}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button className={`w-full py-3 rounded-xl font-bold text-sm transition duration-200 ${plan.btnStyle}`}>
                                Join {plan.name}
                            </button>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
}

export default Membership;