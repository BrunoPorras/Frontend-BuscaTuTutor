import styles from '../../styles/NavSideBarApp.module.css';
import logo from '../../assets/Landing page/logo.png'

const NavbarApp = () => {

    const cerrarSesion=()=>{
        localStorage.clear();
        window.location.href="./login";
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