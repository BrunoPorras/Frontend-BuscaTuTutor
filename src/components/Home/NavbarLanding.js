//  React
import { Link } from 'react-router-dom'

//  Hooks
import { useMenuMobile } from '../../hooks/useMenuMobile.js'

//  Estilos, assets y efectos
import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import icono from '../../assets/Landing page/icono.png'
import styles from '../../styles/Navbar.module.css'

const NavbarLanding = ({ demoMode = false }) => {

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
                    {
                        demoMode ? (
                            <>
                                <Link to='/' className={styles.menuItem}>
                                    Home
                                </Link>
                                <Link to='/register' className={styles.menuItem}>
                                    ¡Ser tutor!
                                </Link>
                            </>
                        ) : (
                            <>
                                <ScrollLink className={styles.menuItem} to="inicio" spy={true} smooth={false} offset={-100} duration={1000} onClick={closeMenuOpen}>
                                    Inicio
                                </ScrollLink>
                                <ScrollLink className={styles.menuItem} to="que" spy={true} smooth={false} offset={-80} duration={1000} onClick={closeMenuOpen}>
                                    ¿Qué hacemos?
                                </ScrollLink>
                                <ScrollLink className={styles.menuItem} to="test" spy={true} smooth={false} offset={-80} duration={1000} onClick={closeMenuOpen}>
                                    Testimonios
                                </ScrollLink>
                                <Link to='/demo' className={styles.verTutor}>
                                    Ver tutores
                                </Link>
                            </>
                        )
                    }
                    <Link to='/login' className={styles.login}>
                        Login
                    </Link>
                    <Link to='/register' className={styles.signUp}>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarLanding