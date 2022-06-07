import styles from '../../styles/Navbar.module.css'
import logo from '../../assets/Landing page/logo.png'

const Header = () => {
    return(
        <div className={styles.logo}>
            <img src={logo} alt="Imagen" />
        </div>
    )
}

export default Header