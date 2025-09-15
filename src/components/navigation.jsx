import React from "react";
import logo from './shifalogonobg.png'

export const Navigation = () => {
  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      zIndex: 1000,
    },
    logo: {
      height: "75px",
      width: "150px",
    },
    navLinks: {
      display: "flex",
      gap: "30px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      fontSize: "16px",
      fontWeight: 500,
    },
    link: {
      textDecoration: "none",
      color: "#333",
      transition: "color 0.3s, border-bottom 0.3s",
      paddingBottom: "5px",
    },
    linkHover: {
      color: "#e63946", // highlight color
      borderBottom: "2px solid #e63946",
    },
    rightActions: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },
    button: {
      background: "#2b9ed1",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "25px",
      border: "none",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      background: "#c72c3b",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <a href="#home">
        <img
          src={logo}
          alt="Shifa Global Health"
          style={styles.logo}
        />
      </a>

      {/* Center Navigation */}
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="#home" style={styles.link}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#services" style={styles.link}>
            Services
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#facilities" style={styles.link}>
            Facilities
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#journey" style={styles.link}>
            The Journey
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#appointment" style={styles.link}>
            Book Appointment
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#about" style={styles.link}>
            About Us
          </a>
        </li>
      </ul>

      {/* Right Side (Optional CTA button) */}
      <div style={styles.rightActions}>
        <button style={styles.button}>Contact</button>
      </div>
    </nav>
  );
};
