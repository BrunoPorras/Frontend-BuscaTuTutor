import NavbarLanding from "../components/Home/NavbarLanding"
import { Portada, QueHacemos, Testimonios, Footer } from "../components/Home/Portada"

const Home = () => {
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