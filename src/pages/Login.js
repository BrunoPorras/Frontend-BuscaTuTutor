import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Login/Header';
import styles from '../styles/Login.module.css';
import { Footer } from "../components/Home/Portada"
import merchLaptop from '../assets/Landing page/merchLaptop.png'

const baseUrl = "https://buscatututorbackend.herokuapp.com/api/login";

const Login = () => {

    //  Campos del login
    const [form, setform] = useState({ correo: '', password: '' })

    //  Funcion para obtener los datos del formulario
    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //  Funcion para enviar los datos del formulario
    const handleSubmit = async() => {
        const result = await axios({
            method: 'POST',
            url: baseUrl,
            headers: {
                "Content-Type": "application/json"
            },
            data: form
        })
        console.log(result.data)
    }

    return(
        <div>
            <Header/>
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
                        <button className={styles.botonLogin} onClick={() => handleSubmit()}>Iniciar Sesión</button>
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