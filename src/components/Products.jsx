import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
export default function Products() {
    const [products,setProducts]=useState([]);
    const getProduct = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    
    useEffect(()=>{
        getProduct();
    },[]);
  return (
    <div className="container">
        <div className="row">
            {products.map(product =>
                <div className="col-lg-3" key={product.id}>
                    <div className="product">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title}/>
                    </div>
                </div>
            )}
            
        </div>
    </div>
  )
}
