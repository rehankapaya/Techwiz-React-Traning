import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Button, Card } from 'react-bootstrap'

export default function DesignersPages() {
  const [designers, setdesigners] = useState([])

  function fetchdesigners() {
    fetch("/data/designers.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setdesigners(data)
      })
      .catch((err) => console.log(err))

  }

  useEffect(() => {
    fetchdesigners()

  }, [])
  return (
    <div>
      <NavbarComponent />

      DesignersPages


      {
        designers.map((x) => {
          return <Card className='designer-card'>
            <Card.Body className='designer-card-body'>

              <img src={x.imageUrl} alt="" />

              <div className="designer-card-content">

                <Card.Title>{x.name}</Card.Title>
                <Card.Text>
                  {x.specialty
                  }
                </Card.Text>
                <Card.Text>
                  {x.phone
                  }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </div>
            </Card.Body>
            <Card.Header>{x.experience}  of experience</Card.Header>
          </Card>
        })
      }
    </div>
  )
}
