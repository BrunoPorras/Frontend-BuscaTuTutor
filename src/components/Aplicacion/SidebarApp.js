import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ModalTerms } from '../Modal/Modals'
import useModal from '../../hooks/useModal'

import { AnimatePresence } from 'framer-motion'
import styles from '../../styles/NavSideBarApp.module.css';
import { SidebarData } from './SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'

const SidebarApp = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //  Modal cuando vas a ser tutor
    const [isOpenModal, openModal, closeModal] = useModal()

    return (
        <div className={styles.contenedorSide}>

                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}>
                    { isOpenModal && <ModalTerms closeModal={closeModal}/>}
                </AnimatePresence>

            <div style={{ width: isOpen ? "14rem" : "50px" }} className={styles.sidebar}>
                <div className={styles.top_sectionSlide}>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className={styles.logoSide}>{localStorage.getItem("nombre").split(" ")[0]}</h1>
                    <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className={styles.barsSide}>
                        <FontAwesomeIcon icon={faBars} onClick={toggle} />
                    </div>
                </div>
                <h6 style={{ display: isOpen ? "block" : "none" }} className={styles.correoSide}>{localStorage.getItem("correo").split(" ")[0]}</h6>
                {SidebarData.map((val, key) => {
                    if (val.title === "Ser un tutor") {
                        return (
                            <div className={styles.linkSide} key={key} onClick={() => openModal()}>
                                <div className={styles.iconSide}>{val.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className={styles.linkTextSide}>
                                    <label>{val.title}</label>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <NavLink to={val.link} key={key} className={styles.linkSide} activeclassname={styles.activeSide}>
                                <div className={styles.iconSide}>{val.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className={styles.linkTextSide}>
                                    <label>{val.title}</label>
                                </div>
                            </NavLink>
                        )
                    }
                })}
            </div>
        </div>
    );

}

export default SidebarApp;