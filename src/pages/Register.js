import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from '../styles/DemoRegister.module.css'
import Header from '../components/Login/Header.js';
import { Footer } from '../components/Home/Portada.js';
import merchLaptop from '../assets/Landing page/merchLaptop.png'
const baseUrl = "https://buscatututorbackend.herokuapp.com/api/create";


const Register = () => {

    //  Hook para redirigirnos a otra interfaz
    const navigate = useNavigate()
    
    //  Campos del login
    const [form, setform] = useState({ 
        correo: '', 
        password: '',
        nombre: '',
        num_telf: ''
    })
    
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
        if (result.data.Message === 'Success') {
            navigate('/')
        } else {
            alert('Error')
        }
    }

    return (
        <div>
            <Header login={false}/>
            <div className={styles.contenedorUno} >
                <div className={styles.contenedorUnoB}>
                    <img src={merchLaptop} alt="Imagen" />
                </div>
                <div className={styles.contenedorUnoA}>
                    <h3 className={styles.tituloLogin}>REGISTRATE</h3>                        
                    <br/>                      
                    <label className={styles.labelLogin}>Ingresa tu nombre completo</label>
                    <input type="text" name="nombre" onChange={handleChange}></input>
                    <br></br>
                    <label className={styles.labelLogin}>Ingresa tu número de telefono</label>
                    <input type="text" name="num_telf" onChange={handleChange}></input>
                    <br></br>
                    <label className={styles.labelLogin}>Ingresa tu correo electronico</label>
                    <input type="text" name="correo" onChange={handleChange}></input>
                    <br></br>
                    <label className={styles.labelLogin}>Ingresa tu contraseña</label>
                    <input type="password" name="password" onChange={handleChange}></input>
                    <div className={styles.divbotonLogin}>
                        <button className={styles.botonLogin} onClick={() => handleSubmit()}>Registrate</button>
                    </div>                                                                    
                </div>
                
                <div className={styles.footerLogin}>
                    <Footer/>
                </div>
            </div>
                            
        </div>
    )
}

export default Register