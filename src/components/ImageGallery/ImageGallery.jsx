import React from 'react'
import './ImageGalleryStyle.css'
export default function ImageGallery() {
    return (
        <div className="image-gallery">
            <h2>New Arrivals</h2>
            <div className="image-container">
                <div className="image-gallery-left">
                    <img src="/galleryimage3.jpg" alt="Image 3" />
                </div>
                <div className="image-gallery-right">
                    <img src="/galleryimage1.webp" alt="Image 1" />
                    <img src="/galleryimage2.jpeg" alt="Image 2" />
                </div>
            </div>
        </div>
    )
}
