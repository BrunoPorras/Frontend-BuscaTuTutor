import styles from '../../styles/Aplicacion.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faUserAlt , faPen, faPhone} from '@fortawesome/free-solid-svg-icons'

import perfil from '../../assets/Demo/perfil1.PNG';

const DatosEstudiante = () => {
    return(
        <div className={styles.Datos}>
            <div className={styles.DatosCabecera}>
                <h1>{localStorage.getItem("nombre")}</h1>
                <button className={styles.botonEditarDatos}><FontAwesomeIcon icon={faPen}/> Editar</button>
            </div>            
            <div className={styles.DatosBody}>
                <h5 className={styles.tituloSeccion}>Mis datos personales</h5>
                <img src={perfil} alt="Foto de perfil" />
                <div className={styles.DatosItems}>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faUserAlt}/>
                        <label>Nombre: </label>
                        <input value={localStorage.getItem("nombre")} readOnly></input>
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faMailBulk}/>
                        <label>Correo: </label>
                        <input value={localStorage.getItem("correo")} readOnly></input>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <label>Telefono: </label>
                        <input value={localStorage.getItem("num_telf")} readOnly></input>                        
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default DatosEstudiante