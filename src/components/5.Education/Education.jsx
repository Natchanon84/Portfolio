import "../components.css"
import star from "../../img/star.svg"
import { Accordion, Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import certificate1 from "../../img/certificate1.jpg"
import certificate2 from "../../img/certificate2.jpg"


function Blog() {

    return (
        <div className="container-education">

            <div className="header">
                <div className="header-item1">
                    <img src={star} className="star" />
                    <p>Record</p>
                </div>
                <div className="header-item2">
                    <h1>EDUCATION</h1>
                </div>
            </div>

            <div className="content-education">
                <div className="item-content-education">
                    <div className="year-education">
                        <p className="bold">2022</p>
                        <p> Bachelor's degree</p>
                    </div>

                    <div className="description-education">
                        <h5>King Mongkut's University of Technology North Bangkok</h5>
                        <p>Bachelor of Engineering in Power Electronics Technology</p>
                    </div>
                </div>
                <div className="item-content-education">
                    <div className="year-education">
                        <p className="bold">2016</p>
                        <p> High Vocational Certificate</p>
                    </div>

                    <div className="description-education">
                        <h5>Minburi Technical College</h5>
                        <p>Diploma in Electronics</p>
                    </div>
                </div>
                <div className="item-content-education">
                    <div className="year-education">
                        <p className="bold">2014</p>
                        <p> Vocational Certificate</p>
                    </div>

                    <div className="description-education">
                        <h5>Minburi Technical College</h5>
                        <p>Vocational Certificate in Electronics</p>
                    </div>
                </div>
                <div className="item-content-education">
                    <div className="year-education">
                        <p className="bold">2011</p>
                        <p> Secondary </p>
                    </div>

                    <div className="description-education">
                        <h5>Bodindecha (Sing Singhaseni) 4</h5>
                    </div>
                </div>
                <div className="item-content-education-certificate">
                    <Accordion className="w-100">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Certificate</Accordion.Header>
                            <Accordion.Body className="d-flex justify-content-center align-content-center flex-column">
                                <img src={certificate2} />
                                <img src={certificate1} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>


            </div>
        </div>
    )
}

export default Blog