import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Login/Header.js';
import styles from '../styles/Login.module.css';
import { Footer } from "../components/Home/Portada.js"
import merchLaptop from '../assets/Landing page/merchLaptop.png'
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://buscatututorbackend.herokuapp.com/api/login";
const urlObtenerTutor = "https://buscatututorbackend.herokuapp.com/api/getTutor";
const urlTodosLosTutores = "https://buscatututorbackend.herokuapp.com/api/getTutores";

const Login = () => {

    var urlFinal = urlObtenerTutor + "?id=";

    //  Hook para navegar a otras paginas
    const navigate = useNavigate()

    //  Campos del login
    const [form, setform] = useState({ correo: '', password: '' })

    //  Funcion para obtener los datos del formulario
    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function guardarDatosFacade (objeto) {
        guardarDatosEstudiante(objeto);        
        if(objeto.es_tutor){            
            guardarDatosTutor(objeto);
        }        
    }

    function guardarDatosEstudiante (objeto) {
        localStorage.setItem('id', objeto.id);
        localStorage.setItem('nombre', objeto.nombre);
        localStorage.setItem('correo', objeto.correo);
        localStorage.setItem('num_telf', objeto.num_telf);
        localStorage.setItem('es_tutor', objeto.es_tutor);
    }

    async function guardarDatosTutor (objeto) {  
        urlFinal = urlFinal + objeto.id;
        const tutor = await obtenerTutor();
        localStorage.setItem('id_tutor', tutor.id);
        localStorage.setItem('descripcion', tutor.descripcion);
    }

    const iniciarApp = async () => {        
        const result = await handleSubmit();
        if(result.Message === "Fail"){
            alert('El usuario o la contraseña no son correctos');  
        } else if(result.Message === "Success"){
            localStorage.setItem('token', result.token)
            navigate('/menu')
            guardarDatosFacade(result.Estudiante);
        }
    }

    //  Funcion para enviar obtener su id de tutor
    const obtenerTutor = async () => {
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
    

    //  Funcion para enviar los datos del formulario
    const handleSubmit = async () => {
        const result = await axios({
            method: 'POST',
            url: baseUrl,
            headers: {
                "Content-Type": "application/json"
            },
            data: form
        })
        return result.data;
    }

    return(
        <div>
            <Header login={true}/>
            <div className={styles.contenedorUno} >
                <div className={styles.contenedorUnoA}>
                    <h3 className={styles.tituloLogin}>INICIAR SESION</h3>
                    <br /><br /><br />
                    <label className={styles.labelLogin}>Ingresa tu correo electronico</label>
                    <input className={styles.inputTanque} type="text" name="correo" onChange={handleChange}></input>
                    <br></br>
                    <label className={styles.labelLogin}>Ingresa tu contraseña</label>
                    <input className={styles.inputTanque} type="password" name="password" onChange={handleChange}></input>
                    <div className={styles.divbotonLogin}>
                        <button className={styles.botonLogin} onClick={() => iniciarApp()}>Iniciar Sesión</button>
                    </div>
                </div>
                <div className={styles.contenedorUnoB}>
                    <img src={merchLaptop} alt="Imagen" />
                </div>
                <div className={styles.footerLogin}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Login;