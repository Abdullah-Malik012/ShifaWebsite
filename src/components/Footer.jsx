export const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#2b9ed1", // soft light background
      padding: "50px 20px 20px",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b",
      borderTop: "1px solid #e2e8f0"
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "40px"
    },
    column: {
      flex: "1",
      minWidth: "220px"
    },
    heading: {
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "15px",
      color: "black"
    },
    text: {
      fontSize: "14px",
      lineHeight: "1.6",
      marginBottom: "10px",
      color: "white"
    },
    link: {
      fontSize: "14px",
      lineHeight: "1.8",
      color: "white",
      textDecoration: "none",
      display: "block",
      marginBottom: "6px"
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      fontSize: "14px",
      color: "white"
    },
    icon: {
      marginRight: "8px",
      fontSize: "16px",
      color: "blue" // accent red for brand
    },
    socialRow: {
      display: "flex",
      gap: "15px",
      marginTop: "10px"
    },
    socialIcon: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid #241e4e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s", 
      color: "black"
    },
    bottomBar: {
      borderTop: "1px solid #241e4e",
      textAlign: "center",
      paddingTop: "15px",
      fontSize: "13px",
      color: "white",
      marginTop: "30px"
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About */}
        <div style={styles.column}>
          <h3 style={styles.heading}>About Us</h3>
          <p style={styles.text}>
            Why wait for months when quality care is available right away? 
            We connect you with trusted doctors and affordable treatment 
            in a JCI-accredited facility.
          </p>
        </div>

        {/* Services */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Explore</h3>
          <a href="#" style={styles.link}>Services</a>
          <a href="#" style={styles.link}>Facilities</a>
          <a href="#" style={styles.link}>The Journey</a>
          <a href="#" style={styles.link}>Book Appointment</a>
          <a href="#" style={styles.link}>About Us</a>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Contact</h3>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📍</span>
            42 Chapel Fields Road, Solihull, B92 7RX, UK
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📞</span>
            +44 121 790 1777
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>✉️</span>
            info@shifaglobal.uk
          </div>

          <h3 style={{ ...styles.heading, marginTop: "20px" }}>Follow Us</h3>
         <div style={styles.socialRow}>
        {/* Facebook */}
        <a href="https://www.facebook.com/share/1CVfHEX7Pu/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={styles.socialIcon}>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 
            12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 
            268.08 0c-73.73 0-121.45 44.38-121.45 
            124.72v70.62H86.36V288h60.27v224h92.66V288z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/shifaglobalhealth?igsh=MW4xMmM4ajhubHlzMQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" style={styles.socialIcon}>
          <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
</svg>


        </a>

        {/* Twitter/X */}
        <a href="https://x.com/shifaglobal?s=21" target="_blank" rel="noreferrer" style={styles.socialIcon}>
          <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="16" 
  height="16" 
  viewBox="0 0 1200 1227" 
  fill="currentColor"
>
  <path d="M714.163 519.284L1160.89 0H1057.06L668.731 
  450.887L357.328 0H0L468.731 681.302L0 1226.31H103.835L512.936 
  750.699L842.672 1226.31H1200L714.137 519.284H714.163ZM567.17 
  687.165L518.646 617.887L141.731 79.739H306.21L602.795 
  505.142L651.319 574.419L1057.09 1146.55H892.61L567.17 
  687.19V687.165Z"/>
</svg>

        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24 
            107 0 83 0 53.6 0 24.2 24 
            0 53.6 0s53.6 24.2 53.6 53.6c0 
            29.4-24 53.4-53.6 53.4zM447.9 
            448h-92.4V302.4c0-34.7-12.6-58.4-44.2-58.4-24.1 
            0-38.4 16.2-44.7 31.9-2.3 5.6-2.9 
            13.5-2.9 21.4V448h-92.4s1.2-270.8 
            0-299.1h92.4v42.4c12.3-19 
            34.3-46 83.6-46 61 0 106.8 
            39.8 106.8 125.2V448z"/>
          </svg>
        </a>
      </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        © 2025 Shifa Global Health, All Rights Reserved
      </div>
    </footer>
  );
};
