import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {
    const params=useParams()
    const [product,setProduct]=useState({})

    useEffect(()=>{
        const id=params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    },[params.product_id])
    
    const addToCart=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const productItem={
            id:product.id,
            title:product.title,
            image:product.image,
            price:product.price,
            category:product.category,
            quantity:1
        }

        // check existance of cart item
        const existItem= cartItems.find(item=>item.id===productItem.id)

        if(existItem){
            toast.error('Product already in cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is successfully added to cart`)
        }

    }

  return (
    <>
        <ToastContainer position="top-right" theme="colored"/>
        <div className="container my-5">
            <div className="row d-flex justify-content-evenly shadow py-5">
                <div className="col-md-5 ">
                    <img src={product.image} alt={product.title} width={'250'}/>
                </div>
                <div className="col-md-6 ">
                    <h2>{product.title}</h2>
                    <h3 className='text-secondary'>${product.price}</h3>
                    <h3 className="fs-6">{product.description}</h3>
                    <button className="btn btn-warning" onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail