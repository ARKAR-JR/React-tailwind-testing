import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate  } from 'react-router-dom'


function User() {


  const [posts, setPosts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12')
      .then((response) => response.json())
      .then((dada) => setPosts(dada))
  } ,[])


  console.log(posts);

  return (
    <>
    <div className=' container mx-auto '>
        <h1 className=' text-3xl mb-5 '>Users</h1>

          <div className=' grid grid-cols-4 gap-5 '>
              {posts.map((post) => {
                return  (
                  <>
                  <div key={post.id} className=" border  p-5 rounded-xl  cursor-pointer" onClick={() => navigate(`/detail/${post.id}`)}>
                    <img src={post.url} className=" rounded-xl " />
                    {post.id}.{post.title}{" "}
                    <br />
                    <Link to={`/detail/${post.id}`} className=" text-blue-600 underline ">See More</Link>
                  </div>
                  </>
                )
              })}
          </div>
    </div>   
    </>
  );
}

export default User;