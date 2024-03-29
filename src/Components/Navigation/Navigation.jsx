import React, { useEffect, useState } from "react";
import "./Navigation.css";

import { Link, useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const storedUsername = localStorage.getItem("username");
    // const userdata = sessionStorage.getItem('username');
    setUserName(username);
    if (storedUsername) {
      setUserName(storedUsername);
      setIsLoggedIn(true);
    }
  },[]);
  const handleLogout = () => {
    localStorage.removeItem("username");
    // sessionStorage.removeItem('username');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >Nav
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!isloggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="loginn" to='/login'>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="signup" to='/signup'>Signup</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="navvv" to="/showEvent">
                      ShowEvents
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navvv" to="/find-events">
                      FilterEvents
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navvv" to="/events">
                      EventList
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" id="name">Welcome, <strong>{username}</strong></span>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={()=>handleLogout()}>
                      Logout
                    </button>
                  </li>
                  
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav>
                <ul className='navbar-nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    
                    {
                        !isloggedIn ? (
                            <>
                                <li>
                                    Login
                                </li>
                                <li>
                                    <Link to='/signup' >Signup</Link>
                                </li>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                            </>
                        ) :
                            
                        (
                                <>
                                    <li>Welcome, <strong>{userdata}</strong></li>
                                    <li><button className='signout' onClick={() => handleLogout()}>LOGOUT</button></li>
                                </>
                            
                        )
                    }


                </ul>
            </nav> */}
    </>
  );
};

export default Navigation;
