import React from 'react';
import Img from './bgimg.jpg'

import Img2 from './bgimg2.jpg'

import HeroImg from './herobg.png'
import WCU from './wcu.jpg'
import WCUhero from './wcuhero.png'
import GV1 from './galleryvid1.mp4'
import GV2 from './galleryvid2.mp4'
import GV3 from './galleryvid3.mp4'

export const Home = () => {
  const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  // HEADER
  header: {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: 'contain',        // show full image, no cropping
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
          // filler behind empty space

  color: '#fff',
  textAlign: 'center',
  padding: '80px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
 
},

  headerTitle: {
    fontSize: '52px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
  },
  headerSubtitle: {
    fontSize: '18px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },

  // GALLERY
  gallerySection: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
  },
  galleryImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },

  // FORM SECTION
formSection: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  padding: '60px 320px',
  backgroundColor: '#fff',
  gap: '30px',
},
form: {
  flex: '0 0 40%', // make form wider and balanced
  backgroundColor: '#ffffff',
  padding: '35px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'transform 0.2s ease',
},
formImage: {
  flex: '0 0 60%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
},
formInput: {
  padding: '14px 16px',
  marginBottom: '15px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  fontSize: '15px',
  outline: 'none',
  transition: 'all 0.2s ease',
},
formInputFocus: {
  borderColor: '#1e3a8a',
  boxShadow: '0 0 0 3px rgba(30, 58, 138, 0.2)',
},
formButton: {
  padding: '14px',
  background: '#2b9ed1',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
},
formButtonHover: {
  background: 'linear-gradient(135deg, #153072, #1e40af)',
  transform: 'scale(1.03)',
},

//wcu

wcuSection: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px 100px',
  backgroundColor: '#f9fafb',
  gap: '30px',
},

wcuImageWrapper: {
  flex: '0 0 40%', // smaller image, takes 40%
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},

wcuImage: {
  width: '100%',
  height: '300px', // fixed height for neatness
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
},

wcuContent: {
  flex: '0 0 60%', // text area takes 60%
  backgroundColor: '#fff',
  padding: '25px 30px',
  borderRadius: '8px',
  boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
},

wcuParagraph: {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#374151',
  marginBottom: '15px',
},

wcuList: {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontSize: '14px',
  color: '#1f2937',
},

//Testimonials

testimonialsSection: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  testimonialsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '25px',
  },
  testimonialCard: {
    backgroundColor: '#fff',
    width: '300px',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',  // subtle shadow for depth
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },
  testimonialImage: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  starRating: {
    color: '#FFD700', // gold color for stars
    fontSize: '18px',
    marginBottom: '8px',
  },
  testimonialName: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '6px 0 4px',
  },
  posted: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '10px',
  },
  testimonialQuote: {
    fontStyle: 'italic',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#555',
  },
  // OVERLAY SECTION
  overlaySection: {
    backgroundImage: "url('https://via.placeholder.com/1200x400?text=Section+Background')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: '#fff',
    padding: '120px 20px',
    position: 'relative',
  },
  overlayText: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'inline-block',
    padding: '25px 40px',
    borderRadius: '10px',
    fontSize: '26px',
    maxWidth: '800px',
    margin: '0 auto',
  },

  // TESTIMONIALS
  testimonialsSection: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  testimonialsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '25px',
  },
  testimonialCard: {
    backgroundColor: '#fff',
    width: '300px',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },
  testimonialImage: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  testimonialName: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '10px 0 8px',
  },
  testimonialQuote: {
    fontStyle: 'italic',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#555',
  },

// Contact — tightened spacing and alignment
contactSection: {
  padding: '32px 16px',
  backgroundColor: '#2b9ed1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
},

contactInner: {
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '12px',            // smaller gap between cards
  alignItems: 'start',
  justifyItems: 'center',
},

contactCard: {
  backgroundColor: 'transparent',
  padding: '12px',
  borderRadius: '8px',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  border: 'none',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '80px',
},

// use this wrapper when showing icon + title side-by-side, or keep icon above title
contactIconRow: {
  display: 'flex',
  alignItems: 'left',
  gap: '10px',           // small gap between icon and title
  justifyContent: 'left',
},

contactIcon: {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  color: '#1e3a8a',
  fontSize: '16px',
  boxShadow: '0 2px 6px rgba(16,24,40,0.06)',
  border: '1px solid rgba(16,24,40,0.03)',
  flexShrink: 0,
},

contactIconImage: {
  width: '22px',
  height: '22px',
  objectFit: 'cover',
  display: 'block',
  borderRadius: '50%',
},

contactTitle: {
  fontSize: '14px',
  fontWeight: 700,
  color: '#0f172a',
  margin: 0,
},

contactText: {
  fontSize: '13px',
  color: '#374151',
  lineHeight: 1.4,
  margin: '6px 0 0 0',
  maxWidth: '280px',     // avoid long lines
},

contactActions: {
  marginTop: '8px',
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  justifyContent: 'center',
},

contactButton: {
  padding: '9px 12px',
  backgroundColor: '#1e3a8a',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 600,
},

contactSecondary: {
  padding: '9px 12px',
  border: '1px solid rgba(30,58,138,0.12)',
  background: 'transparent',
  color: '#1e3a8a',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 600,
},

contactMap: {
  width: '100%',
  height: '160px',
  borderRadius: '8px',
  border: 'none',
  objectFit: 'cover',
  marginTop: '8px',
},

WCUhero: {
    backgroundImage: `url(${WCUhero})`,
  backgroundSize: 'contain',        // show full image, no cropping
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
          // filler behind empty space

  color: '#fff',
  textAlign: 'center',
  padding: '80px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
},


};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        
        </header>
  {/* Header Section */}
      <header style={styles.WCUhero}>
        
        </header>
     

      {/* Form and Image Section */}
     <section style={styles.formSection}>
       {/* Image (60%) */}
  <div style={{ flex: '0 0 60%' }}>
    <img
      style={styles.formImage}
      src={Img2}
      alt="Contact"
    />
  </div>
  {/* Form (40%) */}
  <div style={styles.form}>
    <h2 style={styles.sectionTitle}>Get Started Today</h2>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <select style={styles.formInput}>
        <option>General Inquiry</option>
        <option>Consultation</option>
        <option>Follow-up</option>
      </select>

      <textarea placeholder="Tell us about your medical concern" rows="4" style={styles.formInput} />

      <input type="text" placeholder="Medical Record Number (if returning)" style={styles.formInput} />

      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="text" placeholder="First Name" style={{ ...styles.formInput, flex: 1 }} />
        <input type="text" placeholder="Last Name" style={{ ...styles.formInput, flex: 1 }} />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="number" placeholder="Age" style={{ ...styles.formInput, flex: 1 }} />
        <select style={{ ...styles.formInput, flex: 1 }}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="text" placeholder="Country of Residence" style={{ ...styles.formInput, flex: 1 }} />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="email" placeholder="Your Email" style={{ ...styles.formInput, flex: 1 }} />
        <input type="text" placeholder="Country Code" style={{ ...styles.formInput, flex: 0.5 }} />
        <input type="text" placeholder="Contact Number" style={{ ...styles.formInput, flex: 1 }} />
      </div>

      <button type="submit" style={styles.formButton}>Send Message</button>
    </form>
  </div>

 
</section>

{/* Why Choose Us Section */}
<section style={styles.wcuSection}>
 

  {/* Text Content Side */}
  <div style={styles.wcuContent}>
    <h2 style={styles.sectionTitle}>Why Choose Us</h2>
    <p style={styles.wcuParagraph}>
      Discover an exceptional medical tourism experience with Shifa Global Health. We seamlessly guide you to world class treatment at Shifa International Hospitals, globally celebrated for cutting edge facilities and trusted expertise, backed by Joint Commission International (JCI) accreditation. Enjoy swift, tailored care designed for your needs, supported by our compassionate team every step of the way. With access to internationally renowned specialists, Shifa Global Health is your premier partner for a stress-free, top-tier healthcare journey abroad.
    </p>
    <ul style={styles.wcuList}>
      <li>✔ Experienced & Certified Specialists</li>
      <li>✔ State-of-the-art Medical Facilities</li>
      <li>✔ Personalized Treatment Plans</li>
      <li>✔ Seamless Travel & Medical Assistance</li>
    </ul>
  </div>

   {/* Image Side */}
  <div style={styles.wcuImageWrapper}>
    <img
      style={styles.wcuImage}
      src={WCU}
      alt="Why Choose Us"
    />
  </div>
</section>


<section style={styles.gallerySection}>
  <h2 style={styles.sectionTitle}>Perks You get With Shifa</h2>
  <div style={styles.galleryGrid}>
    <video style={styles.galleryImage} autoPlay loop muted playsInline>
      <source src={GV1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <video style={styles.galleryImage} autoPlay loop muted playsInline>
      <source src={GV2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <video style={styles.galleryImage} autoPlay loop muted playsInline>
      <source src={GV3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>


      

      {/* Updated Testimonials Section */}
<section style={styles.testimonialsSection}>
  <h2 style={styles.sectionTitle}>Testimonials</h2>
  <div style={styles.testimonialsContainer}>
    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
        alt="Ahmed Khan"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Ahmed Khan</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “Very professional and reliable service. They handled everything smoothly and on time.”
      </div>
    </div>

    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        alt="Fatima Ali"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Fatima Ali</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “I’m very happy with the support I received. The team is friendly and responsive.”
      </div>
    </div>

    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
        alt="Hassan Raza"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Ayesha Malik</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “Excellent experience from start to finish. Highly recommended for everyone.”
      </div>
    </div>

    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        alt="Ayesha Malik"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Hassan Raza</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “They really care about their customers. I felt valued and well taken care of.”
      </div>
    </div>

        <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
        alt="Bilal Ahmed"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Sana Qureshi</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “Amazing support and guidance throughout the process. Truly trustworthy people.”
      </div>
    </div>

    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"

        alt="Sana Qureshi"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Bilal Ahmed</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “Highly satisfied with the level of professionalism and care. Will recommend to family.”
      </div>
    </div>

    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
        alt="Omar Farooq"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Sana Imtiaz</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “They guided me very well and made everything stress-free. Thank you so much!”
      </div>
    </div>

    <div style={styles.testimonialCard}>
      <img
        style={styles.testimonialImage}
        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
        alt="Zara Hussain"
      />
      <div style={styles.starRating}>★★★★★</div>
      <div style={styles.testimonialName}>Zara Hussain</div>
      <div style={styles.posted}>Posted on Google</div>
      <div style={styles.testimonialQuote}>
        “Fantastic experience. The team is polite, quick, and really understands customer needs.”
      </div>
    </div>

  </div>

  
</section>
    </div>
  );
};

