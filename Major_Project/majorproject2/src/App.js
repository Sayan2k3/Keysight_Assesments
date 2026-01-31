import React from 'react'
import { HashRouter, Route } from 'react-router-dom';

import FeaturedProducts from './FeaturedProducts';
import Product from './product';
import './App.css';
 
function App() {
  return(
    <div>
      <HashRouter>
        <div>
          <Route exact path="/home" component={FeaturedProducts}/>
          <Route exact path='/product/:id' component = {Product}/>
        </div>
      </HashRouter>
    </div>
  )
}
 
export default App;