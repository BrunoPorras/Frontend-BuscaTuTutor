import styles from '../styles/NavSideBarApp.module.css';

import NavbarApp from '../components/Aplicacion/NavbarApp.js';
import SidebarApp from '../components/Aplicacion/SidebarApp.js';
import Panel from './Menu.js';
import TituloBienvenida from '../components/Aplicacion/TituloBienvenida.js';
import ContenidoInicio from '../components/Aplicacion/ContenidoInicio.js';

const AppPrincipal = () => {


    function comprobarLogueo() {        
        if(!localStorage.getItem("correo")){
            window.location.href="./login";
        }
    }

    function renderizarPanelPrincipal () {
        if(localStorage.getItem("es_tutor") == "true") {
            return(
                <div className={styles.contenidoApp}>   
                    <TituloBienvenida />                     
                    <Panel></Panel>
                </div>
            );
        }else{
            return(
                <div className={styles.contenidoApp}>   
                    <ContenidoInicio mode="normal"/>     
                </div>                                
            );
        }
    }


    return(
        <div onLoad={comprobarLogueo()}>
            <NavbarApp/>   
            <div className={styles.flex}>
                <SidebarApp/>
                {
                        renderizarPanelPrincipal()
                }  
            </div>
        </div>
    )
}

export default AppPrincipal