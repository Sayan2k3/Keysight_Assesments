import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Product = ({ match }) => {

  const [data, setData] = useState(null); 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  if (!data) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <div>
        <img src={data.image} alt="" className="prod-image" />
      </div>

      <div>
        <h1>{data.category}</h1>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>
          <strong>Price: INR. {data.price}</strong>
        </p>
      </div>

      <div className="back">
        <NavLink to="/home">Featured Products - Back</NavLink>
      </div>
    </div>
  );
};

export default Product;
