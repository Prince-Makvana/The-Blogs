import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handalSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author};

    setIsPending(true)

    setTimeout(() => {
      fetch('http://localhost:8000/blogs',{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      setIsPending(false)
      console.log("New Blog Added")
      navigate('/'); 
    })
    },2000)
  }

  return (
    <div>
      <h1 className='text-4xl font-bold m-5 text-center text-teal-700'>Add a New Blog</h1>
      <form onSubmit={handalSubmit} className='flex flex-col m-5 w-1/2 justify-self-center border-2 bg-teal-100 p-5 rounded-lg'>
        <label className='font-bold mb-1 mt-3'>Blog Title: </label>
        <input 
          className='border rounded-lg p-2 mb-5' 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter blog title' />
        <label className='font-bold mb-1 mt-3'>Blog Body: </label>
        <textarea 
          className='border rounded-lg p-2 mb-5' 
          placeholder='Enter blog description' 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required>
        </textarea>
        <label className='font-bold mb-1 mt-3'>Blog Author: </label>
        <input 
          className='border rounded-lg p-2 mb-5' 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder='Enter blog author name' />
        {!isPending && <button type='submit' className='border-2 rounded-xl font-bold p-2 px-4 mt-5 bg-teal-500 text-white border-black mx-auto'>Add Blog</button>}
        {isPending && <button type='submit' className='border-2 rounded-xl font-bold p-2 px-4 mt-5 bg-teal-500 text-white border-black mx-auto' disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create
