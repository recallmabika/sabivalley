"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1B3B2B]">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/safari/giraffes-waterhole.jpg"
          className="w-full h-full object-cover scale-105 pointer-events-none"
        >
          <source src="/videos/hero-safari.mp4" type="video/mp4" />
          <Image
            src="/images/safari/giraffes-waterhole.jpg"
            alt="Giraffes at Chipinge Safari Area waterhole"
            fill
            priority
            quality={85}
            className="object-cover"
          />
        </video>
        {/* Cinematic Multi-stop Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/80" />
      </div>

      {/* Video Controls (Bottom Right) */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/15">
        <button
          onClick={togglePlay}
          className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={toggleMute}
          className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.span
            variants={itemVariants}
            className="uppercase tracking-widest text-xs sm:text-sm md:text-base font-semibold text-[#F4EFEA] mb-4 sm:mb-6 bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10"
          >
            ZIMPARKS • South East Lowveld Region
          </motion.span>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-heading text-[#FDFCFA] mb-6 leading-tight drop-shadow-lg"
          >
            Chipinge Safari Area
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[#F4EFEA] mb-6 font-medium max-w-3xl drop-shadow"
          >
            Nurturing Today. Protecting Tomorrow. In Harmony with Nature.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-[#F4EFEA]/90 mb-10 max-w-2xl drop-shadow"
          >
            Discover the untamed beauty of the South East Lowveld. Join us in our mission of learning, discovery, and action to preserve this vital ecosystem for generations to come.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#experiences"
              className="px-8 py-4 bg-[#C27D38] hover:bg-[#8C4F2B] text-[#FDFCFA] font-medium rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Experiences
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-[#FDFCFA] font-medium rounded-lg transition-all"
            >
              Plan Your Visit
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-24 md:pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 bg-black/40 backdrop-blur-md border border-white/15 rounded-xl p-6 md:divide-x divide-white/20 shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl sm:text-4xl font-heading text-[#FDFCFA] mb-1">8</span>
            <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F4EFEA]/80">Wilderness Experiences</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl sm:text-4xl font-heading text-[#FDFCFA] mb-1">200+</span>
            <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F4EFEA]/80">Bird Species</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-3xl sm:text-4xl font-heading text-[#FDFCFA] mb-1">ZIMPARKS</span>
            <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F4EFEA]/80">Protected Area</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-[#FDFCFA]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
