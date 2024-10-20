import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import './index.css'; // Import the CSS for styling
import Modal from '../Modal'; // Import the Modal component
import ThankyouPage from '../ThankyouPage';

// Filter Component
const FilterSidebar = ({ filters }) => {
  return (
    <div className="filter-sidebar">
      <div className="subhead">
        <h1>Filter</h1>
        <p className="par">CLEAR ALL</p>
        <div className="line"></div>
      </div>

      {filters.map((filter, index) => (
        <div key={index} className="subhead">
          <p>{filter}</p>
          <FiPlus className="part" />
          <div className="line"></div>
        </div>
      ))}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, onViewProduct, onAddToCart, onBuyOnRent }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="view-product-btn" onClick={() => onViewProduct(product.id)}>
          View Product
        </button>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <p>
          <span className="discount-price">₹{product.discountPrice}</span>
          <span className="original-price">₹{product.originalPrice}</span>
        </p>
        <div className="product-actions">
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          <button onClick={() => onBuyOnRent(product.id)}>Buy on Rent</button>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`page-item ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

// Main Product List Component
const ProductList = ({ onViewProduct, onBuyOnRent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [modalOpen, setModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [products] = useState([
    { id: 1, name: 'Monstera', description: 'Indoor Plant, Low maintenance', rating: 4.9, discountPrice: 299, originalPrice: 350, image: 'https://www.ugaoo.com/cdn/shop/files/1_44713654-fadc-43c3-868b-966b8c624bbf.jpg' },
    { id: 2, name: 'Areca Palm Plant', description: 'Indoor Plant, Very hardy', rating: 4.8, discountPrice: 199, originalPrice: 250, image: 'https://www.ugaoo.com/cdn/shop/files/medium-gropot-ivory-areca-palm-plant-32515461578884.jpg' },
    { id: 3, name: 'Pothos', description: 'Indoor Plant, Easy to grow', rating: 4.7, discountPrice: 150, originalPrice: 200, image: 'https://www.ugaoo.com/cdn/shop/products/DSC_0070.jpg' },
    { id: 4, name: 'Aloe Vera', description: 'Indoor Plant, Medicinal properties', rating: 4.5, discountPrice: 299, originalPrice: 350, image: 'https://www.ugaoo.com/cdn/shop/files/DSC_9786_0d163410-c7a4-4c1a-9eee-44ac4484cd7a.jpg' },
    { id: 5, name: 'Rubber Plant', description: 'Low-maintenance indoor plant', rating: 4.7, discountPrice: 499, originalPrice: 600, image: 'https://www.ugaoo.com/cdn/shop/products/GroPot_74d6d14c-102d-430e-a550-dcedf22d0d0b.jpg' },
    { id: 6, name: 'Spider Plant', description: 'Indoor Plant, Easy to care', rating: 4.5, discountPrice: 99, originalPrice: 150, image: 'https://www.ugaoo.com/cdn/shop/products/DSC_8852.jpg' },
    { id: 7, name: 'Peace Lily', description: 'Indoor Plant, Air purifier', rating: 4.9, discountPrice: 349, originalPrice: 400, image: 'https://www.ugaoo.com/cdn/shop/products/DSC_9304.jpg' },
    { id: 8, name: 'Money Plant', description: 'Indoor Plant, Feng Shui plant', rating: 4.7, discountPrice: 249, originalPrice: 300, image: 'https://www.ugaoo.com/cdn/shop/products/DSC_8592.jpg' },
    { id: 9, name: 'Bamboo Palm', description: 'Indoor Plant, Requires less water', rating: 4.8, discountPrice: 399, originalPrice: 450, image: 'https://www.ugaoo.com/cdn/shop/files/Aimage_28dac659-d2ee-40fe-b988-4b039c33eb88.jpg' },
    { id: 10, name: 'Dracaena', description: 'Indoor Plant, Low light', rating: 4.6, discountPrice: 299, originalPrice: 350, image: 'https://www.ugaoo.com/cdn/shop/files/AImage_604a7f89-34ba-4770-accd-93b693013ce6.jpg' },
    { id: 11, name: 'Succulent', description: 'Indoor Plant, Low maintenance', rating: 4.4, discountPrice: 199, originalPrice: 250, image: 'https://www.ugaoo.com/cdn/shop/files/DSC_0286_c1fb3645-b2fe-4252-8446-efa3fd68ea44.jpg' },
    { id: 12,  name: 'ZZ Plant', description: 'Tolerates low light, requires minimal watering', rating: 4.6, discountPrice: 399, originalPrice: 550, image: 'https://www.ugaoo.com/cdn/shop/files/GroPot_bbfd5494-9be8-4dd1-9cdf-d8a8d3cf87c6.jpg'},
    { id: 13, name: 'Jade Plant', description: 'Popular succulent, needs little water', rating: 4.5, discountPrice: 249, originalPrice: 350, image: 'https://www.ugaoo.com/cdn/shop/products/DSC_8810.jpg' },
    { id: 14, name: 'Lucky Bamboo', description: 'Easy-care plant, requires low light', rating: 4.6, discountPrice: 299, originalPrice: 400, image: 'https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg' },
    { id: 15, name: 'Calathea', description: 'Bold, decorative foliage, prefers low light', rating: 4.3, discountPrice: 499, originalPrice: 600, image: 'https://www.ugaoo.com/cdn/shop/files/DSC_6007_518fbc5a-8f53-4fb5-950b-4015ab0a62b4.jpg' },
    { id: 16, name: 'Aglaonema', description: 'Low light indoor plant, air purifying', rating: 4.7, discountPrice: 399, originalPrice: 500, image: 'https://www.ugaoo.com/cdn/shop/files/Aesthetic_c84f0625-a6bd-4a3c-81fc-82bfbb68bd92.jpg' },
    { id: 17, name: 'Philodendron', description: 'Thrives in bright indirect light, easy care', rating: 4.6, discountPrice: 299, originalPrice: 400, image: 'https://www.ugaoo.com/cdn/shop/files/DSC_2550.jpg' },
    { id: 18, name: 'Croton', description: 'Vibrant leaves, prefers bright light', rating: 4.4, discountPrice: 449, originalPrice: 550, image: 'https://www.ugaoo.com/cdn/shop/files/45_43307d21-801a-4c3d-9c86-e0b3799a4059.jpg' },
    { id: 19, name: 'Fern', description: 'Loves humid environments, needs indirect light', rating: 4.2, discountPrice: 199, originalPrice: 300, image: 'https://www.ugaoo.com/cdn/shop/files/GroPot_83d8641d-7880-48f2-82fa-7327e27cb662.jpg' },
    { id: 20, name: 'Begonia', description: 'Colorful flowers, thrives in indirect light', rating: 4.7, discountPrice: 349, originalPrice: 450, image: 'https://nurserynisarga.in/wp-content/uploads/2021/01/20210102005532_IMG_0572.jpg' },
    { id: 21, name: 'Boston Fern', description: 'Prefers humid environments, bright indirect light', rating: 4.2, discountPrice: 299, originalPrice: 400, image: 'https://cdn11.bigcommerce.com/s-3bp5t46z/images/stencil/640w/products/268/2277/DSC_3463__26528.1625661712.jpg' },
    { id: 22, name: 'Echeveria', description: 'Drought-tolerant, compact succulent', rating: 4.5, discountPrice: 249, originalPrice: 350, image: 'https://www.ugaoo.com/cdn/shop/files/DSC_0178.jpg' },
    { id: 23, name: 'Golden Pothos', description: 'Easy-care plant, tolerates low light', rating: 4.9, discountPrice: 399, originalPrice: 500, image: 'https://www.gertens.com/media/catalog/product/cache/552aa5ee50ba4e27dfcb5fa3e4dca5ac/p/o/pothos-golden-6in_1.jpg' },
    { id: 24, name: 'Umbrella Plant', description: 'Thrives in indirect light, requires little water', rating: 4.4, discountPrice: 349, originalPrice: 450, image: 'https://www.thespruce.com/thmb/Zttu71T_kFeMiFV-BA1C7Il9KYA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KaraRileySchefflera-RECIRC-cdce731067d449d4b4a17e8505ef9f24.jpg' },
    { id: 25, name: 'Anthurium', description: 'Bright red flowers, loves humidity', rating: 4.6, discountPrice: 599, originalPrice: 750, image: 'https://www.ugaoo.com/cdn/shop/files/DSC_2531.jpg' },
    { id: 26, name: 'Cactus', description: 'Desert plant, requires very little water', rating: 4.8, discountPrice: 199, originalPrice: 300, image: 'https://urbano.in/wp-content/uploads/2023/05/types-of-cactus-section.jpg' },
    { id: 27, name: 'Lavender', description: 'Fragrant plant, thrives in bright sunlight', rating: 4.7, discountPrice: 349, originalPrice: 450, image: 'https://theseedcompany.ca/cdn/shop/files/cropLAVE0514Lavender_English.png' },
    {  id: 28, name: 'Chamomile', description: 'Herbal plant, prefers full sun', rating: 4.5, discountPrice: 199, originalPrice: 300, image: 'https://pot-mate.co.uk/wp-content/uploads/2023/08/PotMate_0032.jpg' },
    { id: 29, name: 'Rosemary', description: 'Aromatic herb, loves bright light', rating: 4.8, discountPrice: 249, originalPrice: 350, image: 'https://m.media-amazon.com/images/I/7104KkMJO-L._SX569_.jpg' }

    // List of 30 products
    // ... (your existing products)
  ]);

  const filters = [
    'Type of Plants',
    'Price',
    'Nursery',
    'Ideal Plants Location',
    'Indoor/ Outdoor',
    'Maintenance',
    'Plant Size',
    'Water Schedule',
    'Color',
    'Seasonal',
    'Light Efficient',
  ];

  // Get current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleConfirm = () => {
    // Logic to add the product to the cart (if needed)
    setShowThankYou(true); // Show the thank you page
    setModalOpen(false); // Close the modal
  };

  const continueShopping = () => {
    setShowThankYou(false); // Close the thank you page
  };
  return (
    <div className="product-container">
      <div className="filter-section">
        {/* Filters */}
        <FilterSidebar filters={filters} />

        {/* Product List & Pagination */}
        <div className="product-pagination-container">
          <div className="product-list">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={onViewProduct}
                onAddToCart={handleAddToCart}
                onBuyOnRent={onBuyOnRent}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
      </div>

      
      {/* Modal for Add to Cart */}
      {modalOpen && (
        <Modal product={selectedProduct} onClose={handleCloseModal} onConfirm={handleConfirm} />
      )}
      {/* Thank You Page */}
      {showThankYou && <ThankyouPage continueShopping={continueShopping} />}
    </div>
  );
};

export default ProductList;
