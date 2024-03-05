import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/authIndex'
import axios from 'axios'
import { API } from '../config'
import { FaTrash } from 'react-icons/fa'


const ShowCategory = () => {
    // destructuring token for future use
    const {token}=isAuthenticated()
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        axios.get(`${API}/allcategory`)
        .then(res=>{
            console.log(res.data)
            setCategories(res.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map((category,i)=>(
                                <tr key={i}>
                                    <td>{category.category_name}</td>
                                    <td>
                                        <button className='btn btn-danger'><FaTrash/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowCategory