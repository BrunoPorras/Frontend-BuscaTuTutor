import NavbarLanding from "../components/Home/NavbarLanding"
import { Testimonios } from "../components/Home/Portada"
import { Portada, QueHacemos } from "../components/Home/Portada"

const Home = () => {
    return (
        <div>
            <NavbarLanding/>
            <Portada/>
            <QueHacemos/>
            <Testimonios/>
        </div>
    )
}

export default Home