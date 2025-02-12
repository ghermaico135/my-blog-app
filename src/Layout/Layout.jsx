
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function LayOut() {

  return (
    <>
    <Navbar />
       <Outlet />
    <Footer />
    </>
       
  )
}

export default LayOut
