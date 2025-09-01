import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Button, Card } from 'react-bootstrap'

export default function DesignsPages() {
  const [designs, setdesigns] = useState([])

  function fetchdesigns() {
    fetch("/data/designs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setdesigns(data)
      })
      .catch((err) => console.log(err))

  }

  useEffect(() => {
    fetchdesigns()

  }, [])
  return (
    <div>
      <NavbarComponent />

      DesignsPages

      {
        designs.map((x) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={x.imageUrl} />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <h6>{x.category}</h6>
                <h6>{x.style}</h6>

                <h6 style={{ color: 'gold' }}>{x.rating} <i class="fa-solid fa-star"></i></h6>

                <Card.Text>
                  {x.description}
                </Card.Text>

                <h6>$ {x.cost}</h6>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}
