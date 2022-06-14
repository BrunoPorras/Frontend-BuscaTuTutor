import { Link } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faBook } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Demo.module.css'

import { PageControllers } from './PageControllers'
import perfil from '../../assets/Demo/perfil1.PNG'

const TutoresList = ({ loading, data, nextPage, prevPage, totalPages, currentPage }) => {

    if(loading) {
        return(
            <div className={styles.listContainer}>
                <div className={styles.listItem}>
                    <div className={styles.itemImg}>
                        <Skeleton width={120} height={120} circle={true}/>
                    </div>
                    <div className={styles.itemText}>
                        <h3><Skeleton/></h3>
                        <div className={styles.textHab}>
                            <FontAwesomeIcon icon={faUserGraduate}/>
                            <p><Skeleton width={100}/></p>
                        </div>
                        <div className={styles.textHab}>
                            <FontAwesomeIcon icon={faBook}/>
                            <p><Skeleton width={100}/></p>
                        </div>
                        <p><Skeleton/></p>
                    </div>
                    <div className={styles.itemBtns}>
                        <Link to='' className={styles.contactar}>
                            CONTACTAR
                        </Link>
                        <Link to='' className={styles.vermas}>
                            VER MAS
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <>
                <div className={styles.listContainer}>
                    {
                        data.map(item => (
                            <div className={styles.listItem} key={item.id}>
                                <div className={styles.itemImg}>
                                    <img src={perfil} alt="Foto de perfil" />
                                </div>
                                <div className={styles.itemText}>
                                    <h3>{item.nombre}</h3>
                                    <div className={styles.textHab}>
                                        <FontAwesomeIcon icon={faUserGraduate}/>
                                        <p>4 estudiantes se contactaron con este tutor</p>
                                    </div>
                                    <div className={styles.textHab}>
                                        <FontAwesomeIcon icon={faBook}/>
                                        <p>
                                            {
                                                item.tutor[0]['especialidades'].map(esp => (
                                                    `${esp.desc_esp} `
                                                    ))
                                                }
                                        </p>
                                    </div>
                                    <p>
                                        {item.tutor[0]['descripcion']}
                                    </p>
                                </div>
                                <div className={styles.itemBtns}>
                                    <Link to='' className={styles.contactar}>
                                        CONTACTAR
                                    </Link>
                                    <Link to='' className={styles.vermas}>
                                        VER MAS
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <PageControllers
                    prevPage={prevPage}
                    nextPage={nextPage}
                    totalPages={totalPages}
                    currentPage={currentPage}
                />
            </>
            
        )
    }
}

export default TutoresList