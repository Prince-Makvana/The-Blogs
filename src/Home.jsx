import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className='Home'>
      { error && <div className='text-xl font-bold m-5 text-red-600'>{error}</div>}
      { isPending && <div className='font-bold m-5 text-center'>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
      {/* {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === 'Prince')} title="Prince Blogs!" */}
    </div>
  );
}

export default Home
