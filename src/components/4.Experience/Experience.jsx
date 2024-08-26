import "../components.css"
import star from "../../img/star.svg"

function Experience() {

    return (
        <div className="container-exp">

            <div className="header">
                <div className="header-item1">
                    <img src={star} className="star" />
                    <p>MY STORY</p>
                </div>
                <div className="header-item2">
                    <h1>Experience</h1>
                </div>
            </div>

            <div className="content-exp">

                <div className="item-content-exp">
                    <div className="year-exp">
                        <p className="bold ">2022 - 2023</p>
                        <p>Electronic Technician</p>
                    </div>

                    <div className="description-exp">
                        <h5>mu Space and Advanced Technology Co., Ltd.</h5>
                        <p>- Developed a high-efficiency inverter for the Project "Powerbox"
                        </p>
                        <p>- Implementing a DSP-based control circuit that can rapidly adapt to dynamic operating conditions and achieve precise power control, all while meeting compact size and weight requirements.</p>
                    </div>
                </div>
                <div className="item-content-exp">
                    <div className="year-exp">
                        <p className="bold">2015 - 2016</p>
                        <p>Technician</p>
                    </div>

                    <div className="description-exp">
                        <h5>K.G. Corporation Co.,Ltd</h5>
                        <p>- Check the operation of VRV air conditioning system.</p>
                        <p>- Preventive maintenance of VRV air conditioning system.</p>
                    </div>
                </div>
                <div className="item-content-exp">
                    <div className="year-exp">
                        <p className="bold">2014 - 2015</p>
                        <p>Internship</p>
                    </div>

                    <div className="description-exp">
                        <h5>MICROCHIP ELECTRONICS SERVICE COMPANY LIMITED</h5>
                        <p>- Check and repair PCB boards used with the system Control the operation of machinery in the factory.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Experience