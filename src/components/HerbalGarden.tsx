"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HerbalGarden() {
  const highlights = [
    {
      title: "Indigenous Aloes & Succulents",
      description:
        "Drought-resilient lowveld species cultivated in natural stone-lined beds, showcasing species celebrated for ancestral healing and wellness.",
    },
    {
      title: "Ancestral Herbal Wisdom",
      description:
        "Preserving Zimbabwe's living botanical pharmacopeia with stone-mounted field identification plaques and traditional plant lore.",
    },
    {
      title: "Botanical Conservation",
      description:
        "Protecting rare and endemic plant species from habitat loss through active seed collection, cultivation, and low-impact sanctuary management.",
    },
    {
      title: "Guided Botanical Walks",
      description:
        "Ranger and herbalist-guided tours walking along stone trails, teaching visitors and youth to recognize native plant varieties.",
    },
  ];

  return (
    <section id="garden" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-black/5">
              <Image
                src="/images/safari/medicinal-garden-aloes.jpg"
                alt="Medicinal and Herbal Garden Aloes at Chipinge Safari Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#C27D38] text-xs font-semibold uppercase tracking-wider mb-2">
                  Living Sanctuary
                </span>
                <p className="font-heading text-xl font-bold">Indigenous Botanical Reserve</p>
                <p className="text-sm text-gray-200">Stone-terraced garden beds nestled in the Sabi Valley ecosystem</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/safari/herbal-garden-path.jpg"
                  alt="Herbal Garden Walkway and River Basin"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/safari/visitor-gardens.jpg"
                  alt="Visitor Exploring the Safari Garden Pathways"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Educational Narrative & Pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6"
          >
            <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C27D38] mb-3">
              Botanical Heritage
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Medicinal & Herbal Garden
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-white/80 leading-relaxed mb-8">
              Deep in the South East Lowveld, ancient trees and indigenous plants have nourished, healed, and sustained local communities for centuries. The Chipinge Safari Area Medicinal Garden serves as an open-air laboratory and living conservatory—preserving native medicinal flora, educating visiting school groups, and safeguarding traditional ecological knowledge for future generations.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-5 rounded-xl border border-white/20 hover:border-white/40 transition-colors flex flex-col justify-start bg-white/5"
                >
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
