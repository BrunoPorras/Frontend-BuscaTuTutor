import styles from '../../styles/Portada.module.css'

const Portada = () => {
    return(        
        <div className={styles.portada}>
            <div className={styles.item}>            
                <p className={styles.tituloPortada}>
                    Descubre más de nuestra web para encontrar a tu tutor ideal.
                </p>
                <p className={styles.subtituloPortada}>
                    Contacta a tu tutor favorito en cuestión de segundos.
                </p>
                <p className={styles.vermas}>
                    Ver más
                </p>
            </div>
        </div>    
            
    )
}

export default Portada