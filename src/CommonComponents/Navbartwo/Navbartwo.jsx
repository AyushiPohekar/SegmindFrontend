import React from "react";
import "./NavbarTwo.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Components/Context/auth";
import { MdArrowDownward } from "react-icons/md";
import { toast } from "react-toastify";
const Navbartwo = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const [auth, setAuth] = useAuth();
  console.log(auth);

  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    setAuth(null);
    toast.success("Logout Success");
  };
  return (
    <div className="app2">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          LegaciesAI
        </div>
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => navigate("/models")}>
            Models
          </button>
          <button className="nav-button">Docs</button>
          <button className="nav-button">Blogs</button>

          {!auth?.name ? (
            <>
              <button className="nav-button" onClick={() => navigate("/login")}>
                Login
              </button>
            </>
          ) : (
            <>
              <div className={`dropdown`}    onClick={toggleDropdown}>
                <button
                  className="nav-button dropdown-button"
               
                >
                  {auth?.name}
                  <span>
                    <MdArrowDownward />
                  </span>
                </button>
                {isDropdownVisible && (
                  <>
                    <div className="dropdown-content">
                      <p onClick={() => navigate("/console/key")}>Console</p>
                      <p onClick={handleLogout}>Sign out</p>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbartwo;
