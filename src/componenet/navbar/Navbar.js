import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { images } from '../../images/index';

export const Navbar = () => {


  return (
    <div className="logo-header">
        <Link to={'/'}>
            <img src={images.logo} alt="" />
          </Link>
      </div>
  )
}
