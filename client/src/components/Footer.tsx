const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-column">
          <h3>Support</h3>

          <a href="#help">Help Centre</a>
          <a href="#safety">AirCover</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#cancellation">Cancellation options</a>
        </div>

        <div className="footer-column">
          <h3>Hosting</h3>

          <a href="#home">Airbnb your home</a>
          <a href="#host">AirCover for Hosts</a>
          <a href="#hosting">Hosting resources</a>
          <a href="#community">Community forum</a>
        </div>

        <div className="footer-column">
          <h3>Airbnb</h3>

          <a href="#newsroom">Newsroom</a>
          <a href="#careers">Careers</a>
          <a href="#investors">Investors</a>
          <a href="#gift-cards">Gift cards</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © 2026 Airbnb Clone · Privacy · Terms · Sitemap
        </div>

        <div className="footer-language">
          English (IN) · ₹ INR
        </div>
      </div>
    </footer>
  );
};

export default Footer;