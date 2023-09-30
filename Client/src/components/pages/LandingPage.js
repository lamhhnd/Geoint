import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/earth.jpg'

export default function LandingPage() {
    return (
        <header style={ {
            width: "100%",
            height: "100vh",
            background: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        } }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now </p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="reg_btn"><span>log in </span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}
