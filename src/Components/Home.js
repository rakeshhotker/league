import React from 'react'
import home2 from "./img/home2.mp4"
import "./Styles/home.css";
import {Link} from "react-router-dom"
import pic1 from "./img/img1.jpg"
function Home() {
    return (
    <div>
        <video poster={pic1} className='videoTag' autoPlay loop muted>
            <source src={home2} type='video/mp4' />
        </video>
<header class="viewport-header">
  <h1>
    LEAGUE
    <span>OF LEGENDS</span>
    <Link className="links" to="/" >Home</Link><br/>
    <Link className="links"  to="/Login" >Login</Link><br/>
    <Link  className="links" to="/Download" >Download</Link><br/>
    
    <Link className="links"  to="/Community" >Community</Link>
  </h1>
</header>
        

    </div>
    )
}

export default Home
