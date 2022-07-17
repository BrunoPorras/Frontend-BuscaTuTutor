import styles from '../../styles/Portada.module.css'

//  Imágenes requeridas para la landing page
import Imagen1 from '../../assets/Landing page/Imagen1.png'
import Imagen2 from '../../assets/Landing page/Imagen2.png'
import Imagen3 from '../../assets/Landing page/Imagen3.png'
import total_users from '../../assets/Landing page/total_users.png'
import icono_logro from '../../assets/Landing page/icono_logro.png'
import chat from '../../assets/Landing page/chat.png'
import { useEffect } from 'react'
const Portada = () => {
    
    useEffect(()=>{
        console.log("HOLA")
    })

    return(        
        <div id='inicio' className={styles.portada}>
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
        <div id='que' className={styles.whatContainer}>
            <p>¿Qué hacemos?</p>
            <div className={styles.itemsContainer}>
                <div className={styles.itemI}>
                    <img src={Imagen1} alt="Imagen" />
                    <p>
                        Reforzamos los conocimientos de los estudiantes pre y universitarios
                        brindando una gama de profesores a su disposición, en base a sus 
                        necesidades académicas y económicas.
                    </p>
                </div>
                <div className={styles.itemI}>
                    <img src={Imagen2} alt="Imagen" />
                    <p>
                        Plataforma innovadora que conecta a estudiantes y alumnos de una manera 
                        sencilla, permitiendo encontrar los tutores que más se ajusten a las 
                        necesidades del alumno.
                    </p>
                </div>
                <div className={styles.itemI}>
                    <img src={Imagen3} alt="Imagen" />
                    <p>
                        Brindamos la oportunidad a los alumnos que poseen buen rendimiento 
                        académico de ofrecer sus servicios que serán remunerados.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Testimonios = () => {
    return(
        <div id='test' className={styles.whatContainer}>
            <p>Lo que nuestros clientes dicen de la App busca tu tutor</p>
            <div className={styles.itemsContainer}>
                <div className={styles.testItem}>
                    <div className={styles.testIntro}>A través de estos años recomendando tutores de calidad</div>
                    <div className={styles.testImgs}>
                        <img src={total_users} alt='Cantidad de estudiantes satisfechos'/>
                        <img src={icono_logro} alt='Imagen al lado de esa en el figma'/>
                    </div>
                </div>
                <div className={styles.testimonios}>
                    <div className={styles.testimonio}>
                        <div className={styles.descContainer}>
                            <p className={styles.testDesc}>
                                “Cuando conoci la aplicacion por primera vez me encantó 
                                y desde ese momento sigo usandola para contratar tutores.”
                            </p>
                            <img src={chat} alt='Imagen de chat'/>
                        </div>
                        <p className={styles.testAutor}>
                            Miguel Collantes, estudiante de la plataforma
                        </p>
                    </div>
                    <div className={styles.testimonio}>
                        <div className={styles.descContainer}>
                            <p className={styles.testDesc}>
                                “Fue de las mejores herramientas que me ayudaron a solventar 
                                mis dudas universitarias y preuniversitarias”
                            </p>
                        </div>
                        <p className={styles.testAutor}>
                            Johan Mitma, tutor de la plataforma
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div className={styles.foot}>
            2022 @ Page todos los derechos reservados
        </div>
    )
}

export { Portada, QueHacemos, Testimonios, Footer }