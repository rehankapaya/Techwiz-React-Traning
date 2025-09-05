import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import FooterComponent from '../components/FooterComponent'

export default function HomePage() {
  return (
    <div>
      <NavbarComponent />

      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Dream Home</h1>
          <p>Inspiration for every room, style, and budget.</p>
          <button className="cta-button">Explore Designs</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Modern living room" />
        </div>
      </section>
      <ImageGallery />
     <FooterComponent/>
    </div>
  )
}
