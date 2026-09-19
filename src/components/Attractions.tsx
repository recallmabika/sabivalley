"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { activities } from "@/data/content";
import { 
  Leaf, 
  GraduationCap, 
  Tent, 
  Footprints, 
  Binoculars, 
  Bird, 
  Fish, 
  Flame 
} from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Leaf":
      return <Leaf className="w-5 h-5 text-[#C27D38]" />;
    case "GraduationCap":
      return <GraduationCap className="w-5 h-5 text-[#C27D38]" />;
    case "Tent":
      return <Tent className="w-5 h-5 text-[#C27D38]" />;
    case "Footprints":
      return <Footprints className="w-5 h-5 text-[#C27D38]" />;
    case "Binoculars":
      return <Binoculars className="w-5 h-5 text-[#C27D38]" />;
    case "Bird":
      return <Bird className="w-5 h-5 text-[#C27D38]" />;
    case "Fish":
      return <Fish className="w-5 h-5 text-[#C27D38]" />;
    case "Flame":
      return <Flame className="w-5 h-5 text-[#C27D38]" />;
    default:
      return <Leaf className="w-5 h-5 text-[#C27D38]" />;
  }
};

export default function Attractions() {
  return (
    <section id="experiences" className="bg-sand py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#C27D38]/10 text-[#C27D38] text-sm font-semibold tracking-wider uppercase mb-4">
            What Awaits You
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-[#1B3B2B] mb-6">
            Wilderness Experiences
          </h2>
          <p className="text-lg text-[#1B3B2B]/80">
            Immerse yourself in the untamed beauty of Chipinge Safari Area. From thrilling game drives to peaceful birdwatching, discover the perfect adventure for your safari journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sand rounded-lg">
                    {getIcon(activity.icon)}
                  </div>
                  <h3 className="font-heading text-xl text-[#1B3B2B]">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-[#1B3B2B]/70 text-sm flex-grow">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
