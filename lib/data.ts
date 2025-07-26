import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import plantdisease from "@/public/Plant treatment.png";
import liver from "@/public/liver.png";
import stock from "@/public/stock.png";

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
    title: "Back-End Developer Intern",
    location: "Punjab,Pakistan",
    description:
      "I worked as a back-end developer for 3 months University campus. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug,2023 - Oct,2023",
  },
  {
    title: "AI/ML Developer/Researcher",
    location: "Punjab,Pakistan",
    description:
      "I'm now a full-stack developer and  AI engineer working as a freelancer. My stack includes React, TypeScript , Machine Learning and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Plant Disease Detection and Treatment (FYP)",
    description:
      "The project uses a Convolutional Neural Network (CNN) to analyze plant images  helath and provide treatment for them.",
    tags: ["React",  "Tensorflow", "keras", "FastAPI", "Efficient NetB-0","OpenAI"],
    imageUrl: plantdisease,
  },
  {
    title: "Liver Cancer Detection using Deep Learning (Research Project)",
    description:
      "Developed a binary classification system using EfficientNet-B0, TinyViT, and MobileViTv2 models to detect Hepatocellular.",
    tags: [  "CNN", "Tensorflow", "Keras"],
    imageUrl: liver,
  },
  {
    title: "AI Chatbot for Financial & Stock Market",
    description:
      "Developed an AI chatbot using Groq, Agno, and DeepSeek for financial and stock-related queries.",
    tags: ["Agno", "Grok", "yfinance", "React.js","Framer"],
    imageUrl: stock,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "React.js",
  "Python", 
  "Django",
  "SQL",
  "Git",
  "AI/ML",
  "Tensorflow",
  "Keras",
  "Data Analysis",
  "Automation",
  "Agentic AI"


] as const;
