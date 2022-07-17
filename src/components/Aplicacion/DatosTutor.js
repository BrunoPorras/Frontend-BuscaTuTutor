import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../styles/Aplicacion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faUserAlt , faPen, faPhone, faUserGraduate, faChalkboardUser, faBookOpen} from '@fortawesome/free-solid-svg-icons'

import Iterator from '../Clases/Iterator'

import perfil from '../../assets/Demo/perfil1.PNG';

const baseUrl = "https://buscatututorbackend.herokuapp.com/api/getTutor";

const DatosTutor = () => {    

    const urlFinal = baseUrl + "?id=" + localStorage.getItem("id");
    const [EspYHab, setEspYHab] = useState({especialidades: [], habilidades: []});        

    useEffect (() => {        
        async function obtenerDatos() {
            const resultado = await peticionDatos();              
            setEspYHab({
                especialidades: resultado.especialidades,
                habilidades: resultado.habilidades
            })            
        }
        obtenerDatos();
    }, []);

    //  Funcion para obtener todos los datos del tutor seleccionado a partir de su id general
    const peticionDatos = async () => {        
        const result = await axios({
            method: 'GET',
            url: urlFinal,
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        return result.data;
    }
    
    function recorrerLista(arreglo) {
        const iterator = new Iterator(arreglo);
        var etiquetas = [];
        while(iterator.hasNext()){
            var palabra = iterator.next();            
            etiquetas.push(<h6 className={styles.EsHa}>{palabra.desc_esp}</h6>);
        }
        return  <ul>{ etiquetas }</ul>
    }

    return(        
        <div className={styles.Datos}>
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
                            {recorrerLista(EspYHab.especialidades)}
                        </div>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faChalkboardUser}/>
                        <label>Mis habilidades: </label>
                        <div className={styles.ContEsHa}>
                            {recorrerLista(EspYHab.habilidades)}
                        </div>
                    </div>                
                </div>
            </div>         
        </div>
    )
}

export default DatosTutor