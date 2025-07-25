import React, { useEffect, useState } from "react";

import companyLogo from "../../assets/onlysloth.png"

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

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 30);
    };

    // Update current path when it changes
    const handlePathChange = (): void => {
      setCurrentPath(window.location.pathname);
    };

    // Check if device is mobile
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
    <div
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
        animation: "morphIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <style>{`
        @keyframes morphIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        
        .dropdown-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          bottom: 0;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.05), transparent);
          transition: left 0.5s ease;
        }
        
        .dropdown-item:hover::before {
          left: 100%;
        }
        
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(239, 68, 68, 0.05) 100%) !important;
          color: #dc2626 !important;
          transform: translateX(8px);
          border-left: 3px solid #dc2626;
        }
      `}</style>

      {items.map(({ label, path }: MenuItem, index: number) => (
        <a
          key={index}
          href={path}
          className="dropdown-item"
          style={{
            display: "block",
            padding: "14px 24px",
            color: "#1f2937",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "15px",
            fontFamily: "'Poppins', sans-serif",
            whiteSpace: "nowrap",
            letterSpacing: "-0.01em",
          }}
          onClick={() => setHoveredMenu(null)}
        >
          {label}
        </a>
      ))}
    </div>
  );

  const renderMobileDropdown = (items: MenuItem[]): React.ReactElement => (
    <div
      style={{
        paddingLeft: "20px",
        background: "rgba(248, 250, 252, 0.5)",
        borderRadius: "12px",
        margin: "8px 0",
        border: "1px solid rgba(220, 38, 38, 0.1)",
      }}
    >
      {items.map(({ label, path }: MenuItem, index: number) => (
        <a
          key={index}
          href={path}
          style={{
            display: "block",
            padding: "12px 16px",
            color: "#374151",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            borderBottom:
              index < items.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
            transition: "all 0.3s ease",
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

  const handleCtaClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .luxury-header {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: -0.025em;
        }
        
        .glass-effect {
          background: ${
            scrolled
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(248, 250, 252, 0.8) 100%)"
          };
          backdrop-filter: blur(32px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: ${
            scrolled
              ? "0 20px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)"
              : "0 15px 35px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.15)"
          };
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .logo-container:hover {
          transform: translateY(-2px) scale(1.02);
        }
        
        .logo-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: white;
          font-weight: 800;
          font-family: 'Space Grotesk', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .logo-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .logo-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        }
        
        .logo-text {
          font-weight: 800;
          font-size: 16px;
          font-family: 'Space Grotesk', sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #2d1b32 50%, #7f1d1d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
          position: relative;
        }
        
        .nav-item {
          position: relative;
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 6px 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: -0.01em;
          overflow: hidden;
        }
        
        .nav-item.active {
          color: #dc2626;
          font-weight: 700;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(239, 68, 68, 0.08) 100%);
        }
        
        .nav-item.active::after {
          width: 60%;
          background: linear-gradient(90deg, #dc2626, #ef4444, #f87171);
        }
        
        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(239, 68, 68, 0.08) 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: -1;
        }
        
        .nav-item:hover::before {
          transform: scaleX(1);
        }
        
        .nav-item:hover {
          color: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 38, 38, 0.15);
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #dc2626, #ef4444, #f87171);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .nav-item:hover::after {
          width: 60%;
        }
        
        .dropdown-arrow {
          font-size: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #9ca3af;
          font-weight: 600;
        }
        
        .dropdown-active .dropdown-arrow {
          transform: rotate(180deg) scale(1.1);
          color: #dc2626;
        }
        
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-container::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
          z-index: 999;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%);
          border: none;
          border-radius: 10px;
          color: white;
          font-weight: 700;
          font-size: 13px;
          font-family: 'Poppins', sans-serif;
          padding: 8px 16px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: -0.01em;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          box-shadow: 0 15px 35px rgba(220, 38, 38, 0.5);
        }
        
        .cta-button:active {
          transform: translateY(-1px) scale(0.98);
        }
        
        .cta-arrow {
          font-size: 14px;
          font-weight: 800;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cta-button:hover .cta-arrow {
          transform: translateX(4px) rotate(10deg);
        }
        
        .floating-gradient {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 70%);
          pointer-events: none;
          top: -150px;
          left: -150px;
          animation: float 20s infinite ease-in-out;
          z-index: -1;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(100px, -50px) rotate(90deg); }
          50% { transform: translate(-50px, 50px) rotate(180deg); }
          75% { transform: translate(-100px, -25px) rotate(270deg); }
        }

        /* Mobile Menu Styles */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1001;
        }

        .mobile-menu-toggle:hover {
          background: rgba(220, 38, 38, 0.1);
        }

        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background: #374151;
          border-radius: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(32px);
          z-index: 1000;
          padding: 100px 20px 20px;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-nav-item {
          display: block;
          padding: 16px 0;
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .mobile-nav-item:hover {
          color: #dc2626;
          transform: translateX(8px);
        }

        .mobile-nav-item.active {
          color: #dc2626;
          font-weight: 700;
        }

        .mobile-dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 16px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-dropdown-arrow {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        .mobile-dropdown-arrow.active {
          transform: rotate(180deg);
        }

        .mobile-cta-button {
          width: 100%;
          margin-top: 20px;
          padding: 16px;
          font-size: 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%);
          border: none;
          color: white;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
        }

        .mobile-cta-button:hover {
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.5);
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .luxury-header {
            padding: 8px 16px !important;
            width: calc(100% - 32px) !important;
            top: 10px !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .cta-button {
            display: none !important;
          }
          
          .logo-text {
            font-size: 14px;
          }
          
          .logo-icon {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .luxury-header {
            padding: 6px 12px !important;
            width: calc(100% - 24px) !important;
          }
          
          .logo-text {
            font-size: 13px;
          }
          
          .logo-icon {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>

      <div className="floating-gradient"></div>

      <div
        className="luxury-header glass-effect"
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          padding: "8px 20px",
          maxWidth: "1250px",
          width: "calc(100% - 40px)",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div className="logo-container" onClick={handleLogoClick}>
          <div className="logo-icon">
            <img
              src={companyLogo}
              alt="MS"
              loading="lazy"
            />
          </div>
          <span className="logo-text">Lazy Do</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            className={`nav-item ${isActivePage("/") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a
            href="/aboutUs"
            className={`nav-item ${isActivePage("/aboutUs") ? "active" : ""}`}
          >
            About Us
          </a>

          <div
            className={`dropdown-container ${
              hoveredMenu === "Services" ? "dropdown-active" : ""
            }`}
            onMouseEnter={() => !isMobile && setHoveredMenu("Services")}
            onMouseLeave={() => !isMobile && handleMenuLeave("Services")}
            style={{ position: "relative" }}
          >
            <span
              className={`nav-item ${
                isActivePage("/Services/") ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </span>
            {hoveredMenu === "Services" &&
              !isMobile &&
              renderDropdown(servicesSubmenu)}
          </div>

          <div
            className={`dropdown-container ${
              hoveredMenu === "Industry" ? "dropdown-active" : ""
            }`}
            onMouseEnter={() => !isMobile && setHoveredMenu("Industry")}
            onMouseLeave={() => !isMobile && handleMenuLeave("Industry")}
            style={{ position: "relative" }}
          >
            <span
              className={`nav-item ${
                isActivePage("/Industry/") ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
            >
              Industry
              <span className="dropdown-arrow">▼</span>
            </span>
            {hoveredMenu === "Industry" &&
              !isMobile &&
              renderDropdown(industrySubmenu)}
          </div>

          <a
            href="/blogs"
            className={`nav-item ${isActivePage("/blogs") ? "active" : ""}`}
          >
            Blog
          </a>
          <a
            href="/portfolio"
            className={`nav-item ${isActivePage("/portfolio") ? "active" : ""}`}
          >
            Portfolio
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <a href="/contact" className="desktop-cta">
          <button className="cta-button" onClick={handleCtaClick}>
            Contact Us
            <span className="cta-arrow">→</span>
          </button>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
            position: "absolute",
            top: 20,
            left: 0,
            right: 10,
          }}
        >
          <div
            className="logo-container"
            onClick={() => {
              window.location.href = "/";
              closeMobileMenu();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <div className="logo-icon" style={{ width: 28, height: 28 }}>
              <img
                src={companyLogo}
                loading="lazy"
                alt="MS"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <span
              className="logo-text"
              style={{ fontSize: "15px", fontWeight: 700 }}
            >
             Lazy Do
            </span>
          </div>

          <button
            onClick={closeMobileMenu}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "35px",
              fontWeight: "bold",
              color: "#374151",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav>
          <a
            href="/"
            className={`mobile-nav-item ${isActivePage("/") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </a>
          <a
            href="/aboutUs"
            className={`mobile-nav-item ${
              isActivePage("/aboutUs") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            About Us
          </a>

          <div>
            <div
              className="mobile-dropdown-toggle"
              onClick={() =>
                setHoveredMenu(hoveredMenu === "Services" ? null : "Services")
              }
            >
              <span
                className={`mobile-nav-item ${
                  isActivePage("/Services/") ? "active" : ""
                }`}
                style={{ padding: 0, border: "none" }}
              >
                Services
              </span>
              <span
                className={`mobile-dropdown-arrow ${
                  hoveredMenu === "Services" ? "active" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {hoveredMenu === "Services" &&
              renderMobileDropdown(servicesSubmenu)}
          </div>

          <div>
            <div
              className="mobile-dropdown-toggle"
              onClick={() =>
                setHoveredMenu(hoveredMenu === "Industry" ? null : "Industry")
              }
            >
              <span
                className={`mobile-nav-item ${
                  isActivePage("/Industry/") ? "active" : ""
                }`}
                style={{ padding: 0, border: "none" }}
              >
                Industry
              </span>
              <span
                className={`mobile-dropdown-arrow ${
                  hoveredMenu === "Industry" ? "active" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {hoveredMenu === "Industry" &&
              renderMobileDropdown(industrySubmenu)}
          </div>

          <a
            href="/blogs"
            className={`mobile-nav-item ${
              isActivePage("/blogs") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Blog
          </a>

          <a
            href="/portfolio"
            className={`mobile-nav-item ${
              isActivePage("/portfolio") ? "active" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </a>

          <a href="/contact" onClick={closeMobileMenu}>
            <button className="mobile-cta-button">Contact Us →</button>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
