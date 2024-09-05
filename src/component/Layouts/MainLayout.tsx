import { Outlet } from "react-router-dom"
import NavBar from "../../pages/Sheard/Navbar/NavBar"
import Footer from "../../pages/Sheard/Footer/Footer"


const MainLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
