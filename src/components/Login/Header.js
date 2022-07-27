//  React
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Navbar.module.css'
import icono from '../../assets/Landing page/icono.png'
import { useMenuMobile } from '../../hooks/useMenuMobile.js'

const Header = ({ login = true }) => {

    const [menuOpen, changeMenuOpen] = useMenuMobile()

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
                    <Link to={-1} className={styles.menuItem}>
                        Regresar
                    </Link>
                    {
                        login ? (
                            <Link to='/register' className={styles.signUp}>
                                Sign up
                            </Link>
                        ) : (
                            <Link to='/login' className={styles.login}>
                                Login
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header