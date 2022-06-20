import styles from '../../styles/Aplicacion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faUserAlt , faPen, faPhone, faUserGraduate, faChalkboardUser, faBookOpen} from '@fortawesome/free-solid-svg-icons'

import perfil from '../../assets/Demo/perfil1.PNG';

const DatosTutor = () => {    

    var especialidades = [];
    var habilidades = [];

    function cargarArreglos () {
        for(let i=0; i<localStorage.getItem("num_especialidades"); i++){
            especialidades.push(localStorage.getItem("especialidad"+(i+1)));            
        }
        for(let j=0; j<localStorage.getItem("num_habilidades"); j++){
            habilidades.push(localStorage.getItem("habilidad"+(j+1)));            
        }        
    }

    return(        
        <div className={styles.Datos} onLoad={cargarArreglos()}>
            <div className={styles.DatosCabecera}>
                <h1>{localStorage.getItem("nombre")}</h1>                
                <button className={styles.botonEditarDatos} ><FontAwesomeIcon icon={faPen}/> Editar</button>
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

                <h5 className={styles.tituloSeccion}>Mis datos como docente</h5>
                <div className={styles.DatosItems2}>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faBookOpen}/>
                        <label>Mi descripción: </label>
                        <p>{localStorage.getItem("descripcion")}</p>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <label>Mis especialidades: </label>                                            
                        <div className={styles.ContEsHa}>
                            {especialidades.map((esp)=>                             
                                <h6 className={styles.EsHa}>{esp}</h6>
                            )}                            
                        </div>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faChalkboardUser}/>
                        <label>Mis habilidades: </label>
                        <div className={styles.ContEsHa}>
                            {habilidades.map((esp)=>                             
                                <h6 className={styles.EsHa}>{esp}</h6>
                            )}                            
                        </div>
                    </div>                
                </div>
            </div>         
        </div>
    )
}

export default DatosTutor