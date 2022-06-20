import styles from '../styles/NavSideBarApp.module.css';

import NavbarApp from '../components/Aplicacion/NavbarApp';
import SidebarApp from '../components/Aplicacion/SidebarApp';
import DatosEstudiante from '../components/Aplicacion/DatosEstudiante';
import DatosTutor from '../components/Aplicacion/DatosTutor';


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