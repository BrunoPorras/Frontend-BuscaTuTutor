import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../../styles/Aplicacion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faUserAlt , faPen, faStar , faPhone, faUserGraduate, faChalkboardUser, faBookOpen} from '@fortawesome/free-solid-svg-icons'

import { ModalFavorito } from '../Modal/Modals'
import useModal from '../../hooks/useModal'
import { AnimatePresence } from 'framer-motion'

import perfil from '../../assets/Demo/perfil1.PNG';
import TutoresFactory from '../Clases/TutoresFactory';

const baseUrl = "https://buscatututorbackend.herokuapp.com/api/getTutor";

const addTutor = "https://buscatututorbackend.herokuapp.com/api/registrarTutorFav"
const dropTutor = "https://buscatututorbackend.herokuapp.com/api/deleteFavTutor"

const VerMas = () => {    

    const urlFinal = baseUrl + "?id=" + localStorage.getItem("idUltimaConsulta");
    const [tutor, setTutor] = useState({});

    const [isOpenModal, openModal, closeModal] = useModal()

    /*DATOS DEL TUTOR*/
    const [TutorVisto, setTutorVisto] = useState({nombre: '', num_telf: '' , correo:''})
    const [EspYHab, setEspYHab] = useState({especialidades: [], habilidades: []})

    useEffect (() => {        
        async function obtenerDatos() {
            const resultado = await peticionDatos();  
            setTutor(resultado);                        
            setTutorVisto({                
                nombre: resultado.estudiante.nombre,
                num_telf: resultado.estudiante.num_telf,
                correo: resultado.estudiante.correo,
            })
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
        console.log(result.data)
        return result.data;
    }

    const mostrarModal = () => {        
        isOpenModal ? closeModal() : openModal();
    }

    //  Manejador del botón de favorito
    const handleFavorito = async () => {
        if (tutor.favorito === 0) {
            //  Significa que no está en su lista de favoritos
            const result = await axios({
                method: 'POST',
                url: addTutor,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                data: {
                    id: tutor.id
                }
            })            
        } else {
            //  Significa que sí está en su lista de favoritos
            const result = await axios({
                method: 'DELETE',
                url: dropTutor,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
                data: {
                    id: tutor.id
                }
            })                     
        }
        mostrarModal();
    }

    var Factory = function () {
        this.createTutor = function (type) {
            var tutor = "";
    
            if (type === "Favorito") {
                tutor = new Fav();
            } else if (type === "No Favorito") {
                tutor = new NoFav();
            }
            tutor.type = type;
            return tutor;
        }
    }
    
    var Fav = function () {
        this.etiqueta = 'Eliminar de Favoritos';
        this.modal = 'Este tutor ha sido eliminado de su lista de tutores favoritos';
    };
    
    var NoFav = function () {
        this.etiqueta = 'Agregar a Favoritos';
        this.modal = 'Este tutor ha sido agregado a su lista de tutores favoritos';
    };

    function ObtenerEtiquetaBtn (tipo) {
        var factory = new Factory();
        let etiquetaBtn = "";
        
        if(tipo == 0) {            
            etiquetaBtn = factory.createTutor("No Favorito").etiqueta;
        }else if (tipo == 1) {            
            etiquetaBtn = factory.createTutor("Favorito").etiqueta;
        }             
        return etiquetaBtn;
    }

    function ObtenerMensajeModal (tipo) {
        var factory = new Factory();
        let msjModal = "";
        
        if(tipo == 0) {            
            msjModal = factory.createTutor("No Favorito").modal;
        }else if (tipo == 1) {            
            msjModal = factory.createTutor("Favorito").modal;
        }             
        return msjModal;
    }
    

    return(
        <div className={styles.Datos}>

                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}>
                    { isOpenModal && <ModalFavorito closeModal={closeModal} mensaje={ObtenerMensajeModal(tutor.favorito)} />}
                </AnimatePresence>

            <div className={styles.DatosCabecera}>
                <h2>Más datos sobre {TutorVisto.nombre}</h2>            
                <button className={styles.botonEditarDatos}  
                onClick={() => handleFavorito()}>
                    <FontAwesomeIcon icon={faStar}/>
                    <p className={styles.etiquetabtn}>{ObtenerEtiquetaBtn(tutor.favorito)}</p>
                </button>
            </div>
            <div className={styles.DatosBody}>
                <h5 className={styles.tituloSeccion}>Datos personales</h5>                
                <img src={perfil} alt="Foto de perfil" />
                <div className={styles.DatosItems}>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faUserAlt}/>
                        <label>Nombre: </label>
                        <input value={TutorVisto.nombre} readOnly></input>
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faMailBulk}/>
                        <label>Correo: </label>
                        <input value={TutorVisto.correo} readOnly></input>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <label>Telefono: </label>
                        <input value={TutorVisto.num_telf} readOnly></input>                        
                    </div>                
                </div>                
                <h5 className={styles.tituloSeccion}>Datos como docente</h5>
                <div className={styles.DatosItems2}>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faBookOpen}/>
                        <label>Su descripción: </label>
                        <p>{tutor.descripcion}</p>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <label>Sus especialidades: </label>                                            
                        <div className={styles.ContEsHa}>                                                          
                            {EspYHab.especialidades.map((esp)=>                             
                                <h6 className={styles.EsHa}>{esp.desc_esp}</h6>
                            )}
                        </div>                        
                    </div>
                    <div className={styles.DatoItem}>
                        <FontAwesomeIcon icon={faChalkboardUser}/>
                        <label>Sus habilidades: </label>
                        <div className={styles.ContEsHa}>
                            {EspYHab.habilidades.map((esp)=>                             
                                <h6 className={styles.EsHa}>{esp.desc_esp}</h6>
                            )}
                        </div>
                    </div>                
                </div>
            </div>            
        </div>
    )
}

export default VerMas