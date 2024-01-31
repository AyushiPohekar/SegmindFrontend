import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Components/Context/auth";
import { MdArrowDownward } from "react-icons/md";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth);
  const [toggle, setToggle] = useState(false);
  const [, forceUpdate] = useState();
  const handlebtn = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  // Trigger a re-render by setting auth to null (assuming your context handles null as a logged-out state)
  setAuth(null);
    toast.success("Logout Success");
   
  };
  return (
    <div className="NavbarDiv">
      <h1 onClick={() => navigate("/")}>LegaciesAI</h1>
      <div className="Navbardiv2">
        <h1 onClick={() => navigate("/models")}>Models</h1>
        <h1 onClick={() => navigate("/models")}>Docs</h1>
        <h1 onClick={() => navigate("/models")}>Blog</h1>
        <div>
          {!auth?.name ? (
            <>
              <h1
                style={{ marginRight: "35px" }}
                onClick={() => navigate("/login")}
              >
                Login
              </h1>
              <br />
            </>
          ) : (
            <>
              <h1 className="namediv" onClick={handlebtn}>
                {auth?.name}
                <span>
                  <MdArrowDownward />
                </span>
              </h1>
            </>
          )}
        </div>
        <div className="dropdown" onClick={handlebtn}>
          {toggle ? (
            <div className="dropdowndiv">
              <h2
                onClick={() => navigate("/console/key")}
                style={{ cursor: "pointer" }}
              >
                Console
              </h2>
              <h2 style={{ cursor: "pointer" }} onClick={handleLogout}>
                Sign Out
              </h2>
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
