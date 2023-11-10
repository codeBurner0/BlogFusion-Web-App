import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './style/CreateBlog.css'
import ForeGround from './images/createblog/foregeound_create.png'
import Background from './images/createblog/cloud-background.gif'
import Bird from './images/createblog/bird.svg'
import Cloud from './images/createblog/moon-birds.png'
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

function CreateBlog() {
  const [name, setName] = useState("Ankit Anand")
  const [imageUrl, setImageUrl] = useState("DefaultImage")
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")
  const [coloricon, setColorIcon] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("ankit@gmail.com")
  const [updating, setUpdating] = useState(false)
  const [blogId, setBlogId] = useState(null)
  const {isAuthenticated} = useAuth0();
  const location = useLocation();
  useEffect(() => {
    if(isAuthenticated){
      
    }
    if (location.state) {
      setUpdating(location.state.bool)
      setName(location.state.name)
      setImageUrl(location.state.url)
      setTitle(location.state.title)
      setContent(location.state.content)
      setBlogId(location.state.id)
    } else {
      setUpdating(false)
    }
  }, [])

  const navigate = useNavigate()
  const CreateBlog = async () => {
    console.log(name, imageUrl, title, content, userId )
    let result = await fetch("http://localhost:5000/createBlog", {
      method: "post",
      body: JSON.stringify({ name, imageUrl, title, content, userId,color ,coloricon}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    navigate('/Blogs')
    console.log("done")
  }

  async function updateBlog() {
    let result = await fetch(`http://localhost:5000/blogs/${blogId}`, {
      method: 'put',
      body: JSON.stringify({ name, imageUrl, title, content, userId, color }),
      headers: { 
        "Content-type": "application/json;charset=UTF-8"
      }
    })

    result = await result.json();
    navigate('/Blogs')
    console.log("done")
  }

  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 2 }}>
      <div className="createblog_grid">
        <div>
          <div className='contact-form contact-form2'>
            <div id='form' className='text-center' style={{ width: '100%', maxWidth: '350px' }}>
              <h2 className='cont-h2'>Create Blog</h2>

              <input type="text" placeholder='Enter image url' value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);setName("user.name")
                  setUserId("user.email");
                }} className='cont-input create_input' />
              <input type="text" placeholder='Enter title' value={title}
                onChange={(e) => setTitle(e.target.value)} className='cont-input  create_input' />
              <input type="text" placeholder='Enter content' value={content}
                onChange={(e) => setContent(e.target.value)} className='cont-input create_input' />


                <div className="choose_color">
                  <div className='color_text'>Choose your color</div>
                  <div className="c_color color1" onClick={()=>{setColor("#99c4b9");setColorIcon("rgb(98, 142, 144)")}}> </div>
                  <div className="c_color color2" onClick={()=>{setColor("#eabbbb");setColorIcon("#c59090")}}></div>
                  <div className="c_color color3" onClick={()=>{setColor("#97c297");setColorIcon("#6fb16f")}}></div>
                </div>







              <button onClick={(updating ? () => updateBlog() : () => CreateBlog())} className="contact-button create_button"><span>{updating ? "Update" : "CreateBlog"}</span></button>
            </div>
          </div>
        </div>
        <img src={Cloud} alt="" className='createblog_cloud' />
      </div>
      <div className="createblog_sec1">
        <img src={ForeGround} alt="" className='createblog_img' />
        <img src={Background} alt="" className='createblog_img2' />
        <img src={Bird} alt="" className='createblog_bird' />
      </div>
    </motion.div>
  )
}

export default CreateBlog
