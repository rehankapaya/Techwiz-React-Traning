import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {

  const navigate = useNavigate()
  const [products, setproducts] = useState([])

  function fetchProducts() {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setproducts(data)
      })
      .catch((err) => console.log(err))

  }



  useEffect(() => {
    fetchProducts()

  }, [])


  return (
    <div>
      <NavbarComponent />

      <div className="cards">

        {
          products.map((p) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p.imageUrl} />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <h6>{p.category}</h6>

                  <h6 style={{ color: 'gold' }}>{p.rating} <i class="fa-solid fa-star"></i></h6>

                  <Card.Text>
                    {p.description}
                  </Card.Text>

                  <h6>$ {p.price}</h6>
                  <Button variant="primary" onClick={() => navigate('/details',{state:p})}>Details</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
