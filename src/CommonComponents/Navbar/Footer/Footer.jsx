import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate=useNavigate();
  return (
    <div>
    <div className='footerDiv'>
    <div className='footer'>
    
    <h1 onClick={()=>navigate("/")}>LegaciesAI</h1>
        <div className='footerList'>
        <h1 onClick={()=>navigate("/models")}>Docs</h1>
        <h1 onClick={()=>navigate("/models")}>Models</h1>
        <h1 onClick={()=>navigate("/models")}>Blog</h1>
        <h1 onClick={()=>navigate("/models")}>Blog</h1>
        <h1 onClick={()=>navigate("/models")}>Contacts</h1>
        <h1 onClick={()=>navigate("/models")}>Events</h1>
        <h1 onClick={()=>navigate("/models")}>Media Kit</h1>
        <div style={{fontSize:"27px",marginTop:"10px",marginLeft:"55px",display:"flex"}}>
         <FaTwitter />
          <FaGithub style={{marginLeft:"15px"}}/>
          <FaDiscord style={{marginLeft:"15px"}}/>
          
        </div>
       
        

       
        
      
    </div>
    </div>
    </div>
    <div className='footerlast' style={{display:"flex",margin:"80px",paddingLeft:"30px",fontWeight:"lighter",fontSize:"20px"}}>
          <span>@Copyright 2023, All Rights Reserved</span>
          
            <span style={{marginLeft:"450px"}}>Privacy Policy</span>
            <span style={{marginLeft:"30px"}}>Main cloud services agreement(MCSA)</span>
          
        </div>
        
    </div>
  )
}

export default Footer
