import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagneticButton } from "../../lib/useMagneticButton";

import companyLogo from "../../assets/onlysloth.png";

// Define types for menu items
interface MenuItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { ref: ctaRef, x: ctaX, y: ctaY } = useMagneticButton(0.4);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 30);
    };

    const handlePathChange = (): void => {
      setCurrentPath(window.location.pathname);
    };

    const checkMobile = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("popstate", handlePathChange);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", handlePathChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const isActivePage = (path: string): boolean => {
    if (
      path === "/Services/customWebDevlopment" ||
      path === "/Services/mobilebDevlopment" ||
      path === "/Services/onlineShoppingAppDevlopment"
    ) {
      return currentPath.includes("/Services/");
    }
    return (
      currentPath === path ||
      (path === "/aboutUs" && currentPath === "/aboutUs")
    );
  };

  const servicesSubmenu: MenuItem[] = [
    {
      label: "Custom Software Development",
      path: "/Services/customWebDevlopment",
    },
    {
      label: "Mobile Application Development",
      path: "/Services/mobilebDevlopment",
    },
    {
      label: "Online Shopping App Development",
      path: "/Services/onlineShoppingAppDevlopment",
    },
    {
      label: "CRM Software Development",
      path: "/Services/CrmSoftwareDvelopment",
    },
    { label: "Digital Marketing Services", path: "/Services/DigitalMarketing" },
    { label: "Website Development", path: "/Services/WebDevlopment" },
  ];

  const industrySubmenu: MenuItem[] = [
    { label: "Travel & Hospitality", path: "/Industry/TravelPage" },
    { label: "Banking & Finance", path: "/Industry/Banking" },
    { label: "Healthcare & Fitness", path: "/Industry/HealthCare" },
    { label: "Media & Entertainment", path: "/Industry/Media" },
    { label: "Food & Restaurant", path: "/Industry/Food" },
  ];

  const renderDropdown = (items: MenuItem[]): React.ReactElement => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.96 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "absolute",
          top: "calc(100% + 5px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.98)",
          borderRadius: "20px",
          backdropFilter: "blur(32px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "20px 0",
          minWidth: "280px",
          zIndex: 1000,
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {items.map(({ label, path }: MenuItem, index: number) => (
          <a
            key={index}
            href={path}
            className="block px-6 py-3.5 text-gray-800 font-medium text-[15px] no-underline tracking-tight
                       hover:text-[var(--color-accent-primary)] hover:translate-x-2 hover:border-l-[3px]
                       hover:border-[var(--color-accent-primary)]
                       hover:[background:linear-gradient(135deg,rgba(200,57,43,0.08)_0%,rgba(200,57,43,0.05)_100%)]
                       transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={() => setHoveredMenu(null)}
          >
            {label}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );

  const renderMobileDropdown = (items: MenuItem[]): React.ReactElement => (
    <div className="pl-5 bg-white/50 rounded-xl my-2 border border-[var(--color-accent-primary)]/10">
      {items.map(({ label, path }: MenuItem, index: number) => (
        <a
          key={index}
          href={path}
          className="block px-4 py-3 text-gray-700 no-underline font-medium text-sm transition-all duration-300"
          style={{
            fontFamily: "'Poppins', sans-serif",
            borderBottom:
              index < items.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {label}
        </a>
      ))}
    </div>
  );

  const handleLogoClick = (): void => {
    window.location.href = "/";
  };

  const handleCtaClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    console.log(event, "CTA button clicked");
  };

  const handleMenuLeave = (menuName: string) => {
    setTimeout(() => {
      setHoveredMenu((current) => (current === menuName ? null : current));
    }, 150);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating header bar */}
      <div
        className={`glass-nav fixed top-5 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between
                    px-5 py-2 rounded-[14px] max-w-[1250px] w-[calc(100%-40px)]
                    transition-shadow duration-300 font-[Plus_Jakarta_Sans,system-ui,sans-serif]
                    md:w-[calc(100%-40px)] sm:w-[calc(100%-32px)] sm:top-[10px] sm:px-4 sm:py-2`}
        style={{
          boxShadow: scrolled
            ? "0 20px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)"
            : "0 15px 35px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          onClick={handleLogoClick}
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={companyLogo}
              alt="MS"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="font-extrabold text-base tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #2d1b32 50%, #7f1d1d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Lazy Do
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center">
          {/* Home */}
          <a
            href="/"
            className={`relative flex items-center gap-1 px-3 py-1.5 rounded-[10px] no-underline font-semibold text-[13px] tracking-tight
                        transition-all duration-300 hover:-translate-y-0.5
                        ${isActivePage("/") ? "text-[var(--color-accent-primary)] bg-[rgba(200,57,43,0.1)]" : "text-gray-700 hover:text-[var(--color-accent-primary)]"}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={closeMobileMenu}
          >
            Home
            <AnimatePresence>
              {isActivePage("/") && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "var(--color-accent-primary)" }}
                  initial={false}
                />
              )}
            </AnimatePresence>
          </a>

          {/* About Us */}
          <a
            href="/aboutUs"
            className={`relative flex items-center gap-1 px-3 py-1.5 rounded-[10px] no-underline font-semibold text-[13px] tracking-tight
                        transition-all duration-300 hover:-translate-y-0.5
                        ${isActivePage("/aboutUs") ? "text-[var(--color-accent-primary)] bg-[rgba(200,57,43,0.1)]" : "text-gray-700 hover:text-[var(--color-accent-primary)]"}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About Us
            <AnimatePresence>
              {isActivePage("/aboutUs") && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "var(--color-accent-primary)" }}
                  initial={false}
                />
              )}
            </AnimatePresence>
          </a>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setHoveredMenu("Services")}
            onMouseLeave={() => !isMobile && handleMenuLeave("Services")}
          >
            <span
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-[10px] font-semibold text-[13px] tracking-tight
                          cursor-pointer transition-all duration-300 hover:-translate-y-0.5
                          ${isActivePage("/Services/") || hoveredMenu === "Services" ? "text-[var(--color-accent-primary)] bg-[rgba(200,57,43,0.1)]" : "text-gray-700 hover:text-[var(--color-accent-primary)]"}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Services
              <span
                className={`text-xs font-semibold transition-all duration-300
                            ${hoveredMenu === "Services" ? "rotate-180 text-[var(--color-accent-primary)]" : "text-gray-400"}`}
              >
                ▼
              </span>
              <AnimatePresence>
                {isActivePage("/Services/") && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "var(--color-accent-primary)" }}
                    initial={false}
                  />
                )}
              </AnimatePresence>
            </span>
            {hoveredMenu === "Services" && !isMobile && renderDropdown(servicesSubmenu)}
          </div>

          {/* Industry dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setHoveredMenu("Industry")}
            onMouseLeave={() => !isMobile && handleMenuLeave("Industry")}
          >
            <span
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-[10px] font-semibold text-[13px] tracking-tight
                          cursor-pointer transition-all duration-300 hover:-translate-y-0.5
                          ${isActivePage("/Industry/") || hoveredMenu === "Industry" ? "text-[var(--color-accent-primary)] bg-[rgba(200,57,43,0.1)]" : "text-gray-700 hover:text-[var(--color-accent-primary)]"}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Industry
              <span
                className={`text-xs font-semibold transition-all duration-300
                            ${hoveredMenu === "Industry" ? "rotate-180 text-[var(--color-accent-primary)]" : "text-gray-400"}`}
              >
                ▼
              </span>
              <AnimatePresence>
                {isActivePage("/Industry/") && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "var(--color-accent-primary)" }}
                    initial={false}
                  />
                )}
              </AnimatePresence>
            </span>
            {hoveredMenu === "Industry" && !isMobile && renderDropdown(industrySubmenu)}
          </div>

          {/* Blog */}
          <a
            href="/blogs"
            className={`relative flex items-center gap-1 px-3 py-1.5 rounded-[10px] no-underline font-semibold text-[13px] tracking-tight
                        transition-all duration-300 hover:-translate-y-0.5
                        ${isActivePage("/blogs") ? "text-[var(--color-accent-primary)] bg-[rgba(200,57,43,0.1)]" : "text-gray-700 hover:text-[var(--color-accent-primary)]"}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Blog
            <AnimatePresence>
              {isActivePage("/blogs") && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "var(--color-accent-primary)" }}
                  initial={false}
                />
              )}
            </AnimatePresence>
          </a>

          {/* Portfolio */}
          <a
            href="/portfolio"
            className={`relative flex items-center gap-1 px-3 py-1.5 rounded-[10px] no-underline font-semibold text-[13px] tracking-tight
                        transition-all duration-300 hover:-translate-y-0.5
                        ${isActivePage("/portfolio") ? "text-[var(--color-accent-primary)] bg-[rgba(200,57,43,0.1)]" : "text-gray-700 hover:text-[var(--color-accent-primary)]"}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Portfolio
            <AnimatePresence>
              {isActivePage("/portfolio") && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "var(--color-accent-primary)" }}
                  initial={false}
                />
              )}
            </AnimatePresence>
          </a>
        </nav>

        {/* Desktop CTA Button — magnetic */}
        <motion.a
          ref={ctaRef as React.RefObject<HTMLAnchorElement>}
          href="/contact"
          data-cursor="hover"
          style={{ x: ctaX, y: ctaY, display: "inline-flex" }}
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-white font-bold text-[13px] tracking-tight
                     cursor-pointer overflow-hidden transition-shadow duration-300 no-underline"
          onClick={handleCtaClick}
        >
          {/* Button background */}
          <span
            className="absolute inset-0 rounded-[10px]"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-primary) 0%, #ef4444 50%, #f87171 100%)",
              boxShadow: "0 4px 15px rgba(200,57,43,0.4)",
              zIndex: 0,
            }}
            aria-hidden="true"
          />
          <span className="relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Contact Us
          </span>
          <span className="relative z-10 text-sm font-extrabold">→</span>
        </motion.a>

        {/* Mobile Hamburger Toggle */}
        <button
          className="flex md:hidden bg-transparent border-none cursor-pointer p-2 rounded-lg
                     hover:bg-[rgba(200,57,43,0.1)] transition-all duration-300 relative z-[1001]"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-[18px] relative flex flex-col justify-between">
            <span
              className="w-full h-0.5 bg-gray-700 rounded-sm transition-all duration-300"
              style={{
                transform: isMobileMenuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              className="w-full h-0.5 bg-gray-700 rounded-sm transition-all duration-300"
              style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <span
              className="w-full h-0.5 bg-gray-700 rounded-sm transition-all duration-300"
              style={{
                transform: isMobileMenuOpen
                  ? "rotate(-45deg) translate(7px, -6px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer — framer-motion spring */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[1000] bg-white/98 backdrop-blur-xl overflow-y-auto pt-24 px-5 pb-5"
            style={{ backdropFilter: "blur(32px)" }}
          >
            {/* Mobile header row */}
            <div className="absolute top-5 left-0 right-2.5 flex justify-between items-center px-4">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  window.location.href = "/";
                  closeMobileMenu();
                }}
              >
                <div className="w-7 h-7 overflow-hidden rounded-lg">
                  <img
                    src={companyLogo}
                    loading="lazy"
                    alt="MS"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className="font-bold text-[15px] tracking-tight"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background:
                      "linear-gradient(135deg, #1a1a2e 0%, #2d1b32 50%, #7f1d1d 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Lazy Do
                </span>
              </div>

              <button
                onClick={closeMobileMenu}
                className="bg-transparent border-none text-[35px] font-bold text-gray-700 cursor-pointer leading-none"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Mobile nav links */}
            <nav>
              <a
                href="/"
                className={`block py-4 no-underline font-semibold text-base border-b border-black/5 transition-all duration-300
                            hover:text-[var(--color-accent-primary)] hover:translate-x-2
                            ${isActivePage("/") ? "text-[var(--color-accent-primary)] font-bold" : "text-gray-700"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={closeMobileMenu}
              >
                Home
              </a>

              <a
                href="/aboutUs"
                className={`block py-4 no-underline font-semibold text-base border-b border-black/5 transition-all duration-300
                            hover:text-[var(--color-accent-primary)] hover:translate-x-2
                            ${isActivePage("/aboutUs") ? "text-[var(--color-accent-primary)] font-bold" : "text-gray-700"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={closeMobileMenu}
              >
                About Us
              </a>

              {/* Mobile Services */}
              <div>
                <div
                  className="flex items-center justify-between py-4 border-b border-black/5 cursor-pointer"
                  onClick={() =>
                    setHoveredMenu(hoveredMenu === "Services" ? null : "Services")
                  }
                >
                  <span
                    className={`font-semibold text-base transition-colors
                                ${isActivePage("/Services/") ? "text-[var(--color-accent-primary)]" : "text-gray-700"}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Services
                  </span>
                  <span
                    className={`text-sm transition-transform duration-300
                                ${hoveredMenu === "Services" ? "rotate-180 text-[var(--color-accent-primary)]" : "text-gray-400"}`}
                  >
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  {hoveredMenu === "Services" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderMobileDropdown(servicesSubmenu)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industry */}
              <div>
                <div
                  className="flex items-center justify-between py-4 border-b border-black/5 cursor-pointer"
                  onClick={() =>
                    setHoveredMenu(hoveredMenu === "Industry" ? null : "Industry")
                  }
                >
                  <span
                    className={`font-semibold text-base transition-colors
                                ${isActivePage("/Industry/") ? "text-[var(--color-accent-primary)]" : "text-gray-700"}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Industry
                  </span>
                  <span
                    className={`text-sm transition-transform duration-300
                                ${hoveredMenu === "Industry" ? "rotate-180 text-[var(--color-accent-primary)]" : "text-gray-400"}`}
                  >
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  {hoveredMenu === "Industry" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {renderMobileDropdown(industrySubmenu)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/blogs"
                className={`block py-4 no-underline font-semibold text-base border-b border-black/5 transition-all duration-300
                            hover:text-[var(--color-accent-primary)] hover:translate-x-2
                            ${isActivePage("/blogs") ? "text-[var(--color-accent-primary)] font-bold" : "text-gray-700"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={closeMobileMenu}
              >
                Blog
              </a>

              <a
                href="/portfolio"
                className={`block py-4 no-underline font-semibold text-base border-b border-black/5 transition-all duration-300
                            hover:text-[var(--color-accent-primary)] hover:translate-x-2
                            ${isActivePage("/portfolio") ? "text-[var(--color-accent-primary)] font-bold" : "text-gray-700"}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>

              <a href="/contact" onClick={closeMobileMenu} className="no-underline">
                <button
                  className="w-full mt-5 py-4 px-4 text-base font-bold text-white rounded-xl border-none cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      "linear-gradient(135deg, var(--color-accent-primary) 0%, #ef4444 50%, #f87171 100%)",
                    boxShadow: "0 4px 15px rgba(200,57,43,0.4)",
                  }}
                >
                  Contact Us →
                </button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
