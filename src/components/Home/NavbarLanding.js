import styles from '../../styles/Navbar.module.css'

const NavbarLanding = () => {
    return(
        <div className={styles.container}>
            <div className={styles.icon}>

            </div>
            <div className={styles.options}>
                <p className={styles.option}>
                    Inicio
                </p>
                <p className={styles.option}>
                    ¿Qué hacemos?
                </p>
                <p className={styles.option}>
                    Testimonios
                </p>
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

export default NavbarLanding