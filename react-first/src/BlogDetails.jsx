import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handalDelete = () => {
      fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: 'DELETE',
      }).then(() => {
        navigate('/');
      });
    };

  return (
    <div>
      { error && <div className='text-xl font-bold m-5 text-red-600'>{error}</div>}
      { isPending && <div className='font-bold m-5 text-center'>Loading...</div>}
      {blog && (
        <div>
          <h1 className='text-3xl font-bold m-5'>Blog Details</h1>
          <div className='bg-sky-300 rounded-xl border-2 border-indigo-600 p-3 shadow-xl/30 m-5'>
              <h1 className='text-xl font-bold'>{blog.title}</h1>
              <h5>Written By <u className='text-blue-600'>{blog.author}</u></h5>
              <h3>{blog.body}</h3>
              <button className='bg-red-800 font-bold px-4 rounded-3xl border-2 p-1 mt-3 text-white border-black' onClick={handalDelete}>Delete Blog</button>
          </div>
        </div>
      )}
    </div>
  )
} 

export default BlogDetails
