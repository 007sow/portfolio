// src/components/NavBar.jsx

"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./ToggleButton";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";

function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    // Projects is intentionally hidden from navigation per request.
    // {
    //   name: "Projects",
    //   link: "/projects",
    // },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      setIsChecked(true);
    } else {
      root.classList.remove("dark");
      setIsChecked(false);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setIsChecked((prev) => !prev);
  };

  const handleItemClick = () => {
    // Handle any additional logic when nav items are clicked
  };

  // Close the mobile menu automatically when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="">
      <div className="relative w-full">
        <Navbar isBlurred={false} isMenuOpen={isMobileMenuOpen} className="z-[999]">
          {/* Desktop Navigation */}
          <NavBody className="font-satoshi">
            <div className="flex items-center">
              <Link
                to="/"
                className="relative z-20 mr-4 flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-stone-950 dark:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-white/80 font-clash text-xs text-stone-950 dark:border-white/10 dark:bg-white/10 dark:text-white">
                  SS
                </span>
                <span className="text-base">Sowmith</span>
              </Link>
            </div>

            <NavItems items={navItems} onItemClick={handleItemClick} />

            <div className="flex items-center">
              <Switch
                handleThemeChange={handleThemeChange}
                isChecked={isChecked}
              />
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <Link
                to="/"
                className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm text-black dark:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-white/80 font-clash text-xs text-stone-950 dark:border-white/10 dark:bg-white/10 dark:text-white">
                  SS
                </span>
                <span className="font-satoshi text-lg font-semibold">Sowmith</span>
              </Link>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors block py-2"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  Theme
                </span>
                <Switch
                  handleThemeChange={handleThemeChange}
                  isChecked={isChecked}
                />
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
