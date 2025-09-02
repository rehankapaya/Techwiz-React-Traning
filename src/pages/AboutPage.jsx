import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

export default function AboutPage() {
  return (
     <div>
      <NavbarComponent />
      <div className="container mt-5">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>HomeStylers</strong> – your go-to destination for stylish and affordable home décor. 
          We specialize in transforming everyday living spaces into beautiful, comfortable, and inspiring environments. 
          Whether you're redecorating a single room or designing your entire home, our expert tips, curated collections, 
          and personalized suggestions are here to guide you every step of the way.
        </p>

        <p>
          At HomeStylers, we believe your home should be a reflection of your personality, lifestyle, and creativity. 
          That’s why we offer a wide range of design inspiration, DIY ideas, and modern styling solutions tailored for all kinds of homes – from cozy apartments to spacious villas.
        </p>

        <p>
          Our team is passionate about helping you make the most of your space. With years of experience in interior design, 
          space planning, and trend forecasting, we bring you the latest looks, timeless styles, and clever solutions that make a big impact without breaking the bank.
        </p>

        <p>
          Whether you're a first-time decorator or a seasoned design enthusiast, HomeStylers is here to help you turn your house into a home you'll love. 
          Join our growing community of home lovers and get inspired to create a space that truly feels like yours.
        </p>
      </div>
    </div>
  )
}
