"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { activities } from "@/data/content";

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

export default function Attractions() {
  return (
    <section id="experiences" className="bg-sand py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C27D38] mb-3">
            What Awaits You
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading text-[#1B3B2B] mb-6">
            Wilderness Experiences
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#1B3B2B]/80">
            Immerse yourself in the untamed beauty of Chipinge Safari Area. From thrilling game drives to peaceful birdwatching, discover the perfect adventure for your safari journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
