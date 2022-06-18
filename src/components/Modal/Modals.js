//  Componentes
import Backdrop from './Backdrop'

//  Estilos e íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styles from '../../styles/Modal.module.css'

const dropIn = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1.2,
        transition: {
            duration: 0.4,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    visibleNormal: {
        scale: 1,
        transition: {
            duration: 0.4,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        scale: 0
    }
}

const ModalDemo = ({ closeModal }) => {

    return(
        <Backdrop onClick={closeModal}>
            <motion.div className={styles.modal_container}
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit">
                <div className={styles.modal_head}>
                    <h4>¡Inicia sesión!</h4>
                    <FontAwesomeIcon 
                    className={styles.modal_close}
                    icon={faCircleXmark} 
                    onClick={closeModal}/>
                </div>
                <p>
                    Esta solo es una página demo, para acceder
                    a esta opción debes iniciar sesión, si no 
                    tienes una cuenta créate una.
                </p>
            </motion.div>
        </Backdrop>
    )
}

const ModalWithContent = ({ closeModal, children }) => {

    return(
        <Backdrop onClick={closeModal}>
            <motion.div className={styles.modal_container}
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit">
                {children}
            </motion.div>
        </Backdrop>
    )
}

export { ModalDemo, ModalWithContent }