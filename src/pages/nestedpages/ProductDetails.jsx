import React, { useEffect, useState } from 'react'
import NavbarComponent from '../../components/NavbarComponent'
import { useLocation } from 'react-router-dom'

export default function ProductDetails() {
    const location =useLocation()
    console.log(location.state)
    let product = location.state

    
    return (
        <div>
            <NavbarComponent />
            <img src={product.imageUrl} alt="" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {
                product.reviews.map((r)=>{
                    return(<>
                        <h6>{r.user}</h6>
                        <p>{r.comment}</p>
                    </>
                    )
                })
            }
        </div>
    )
}
