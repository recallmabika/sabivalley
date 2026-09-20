"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryImages, galleryCategories } from "@/data/content";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isAutoShuffle, setIsAutoShuffle] = useState(true);

  const rawFiltered = useMemo(() => {
    return activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  // Maintain custom display order for animated random switching
  const [displayedImages, setDisplayedImages] = useState<typeof galleryImages>([]);

  useEffect(() => {
    setDisplayedImages(rawFiltered.slice(0, visibleCount));
  }, [rawFiltered, visibleCount]);

  // Periodically randomly swap positions between a large slot and a small slot for dynamic switching
  useEffect(() => {
    if (!isAutoShuffle || displayedImages.length < 3) return;

    const timer = setInterval(() => {
      setDisplayedImages(prev => {
        if (prev.length < 2) return prev;
        const copy = [...prev];
        // Pick one index from the featured/large slots (e.g. index 0 or index 6)
        const featuredSlots = [0, 5].filter(idx => idx < copy.length);
        const sourceIdx = featuredSlots[Math.floor(Math.random() * featuredSlots.length)];
        
        // Pick any other random index to swap with
        let targetIdx = Math.floor(Math.random() * copy.length);
        while (targetIdx === sourceIdx && copy.length > 1) {
          targetIdx = Math.floor(Math.random() * copy.length);
        }

        const temp = copy[sourceIdx];
        copy[sourceIdx] = copy[targetIdx];
        copy[targetIdx] = temp;
        return copy;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoShuffle, displayedImages.length]);

  const hasMore = visibleCount < rawFiltered.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(10);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const manualShuffle = () => {
    setDisplayedImages(prev => {
      const copy = [...prev];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  };

  // Helper to determine size variant based on grid position:
  // Slots 0 and 5 are large spotlight tiles (span 2 cols and 2 rows on md+)
  // The rest are compact, tidy cards
  const isFeatured = (index: number) => index === 0 || index === 5;

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

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C27D38] mb-3">
            Visual Journey
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
            Safari Gallery
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-base sm:text-lg leading-7 text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
            Experience authentic moments captured at Chipinge Safari Area. Cards dynamically rearrange to highlight different perspectives.
          </motion.p>
        </motion.div>

        {/* Category Filters & Shuffle Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/15">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-white text-[#1B3B2B] shadow-sm"
                    : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs">
            <button
              onClick={manualShuffle}
              className="px-3 py-1.5 bg-white/10 border border-white/20 hover:border-white/40 text-white/80 hover:text-white rounded-md transition-colors shadow-sm font-medium"
              title="Re-shuffle positions"
            >
              Shuffle Order
            </button>
            <button
              onClick={() => setIsAutoShuffle(!isAutoShuffle)}
              className={`px-3 py-1.5 rounded-md transition-colors font-medium border ${
                isAutoShuffle
                  ? "bg-white/15 text-white border-white/30"
                  : "bg-white/5 text-white/50 border-white/10"
              }`}
            >
              {isAutoShuffle ? "Auto-Shuffle: Active" : "Auto-Shuffle: Paused"}
            </button>
          </div>
        </div>

        {/* Dynamic Bento Grid (Few Big, Many Small with Smooth Layout Transitions) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]"
        >
          <AnimatePresence>
            {displayedImages.map((image, index) => {
              const large = isFeatured(index);
              return (
                <motion.div
                  layout
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{
                    layout: { type: "spring", stiffness: 220, damping: 28 },
                    opacity: { duration: 0.3 }
                  }}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-gray-100 ${
                    large
                      ? "sm:col-span-2 sm:row-span-2 min-h-[320px]"
                      : "col-span-1 row-span-1"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge for spotlight items */}
                  {large && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-[#1B3B2B]/80 backdrop-blur-sm text-white text-[11px] uppercase tracking-wider font-semibold rounded-md border border-white/15 shadow">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                    <p className={`text-white font-medium line-clamp-2 ${large ? "text-base sm:text-lg" : "text-xs sm:text-sm"}`}>
                      {image.alt}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                      <span className="text-white/70 text-[11px] uppercase tracking-wider">
                        {image.category}
                      </span>
                      <span className="text-[#C27D38] text-xs uppercase tracking-wider font-semibold">
                        View
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Scalability Controls: Load More / Counter */}
        <div className="mt-12 text-center flex flex-col items-center gap-4">
          <p className="text-sm text-white/60">
            Showing <span className="font-semibold text-white">{ displayedImages.length}</span> of{" "}
            <span className="font-semibold text-white">{rawFiltered.length}</span> photos
          </p>

          <div className="flex items-center gap-4">
            {hasMore && (
              <button
                onClick={loadMore}
                className="px-8 py-3.5 bg-white hover:bg-white/90 text-[#1B3B2B] font-medium text-sm rounded-lg transition-all shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Load More Photos
              </button>
            )}

            {visibleCount > 9 && (
              <button
                onClick={() => setVisibleCount(9)}
                className="px-6 py-3.5 bg-transparent border border-white/30 hover:border-white/50 text-white font-medium text-sm rounded-lg transition-colors"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white text-3xl font-light transition-colors z-50 bg-black/40 hover:bg-black/60 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close"
            >
              ×
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
                  className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {selectedImage.alt}
                </p>
                <p className="text-white/60 text-sm mt-1">
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
