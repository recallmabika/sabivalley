"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1B3B2B]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/safari/giraffes-waterhole.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero1.mp4" type="video/mp4" />
        </video>
        {/* Original subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto pt-24 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-start"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-[#FDFCFA] mb-6 leading-tight drop-shadow-md text-left"
          >
            Chipinge Safari Area
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#F4EFEA]/90 mb-8 max-w-2xl text-left leading-relaxed"
          >
            Discover the untamed beauty of the South East Lowveld. Join us in our mission of learning, discovery, and action to preserve this vital ecosystem for generations to come.
          </motion.p>

          {/* Motto + CTA buttons — inline row on large screens */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#F4EFEA] font-medium text-left">
              Nurturing Today. Protecting Tomorrow. In Harmony with Nature.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start lg:items-center shrink-0">
              <Link
                href="#experiences"
                className="px-8 py-4 bg-[#C27D38] hover:bg-[#8C4F2B] text-[#FDFCFA] font-medium rounded transition-colors shadow-lg whitespace-nowrap"
              >
                Explore Experiences
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-[#FDFCFA] hover:bg-[#FDFCFA]/10 text-[#FDFCFA] font-medium rounded transition-colors whitespace-nowrap"
              >
                Plan Your Visit
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-white/20 py-4 max-w-3xl">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl font-heading text-[#FDFCFA] mb-1">8</span>
            <span className="text-sm uppercase tracking-wider text-[#F4EFEA]/80">Wilderness Experiences</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl font-heading text-[#FDFCFA] mb-1">200+</span>
            <span className="text-sm uppercase tracking-wider text-[#F4EFEA]/80">Bird Species</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-4xl font-heading text-[#FDFCFA] mb-1">ZIMPARKS</span>
            <span className="text-sm uppercase tracking-wider text-[#F4EFEA]/80">Protected Area</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
