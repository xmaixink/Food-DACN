import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img1 from '../../asset/img/hamburger.jpg';
import './ListProduct.css';

const ListProduct = () => {
  const specialOffers = [
    { name: 'Crack Burgers', image: img1, rating: '4.5', price: '20.000d' },
    { name: 'Sizzling Pizza', image: '/path-to-pizza-image', rating: '4.6', price: '6.888.888d' },
    { name: 'BBQ Chicken', image: '/path-to-bbq-image', rating: '4.8', price: '9.888.888d' },
    { name: 'Cheese Delight', image: '/path-to-cheese-image', rating: '4.7', price: '5.888.888d' }
  ];

  const foods = [
    { name: 'Vegan Delight', image: '/path-to-vegan-image', rating: '4.8', price: '5.888.888d' },
    { name: 'Pasta Classic', image: '/path-to-pasta-image', rating: '4.7', price: '7.888.888d' },
    { name: 'Spicy Tacos', image: '/path-to-tacos-image', rating: '4.9', price: '6.888.888d' },
    { name: 'Grilled Salmon', image: '/path-to-salmon-image', rating: '4.6', price: '10.888.888d' }
  ];

  const drinks = [
    { name: 'Iced Coffee', image: '/path-to-coffee-image', rating: '4.9', price: '3.888.888d' },
    { name: 'Fresh Juice', image: '/path-to-juice-image', rating: '4.7', price: '2.888.888d' },
    { name: 'Smoothie Mix', image: '/path-to-smoothie-image', rating: '4.8', price: '4.888.888d' },
    { name: 'Lemonade', image: '/path-to-lemonade-image', rating: '4.6', price: '2.888.888d' }
  ];

  return (
    <div className="list-product-page">
      <xmai>MỤC SẢN PHẨM</xmai>
      <h2 className="category-title">Ưu đãi</h2>
      <div className="product-list special-offers">
        {specialOffers.map((product, index) => (
          <Link key={index} to={`/product/${product.name}`} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>⭐ {product.rating}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="category-title food-section">Đồ ăn</h2>
      <div className="product-list food-section">
        {foods.map((product, index) => (
          <Link key={index} to={`/product/${product.name}`} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>⭐ {product.rating}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="category-title drinks-section">Đồ uống</h2>
      <div className="product-list drinks-section">
        {drinks.map((product, index) => (
          <Link key={index} to={`/product/${product.name}`} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>⭐ {product.rating}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
