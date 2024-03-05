import React,{useState,useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import { API } from '../config'

const Products = () => {
    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const [limit,setLimit]=useState(8)

    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                const response=await axios.get(`${API}/allproduct`)
                console.log(response.data)
                setProducts(response.data)
                setLoading(false)
            }
            catch(err){
                console.log(err)
            }
        }

        setTimeout(() => {
            fetchProduct()
        }, 2000);
    },[])

  return (
    <>
        <div className="container mt-2 mb-2">
        <div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center g-4">

            {
                loading ?
                (<ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />)
                :
                (
                    products.slice(0,limit).map((product,i)=>(
                        <Card key={i} item={product}/>
                    )
                )
                )
            }
            {
                limit<products.length && <div className="container my-3">
                <div className="row d-flex justify-content-center">
                    <button className="btn btn-warning" onClick={()=>setLimit(limit+4)}>Load More</button>
                </div>
            </div>
            }
            
 
            </div>
        </div>
    </>
  )
}

export default Products