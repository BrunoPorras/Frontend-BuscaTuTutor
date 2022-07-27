import NavbarApp from '../components/Aplicacion/NavbarApp.js';
import SidebarApp from '../components/Aplicacion/SidebarApp.js';
import Convertir from '../components/Sertutor/Convertir.js'

import styles from '../styles/NavSideBarApp.module.css';

const SerTutor = () => {

    return(
        <div>
            <NavbarApp/>   
            <div className={styles.flex}>
                <SidebarApp/>
                <Convertir/>
            </div>
        </div>
    )
}

export default SerTutor