"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkName: typeof links[number]["name"]) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop floating pill nav — unchanged from before, only visible md+ */}
      <motion.div
        className="hidden md:block fixed top-6 left-1/2 h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />
      <nav className="hidden md:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0">
        <ul className="flex w-[initial] flex-nowrap items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile compact header with hamburger toggle — only visible below md */}
      <motion.div
        className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/85 backdrop-blur-md border-b border-white/40 shadow-sm dark:bg-gray-950/85 dark:border-black/40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between h-full px-5">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Usman Khalil
          </span>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition"
          >
            {isMobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown menu — slides down from under the header when open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop — tapping outside closes the menu */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Dropdown menu */}
            <motion.div
              className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg z-50 dark:bg-gray-950/95 dark:border-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col py-2">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      className={clsx(
                        "block px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-100 transition dark:text-gray-300 dark:hover:bg-gray-800",
                        {
                          "text-gray-950 bg-gray-50 dark:text-white dark:bg-gray-900":
                            activeSection === link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
