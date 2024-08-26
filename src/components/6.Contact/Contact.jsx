import "../components.css"
import star from "../../img/star.svg"
import mail from "../../img/mail.svg"
import phone from "../../img/phone.svg"



function Contact() {

    return (
        <div className="container-contact">

            <div className="header">
                <div className="header-item1">
                    <img src={star} className="star" />
                    <p>GET IN TOUCH</p>
                </div>
                <div className="header-item2">
                    <h1>CONTACT ME</h1>
                </div>
            </div>

            <div className="content-contact">
                <div className="content-address">
                    <div className="address">
                        <p>102/20, Moo 1, Khok Faed Subdistrict, Nong Chok District, Bangkok 10530, Thailand</p>
                    </div>
                    <div className="contact">
                        <p> <img src={mail} />natchanon.77777@gmail.com</p>
                        <p><img src={phone} />080-663-2918</p>

                    </div>
                </div>


                <div className="content-message">
                    <h2>Send a message</h2>
                    <form className="input-message">
                        <input type="text" placeholder="Full name" />
                        <input type="email" placeholder="Email address" ></input>
                        <input type="text" placeholder="Phone number" />
                        <textarea type="text" placeholder="Write your message" />
                        <button className="btn-form" type="submit" onClick={() => window.open('mailto:natchanon.77777@gmail.com')}>Submit</button>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default Contact