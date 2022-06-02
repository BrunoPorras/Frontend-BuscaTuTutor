import styles from '../../styles/Portada.module.css'

//  Imágenes requeridas para la landing page
import Qh1 from '../../assets/qh1.jpg'
import Qh2 from '../../assets/qh2.jpg'
import Qh3 from '../../assets/qh3.jpg'

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

const QueHacemos = () => {
    return(
        <div className={styles.whatContainer}>
            <p>¿Qué hacemos?</p>
            <div className={styles.itemsContainer}>
                <div className={styles.itemI}>
                    <img src={Qh1} alt="Imagen" />
                    <p>
                        Reforzamos los conocimientos de los estudiantes pre y universitarios
                        brindando una gama de profesores a su disposición, en base a sus 
                        necesidades académicas y económicas.
                    </p>
                </div>
                <div className={styles.itemI}>
                    <img src={Qh2} alt="Imagen" />
                    <p>
                        Plataforma innovadora que conecta a estudiantes y alumnos de una manera 
                        sencilla, permitiendo encontrar los tutores que más se ajusten a las 
                        necesidades del alumno.
                    </p>
                </div>
                <div className={styles.itemI}>
                    <img src={Qh3} alt="Imagen" />
                    <p>
                        Brindamos la oportunidad a los alumnos que poseen buen rendimiento 
                        académico de ofrecer sus servicios que serán remunerados.
                    </p>
                </div>
            </div>
        </div>
    )
}

export { Portada, QueHacemos }