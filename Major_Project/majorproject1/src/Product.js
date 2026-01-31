import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id])

  if (!product.id) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>
  }

  return (
    <div className="product-wrapper">
      {/* LEFT IMAGE */}
      <div className="product-left">
        <img src={product.image} alt={product.title} />
      </div>

      {/* MIDDLE DETAILS */}
      <div className="product-middle">
        <h2 className="product-title">{product.title}</h2>

        <p className="rating">⭐ 4.0 Rating | 1500+ ratings</p>

        <div className="price-box">
          <span className="deal">Republic Day Deal</span>
          <p className="price">₹ {product.price}</p>
          <p className="tax">Inclusive of all taxes</p>
        </div>

        <button
          className="add-btn"
          onClick={() => {
            const cart =
              JSON.parse(localStorage.getItem("cart")) || []

            const index = cart.findIndex(
              item => item.id === product.id
            )

            if (index !== -1) {
              cart[index].qty += 1
            } else {
              cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: 1
              })
            }

            localStorage.setItem("cart", JSON.stringify(cart))
            navigate("/cart")
          }}
        >
          Add to Cart
        </button>

        <div className="product-info">
          <h4>Category</h4>
          <p>{product.category}</p>

          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </div>

      {/* RIGHT SIDE BOX */}
      <div className="product-right">
        <p className="stock">In stock</p>
        <p>Free Delivery</p>
        <p>10 Days Replacement</p>
        <p>1 Year Warranty</p>
        <p>Shipped by Shoppy</p>
      </div>
    </div>
  )
}

export default Product
