import img from "../../img/img2.jpg"
function Home() {

    return (
        <div className="container-home">
            <div className="w-75">
                <p>The beginning of becoming a web developer was a challenge that made me want to learn new things. I studied and practiced many languages ​​and frameworks such as HTML, CSS, JavaScript and frameworks like to create websites that are easy to use and efficient.</p>
            </div>
            <div className="img-home">
                <img src={img} />
            </div>
        </div>
    )
}

export default Home