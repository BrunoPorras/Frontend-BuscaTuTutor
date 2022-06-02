import NavbarLanding from "../components/Home/NavbarLanding"
import { Portada, QueHacemos } from "../components/Home/Portada"

const Home = () => {
    return (
        <div>
            <NavbarLanding/>
            <Portada/>
            <QueHacemos/>
        </div>
    )
}

export default Home