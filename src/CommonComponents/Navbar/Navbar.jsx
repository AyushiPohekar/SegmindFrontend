import React from "react";
import "./Navbar.css";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handlebtn = () => {
    
    setToggle(!toggle);
    console.log(toggle);
  };
  const navigate = useNavigate();
  return (
    <div className="NavbarDiv">
      <h1 onClick={() => navigate("/")}>LegaciesAI</h1>
      <div className="Navbardiv2">
        <h1 onClick={() => navigate("/models")}>Models</h1>
        <h1 onClick={() => navigate("/models")}>Docs</h1>
        <h1 onClick={() => navigate("/models")}>Blog</h1>

        
        <h1 onClick={handlebtn} style={{marginRight:"35px"}} > G Login </h1>
        <br />

        <div className="dropdown" onClick={handlebtn}>
          {toggle ? (
            <div className="dropdowndiv">
              <h2 onClick={() => navigate("/console/key")}>Console</h2>
              <h2 onClick={() => navigate("/models")}>Sign Out</h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
