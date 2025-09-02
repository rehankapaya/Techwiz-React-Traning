import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';

export default function DesignersPages() {
  const [designers, setdesigners] = useState([]);

  function fetchdesigners() {
    fetch("/data/designers.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdesigners(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchdesigners();
  }, []);

  return (
    <div>
      <NavbarComponent />

      <div className="container mt-5">
        <h2 className="mb-4 text-center">Our Designers</h2>

        {designers.map((x, index) => (
          <div className="card mb-4 shadow-sm border-0" key={index}>
            <div className="row g-0 align-items-center">
              
              {/* Profile Image and Experience */}
              <div className="col-md-4 text-center">
                <img
                  src={x.imageUrl}
                  alt={x.name}
                  className="img-fluid rounded-circle border border-3"
                  style={{
                    height: '150px',
                    width: '150px',
                    objectFit: 'cover',
                    marginTop: '20px'
                  }}
                />
                <p className="text-muted mt-2 mb-3">
                  <small>{x.experience} of experience</small>
                </p>
              </div>

              {/* Profile Info */}
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{x.name}</h4>

                  <p className="mb-1">
                    <strong>Specialty:</strong> {x.specialty}
                  </p>

                  <p className="mb-1">
                    <strong>Phone:</strong> {x.phone}
                  </p>

                  <p className="mb-1">
                    <strong>Email:</strong> {x.email}
                  </p>

                  <p className="mb-1">
                    <strong>Rate:</strong> ${x.rate} / hour
                  </p>

                  <button className="btn btn-outline-primary mt-3">Contact</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
