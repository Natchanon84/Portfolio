import { Link } from "react-router-dom"

import profile_img from "../../img/img1.jpg"
import img1 from "../../img/computer.svg"
import img2 from "../../img/profile.png"
import img3 from "../../img/checklist.svg"
import img4 from "../../img/comment.svg"
import img5 from "../../img/paper-plane.svg"

// function navbar() {

//     return (


//         // <div className="container-navbar">
//         //     <div className="container-profile">
//         //         <Link to="/" >
//         //             <img src={profile_img} className="profile-img" />

//         //             <div className="name">
//         //                 <h5>Natchanon Phomuang</h5>
//         //                 <h6>github.com/Natchanon84</h6>
//         //             </div>
//         //         </Link>


//         //     </div>

//         //     <div className="container-navi">
//         //         <Link to="/mywork"><img src={img1} />My Portfolio</Link>
//         //         <Link to="/about"><img src={img2} />About</Link>
//         //         <Link to="/blog"><img src={img4} />Education</Link>
//         //         <Link to="/experience"><img src={img3} />Experience</Link>
//         //         <Link to="/Contact"><img src={img5} />Contact</Link>
//         //     </div>

//         //     <div className="container-stack">
//         //         <div>
//         //             <h6>Tech Stack</h6>
//         //             <p>- HTML</p>
//         //             <p>- CSS</p>
//         //             <p>- JavaScript</p>
//         //             <p>- React.js</p>
//         //             <p>- Boostrap</p>
//         //         </div>
//         //     </div>
//         // </div>

//         

//     )
// }

// export default navbar
import React from 'react';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm container-navbar">
            <div className="fluid">
                <div className="container-profile">
                    <Link to="/" className="navbar-brand">
                        <img src={profile_img} className="profile-img " />
                        <div className="name">
                            <h5>Natchanon Phomuang</h5>
                            <h6>github.com/Natchanon84</h6>
                        </div>
                    </Link>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarToggle">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                {/* collapse  */}
                <div className=" navbar-collapse collapse container-navi" id="navbarToggle">
                    <ul className="navbar-nav">
                        <div className="item-nav">
                            <li className="nav-item middle btnz btn1">
                                <Link to="/mywork"><img src={img1} className="nav-link " />My Portfolio</Link>
                            </li>
                            <li className="nav-item middle btnz btn1">
                                <Link to="/about"><img src={img2} className="nav-link" />About</Link>
                            </li>
                            <li className="nav-item middle btnz btn1">
                                <Link to="/blog"><img src={img4} className="nav-link" />Education</Link>
                            </li>
                            <li className="nav-item middle btnz btn1">
                                <Link to="/experience"><img src={img3} className="nav-link" />Experience</Link>
                            </li>
                            <li className="nav-item middle btnz btn1">
                                <Link to="/Contact"><img src={img5} className="nav-link" />Contact</Link>
                            </li>
                        </div>

                    </ul>
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
                {/* <div className="middle">
                    <button className="btnz btn1">Hover me</button>
                    <button className="btnz btn2">Hover me</button>
                </div> */}

            </div>
        </nav>
    );
}

export default Navbar;