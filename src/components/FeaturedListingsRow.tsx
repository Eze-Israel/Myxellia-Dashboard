"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "MOST CLICKED",
    subtitle: "Urban Prime Plaza Premiere",
    img: "/images/photo1.png",
  },
  {
    id: 2,
    title: "MOST WATCHLISTED",
    subtitle: "Urban Prime Plaza Premiere",
    img: "/images/photo2.png",
  },
  {
    id: 3,
    title: "HOTTEST LISTING",
    subtitle: "Urban Prime Plaza Premiere",
    img: "/images/photo3.png",
  },
];

export default function FeaturedSlider() {
  const [current, setCurrent] = useState(0);

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex gap-4 overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.id} className="relative w-1/3 h-64 rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            {current === index && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-semibold">{slide.title}</p>
                  <p className="text-sm font-bold">{slide.subtitle}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrent(dotIndex)}
                className={`w-2 h-2 rounded-full ${
                  current === dotIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
