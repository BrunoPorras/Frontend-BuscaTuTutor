import axios from "axios"
import NavbarLanding from "../components/Home/NavbarLanding.js"
import { Portada, QueHacemos, Testimonios, Footer } from "../components/Home/Portada.js"

const Home = () => {

    axios.get(
        
    )

    return (
        <div>
            <NavbarLanding/>
            <Portada/>
            <QueHacemos/>
            <Testimonios/>
            <Footer/>
        </div>
    )
}

export default Home