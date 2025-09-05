import React, { useState } from 'react';
import './ImageGalleryStyle.css';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Living Room",
      description: "Modern furniture for your living space"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Dining Set",
      description: "Elegant dining experience"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Bedroom",
      description: "Comfortable and stylish bedrooms"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Office",
      description: "Productive workspace solutions"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <h2>New Arrivals</h2>
      
      <div className="image-display">
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].title}
          className="main-image"
        />
        
        <div className="image-info">
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
      
      <div className="navigation">
        <button onClick={prevImage} className="nav-button">← Previous</button>
        
        <div className="counter">
          {currentIndex + 1} / {images.length}
        </div>
        
        <button onClick={nextImage} className="nav-button">Next →</button>
      </div>
      
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;