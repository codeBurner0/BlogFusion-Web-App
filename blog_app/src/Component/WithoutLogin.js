import React, { useEffect } from 'react'
import './style/CreateBlog.css'
import ForeGround from './images/createblog/foregeound_create.png'
import Background from './images/createblog/cloud-background.gif'
import Bird from './images/createblog/bird.svg'
import Cloud from './images/createblog/moon-birds.png'
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
function WithoutLogin() {
    const {isAuthenticated} = useAuth0();
    const navigate=useNavigate()
    useEffect(()=>{
        if(isAuthenticated){
            navigate('/')
        }
    })
    return (
        <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 2 }}>
            <div className="createblog_grid">
                <div>
                    <div className='contact-form contact-form2'>
                        <h1 className="withoutloginh">
                            SignIn first to create blogs
                        </h1>
                        <p className='withoutloginp'>
                        "Step into a world where your thoughts take center stage. Log in now and weave your ideas into the fabric of the web – because every great story begins with a click."
                        </p>
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
export default WithoutLogin
