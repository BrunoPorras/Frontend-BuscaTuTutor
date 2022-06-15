import { motion } from 'framer-motion'
import styles from '../../styles/Modal.module.css'

const Backdrop = ({ children, onClick }) => {
    return(
        <motion.div
            className={styles.backdrop}
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}

export default Backdrop