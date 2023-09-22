import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function CreateBlog() {
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const [updating,setUpdating]=useState(false)
  const [blogId,setBlogId]=useState(null)
  let auth = localStorage.getItem('user')
      auth = JSON.parse(auth)
  let id=null;
      const location=useLocation();
      useEffect(()=>{
        if(location.state){
          setUpdating(location.state.bool)
          setName(location.state.name)
          setImageUrl(location.state.url)
          setTitle(location.state.title)
          setContent(location.state.content)
         setBlogId(location.state.id)
        }else{
          setUpdating(false)
        }
      },[])
      

 const navigate=useNavigate()
  const CreateBlog = async () => {
    console.log(name.length,userId)
    let result = await fetch("http://localhost:5000/createBlog", {
      method: "post",
      body: JSON.stringify({ name, imageUrl, title, content, userId}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    navigate('/Blogs')
    console.log("done")
  }

  async function updateBlog(){
    let result = await fetch(`http://localhost:5000/blogs/${blogId}`, {
      method:'put',
      body:JSON.stringify({name, imageUrl, title, content, userId}),
      headers:{
        "Content-type":"application/json;charset=UTF-8"
      }
    })

    result=await result.json();
    navigate('/Blogs')
    console.log("done")
  }
  

  return (
    <div className='createblog-continer'>
      <input type="text" placeholder='Enter image url' value={imageUrl}
        onChange={(e) => {setImageUrl(e.target.value); 
          setName(auth.name)
          setUserId(auth._id)}} />
      <input type="text" placeholder='Enter title' value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder='Enter content' value={content}
        onChange={(e) => setContent(e.target.value)} />
      <button onClick={(updating?()=>updateBlog():()=>CreateBlog())}>{updating?"Update":"CreateBlog"}</button>

    </div>
  )
}

export default CreateBlog
