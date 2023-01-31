import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
    const [expandedNavbar, setExpandedNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandedNavbar(false)
    }, [location]);

  return (
    <div className="navbar" id={expandedNavbar ? "open" : "close"}>
        <div className ="toggleButton">
            <button 
                onClick= {() => {
                    setExpandedNavbar((prev) => !prev)
                }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/hobbies"> Hobbies </Link>
        </div>
    </div>
  )
}

export default Navbar