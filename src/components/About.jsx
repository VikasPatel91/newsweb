import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        <strong>NewsPulse</strong> is a dynamic, independent news platform committed to delivering accurate, unbiased, and timely news to our readers across the globe. In an age of information overload, we cut through the noise to bring you stories that matter.
      </p>

      <p style={styles.paragraph}>
        Our editorial team is composed of seasoned journalists, analysts, and reporters who value integrity, truth, and transparency above all. We cover a wide range of topics — from breaking headlines and politics to science, technology, culture, and more.
      </p>

      <p style={styles.paragraph}>
        We aim to foster an informed and engaged public by offering deep insights, thoughtful analysis, and a platform for diverse perspectives. Our commitment is not just to report the news but to make sense of it.
      </p>

      <h2 style={styles.subheading}>What We Stand For</h2>
      <ul style={styles.list}>
        <li>✅ Accuracy and Fact-Checking</li>
        <li>✅ Independent, Unbiased Reporting</li>
        <li>✅ Transparent Journalism</li>
        <li>✅ Inclusivity and Diversity of Voices</li>
      </ul>

      <p style={styles.paragraph}>
        Thank you for trusting <strong>NewsPulse</strong> as your source of truth in today’s fast-paced world. We promise to keep doing our best — for the news, and for you.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.8',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#222',
  },
  subheading: {
    fontSize: '1.8rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    color: '#444',
  },
  paragraph: {
    marginBottom: '1.2rem',
    fontSize: '1.1rem',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '1rem',
    fontSize: '1.1rem',
    color: '#444',
  }
};

export default AboutUs;
