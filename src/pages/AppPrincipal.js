import styles from '../styles/NavSideBarApp.module.css';

import NavbarApp from '../components/Aplicacion/NavbarApp';
import SidebarApp from '../components/Aplicacion/SidebarApp';
import ContenidoInicio from '../components/Aplicacion/ContenidoInicio';


const AppPrincipal = () => {


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
                    <ContenidoInicio/>    
                </div>
            </div>
        </div>
    )
}

export default AppPrincipal