"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrls: readonly [any, any];
  liveUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrls,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden relative sm:min-h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          {liveUrl && (
            <div className="mt-5">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black dark:text-white/80 dark:hover:text-white transition"
              >
                Visit Live <FiExternalLink className="text-base" />
              </a>
            </div>
          )}
        </div>

        {/* Mobile: image A only, full width below text */}
        <div className="relative w-full h-56 sm:hidden">
          <Image
            src={imageUrls[0]}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Desktop: fan-out stack */}
        <div className="hidden sm:block absolute top-8 -right-32 w-[32rem] h-[22rem]">
          {/* Image B sits behind at rest, fans out and on top on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
            style={{ zIndex: isHovered ? 20 : 0 }}
            animate={
              isHovered
                ? { x: 80, y: -30, rotate: 8, scale: 1 }
                : { x: 0, y: 0, rotate: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          >
            <Image
              src={imageUrls[1]}
              alt={`${title} preview alt`}
              fill
              className="object-cover"
              sizes="32rem"
            />
          </motion.div>

          {/* Image A sits on top at rest, shifts slightly on hover and drops behind */}
          <motion.div
            className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
            style={{ zIndex: isHovered ? 10 : 10 }}
            animate={
              isHovered
                ? { x: -30, y: 15, rotate: -3, scale: 0.97 }
                : { x: 0, y: 0, rotate: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          >
            <Image
              src={imageUrls[0]}
              alt={`${title} preview`}
              fill
              className="object-cover"
              sizes="32rem"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
