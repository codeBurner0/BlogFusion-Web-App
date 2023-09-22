import React, { useEffect, useState } from 'react'
import './style/Card2.css'
import { BsPersonCircle } from 'react-icons/bs';
import { MdEditSquare } from 'react-icons/md';
import { BsEyeFill } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'
import CreateBlog from './CreateBlog';

function Card2() {

    const [blog, setBlog] = useState([])
    const [id,setId]=useState("786769878709");
    const navigate=useNavigate()
    
    useEffect(() => {
        caller()
    }, [])

    const caller = async () => {
        let result = await fetch('http://localhost:5000/blogs');
        result = await result.json();
        setBlog(result)
        console.log(result)
    }
    //useeffect callback must be synchronous otherwise it wil give destroy is not a function error

    function Delete(id){
        fetch(`http://localhost:5000/blogs/${id}`,{
            method:'delete',
        })
        navigate(0)// refresh the page
    }

    function Update(_id,name,url,title,content){
        const bool=true;
        navigate('/createblog',{state:{id:_id,bool:bool,name:name,url:url,title:title,content:content}})
    }

    return (
        <>
            {
                blog.map((blogs) => {
                    return (
                        <div className="card_container" key={blogs._id}>
                            <div className="cloud">
                            </div>
                            <div className="image"><img src={blogs.imageUrl} alt="" /></div>
                            <BsPersonCircle className='ImageIcon' />
                            <div className="card">
                                <div className="card__header">
                                </div>
                                <div className="card__body">
                                    <span className="tag tag-red">{blogs.name}</span>
                                    <h4>{blogs.title}</h4>
                                    <p>{blogs.content}...</p>
                                </div>
                                <div className="card__footer">
                                    <span className="update">
                                        <MdEditSquare onClick={()=>Delete(blogs._id)}/>
                                    </span>
                                    <span className="read" onClick={()=>Update(blogs._id,blogs.name,blogs.imageUrl,blogs.title,blogs.content)}>
                                        <span className='rtext'>Read</span><BsEyeFill className='ricon' />
                                    </span>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card2
