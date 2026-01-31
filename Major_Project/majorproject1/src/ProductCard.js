import React from "react"
import { useNavigate } from "react-router-dom"

function ProductCard(props) {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate(`/product/${props.item.id}`)}>
        <img src={props.item.image} width="150" />
        <p>{props.item.title}</p>
      </div>
    </>
  )
}

export default ProductCard
