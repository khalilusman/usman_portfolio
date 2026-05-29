"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const halfIndex = Math.ceil(skillsData.length / 2);
  const row1 = skillsData.slice(0, halfIndex);
  const row2 = skillsData.slice(halfIndex);

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[68rem] scroll-mt-28 text-center sm:mb-40 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="overflow-hidden mt-8 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 — scrolls left */}
        <div className="flex gap-4 w-max animate-marquee-left">
          {[...row1, ...row1].map((skill, index) => (
            <SkillPill key={`row1-${index}`} skill={skill} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-4 w-max animate-marquee-right">
          {[...row2, ...row2].map((skill, index) => (
            <SkillPill key={`row2-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function SkillPill({ skill }: { skill: string }) {
  return (
    <span className="bg-white borderBlack rounded-full px-5 py-3 text-sm sm:text-base whitespace-nowrap dark:bg-white/10 dark:text-white/80 shrink-0">
      {skill}
    </span>
  );
}
