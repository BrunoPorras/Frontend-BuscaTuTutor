import styles from '../styles/NavSideBarApp.module.css';

import NavbarApp from '../components/Aplicacion/NavbarApp.js';
import SidebarApp from '../components/Aplicacion/SidebarApp.js';
import DatosEstudiante from '../components/Aplicacion/DatosEstudiante.js';
import DatosTutor from '../components/Aplicacion/DatosTutor.js';


const MiPerfil = () => {


    function comprobarLogueo() {        
        if(!localStorage.getItem("correo")){
            window.location.href="./login";
        }               
    }

    function renderizarDatos () {
        if(localStorage.getItem("es_tutor") == "true") {
            return(
                <DatosTutor></DatosTutor>
            );
        }else{
            return(
                <DatosEstudiante></DatosEstudiante>
            );
        }
    }


    return(
        <div onLoad={comprobarLogueo()}>
            <NavbarApp/>   
            <div className={styles.flex}>
                <SidebarApp/>
                <div className={styles.contenidoApp}>
                    {
                        renderizarDatos()
                    }                                            
                </div>
            </div>
        </div>
    )
}

export default MiPerfil