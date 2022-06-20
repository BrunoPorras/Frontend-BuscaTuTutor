import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Login/Header';
import styles from '../styles/Login.module.css';
import { Footer } from "../components/Home/Portada"
import merchLaptop from '../assets/Landing page/merchLaptop.png'
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://buscatututorbackend.herokuapp.com/api/login";

const urlTodosLosTutores = "https://buscatututorbackend.herokuapp.com/api/getTutores";

const Login = () => {

    //  Hook para navegar a otras paginas
    const navigate = useNavigate()

    const [tutores, setTutores] = useState({});

    //  Campos del login
    const [form, setform] = useState({ correo: '', password: '' })

    //  Funcion para obtener los datos del formulario
    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const iniciarApp = async () => {
        const result = await handleSubmit();
        if(result.Message === "Fail"){
            alert('El usuario o la contraseña no son correctos');  
        } else if(result.Message === "Success"){
            localStorage.setItem('token', result.token)
            navigate('/menu')
            //  Esto no se debe usar
            localStorage.setItem('id', result.Estudiante.id);
            localStorage.setItem('nombre', result.Estudiante.nombre);
            localStorage.setItem('correo', result.Estudiante.correo);
            localStorage.setItem('num_telf', result.Estudiante.num_telf);
            localStorage.setItem('es_tutor', result.Estudiante.es_tutor);
            if(localStorage.getItem('es_tutor') == 'true'){    
                /*SI ES QUE ES TUTOR VA A GUARDAR ALGUNOS DATOS EXTRA*/            
                const AllTutores = await obtenerIDTutor();                
                AllTutores.map((tut)=> {
                    if(tut.id == localStorage.getItem("id")){                        
                        /*Encuentro el tutor*/
                        localStorage.setItem('id_tutor', tut.tutor[0].id);
                        localStorage.setItem('descripcion', tut.tutor[0].descripcion);
                        localStorage.setItem('num_especialidades',tut.tutor[0].especialidades.length);
                        localStorage.setItem('num_habilidades',tut.tutor[0].habilidades.length);
                        for(let i= 0; i<tut.tutor[0].habilidades.length; i++){
                            localStorage.setItem('habilidad'+(i+1), tut.tutor[0].habilidades[i].desc_esp);
                        }
                        for(let j= 0; j<tut.tutor[0].especialidades.length; j++){
                            localStorage.setItem('especialidad'+(j+1), tut.tutor[0].especialidades[j].desc_esp);
                        }
                    }                    
                })                
            }
            
        }
    }

    //  Funcion para enviar obtener su id de tutor
    const obtenerIDTutor = async () => {
        const result = await axios({
            method: 'GET',
            url: urlTodosLosTutores,
            headers: {
                "Content-Type": "application/json"
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