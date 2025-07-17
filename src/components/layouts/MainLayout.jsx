 import {Navbar} from "../Navbar/Navbar"
import {Outlet} from "react-router-dom"
import { Footer } from "../Footer/Footer"


 export const MainLayout = () => {
    return (

        <>
        { <Navbar /> }
        <Outlet />
         { <Footer />  }

        
        
        
        </>

    )

 }