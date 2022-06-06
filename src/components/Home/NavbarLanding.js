import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import icono from '../../assets/Landing page/icono.png'
import styles from '../../styles/Navbar.module.css'

import { useMenuMobile } from '../../hooks/useMenuMobile'

const NavbarLanding = () => {

    const [menuOpen, changeMenuOpen ] = useMenuMobile()
    
    return(
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={icono} alt="ícono de la app" />
            </div>
            <div className={styles.options}>
                <FontAwesomeIcon icon={faBars} 
                    className={styles.toggle}
                    onClick={changeMenuOpen}
                />
                <a href='#inicio' className={styles.option}>
                    Inicio
                </a>
                <a href='#que' className={styles.option}>
                    ¿Qué hacemos?
                </a>
                <a href='#test' className={styles.option}>
                    Testimonios
                </a>
                <p className={styles.verTutor}>
                    Ver tutores
                </p>
                <p className={styles.login}>
                    Login
                </p>
                <p className={styles.signUp}>
                    Sign up
                </p>
            </div>
        </div>
    )
}

const NavPrueba = () => {

    const [menuOpen, changeMenuOpen, closeMenuOpen ] = useMenuMobile()


    return(
        <div className={styles.container}>
            <div className={styles.wraper}>
                <div className={styles.logoContainer}>
                    <img src={icono} alt="ícono de la app" />
                </div>

                <FontAwesomeIcon icon={faBars} 
                    className={styles.toggle}
                    onClick={changeMenuOpen}
                />

                <div className={styles.menu} style={ menuOpen ? { "left": 0 } : { "left": "-100%" } }>
                    <ScrollLink className={styles.menuItem} to="inicio" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenuOpen}>
                        Inicio
                    </ScrollLink>
                    <ScrollLink className={styles.menuItem} to="que" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenuOpen}>
                    ¿Qué hacemos?
                    </ScrollLink>
                    <ScrollLink className={styles.menuItem} to="test" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenuOpen}>
                        Testimonios
                    </ScrollLink>
                    <p className={styles.verTutor}>
                        Ver tutores
                    </p>
                    <p className={styles.login}>
                        Login
                    </p>
                    <p className={styles.signUp}>
                        Sign up
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavPrueba