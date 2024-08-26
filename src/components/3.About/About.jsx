import { Link } from 'react-router-dom';
import { Accordion, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../components.css"
import star from "../../img/star.svg"
import img3 from "../../img/img3.jpg"
import html from "../../img/html.svg"
import css from "../../img/css.svg"
import javascript from "../../img/javascript.svg"
import react from "../../img/react.svg"
import bootstrap from "../../img/bootstrap.svg"
import vscode from "../../img/vs-code.svg"
import postman from "../../img/postman.svg"
import git from "../../img/git.svg"
import github from "../../img/github.svg"
import photoshop from "../../img/photoshop.svg"

function About() {

    return (
        <div className="container-about ">

            <div className="header">
                <div className="header-item1">
                    <img src={star} className="star" />
                    <p>MEET NATCHANON</p>
                </div>
                <div className="header-item2">
                    <h1>About Me</h1>
                </div>
            </div>

            <div className="content-about">
                <div className="item1-content-about">
                    {/* <img src={img3} /> */}
                </div>
                <div className="item2-content-about">
                    <p>
                        Hi, I'm Nat. I graduated with a degree in Power Electronics Engineering from King Mongkut's Institute of Technology North Bangkok. I have a keen interest in web development and am proficient in HTML, CSS, and JavaScript. I've also gained expertise in using React to create responsive user interfaces.
                    </p>
                    <p>
                        I've built this portfolio website to showcase my projects and experiment with new technologies. I believe my engineering background combined with my web development skills will enable me to deliver innovative solutions that meet clients' needs.
                    </p>
                    <Link to="/contact"><button className='btn-about'>Contact Me</button></Link>

                </div>
                <div className="item3-content-about">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Tech Stack</Accordion.Header>
                            <Accordion.Body>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">HTML</Tooltip>}>
                                    <img src={html} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">CSS</Tooltip>}>
                                    <img src={css} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">JavaScript</Tooltip>}>
                                    <img src={javascript} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">React</Tooltip>}>
                                    <img src={react} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Bootstrap</Tooltip>}>
                                    <img src={bootstrap} />
                                </OverlayTrigger>
                            </Accordion.Body>

                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Other</Accordion.Header>
                            <Accordion.Body>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Visual Studio Code</Tooltip>}>
                                    <img src={vscode} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Git</Tooltip>}>
                                    <img src={git} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Github</Tooltip>}>
                                    <img src={github} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Postman</Tooltip>}>
                                    <img src={postman} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Adobe Photoshop </Tooltip>}>
                                    <img src={photoshop} />
                                </OverlayTrigger>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </div>

        </div>
    )
}

export default About