"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteInfo } from "@/data/content";

export default function EducationCentre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="bg-[#1B3B2B] text-[#FDFCFA] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
        >
          {/* Left Column: Education & Conservation + Feature Image + 2 Cards */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C27D38] pt-2">
                Education &amp; Conservation
              </p>
              <div className="relative h-[380px] sm:h-[460px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/safari/education-groundbreaking.jpg"
                  alt="Education Centre Groundbreaking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Two Cards after the Image - Horizontally Inline with Right Cards */}
            <div className="grid grid-cols-2 gap-4 mt-auto pt-4">
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <p className="font-bold text-[#C27D38] text-2xl font-heading">Multiple</p>
                <p className="text-xs text-[#F4EFEA]/70 uppercase tracking-wider mt-1">Youth Programmes</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <p className="font-bold text-[#C27D38] text-2xl font-heading">Enduring</p>
                <p className="text-xs text-[#F4EFEA]/70 uppercase tracking-wider mt-1">Years of Legacy</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content + 2 Cards */}
          <motion.div variants={containerVariants} className="flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight text-[#FDFCFA]">
                  Environmental Education Centre
                </h2>
                <p className="text-[#C27D38] italic text-xl border-l-4 border-[#C27D38] pl-4 py-1">
                  &ldquo;{siteInfo.motto}&rdquo;
                </p>
              </div>

              <p className="text-[#F4EFEA] text-lg leading-relaxed opacity-90">
                The AWARE / ZIMPARKS Environmental Education Centre represents a critical investment in the future of conservation. By inspiring and educating the next generation, we foster a deep understanding of our natural heritage and the urgent need to protect it for years to come.
              </p>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
                <h3 className="text-[#C27D38] font-semibold text-lg">Groundbreaking Milestone</h3>
                <p className="text-[#FDFCFA]/80 text-sm">
                  <span className="font-medium text-[#F4EFEA]">Date:</span> {siteInfo.groundbreaking.date}
                </p>
                <p className="text-[#FDFCFA]/80 text-sm leading-relaxed">
                  <span className="font-medium text-[#F4EFEA]">Officiated By:</span> {siteInfo.groundbreaking.minister} ({siteInfo.groundbreaking.ministerTitle}) &amp; {siteInfo.groundbreaking.directorGeneral} ({siteInfo.groundbreaking.directorGeneralTitle})
                </p>
              </div>
            </div>

            {/* Impact Grid — Top 2 cards - Horizontally Inline with Left Cards */}
            <div className="grid grid-cols-2 gap-4 mt-auto pt-4">
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <p className="font-bold text-[#C27D38] text-2xl font-heading">Growing</p>
                <p className="text-xs text-[#F4EFEA]/70 uppercase tracking-wider mt-1">Schools Engaged</p>
              </div>
              <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                <p className="font-bold text-[#C27D38] text-2xl font-heading">Regional</p>
                <p className="text-xs text-[#F4EFEA]/70 uppercase tracking-wider mt-1">Conservation Partners</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row: 3 Smaller Photos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { src: "/images/safari/students-education-centre.jpg", alt: "Students at Education Centre" },
            { src: "/images/safari/ranger-outdoor-class.jpg", alt: "Ranger Outdoor Class" },
            { src: "/images/safari/youth-conservation.jpg", alt: "Youth Conservation Activities" }
          ].map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
