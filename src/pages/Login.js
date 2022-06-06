import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Header from '../components/Login/Header';
import styles from '../styles/Login.module.css';
import { Footer } from "../components/Home/Portada"
import merchLaptop from '../assets/Landing page/merchLaptop.png'

const baseUrl="https://buscatututorbackend.herokuapp.com/api/login";
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            correo: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    clic = async () => {               
        let result = await this.iniciarSesion();                
        if(result.Message == "Fail"){
            alert('El usuario o la contraseña no son correctos');  
        }
        if(result.Message == "Success"){                        
            //console.log("Exito");                         
            cookies.set('id', result.Estudiante.id, {path: "/"});
            cookies.set('nombre', result.Estudiante.nombre, {path: "/"});
            cookies.set('correo', result.Estudiante.correo, {path: "/"});
            cookies.set('num_telf', result.Estudiante.num_telf, {path: "/"});
            cookies.set('es_tutor', result.Estudiante.es_tutor, {path: "/"});            
            alert(`Bienvenido ${result.Estudiante.nombre}`);
            window.location.href="./menu";
        }        
    }

    iniciarSesion = async()=>{
        let response = await axios({
            "method": 'POST',      
            "url": baseUrl,
            "headers": {
            "Content-Type": 'application/json',        
            },
            "data":JSON.stringify({correo: this.state.form.correo, password: this.state.form.password})
        })    
    
        console.log(response.data);        
        return response.data;
    }

    componentDidMount() {
        if(cookies.get('correo')){
            window.location.href="./menu";
        }
    }


    render() {
        return (            
            <div>
                <Header/>
                <div className={styles.contenedorUno} >
                    <div className={styles.contenedorUnoA}>
                        <h3 className={styles.tituloLogin}>INICIAR SESION</h3>                        
                        <br/><br/><br/>                        
                        <label className={styles.labelLogin}>Ingresa tu correo electronico</label>
                        <input type="text" name="correo" onChange={this.handleChange}></input>
                        <br></br>
                        <label className={styles.labelLogin}>Ingresa tu contraseña</label>
                        <input type="password" name="password" onChange={this.handleChange}></input>
                        <div className={styles.divbotonLogin}>
                            <button className={styles.botonLogin} onClick={()=> this.clic()}>Iniciar Sesión</button>
                        </div>                                                                    
                    </div>
                    <div className={styles.contenedorUnoB}>
                        <img src={merchLaptop} alt="Imagen" />
                    </div>
                    <div className={styles.footerLogin}>
                        <Footer/>
                    </div>
                </div>
                                
            </div>
            
        )
    }   
}

export default Login;