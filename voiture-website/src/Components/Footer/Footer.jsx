import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4">
            <div className="footer-social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
        <hr />
         <div className="footer-copyright">
      <p>&copy; 2024 VO-iture.By <a href="#">SalihaBrik</a>. All rights reserved.</p>
    </div>
      </div>
    </footer>
  );
};

export default Footer;