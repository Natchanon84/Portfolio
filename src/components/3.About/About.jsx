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
                    <Link className="" to="https://github.com/Natchanon84" target="_blank">
                        <img src={img3} />
                    </Link>
                </div>
                <div className="item2-content-about">
                    <p>
                        <strong> Hi, I'm Nat</strong> a recent graduate in Power Electronics Engineering from King Mongkut's University of Technology North Bangkok. With my engineering foundation, I'm excited to apply problem-solving skills to the field of web development. I'm currently developing my skills in HTML, CSS, and JavaScript, and have explored React for building user interfaces
                    </p>
                    <p>
                        I've built this portfolio to showcase my projects and document my learning journey as I continue to develop my skills in HTML, CSS, and JavaScript. Through experimentation with React, I've gained experience in creating basic user interfaces and demonstrated my potential to deliver innovative web solutions.
                    </p>
                    <Link to="/contact"><button className='btn-about'>Contact Me</button></Link>

                </div>
                {/* <div className="item3-content-about">
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

                    </Accordion> */}
                <div className="item3-content-about">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Tech Stack
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
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
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Software & Tool
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
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
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About