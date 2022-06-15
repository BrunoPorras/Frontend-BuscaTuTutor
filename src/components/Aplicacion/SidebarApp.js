import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../../styles/NavSideBarApp.module.css';
import { SidebarData } from './SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'

const SidebarApp = () => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <div className={styles.contenedorSide}>
            <div style={{width: isOpen ? "14rem" : "50px"}} className={styles.sidebar}>
                <div className={styles.top_sectionSlide}>
                    <h1 style={{display: isOpen ? "block" : "none"}} className={styles.logoSide}>{localStorage.getItem("nombre").split(" ")[0]}</h1>                                        
                   <div style={{marginLeft: isOpen ? "80px" : "0px"}} className={styles.barsSide}>
                       <FontAwesomeIcon icon={faBars} onClick={toggle}/>
                   </div>
                </div>                
                <h6 style={{display: isOpen ? "block" : "none"}} className={styles.correoSide}>{localStorage.getItem("correo").split(" ")[0]}</h6>
                {SidebarData.map((val,key) => {
                    return (
                        <NavLink to={val.link} key={key} className={styles.linkSide} activeclassname={styles.activeSide}> 
                            <div className={styles.iconSide}>{val.icon}</div>    
                            <div style={{display: isOpen ? "block" : "none"}} className={styles.linkTextSide}>                                
                                <label>{val.title}</label>
                            </div>                                 
                        </NavLink>
                    ) 
                })}                
            </div>
        </div>
    );

}

export default SidebarApp;