import styles from '../styles/NavSideBarApp.module.css';

import NavbarApp from '../components/Aplicacion/NavbarApp.js';
import SidebarApp from '../components/Aplicacion/SidebarApp.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


const DashboardBI = () => {

    const [oneIframe, setoneIframe] = useState("");

    useEffect(() => {
        const res = axios.get("http://localhost:5000/api/dashboard/iframe")
        setoneIframe(res.data)
    }, [])
    

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
                    <iframe src={oneIframe}></iframe>
                </div>
            </div>
        </div>
    )
}

export default DashboardBI
