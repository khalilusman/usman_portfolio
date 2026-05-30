import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imgA from "@/public/a.png";
import imgB from "@/public/b.png";
import imgC from "@/public/c.png";
import imgD from "@/public/d.png";
import imgE from "@/public/e.png";
import imgF from "@/public/f.png";
import imgG from "@/public/g.png";
import imgH from "@/public/h.png";
import imgI from "@/public/i.png";
import imgJ from "@/public/j.png";
import imgK from "@/public/k.png";
import imgL from "@/public/l.png";
import imgM from "@/public/m.png";
import imgN from "@/public/n.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python / ML Developer",
    location: "Lahore, Punjab",
    description:
      "Building AI automation with CrewAI and FastAPI, integrating RAG pipelines into multi-agent LangGraph workflows. Optimizing async execution for faster inference, deploying via Azure and Docker.",
    icon: React.createElement(FaPython),
    date: "Jul 2025 - Present",
  },
  {
    title: "AI Engineer & Full-Stack Developer",
    location: "Freelance",
    description:
      "Building production AI systems for international clients: RAG pipelines, fine-tuned LLMs, agentic workflows with LangGraph and CrewAI, plus full-stack delivery with React, Next.js, and cloud deployment.",
    icon: React.createElement(FaReact),
    date: "Jan 2023 - Present",
  },
  {
    title: "Web Development Intern",
    location: "Sargodha, Punjab",
    description:
      "PHP full-stack development on real-world client projects. Built and maintained web applications using HTML, CSS, and backend workflows alongside a senior development team.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Jul 2024",
  },
] as const;

export const projectsData = [
  {
    title: "EVDS Diamond — Full SaaS Platform",
    description:
      "Built and deployed a complete SaaS platform for a Spanish diamond-disc manufacturer. Two separate apps on different domains share one API: a customer activation portal where workshops scan a QR code on each disc to activate it within strict 7-day windows, and an internal staff dashboard for label generation, monitoring, and support. Runs in 8 languages and tracks every cut in real time.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Nginx", "Hetzner", "Let's Encrypt"],
    imageUrls: [imgA, imgB],
    liveUrl: "https://nexus.evdsdiamond.com",
  },
  {
    title: "Insurance Policy RAG Chatbot",
    description:
      "Production RAG system for a US insurance company covering 50+ policy documents. Users ask about a medicine or procedure and the bot returns exact coverage requirements. Built with parent-child chunking, hybrid search on Pinecone, and CrewAI agents orchestrating GPT-4o. Cut query response time from 2 minutes to 30 seconds by parallelising retrieval with FastAPI multi-threading.",
    tags: ["Python", "FastAPI", "CrewAI", "OpenAI GPT-4o", "Pinecone", "Hybrid Search", "RAG"],
    imageUrls: [imgC, imgD],
  },
  {
    title: "UBO Compliance Automation (n8n)",
    description:
      "Replaced a 7-step manual workflow with a single n8n agent for a KYC compliance team serving global banks. The agent receives the bank email, searches internal records, scrapes Chinese-language sources (Baidu, Aiqicha, GladTrust), compiles a UBO report with AI, updates the database, and emails the result back. Per-lookup time dropped from 30-40 minutes to under 2 minutes at the same accuracy.",
    tags: ["n8n", "OpenAI", "AI Agents", "Web Scraping", "Email Automation", "KYC/AML"],
    imageUrls: [imgE, imgF],
  },
  {
    title: "AI Chatbot for Financial & Stock Market",
    description:
      "Real-time financial assistant that handles stock and market queries through conversational AI. Built with Agno agents for tool orchestration, yfinance for live market data, Groq for low-latency inference, and DeepSeek as the reasoning model. Wrapped in a polished React frontend with Framer Motion. Handles dynamic queries across stocks, market trends, and financial news with sub-second response times.",
    tags: ["Agno", "Groq", "DeepSeek", "yfinance", "React", "Framer Motion"],
    imageUrls: [imgG, imgH],
  },
  {
    title: "Plant Disease Detection & Treatment",
    description:
      "Final-year project using a CNN to analyse plant leaf images, classify disease type, and recommend treatment. Built on EfficientNet-B0 fine-tuned for plant pathology, served through a FastAPI backend with a React frontend. Treatment suggestions are generated via OpenAI tailored to the detected condition. Tested across multiple plant species and disease categories with strong real-world accuracy on field-captured images.",
    tags: ["React", "TensorFlow", "Keras", "FastAPI", "EfficientNet-B0", "OpenAI"],
    imageUrls: [imgI, imgJ],
  },
  {
    title: "VeriCare — Health Episode Tracker",
    description:
      "Patient-facing health tracker built for a US doctor practice. Patients log episodes of illness with what happened, when, and how it resolved, and keep a personal medical diary across visits. Unusual design constraint: zero backend. All data lives in browser localStorage for full privacy, with no server roundtrip. Built end-to-end in React and deployed on Vercel.",
    tags: ["React", "LocalStorage", "Tailwind CSS", "Vercel"],
    imageUrls: [imgK, imgL],
    liveUrl: "https://verticare.vercel.app/",
  },
  {
    title: "Liver Cancer Detection (Research)",
    description:
      "Research project on binary classification of Hepatocellular Carcinoma from medical imaging. Benchmarked three modern architectures (EfficientNet-B0, TinyViT, MobileViTv2) against each other for accuracy, model size, and inference speed. Focus on edge-case robustness in low-contrast scans and class imbalance, with a full evaluation pipeline including confusion matrices, ROC curves, and per-class precision metrics.",
    tags: ["CNN", "TensorFlow", "Keras", "EfficientNet-B0", "TinyViT", "MobileViTv2"],
    imageUrls: [imgM, imgN],
  },
] as const;

export const skillsData = [
  // AI / ML — primary
  "Python",
  "PyTorch",
  "TensorFlow",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "RAG Pipelines",
  "LLM Fine-tuning",
  "MCP",
  "Agentic AI",
  "Qdrant",
  "Pinecone",
  "n8n",
  "NLP",
  "Voice agents",
  // Full-stack — supporting
  "React",
  "Next.js",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "MongoDB",
  // Infrastructure
  "Docker",
  "AWS",
  "Azure",
  "CI/CD",
  "Git",
] as const;
