import React from 'react'
import "./style.css"
import pic1 from "./img/img4.jpg"
import home2 from "./img/home2.mp4"
import {Button,Container,Grid} from "@material-ui/core"
function Download() {
    return (
        <div className="downloadall" id="download">
        <>
        <video poster={pic1} className='videoTag' autoPlay loop muted> 
            <source src={home2} type='video/mp4' />
            </video>
        </>
        <Button style={{position:"relative",top:"-30vh",width:"35vh",background:"#4FFBDF",color:"black"}}>PLAY NOW</Button>
            
        </div>
    )
}

export default Download

        
        