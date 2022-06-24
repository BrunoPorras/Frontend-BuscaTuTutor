//  Componentes
import Backdrop from './Backdrop'
import { useNavigate } from 'react-router-dom'

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

    return (
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
                        onClick={closeModal} />
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

    return (
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

const ModalTerms = ({ closeModal }) => {

    const navigate = useNavigate()

    const aceptarTerminos = () => {
        navigate('./sertutor')
    }

    return (
        <Backdrop onClick={closeModal}>
            <motion.div className={styles.modal_container}
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit">
                <div className={styles.modal_head}>
                    <h4>Términos y condiciones</h4>
                    <FontAwesomeIcon
                        className={styles.modal_close}
                        icon={faCircleXmark}
                        onClick={closeModal} />
                </div>
                <p>
                    Con su permiso, nosotros y nuestros socios podemos utilizar 
                    datos de localización geográfica precisa e identificación 
                    mediante las características de dispositivos. Puede hacer 
                    click para otorgarnos su consentimiento a nosotros y a 
                    nuestros socios para que llevemos a cabo el procesamiento 
                    previamente descrito. De forma alternativa, puede acceder 
                    a información más detallada y cambiar sus preferencias antes 
                    de otorgar o negar su consentimiento.
                </p>
                <div className={styles.modal_btn}>
                    <button className={styles.btnaccept} onClick={() => navigate('/sertutor')}>Aceptar</button>
                    <button className={styles.btncancel} onClick={closeModal}>Cancelar</button>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export { ModalDemo, ModalWithContent, ModalTerms }