import styles from '../styles/NavSideBarApp.module.css';

import NavbarApp from '../components/Aplicacion/NavbarApp.js';
import SidebarApp from '../components/Aplicacion/SidebarApp.js';
import ContenidoInicio from '../components/Aplicacion/ContenidoInicio.js';

const AppBuscar = () => {

    function comprobarLogueo() {        
        if(!localStorage.getItem("correo")){
            window.location.href="./login";
        }
    }


    return(
        <div onLoad={comprobarLogueo()}>
            <NavbarApp/>   
            <div className={styles.flex}>
                <SidebarApp/>
                <div className={styles.contenidoApp}>                        
                    <ContenidoInicio mode="normal" searchMode={true}/>    
                </div>
            </div>
        </div>
    )
}

export default AppBuscar