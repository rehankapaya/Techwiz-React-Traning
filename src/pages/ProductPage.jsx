import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const navigate = useNavigate()
  const [products, setproducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([])
  const [subfilteredProducts, setsubfilteredProducts] = useState([])
  const [searchtext, setsearchtext] = useState('')
  const [selectedRange, setSelectedRange] = useState(0)
  const [categories, setcategories] = useState([])
  const [subCategory, setsubcategories] = useState([])
  const [maxPrice, setMaxPrice] = useState(1000)

  console.log(searchtext)
  function fetchProducts() {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);

        let uniqueCat = [...new Set(data.map((p) => p.category))]
        let uniquePrice = [...new Set(data.map(p => p.price))]
        setMaxPrice(Math.max(...uniquePrice))
        // console.log(uniqueCat)
        setcategories(uniqueCat)


      })
      .catch((err) => console.log(err));
  }



  function searchByInput() {
    let filterdata = products.filter((p) => p.name.toLowerCase().includes(searchtext.toLowerCase()))
    console.log(filterdata)
    setfilteredProducts(filterdata)
  }

  function searchByCategory(cat) {
    let filterdata = products.filter((p) => p.category == cat)
    console.log(filterdata)
    setfilteredProducts(filterdata)
    let uniquesubcategory = [...new Set(filterdata.map((p) => p.subcategory))]
    setsubcategories(uniquesubcategory)
  }

  function searchBySubCategory(subcat) {
    let filterdata = filteredProducts.filter(p => p.subcategory == subcat)
    console.log(filterdata)
    setsubfilteredProducts(filterdata)
  }

  function searchByRange(range) {
    setSelectedRange(range)
    // console.log(range)
    let filterdata = products.filter((p) => p.price <= parseInt(range))
    console.log(filterdata)
    setfilteredProducts(filterdata)


  }


  useEffect(() => {
    fetchProducts();
  }, []);



  useEffect(() => {
    searchByInput()
  }, [searchtext])

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
              onChange={(e) => setsearchtext(e.target.value)}
            />
          </div>

          {/* Category Select */}
          <div className="col-md-4">
            <select className="form-select"
              onChange={(e) => searchByCategory(e.target.value)}
              aria-label="Category select">

              {
                categories.map((p) => {
                  return <option value={p}>{p}</option>
                })
              }
            </select>
          </div>

          {/* subCategory Select */}
          <div className="col-md-4">
            <select className="form-select"
              onChange={(e) => searchBySubCategory(e.target.value)}
              aria-label="Category select">

              {
                subCategory.map((p) => {
                  return <option value={p}>{p}</option>
                })
              }
            </select>
          </div>

          {/* Price Range */}
          <div className="col-md-4">
            <label htmlFor="priceRange" className="form-label">
              Max Price: <span id="priceValue">{selectedRange}</span>
            </label>
            <input
              type="range"
              onChange={(e) => searchByRange(e.target.value)}
              className="form-range"
              min="0"
              max={maxPrice}
              id="priceRange"
            />
          </div>
        </div>
      </div>



      <div className="container mt-5">
        <div className="row">
          {filteredProducts.length > 0 ?

            (<>
              <h1>Filterd Products</h1>
              <div style={{ display: "flex", flexWrap: 'wrap' }}>
                {
                  subfilteredProducts.length > 0 ?
                    subfilteredProducts.map((p) => {
                      return (
                        <>
                          <div className="col-md-4 mb-4" key={p.id}>
                            <div className="card h-100 shadow-sm">
                              <img src={p.imageUrl} className="card-img-top" alt={p.name} />
                              <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{p.name}</h5>
                                <h6 className="text-muted">{p.category}</h6>
                                <h6 className="text-muted">{p.subcategory}</h6>

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
                        </>
                      )
                    }) :
                    filteredProducts.map((p) => {
                      return (
                        <>
                          <div className="col-md-4 mb-4" key={p.id}>
                            <div className="card h-100 shadow-sm">
                              <img src={p.imageUrl} className="card-img-top" alt={p.name} />
                              <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{p.name}</h5>
                                <h6 className="text-muted">{p.category}</h6>
                                <h6 className="text-muted">{p.subcategory}</h6>

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
                        </>
                      )
                    })

                }
              </div>
            </>
            )

            :
            products.map((p) => {
              return (<div className="col-md-4 mb-4" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <img src={p.imageUrl} className="card-img-top" alt={p.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{p.name}</h5>
                    <h6 className="text-muted">{p.category}</h6>
                    <h6 className="text-muted">{p.subcategory}</h6>


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
            })}
        </div>

      </div>
    </div>
  );
}
