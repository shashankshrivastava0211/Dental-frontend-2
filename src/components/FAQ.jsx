"use client";
import React, { useState } from "react";
import {
	Clock,
	AlertCircle,
	Heart,
	Smile,
	Bluetooth as Tooth,
	AlertTriangle,
	GitMerge,
	Shield,
	Timer,
	Crown,
	ChevronDown,
} from "lucide-react";

function FAQSection() {
	const [openFaqId, setOpenFaqId] = useState(null);

	const faqs = [
		{
			id: 1,
			question: "Why do I need to visit my dentist regularly?",
			answer:
				"Regular dental visits help prevent cavities, gum disease, and other oral health problems. They also allow early detection and treatment of issues before they become serious.",
			icon: <Clock className="w-6 h-6" />,
		},
		{
			id: 2,
			question: "How does Root canal treatment work?",
			answer:
				"A root canal removes infected or damaged pulp from inside a tooth, cleans and disinfects the root canals, and then seals it to prevent further infection.",
			icon: <Tooth className="w-6 h-6" />,
		},
		{
			id: 3,
			question: "Are Invisible Aligners a clear replacement for braces?",
			answer:
				"Invisible aligners can correct many teeth alignment issues and are often more comfortable and aesthetic than braces. However, complex cases may still require traditional braces.",
			icon: <Smile className="w-6 h-6" />,
		},
		{
			id: 4,
			question: "Do I need to be worried about my bleeding gums?",
			answer:
				"Bleeding gums may indicate gum disease or improper brushing/flossing. Consult a dentist to identify the cause and prevent further damage.",
			icon: <AlertCircle className="w-6 h-6" />,
		},
		{
			id: 5,
			question:
				"Should I be worried about my child's cavities and crooked teeth?",
			answer:
				"Yes. Early dental issues can affect permanent teeth and oral development. Regular check-ups and preventive care are essential.",
			icon: <Heart className="w-6 h-6" />,
		},
		{
			id: 6,
			question: "My wisdom tooth hurts. Is removal the only solution?",
			answer:
				"Not always. Pain may be managed temporarily, but if the tooth causes repeated discomfort, infection, or crowding, removal is often recommended.",
			icon: <AlertTriangle className="w-6 h-6" />,
		},
		{
			id: 7,
			question:
				"I have missing teeth but face no obvious issues. Should I be worried?",
			answer:
				"Missing teeth can cause bite problems, shifting of remaining teeth, and jawbone deterioration over time. Early replacement is usually advised.",
			icon: <GitMerge className="w-6 h-6" />,
		},
		{
			id: 8,
			question:
				"I have been a smoker for many years. How does it affect my gums and teeth?",
			answer:
				"Smoking increases the risk of gum disease, tooth loss, and oral cancer. It also affects healing after dental procedures.",
			icon: <Shield className="w-6 h-6" />,
		},
		{
			id: 9,
			question:
				"Are Dental implants a safe and long term solution for teeth replacement?",
			answer:
				"Yes, dental implants are considered safe and effective for long-term tooth replacement, provided proper oral hygiene and regular dental check-ups are maintained.",
			icon: <Crown className="w-6 h-6" />,
		},
		{
			id: 10,
			question: "How often should I get my teeth cleaned from a dentist?",
			answer:
				"Professional dental cleaning is recommended every six months, though your dentist may suggest a different schedule based on your oral health needs.",
			icon: <Timer className="w-6 h-6" />,
		},
	];

	const FAQItem = ({ faq }) => {
		const isOpen = openFaqId === faq.id;

		return (
			<div
				className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-purple-500/50 hover:from-indigo-500/60 hover:via-violet-500/60 hover:to-purple-500/60 transition-all duration-500"
				onClick={() => setOpenFaqId(isOpen ? null : faq.id)}>
				<div
					className={`w-full p-6 rounded-2xl transition-all duration-500 relative ${
						isOpen
							? "bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl"
							: "bg-white/90 hover:bg-white/95 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-sm"
					}`}>
					<div className="flex items-center gap-4">
						<div
							className={`p-3.5 rounded-xl bg-gradient-to-br transition-all duration-500 transform ${
								isOpen
									? "from-violet-500/20 to-cyan-500/20 text-cyan-700 "
									: "from-violet-500/10 to-indigo-500/10 text-blue-600 group-hover:from-violet-500/20 group-hover:to-blue-500/20 group-hover:text-violet-700"
							}`}>
							{faq.icon}
						</div>
						<h3
							className={`font-medium text-lg transition-all duration-300 ${
								isOpen
									? "text-indigo-900 translate-x-2"
									: "text-gray-800 group-hover:text-indigo-900 group-hover:translate-x-2"
							}`}>
							{faq.question}
						</h3>
						<ChevronDown
							className={`w-5 h-5 ml-auto transition-all duration-500 ${
								isOpen
									? "rotate-180 text-cyan-600 scale-110"
									: "text-indigo-400 group-hover:text-cyan-600 group-hover:scale-110"
							}`}
						/>
					</div>

					<div
						className={`overflow-hidden transition-all duration-500 transform ${
							isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
						}`}>
						<div className="pl-[3.75rem] pr-4">
							{faq.answer.split("\n").map((line, index) => (
								<p
									key={index}
									className="text-indigo-900 text-[15px] leading-relaxed mb-2.5 transition-all duration-300">
									{line}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	};

	// Split FAQs dynamically into two columns
	const half = Math.ceil(faqs.length / 2);
	const firstColumn = faqs.slice(0, half);
	const secondColumn = faqs.slice(half);

	return (
		<section className="py-12 md:py-16 lg:py-20 relative overflow-hidden flex items-center">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-12 md:mb-16 lg:mb-20">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-blue-500 mb-6 leading-tight">
						Frequently{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-cyan-600 bg-clip-text text-transparent">
							Asked Questions
						</span>
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
						Everything you need to know about dental care and root canal
						treatments
					</p>
				</div>

				<div className="relative">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							{firstColumn.map((faq) => (
								<FAQItem key={faq.id} faq={faq} />
							))}
						</div>
						<div className="space-y-4">
							{secondColumn.map((faq) => (
								<FAQItem key={faq.id} faq={faq} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
