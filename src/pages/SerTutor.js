import NavbarApp from '../components/Aplicacion/NavbarApp';
import SidebarApp from '../components/Aplicacion/SidebarApp';
import Convertir from '../components/Sertutor/Convertir'

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