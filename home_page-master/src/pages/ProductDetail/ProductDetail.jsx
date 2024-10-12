import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../asset/img/hamburger.jpg';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productName } = useParams(); 

  const products = [
    {
      name: 'Crack Burgers',
      image: img1,
      rating: '4.5',
      price: '20.000',
      description: 'Deliciously crafted burgers with a variety of toppings to choose from. Our Crack Burgers are made with 100% beef, fresh vegetables, and secret sauces that will tantalize your taste buds. Whether you like it spicy or savory, we have something for everyone. Perfect for a meal on the go or a cozy night in, our burgers are sure to satisfy your cravings. Try one today and experience the flavor explosion!'
    },
    {
      name: 'Sizzling Pizza',
      image: '../../asset/img/pizza.jpg',
      rating: '4.6',
      price: '6.888.888d',
      description: 'A mouth-watering pizza with fresh ingredients.'
    },
    {
      name: 'BBQ Chicken',
      image: '../../asset/img/bbq.jpg',
      rating: '4.8',
      price: '9.888.888d',
      description: 'Tender chicken grilled to perfection with a smoky BBQ sauce.'
    },
    {
      name: 'Cheese Delight',
      image: '../../asset/img/cheese.jpg',
      rating: '4.7',
      price: '5.888.888d',
      description: 'A cheesy delight that melts in your mouth.'
    },
    {
      name: 'Vegan Delight',
      image: '../../asset/img/vegan.jpg',
      rating: '4.8',
      price: '5.888.888d',
      description: 'A tasty vegan option packed with nutrients.'
    },
    {
      name: 'Pasta Classic',
      image: '../../asset/img/pasta.jpg',
      rating: '4.7',
      price: '7.888.888d',
      description: 'Classic pasta served with your choice of sauce.'
    },
    {
      name: 'Spicy Tacos',
      image: '../../asset/img/tacos.jpg',
      rating: '4.9',
      price: '6.888.888d',
      description: 'Tasty tacos with a spicy kick.'
    },
    {
      name: 'Grilled Salmon',
      image: '../../asset/img/salmon.jpg',
      rating: '4.6',
      price: '10.888.888d',
      description: 'Fresh salmon grilled to perfection.'
    },
    {
      name: 'Iced Coffee',
      image: '../../asset/img/coffee.jpg',
      rating: '4.9',
      price: '3.888.888d',
      description: 'Refreshing iced coffee to cool you down.'
    },
    {
      name: 'Fresh Juice',
      image: '../../asset/img/juice.jpg',
      rating: '4.7',
      price: '2.888.888d',
      description: 'Freshly squeezed juice for a healthy drink.'
    },
    {
      name: 'Smoothie Mix',
      image: '../../asset/img/smoothie.jpg',
      rating: '4.8',
      price: '4.888.888d',
      description: 'A blend of fruits and yogurt for a delicious smoothie.'
    },
    {
      name: 'Lemonade',
      image: '../../asset/img/lemonade.jpg',
      rating: '4.6',
      price: '2.888.888d',
      description: 'Classic lemonade for a refreshing drink.'
    }
  ];

  const product = products.find((prod) => prod.name === decodeURIComponent(productName));

  return (
    <div className="product-detail-page">
      {product ? (
        <>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="rating">⭐ {product.rating}</p>
            <p className="price">{product.price}</p>
            <div className="product-description">{product.description}</div>
            <button className="button">Add to Cart</button>
          </div>
        </>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

export default ProductDetail;
