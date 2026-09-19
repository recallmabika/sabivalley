"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { activities } from "@/data/content";

export default function Attractions() {
  return (
    <section id="experiences" className="bg-sand py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C27D38] mb-3">
            What Awaits You
          </p>
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-heading text-xl text-[#1B3B2B] mb-3">
                  {activity.title}
                </h3>
                <p className="text-[#1B3B2B]/70 text-sm flex-grow leading-relaxed">
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
