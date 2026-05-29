import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import LenisProvider from "@/components/lenis-provider";

const inter = Inter({ subsets: ["latin"] });

// ⚠️ Replace this with your actual deployed domain once live.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfoliio-gold.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Usman Khalil — AI Engineer & Full-Stack Developer",
    template: "%s | Usman Khalil",
  },
  description:
    "AI engineer with 4 years of experience building production-grade machine learning and agentic AI systems — RAG pipelines, LLM fine-tuning, multi-agent workflows, and AI automation. Full-stack capable with React, Next.js, and Node.js.",
  applicationName: "Usman Khalil Portfolio",
  authors: [{ name: "Muhammad Usman Khalil", url: SITE_URL }],
  creator: "Muhammad Usman Khalil",
  publisher: "Muhammad Usman Khalil",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Fine-tuning",
    "RAG Pipelines",
    "Agentic AI",
    "AI Automation",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "Vector Databases",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Freelance AI Developer",
    "Muhammad Usman Khalil",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Usman Khalil — AI Engineer",
    title: "Usman Khalil — AI Engineer & Full-Stack Developer",
    description:
      "Building production AI systems: RAG, LLM fine-tuning, agentic workflows, and AI automation. 4+ years shipping ML + full-stack solutions.",
    images: [
      {
        url: "/og-image.png", // 1200x630, place in /public
        width: 1200,
        height: 630,
        alt: "Muhammad Usman Khalil — AI Engineer & Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Khalil — AI Engineer & Full-Stack Developer",
    description:
      "AI engineer specializing in RAG, fine-tuning, and agentic systems. 4+ years building production ML.",
    images: ["/og-image.png"],
    creator: "@your_x_handle", // replace with your actual X handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD structured data — feeds Google's knowledge panel for searches on your name.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Usman Khalil",
  alternateName: "Usman Khalil",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "AI Engineer & Full-Stack Developer",
  description:
    "AI engineer with 4+ years of experience in machine learning, RAG pipelines, LLM fine-tuning, and agentic AI systems.",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Agentic AI",
    "Full Stack Development",
    "Cloud Deployment",
  ],
  sameAs: [
    "https://www.linkedin.com/in/khalilusman70/",
    "https://github.com/khalilusman",
    // add X, Fiverr profile URL, etc.
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#bae6fd] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-3xl sm:w-[68.75rem] dark:bg-[#075985]"></div>
        <div className="bg-[#e0f2fe] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-3xl sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#0c4a6e]"></div>

        <LenisProvider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </LenisProvider>
      </body>
    </html>
  );
}