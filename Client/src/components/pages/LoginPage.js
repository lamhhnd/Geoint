import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/earth.jpg'
import '../../App.css'

export default function SignInPage() {
    return (
        <div  className="text-center m-0-auto" style={ {
            width: "100%",
            height: "100vh",
            background: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        } } >
            <h2 className="main-para text-center">Sign in to GeoInt map</h2>
            <form action="/home">
                <p>
                    <label>Username </label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
