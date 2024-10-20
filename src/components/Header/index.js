
import React from 'react';
import { FaShoppingCart, FaUserAlt,FaSearch,FaLeaf } from 'react-icons/fa';
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>Free Shipping on orders above 999/-</p>
        <div className="contact-info">
          <span>Call us on: +91 98789 05120</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="https://i.ibb.co/DYjpwNG/image-55.png" alt="Chaperone" className="logo-image" />
          <span className="logo-text">Chaperone</span>
        </div>
        <ul className="nav-links">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#plants">Plants & Pots</a></li>
          <li className="nav-item dropdown">
            <a href="#tools">Tools</a>
            <ul className="dropdown-content">
              <li><a href="#tool1">Tool 1</a></li>
              <li><a href="#tool2">Tool 2</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#services">Our Services</a>
            <ul className="dropdown-content">
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="#blog">Blog</a></li>
          <li className="nav-item"><a href="#story">Our Story</a></li>
          <li className="nav-item"><a href="#faqs">FAQs</a></li>
        </ul>
        <div className="profile-cart">
          <FaUserAlt className="icon" />
          <span>My Profile</span>
          <FaShoppingCart className="icon" />
          <span>Cart</span>
        </div>
      </nav>
      <div className='center'>
      <div className="search-bar">
      <div className="search-icon">
        <FaSearch /> {/* Using Font Awesome search icon */}
      </div>
      <input
        type="text"
        placeholder="Search Plant"
        className="search-input"
      />
      <div className="plant-icon">
        <FaLeaf /> {/* Using Font Awesome plant icon */}
      </div>
    </div>
    

      </div>
      
     <div className='space'>
     <div className='row-btn'>
     <div className='plant-btn'>
      <p>Plants</p>
     </div>
     <div className='plot-btn'>
      <p>Pots</p>
     </div>
     </div>
     <div className='lpara'>
     <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus 
      enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae <br/> ratione 
      et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati
       qui quis beatae est voluptatem eius. Et architecto nihil id labore <br/> omnis hic iste
        deleniti et porro aspernatur.</p>
     </div>
     <div>
      <h1>Nursery</h1>
     </div>
     <div className='container'>
     <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/XLtpsL8/362237370ea139219155cf9fca2448d3.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/> sit amet. Aut ipsam illum  et nostrum
        </p>
      </div>
      
      <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/bzK6B6K/8375cef653c6b9ae388a7f2dda4ba454.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/> sit amet. Aut ipsam illum  et nostrum
        </p>
      </div>
      
      <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/5YTq183/935a62fb31df9354ded9299559307ae6.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/> sit amet. Aut ipsam illum  et nostrum
        </p>
      </div>

      <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/GHmydnd/7eca96d5008198d2181b991de6f19034.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/> sit amet. Aut ipsam illum  et nostrum
        </p>
      </div>

      <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/6v4z4gd/ed50532940537d9d39d2626bb7a95167.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/> sit amet. Aut ipsam illum  et nostrum
        </p>
      </div>

      <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/2hFnSrK/7f83ab9fd1481e530fd7e03257a1bb07.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/> sit amet. Aut ipsam illum et nostrum
        </p>
      </div>

      <div className='sub-row'>
      <div>
      <img src="https://i.ibb.co/qyYZRYF/1218900e6bd6cc6f3d5a104c0dbb8212.png" alt="plant" className='sub-img'/>
       </div>
        <p className='sub-para'>Lorem ipsum dolor <br/>sit amet. Aut ipsam illum et nostrum
        </p>
      </div>
     </div>
          
     </div>
     
    </header>
  );
};

export default Header;