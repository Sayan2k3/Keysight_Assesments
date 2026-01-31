import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(data)
  }, [])

  const updateCart = updated => {
    setCartItems(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const increaseQty = id => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    updateCart(updated)
  }

  const decreaseQty = id => {
    const updated = cartItems.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
    updateCart(updated)
  }

  const removeItem = id => {
    const updated = cartItems.filter(item => item.id !== id)
    updateCart(updated)
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Cart Page</h2>
        <p>Your cart is empty.</p>

        <button onClick={() => navigate("/category/electronics")}>
          Start Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>Cart Page</h2>

      <div className="cart-header">
        <span>Image</span>
        <span>Product Name</span>
        <span>Price</span>
        <span>Quantity</span>
      </div>

      {cartItems.map(item => (
        <div className="cart-row" key={item.id}>
          <img src={item.image} alt={item.title} />

          <p>{item.title}</p>

          <p>₹ {item.price}</p>

          <div className="qty-box">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-footer">
        <button onClick={() => navigate("/category/electronics")}>
          Purchase More
        </button>

        <h3>Total Price: ₹ {totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default Cart
