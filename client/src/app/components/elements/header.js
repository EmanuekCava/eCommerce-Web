import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const redirectIndex = () => {
        if(location.pathname !== "/") {
            navigate("/")
        }
    }

    return (
        <div className="navbar border-bottom border-primary">
            <div className="container-fluid d-flex justify-content-between align-items-center user-select-none">
                <img src='commerce.png' alt="ecommerce" className="image-element" 
                style={location.pathname === "/" ? {} : { cursor: 'pointer' }} 
                onClick={redirectIndex} />
                <div className='text-right'>
                    <span className="mb-2 h1 text-primary display-4 user-select-none">eCommerce</span>
                    <p className='h3'>Feel atractive</p>
                </div>
            </div>
        </div>
    )
}

export default Header