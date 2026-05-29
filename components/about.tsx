"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

// Animation variants for staggered paragraph fade-in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] px-4 text-justify leading-8 sm:mb-40 scroll-mt-28 hyphens-auto"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="text-center">
        <SectionHeading>About me</SectionHeading>
      </div>

      <motion.p className="mb-4" variants={paragraphVariants}>
        I&apos;m an AI engineer with 4 years of experience building
        production-grade ML and agentic AI systems. My
        focus is the applied LLM stack: RAG pipelines,{" "}
        LLM fine-tuning for domain-specific tasks, and
        multi-agent workflows using LangGraph, CrewAI,
        and the Model Context Protocol (MCP). I&apos;ve also shipped voice
        agents and intelligent chatbots that handle real customer conversations
        end to end.
      </motion.p>

      <motion.p className="mb-4" variants={paragraphVariants}>
        Day to day, I work with Python, PyTorch, Hugging Face, and LangChain,
        paired with vector databases like Qdrant and Pinecone for retrieval. I
        take systems all the way to production: containerizing services with{" "}
        Docker, building CI/CD pipelines, and deploying
        to AWS and Azure with an eye on cost and
        latency.
      </motion.p>

      <motion.p className="mb-4" variants={paragraphVariants}>
        I&apos;m also a full-stack developer (React, Next.js, Node.js), which
        means I can wrap the models I build into actual products people use
        instead of handing off a notebook and walking away.
      </motion.p>

      <motion.p className="mb-4" variants={paragraphVariants}>
        The way I work is consistent and disciplined. I show up every
        day, ship in small steady increments rather than big unreliable bursts,
        and I&apos;m always trying to learn the next thing, whether that&apos;s
        a new framework, a new architecture pattern, or a sharper way to think
        about a problem. Most of what I enjoy is the figuring-out part: taking
        a vague problem, breaking it down, and getting to a clean solution.
      </motion.p>

      <motion.p className="mb-4" variants={paragraphVariants}>
        What sets me apart isn&apos;t any one tool in the stack. It&apos;s that
        I treat AI work as engineering, not magic. I
        care about whether the system actually runs in production, whether it
        stays cheap to operate, and whether the people using it get real value
        back. Plenty of people can build a demo. Fewer can ship something that
        holds up.
      </motion.p>

      <motion.p variants={paragraphVariants}>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games and gardening. I&apos;m also{" "}
        <span className="font-medium">learning history and finance</span>, and
        picking up how to build businesses on the side.
      </motion.p>
    </motion.section>
  );
}
