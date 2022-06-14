import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAnglesRight,
    faAnglesLeft
} from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Demo.module.css'

const PageControllers = ({ prevPage, nextPage, totalPages, currentPage }) => {
    return(
        <div className={styles.navigation}>
            <FontAwesomeIcon className={styles.changePage}
            onClick={() => prevPage()} icon={faAnglesLeft}/>
            <p style={{margin: "0 10px"}}>{currentPage} de {totalPages}</p>
            <FontAwesomeIcon className={styles.changePage}
            onClick={() => nextPage(totalPages)} icon={faAnglesRight}/>
        </div>
    )
}

export { PageControllers }