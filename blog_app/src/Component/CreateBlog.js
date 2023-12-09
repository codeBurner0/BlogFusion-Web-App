import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style/CreateBlog.css'
import ForeGround from './images/createblog/foregeound_create.png'
import Background from './images/createblog/cloud-background.gif'
import Bird from './images/createblog/bird.svg'
import Cloud from './images/createblog/moon-birds.png'
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

function CreateBlog() {
  const [name, setName] = useState("Ankit Anand")
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#99c4b9")
  const [coloricon, setColorIcon] = useState("rgb(98, 142, 144)")
  const [content, setContent] = useState("")
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)
  const [errTitle, setErrTitle] = useState(false)
  const [errContent, setErrContent] = useState(false)
  const [userId, setUserId] = useState("ankit@gmail.com")
  const [updating, setUpdating] = useState(false)
  const [blogId, setBlogId] = useState(null)
  const { isAuthenticated ,user} = useAuth0();
  const location = useLocation();
  useEffect(() => {

    if(!isAuthenticated){
      navigate('/without')
    }

    if (isAuthenticated) {
      setName(user.name)
      setUserId(user.email);
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
    if (content?.length === 0 && title?.length === 0) {
      setErrTitle(true)
      setErrContent(true)
      navigate('/createblog')
    }else if(content?.length === 0){
      setErrContent(true)
      navigate('/createblog')
    }
    else if(title?.length === 0){
      setErrTitle(true)
      navigate('/createblog')
    }
     else {
      if(imageUrl.length===0){
        setImageUrl("DefaultImage")
      }
      let result = await fetch("https://blog-fusion-web-app.vercel.app/createBlog", {
        method: "post",
        body: JSON.stringify({ name, imageUrl, title, content, userId, color, coloricon }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      navigate('/Blogs')
    }
  }

  async function updateBlog() {
    let result = await fetch(`https://blog-fusion-web-app.vercel.app/blogs/${blogId}`, {
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
                  setImageUrl(e.target.value);
                }} className='cont-input create_input' required />
              <input style={(errTitle) ? { border: "2px solid red" } : { border: "1px solid grey" }} type="text" placeholder='Enter title' value={title}
                onChange={(e) => setTitle(e.target.value)} className='cont-input  create_input' required />
              <input style={(errContent) ? { border: "2px solid red" } : { border: "1px solid grey" }} type="text" placeholder='Enter content' value={content}
                onChange={(e) => setContent(e.target.value)} className='cont-input create_input' required />
              <div className="choose_color">
                {(errContent || errTitle) && <div className='color_text errortext'>Please! Fill all fields</div>}
                <div className='color_text'>Choose your color</div>
                <div className="c_color color1" style={(col1) ? { border: "2px solid black" } : { border: "none" }} onClick={() => { setColor("#99c4b9"); setColorIcon("rgb(98, 142, 144)"); setCol1(true); setCol2(false); setCol3(false) }}> </div>
                <div className="c_color color2" style={(col2) ? { border: "2px solid black" } : { border: "none" }} onClick={() => { setColor("#eabbbb"); setColorIcon("#c59090"); setCol2(true); setCol1(false); setCol3(false) }}></div>
                <div className="c_color color3" style={(col3) ? { border: "2px solid black" } : { border: "none" }} onClick={() => { setColor("#97c297"); setColorIcon("#6fb16f"); setCol3(true); setCol1(false); setCol2(false) }}></div>
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
