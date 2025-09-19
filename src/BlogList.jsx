import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs, title}) => {

  return (
    <>
      <h1 className='text-4xl font-bold m-5'>{title}</h1>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {blogs.map((blog) => (
          <div className='bg-sky-300 rounded-xl border-2 border-indigo-600 p-3 shadow-xl/30' key={blog.id}>
            <Link to={`/blogs/${blog.id}`}> 
              <h1 className='text-xl font-bold'>{blog.title}</h1>
              <h5>Written By <u className='text-blue-600'>{blog.author}</u></h5>
            </Link>
          </div>
        ))}
      </div>  
    </>
  )
}

export default BlogList
