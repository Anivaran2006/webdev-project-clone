function Footer() {
  const handleFooterClick = (linkName) => {
    alert(`${linkName} - Feature coming soon!`);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>About</h3>
          <button
            onClick={() => handleFooterClick('Contact Us')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Contact Us
          </button>
          <button
            onClick={() => handleFooterClick('About Us')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            About Us
          </button>
          <button
            onClick={() => handleFooterClick('Careers')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Careers
          </button>
          <button
            onClick={() => handleFooterClick('Flipkart Stories')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
            }}
          >
            Flipkart Stories
          </button>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <button
            onClick={() => handleFooterClick('Payments')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Payments
          </button>
          <button
            onClick={() => handleFooterClick('Shipping')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Shipping
          </button>
          <button
            onClick={() => handleFooterClick('Cancellation & Returns')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Cancellation &amp; Returns
          </button>
          <button
            onClick={() => handleFooterClick('FAQ')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
            }}
          >
            FAQ
          </button>
        </div>

        <div className="footer-column">
          <h3>Policy</h3>
          <button
            onClick={() => handleFooterClick('Return Policy')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Return Policy
          </button>
          <button
            onClick={() => handleFooterClick('Terms Of Use')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Terms Of Use
          </button>
          <button
            onClick={() => handleFooterClick('Security')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Security
          </button>
          <button
            onClick={() => handleFooterClick('Privacy')}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'block',
            }}
          >
            Privacy
          </button>
        </div>

        <div className="footer-column">
          <h3>Mail Us</h3>
          <p>
            Flipkart Internet Pvt Ltd,
            <br />
            Bengaluru, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Anivaran's Flipkart Clone Project</p>
      </div>
    </footer>
  );
}

export default Footer;
