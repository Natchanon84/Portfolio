import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/1.Navbar/Navbar.jsx"
import MyWork from "./components/2.MyWork/MyWork.jsx"
import About from "./components/3.About/About.jsx"
import Experience from "./components/4.Experience/Experience.jsx"
import Education from "./components/5.Education/Education.jsx"
import Contact from "./components/6.Contact/Contact.jsx"
// import Footer from "./components/7.Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Notfound from "./components/NotFound/Notfound.jsx"
import Test from "./components/test/test.jsx"

function App() {




  return (

    <BrowserRouter>
      {/* <Test /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mywork" element={<MyWork />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/blog" element={<Education />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Notfound />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App