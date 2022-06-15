import styles from '../../styles/NavSideBarApp.module.css';
import logo from '../../assets/Landing page/logo.png'
import { useNavigate } from 'react-router-dom';

const NavbarApp = () => {

    //  Hook para navegar a otras paginas
    const navigate = useNavigate()

    const cerrarSesion=()=>{
        localStorage.clear()
        navigate("/login")
    }

    var nombre = localStorage.getItem("nombre").split(" ")[0];
    var primerAp = localStorage.getItem("nombre").split(" ")[1];

    return(
        <div className={styles.navbar}>
            <img className={styles.logoApp} src={logo} alt="Imagen" />
            <div className={styles.botonesNav}>
                <button>{nombre + ' '+ primerAp}</button>
                <button>Inicio</button>
                <button onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            </div>
        </div>
    )
}

export default NavbarApp;