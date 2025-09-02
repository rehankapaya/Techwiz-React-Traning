import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';

export default function DesignsPages() {
  const [designs, setdesigns] = useState([]);

  function fetchdesigns() {
    fetch("/data/designs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdesigns(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchdesigns();
  }, []);

  return (
    <div>
      <NavbarComponent />

      <div className="container mt-4">
        <h2 className="mb-4 text-center">Designs</h2>

        <div className="row">
          {designs.map((x, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={x.imageUrl} className="card-img-top" alt={x.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{x.name}</h5>
                  <h6 className="text-muted">{x.category}</h6>
                  <h6 className="text-muted">{x.style}</h6>
                  <h6 style={{ color: 'gold' }}>
                    {x.rating} <i className="fa-solid fa-star"></i>
                  </h6>
                  <p className="card-text flex-grow-1">{x.description}</p>
                  <h5>${x.cost}</h5>
                  <button className="btn btn-primary mt-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
