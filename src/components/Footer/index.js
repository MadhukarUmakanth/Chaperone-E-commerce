import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section newsletter">
          <h4>SUBSCRIBE TO OUR <br/> NEWSLETTER</h4>
          <p className='para'>Lorem Ipsum Dolor Sit Amet. Aut Ipsam <br/> Illum Et Nostrum Quidem Aut Necesbus <br/> Enim.</p>
          <div className='input-container'>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Your Email Address" />
          </div>
          <div className='button-space'>
          <button>SUBSCRIBE</button>
          </div>
          
          </div>
          
          
        </div>

        <div className='container'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <ul >
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul >
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        <div className="footer-section touch">
          <h4>Get in Touch</h4>
          <p className='para'>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
          <p className='para'>Call: +919652827272</p>
          <p className='para'>Email: care@chaperoneplants.com</p>
        </div>
        </div>
        
      </div>
      <div className='brand'>
        <h4>CHAPERONE</h4>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus
             enim ut internos accusantium a numquam autem ab rerum omnis. Non <br/> molestiae ratione
              et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati
               qui quis beatae est voluptatem eius. Et architecto <br/> nihil id labore omnis hic iste 
               deleniti et porro aspernatur.</p>
      </div>
      

      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
        
      </div>
      <div>
      <p>&copy; 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;