import { Link } from "react-router-dom"
import { Accordion, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components.css"

import star from "../../img/star.svg"
import myp_1 from "../../img/myp_1.1.png"
import myp_2 from "../../img/myp_2.png"
import myp_3 from "../../img/myp_3.png"

function MyWork() {

    return (
        <div className="container-mywork">

            <div className="header">
                <div className="header-item1">
                    <img src={star} className="star" />
                    <p>CREATIONS</p>
                </div>
                <div className="header-item2">
                    <h1>What i do</h1>
                </div>
            </div>

            <div className="content-page">


                <div className="item-portfolio">
                    <Link className="linkgithub" to="https://github.com/Natchanon84/Buegershop-Webpage" target="_blank">
                        Github
                    </Link>
                    <Link to="https://natchaaaa-burgershop-vite.netlify.app/" target="_blank">
                        <img src={myp_1} />
                    </Link>

                </div>
                <div className="item-portfolio ">
                    <Link className="linkgithub" to="https://github.com/Natchanon84/Travel-Webpage" target="_blank">
                        Github
                    </Link>
                    <Link to="https://natchaaaa-travel.netlify.app/" target="_blank">
                        <img src={myp_2} />
                    </Link>

                </div>
                <div className="item-portfolio ">
                    <Link className="linkgithub" to="https://github.com/Natchanon84/TMDB-Webpage" target="_blank">
                        Github
                    </Link>
                    <Link to="https://natchaaaa-tmdb-vite.netlify.app/" target="_blank">
                        <img src={myp_3} />
                    </Link>

                </div>
                <div className="item-portfolio bg-success">4</div>
                <div className="item-portfolio bg-warning">5</div>
                <div className="item-portfolio bg-danger">6</div>
                <div className="item-portfolio bg-secondary">7</div>
                <div className="item-portfolio bg-info">8</div>



                {/* <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Application</Accordion.Header>
                        <Accordion.Body className="d-flex test">

                            <div className="item-portfolio">
                                <Link to="https://natchaaaa-burgershop-vite.netlify.app/" target="_blank">
                                    <img src={myp_1} />
                                </Link>
                            </div>
                            <div className="item-portfolio">
                                <Link to="https://natchaaaa-travel.netlify.app/" target="_blank">
                                    <img src={myp_2} />
                                </Link>
                            </div>
                            <div className="item-portfolio">
                                <Link to="https://natchaaaa-tmdb-vite.netlify.app/" target="_blank">
                                    <img src={myp_3} />
                                </Link>
                            </div>
                        </Accordion.Body>

                    </Accordion.Item>
                </Accordion>

 */}

            </div>
        </div>
    )
}

export default MyWork