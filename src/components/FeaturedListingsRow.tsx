"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Slide = {
  title: string;
  subtitle: string;
  img: string;
};

const BASE_SLIDES: Slide[] = [
  { title: "MOST CLICKED",      subtitle: "Urban Prime Plaza Premiere", img: "/images/photo1.png" },
  { title: "MOST WATCHLISTED",  subtitle: "Urban Prime Plaza Premiere", img: "/images/photo2.png" },
  { title: "HOTTEST LISTING",   subtitle: "Urban Prime Plaza Premiere", img: "/images/photo3.png" },
];

/** Built a deck for each card, rotating the base set so cards aren’t identical */
function buildDeck(offset: number, count = BASE_SLIDES.length): Slide[] {
  const arr: Slide[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(BASE_SLIDES[(i + offset) % BASE_SLIDES.length]);
  }
  return arr;
}

/** Single card/carousel */
function FeaturedCard({
  slides,
  autoRotateMs = 4000,
}: {
  slides: Slide[];
  autoRotateMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const safeSlides = useMemo(
    () => (slides.length ? slides : BASE_SLIDES),
    [slides]
  );

  useEffect(() => {
    //to  auto-rotate it
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, autoRotateMs);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [safeSlides.length, autoRotateMs]);

  // to pause on hover
  const pause = () => timer.current && clearInterval(timer.current);
  const resume = () => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, autoRotateMs);
  };

  const active = safeSlides[index];

  return (
    <div
      className="relative md:w-1/3 w-full h-64 rounded-2xl overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${active.img}-${index}`}
          initial={{ opacity: 0.0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={active.img}
            alt={active.title}
            fill
            className="object-cover"
            priority={true}
          />
          {/* subtle bottom gradient for legibility */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-xs font-semibold tracking-wide">{active.title}</p>
            <p className="text-lg font-extrabold leading-tight">
              {active.subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {safeSlides.map((_, dotIndex: number) => (
          <button
            key={dotIndex}
            aria-label={`Go to slide ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/80
              ${index === dotIndex ? "w-2.5 h-2.5 bg-white" : "w-2 h-2 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

/** The 3-card featured listing strip */
export default function FeaturedListing() {
  return (
    <div className="w-full flex md:flex-row flex-col gap-4 overflow-hidden">
      <FeaturedCard slides={buildDeck(0)} />
      <FeaturedCard slides={buildDeck(1)} />
      <FeaturedCard slides={buildDeck(2)} />
    </div>
  );
}
