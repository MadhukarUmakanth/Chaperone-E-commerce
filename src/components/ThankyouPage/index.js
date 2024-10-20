import React from 'react';
import './index.css'; // Assuming CSS file is named OrderPlaced.css
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ThankyouPage = ({ continueShopping }) => {
  const navigate = useNavigate(); // Create a navigate function

  const handleContinueShopping = () => {
    continueShopping(); // Close the Thank You Page
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="modal-overlay">
      <div className="thankyou-modal">
        <button className="close-button" onClick={() => navigate('/')}>X</button>
        <div className='place'>
          <h1 className='cart'>Your Cart</h1>
          <h2>Congratulations<br />Order Placed!</h2>
          <div className="plant-emoji">
            <img src="https://i.ibb.co/yfhs8j8/plant-1.png" alt="Plant" />
          </div>
          <p>Thank you for choosing Chaperone services.<br />
            We will soon get in touch with you!</p>
          <button className="continue-button" onClick={handleContinueShopping}>CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
