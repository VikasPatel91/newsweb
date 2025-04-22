import React from 'react';

const Vision = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Vision</h1>
      <p style={styles.paragraph}>
        At <strong>TrustedNews</strong>, our vision is to empower people with accurate, timely, and unbiased information. We believe journalism is a cornerstone of democracy, and we strive to be a beacon of truth in the digital age.
      </p>
      <p style={styles.paragraph}>
        We are committed to covering stories that matter, amplifying underrepresented voices, and ensuring that every piece of news we publish upholds the highest standards of integrity and transparency.
      </p>
      <p style={styles.paragraph}>
        As the media landscape continues to evolve, our goal is to innovate with purpose — combining cutting-edge technology with trusted journalism to serve the public better every day.
      </p>
      <blockquote style={styles.quote}>
        “Informing minds. Inspiring change.”
      </blockquote>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Georgia, serif',
    color: '#333',
    lineHeight: '1.7',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#111',
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: '1.2rem',
    fontSize: '1.1rem',
  },
  quote: {
    fontStyle: 'italic',
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#555',
    borderLeft: '4px solid #ccc',
    paddingLeft: '1rem',
  }
};

export default Vision;
