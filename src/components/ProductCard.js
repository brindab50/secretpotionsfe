import React from "react";
import ProductContainer from "../Container.js/ProductContainer";


const ProductCard = (props) => {
    return(
        <div className='product-card'>
            {props.product.imgUrl}
          product name:  {props.product.name}
            <br/>
          brand:  {props.product.brand}
            <br/>
         description: {props.product.description}
            <br/>
    
         
          <h5> price: ${props.product.price} </h5>
        </div>
    )
}


export default ProductCard