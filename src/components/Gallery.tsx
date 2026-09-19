"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryImages, galleryCategories } from "@/data/content";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[#1B3B2B]/10 px-3 py-1 text-sm font-medium text-[#1B3B2B] ring-1 ring-inset ring-[#1B3B2B]/20 mb-6">
            Visual Journey
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1B3B2B] sm:text-4xl font-heading">
            Safari Gallery
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Authentic moments captured across Chipinge Safari Area — showcasing the wildlife, the education centre, indigenous flora, and our conservation milestones.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#1B3B2B] text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1B3B2B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn className="text-[#C27D38] w-8 h-8 mb-2" />
                  <p className="text-white font-medium text-sm px-3 py-1 bg-black/40 rounded backdrop-blur-sm">
                    {image.alt}
                  </p>
                  <span className="text-[#C27D38] text-xs uppercase tracking-wider font-semibold mt-2">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-50 p-2 rounded-full bg-black/40 hover:bg-black/60"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-grow flex items-center justify-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-base md:text-lg font-medium">
                  {selectedImage.alt}
                </p>
                <p className="text-[#C27D38] text-xs font-semibold uppercase tracking-wider mt-1">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
