"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define a Project interface to type your project objects
interface Project {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // Type the state as Project | null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Using relative paths for images
  const images = Array.from({ length: 10 }, (_, i) => ({
    src: `/${i + 1}.jpg`,
    width: 800,
    height: 600,
  }));
  
  // Project data with titles and descriptions
  const projects: Project[] = images.map((img, index) => ({
    id: index + 1,
    title: `Project ${index + 1}`,
    description: `Description for project ${index + 1}. This is a placeholder text that you can replace with actual project details.`,
    image: img,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      {!showLogo && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            backgroundColor: "#111827",
            color: "white",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            zIndex: 1000,
          }}
        >
          <span style={{ fontWeight: "bold" }}>WealthInvest</span>
          {/* Desktop Menu */}
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            <li className="nav-item">
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#footer" style={{ color: "white", textDecoration: "none" }}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#ffcc00",
                  color: "#111827",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Login
              </button>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
              display: "none", // Default: Hide on desktop
            }}
            className="mobile-menu-btn"
          >
            ☰
          </button>
        </motion.nav>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: "60px",
              right: "0",
              width: "100%",
              backgroundColor: "#1e293b",
              color: "white",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              padding: "20px 0",
              zIndex: 999,
            }}
          >
            <a href="#" style={{ color: "white", textDecoration: "none", padding: "10px" }}>
              Home
            </a>
            <a href="#projects" style={{ color: "white", textDecoration: "none", padding: "10px" }}>
              Projects
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none", padding: "10px" }}>
              About Us
            </a>
            <a href="#footer" style={{ color: "white", textDecoration: "none", padding: "10px" }}>
              Contact
            </a>
            <button
              style={{
                backgroundColor: "#ffcc00",
                color: "#111827",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (max-width: 768px) {
            .nav-item {
              display: none;
            }
            .mobile-menu-btn {
              display: block !important;
            }
            .project-grid {
              grid-template-columns: 1fr !important;
            }
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          .project-card:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
          
          .image-container {
            position: relative;
            height: 220px;
            width: 100%;
          }
          
          .hero-image {
            position: relative;
            height: 100vh;
            width: 100%;
          }
          
          .logo-container {
            position: relative;
            width: 150px;
            height: 150px;
          }
          
          .modal-image-container {
            position: relative;
            height: 300px;
            width: 100%;
          }
        `}
      </style>

      <AnimatePresence mode="wait">
        {showLogo ? (
          <motion.div
            key="logo"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/background_wealth.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="logo-container">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, -20, 0], opacity: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, repeat: 4, repeatType: "reverse" }}
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="150px"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                height: "100vh",
                width: "100vw",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[currentIndex].src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="hero-image"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt="Wealth Invest"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}
                >
                  WEALTH INVEST
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    fontSize: "1.5rem",
                    background: "#ffcc00",
                    color: "#111827",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Inquire Now
                </motion.p>
              </div>
            </motion.div>

            {/* Projects Section */}
            <div
              id="projects"
              style={{
                padding: "80px 5%",
                backgroundColor: "#f9fafb",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  textAlign: "center",
                  marginBottom: "50px",
                  fontSize: "2.5rem",
                  color: "#111827",
                  position: "relative",
                }}
              >
                Our Projects
                <div
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "4px",
                    backgroundColor: "#ffcc00",
                    bottom: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              </motion.h2>

              <div
                className="project-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "30px",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: project.id * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="image-container">
                      <Image
                        src={project.image.src}
                        alt={project.title}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="project-image"
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h3 style={{ marginBottom: "10px", color: "#111827" }}>{project.title}</h3>
                      <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                        {project.description.length > 100
                          ? `${project.description.substring(0, 100)}...`
                          : project.description}
                      </p>
                      <button
                        style={{
                          marginTop: "15px",
                          padding: "8px 15px",
                          backgroundColor: "#ffcc00",
                          color: "#111827",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2000,
                    padding: "20px",
                  }}
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      overflow: "hidden",
                      width: "100%",
                      maxWidth: "800px",
                      maxHeight: "80vh",
                      position: "relative",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "16px",
                      }}
                    >
                      ✕
                    </button>
                    <div className="modal-image-container">
                      <Image
                        src={selectedProject.image.src}
                        alt={selectedProject.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="800px"
                      />
                    </div>
                    <div style={{ padding: "25px" }}>
                      <h2 style={{ marginBottom: "15px", color: "#111827" }}>
                        {selectedProject.title}
                      </h2>
                      <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                        {selectedProject.description}
                      </p>
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "space-between",
                          borderTop: "1px solid #e5e7eb",
                          paddingTop: "20px",
                        }}
                      >
                        <div>
                          <strong>Client:</strong> Sample Client
                        </div>
                        <div>
                          <strong>Year:</strong> 2023
                        </div>
                        <div>
                          <strong>Category:</strong> Investment
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer with Google Maps */}
            <footer
              id="footer"
              style={{
                backgroundColor: "#111827",
                color: "white",
                padding: "60px 0 0",
              }}
            >
              <div
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  padding: "0 20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "40px",
                }}
              >
                <div>
                  <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>WEALTH INVEST</h3>
                  <p style={{ lineHeight: "1.6", color: "#9ca3af" }}>
                    We provide exceptional investment opportunities to help you grow your wealth and secure your financial future.
                  </p>
                  <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                    <a
                      href="#"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#1e293b",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>FB</span>
                    </a>
                    <a
                      href="#"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#1e293b",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>TW</span>
                    </a>
                    <a
                      href="#"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#1e293b",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <span>IN</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>Quick Links</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                      <a href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a href="#projects" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s" }}>
                        Projects
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s" }}>
                        About Us
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s" }}>
                        Services
                      </a>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <a href="#" style={{ color: "#9ca3af", textDecoration: "none", transition: "color 0.3s" }}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ marginBottom: "20px", fontSize: "1.2rem" }}>Contact Us</h3>
                  <p
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "flex-start",
                      color: "#9ca3af",
                    }}
                  >
                    <span style={{ marginRight: "10px", marginTop: "5px" }}>📍</span>
                    <span>Estrada street, Tetuan zamboanga city</span>
                  </p>
                  <p
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      color: "#9ca3af",
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>📞</span>
                    <span>0945 369 1428</span>
                  </p>
                  <p
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      color: "#9ca3af",
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>✉️</span>
                    <span>wmrealestateinvestment@gmail.com</span>
                  </p>
                </div>
              </div>

              {/* Google Maps Integration */}
              <div style={{ marginTop: "40px", width: "100%", height: "300px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.716542360527!2d122.08489689999999!3d6.9244481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325042206b6d49f3%3A0xaf314e9aef9cbe34!2s111-101%20Estrada%20St%2C%20Zamboanga%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1740970605812!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>

              {/* Copyright Section */}
              <div
                style={{
                  borderTop: "1px solid #1e293b",
                  padding: "20px 0",
                  marginTop: "40px",
                  textAlign: "center",
                  color: "#9ca3af",
                  fontSize: "0.9rem",
                }}
              >
                <p>&copy; {new Date().getFullYear()} WEALTH INVEST. All rights reserved.</p>
              </div>
            </footer>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
