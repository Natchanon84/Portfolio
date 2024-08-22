import "../components.css"
import { Link } from "react-router-dom"

import profile_img from "../../img/img1.jpg"
import img1 from "../../img/computer.svg"
import img2 from "../../img/profile.png"
import img3 from "../../img/checklist.svg"
import img4 from "../../img/comment.svg"
import img5 from "../../img/contact.svg"

function navbar() {

    return (
        <div className="container-navbar">
            <div className="container-profile">
                <Link to="/" >
                    <img src={profile_img} className="profile-img" />

                    <div className="name">
                        <h5>Natchanon Phomuang</h5>
                        <h6>https://github.com/Natchanon84</h6>
                    </div>
                </Link>


            </div>

            <div className="container-navi">
                <Link to="/mywork"><img src={img1} />My Portfolio</Link>
                <Link to="/about"><img src={img2} />About</Link>
                <Link to="/blog"><img src={img4} />Education</Link>
                <Link to="/experience"><img src={img3} />Experience</Link>
                <Link to="/Contact"><img src={img5} />Contact</Link>
            </div>

            <div className="container-stack">
                <div>
                    <h6>Tech Stack</h6>
                    <p>- HTML</p>
                    <p>- CSS</p>
                    <p>- JavaScript</p>
                    <p>- React.js</p>
                    <p>- Boostrap</p>
                </div>
            </div>
        </div>
    )
}

export default navbar