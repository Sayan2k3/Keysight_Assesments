import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

function Category() {
  const { name } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    const cat =
      name === "clothing" ? "men's clothing" : "electronics"

    axios
      .get(`https://fakestoreapi.com/products/category/${cat}`)
      .then(res => setData(res.data))
  }, [name])

  return (
    <div className="category-page">
      <h2 className="category-title">
        Welcome to {name} Page
      </h2>

      <div className="product-grid">
        {data.map(item => (
          <div
            className="product-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p className="price">₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
