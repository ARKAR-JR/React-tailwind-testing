import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


function UserDetails() {

    const {id} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())
        .then((dada) => setPost(dada))
    } ,[])
    console.log(post)
  return (
    <>
      <div className=' container mx-auto'>
        <Link to="/user" className=" text-3xl text-red-500 font-bold underline ">Back</Link>
          <div className=' border p-5 rounded-xl mt-5 shadow-md shadow-red-600'>
          <img src={post.url} className=" rounded-xl " />
          <h1>User ID : <span className=' text-red-500 font-bold '>{id}</span></h1>
          <h2>{post.title}</h2>
          </div>
      </div>
    </>
  )
}

export default UserDetails;