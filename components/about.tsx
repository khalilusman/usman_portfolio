"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        As a dedicated and results-driven Computer Science professional with over 3 years of hands-on experience in data science and AI, I specialize in building robust machine learning solutions across both structured and unstructured data domains. My expertise encompasses the full ML lifecycle—from data preprocessing and feature engineering to model training, optimization, and deployment—leveraging tools such as Python (NumPy, pandas, scikit-learn), TensorFlow, and SQL. I have successfully led and delivered end-to-end AI projects, including deep learning models for image classification and anomaly detection.

        In recent work, I’ve focused on agentic AI systems, designing intelligent AI chatbots and voice agents capable of handling dynamic conversations and real-time decision-making. These systems integrate NLP, speech recognition, and large language models to deliver high-performance, domain-specific automation for customer engagement and business operations.

        Grounded by a strong academic background in Computer Science and enhanced by multiple certifications in deep learning, I am passionate about solving complex problems and translating data insights into scalable, real-world applications. Known for identifying edge cases and enhancing model robustness, I am continuously driven by innovation and committed to advancing the frontiers of AI.

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and gardening. I also enjoy{" "}
        <span className="font-medium">learning new stuff</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and finance</span>. I'm also
        learning how to build businesses.
      </p>
    </motion.section>
  );
}
