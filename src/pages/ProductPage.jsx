import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const navigate = useNavigate();
  const [serachtext, setSearchText] = useState('')
  const [products, setproducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([])
  const [pricerange, setPriceRange] = useState([0, 10000])
  const [categories, setCategories] = useState([])

  function fetchProducts() {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
        
      })
      .catch((err) => console.log(err));
  }


  const handleSearch = (value) => {

    let filterdata = products.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()))
    console.log(filterdata)

    setFilterProducts(filterdata)

  }

  const handleCategorySearch=(category)=>{
    
  }


  useEffect(() => {
    fetchProducts();
  }, []);


  useEffect(() => {
    let filterdata = products.filter((x) => x.price <= pricerange[1])
    console.log(filterdata)
    setFilterProducts(filterdata)

    console.log(pricerange)
  }, [pricerange])

  return (
    <div>
      <NavbarComponent />

      <div className="container mt-4">
        <div className="row g-3 align-items-center">
          {/* Search Input */}
          <div className="col-md-4">
            <input
              type="search"
              className="form-control"
              placeholder="Search Product..."
              aria-label="Search Product"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {/* Category Select */}
          <div className="col-md-4">
            <select className="form-select" onChange={(e)=>handleCategorySearch(e.target.value)} aria-label="Category select">
              
              
            </select>
          </div>

          {/* Price Range */}
          <div className="col-md-4">
            <label htmlFor="priceRange" className="form-label">
              Max Price: <span id="priceValue">10000</span>
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="10000"
              id="priceRange"
              onChange={(e) => {
                document.getElementById('priceValue').innerText = e.target.value;
                setPriceRange([0, parseInt(e.target.value)])
              }}
            />
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row">
          {!filterProducts.length > 0 && products.map((p, idx) => {
            return (<div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <img src={p.imageUrl} className="card-img-top" alt={p.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <h6 className="text-muted">{p.category}</h6>

                  <div className="mb-2" style={{ color: 'gold' }}>
                    {p.rating} <i className="fa-solid fa-star"></i>
                  </div>

                  <p className="card-text flex-grow-1">{p.description}</p>

                  <h6 className="mb-3">$ {p.price}</h6>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => navigate('/details', { state: p })}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>)
          }
          )}
        </div>
        <div className="row">
          <h1>Filtered Products</h1>
          {filterProducts.length > 0 && filterProducts.map((p, idx) => {
            return (

              <div className="col-md-4 mb-4" key={idx}>
                <div className="card h-100 shadow-sm">
                  <img src={p.imageUrl} className="card-img-top" alt={p.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{p.name}</h5>
                    <h6 className="text-muted">{p.category}</h6>

                    <div className="mb-2" style={{ color: 'gold' }}>
                      {p.rating} <i className="fa-solid fa-star"></i>
                    </div>

                    <p className="card-text flex-grow-1">{p.description}</p>

                    <h6 className="mb-3">$ {p.price}</h6>

                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => navigate('/details', { state: p })}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}
