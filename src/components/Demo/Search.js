//  Estilos, assets y efectos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Demo.module.css'

const Search = ({ search, setSearch, restartPage, filter, setFilter }) => {

    const onSearchChange = (e) => {
        restartPage(1)
        setSearch(e.target.value)
    }

    const onFilterChange = (e) => {
        restartPage(1)
        setFilter(e.target.value)
    }

    return (
        <div className={styles.searchContainer}>
            <p>¡Encuentra tu tutor ahora!</p>
            <div className={styles.searchItems}>
                <div className={styles.searchItem}>
                    <p>Escriba el filtro</p>
                    <div className={styles.searchIcon}>
                        <input type="text" placeholder='Filtro de ejemplo'
                        value={search} onChange={onSearchChange}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} 
                            className={styles.icon}
                        />
                    </div>
                </div>
                <div className={styles.searchItem}>
                    <p>Escriba el filtro</p>
                    <div className={styles.searchIcon}>
                        <select className={styles.selectSearch} value={filter} onChange={onFilterChange}>
                            <option value="nombre">Por nombre</option>
                            <option value="habilidad">Por habilidad</option>
                            <option value="especialidad">Por especialidad</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Search }