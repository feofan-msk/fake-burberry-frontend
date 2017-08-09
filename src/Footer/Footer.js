import React from 'react';

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-menu">
          <div className="row">
            <div className="col-md-3">
              <h4 className="footer-menu__title">customer service</h4>
              <nav className="footer-menu__links">
                <a href="#">Contact Us</a>
                <a href="#">Payment</a>
                <a href="#">Shipping</a>
                <a href="#">Returns</a>
                <a href="#">Faqs</a>
                <a href="#">Live Chat</a>
                <a href="#">The Burberry App</a>
                <a href="#">Store Locator</a>
              </nav>
            </div>

            <div className="col-md-3">
              <h4 className="footer-menu__title">our company</h4>
              <nav className="footer-menu__links">
                <a href="#">Our History</a>
                <a href="#">Burberry Group Pic</a>
                <a href="#">Careers</a>
                <a href="#">Corporate Responsibility</a>
                <a href="#">Site Map</a>
              </nav>
            </div>
            
            <div className="col-md-4">
              <h4 className="footer-menu__title">legal &amp; cookies</h4>
              <nav className="footer-menu__links">
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Accessibility Statement</a>
                <a href="#">Japan Only - SCTL indications</a>
              </nav>
            </div>
          </div>
        </div>

        <button className="footer__btn" type="button">Shipping country: Russian Federation</button>
        <button className="footer__btn" type="button">Language: English</button>
        
        <section className="footer__help">
          <h4 className="footer__heading-help">Need help?</h4>
          <a className="footer__link-help" href="#">Find out more and contact us</a>
        </section>
      </div>
    </footer>
  );
};
