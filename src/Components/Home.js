import React from 'react'
import "./style.css";
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from "react-scroll"
import pic1 from "./img/img4.jpg"
import home2 from "./img/home2.mp4"
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function Home() {
    return (
    <div className="homeall" id="home">
    <div className="nav">

    
    <Link activeClass="active" className="link"
      to="home"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
>
  <HomeIcon
    color="secondary"
  /></Link>
<Link activeClass="active" className="link"
      to="download"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
>
  <GetAppIcon
    color="secondary"
  />
</Link>
<Link activeClass="active" className="link"
      to="login"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
>
  <StorefrontIcon
    color="secondary"
  />
</Link>
<Link activeClass="active" className="link"
      to="Contact"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
>
  <QuestionAnswerIcon
    color="secondary"
  />
</Link>
    </div>
        <video poster={pic1} className='videoTag' autoPlay loop muted>
            <source src={home2} type='video/mp4' />
        </video>
    </div>

    )
}

export default Home
