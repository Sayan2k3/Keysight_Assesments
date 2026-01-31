import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import Category from "./Category"
import Product from "./Product"
import Cart from "./Cart"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
