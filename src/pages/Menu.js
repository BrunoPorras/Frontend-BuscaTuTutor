import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('correo', {path: "/"});
        cookies.remove('num_telf', {path: "/"});
        cookies.remove('es_tutor', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('correo')){
            window.location.href="./login";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('correo: '+cookies.get('correo'));
        console.log('correo: '+cookies.get('es_tutor')); //lo trae como string        
        //console.log('apellido_materno: '+cookies.get('apellido_materno'));
        //console.log('nombre: '+cookies.get('nombre'));
        //console.log('username: '+cookies.get('username'));
        return (
            <div>
                Menu Principal

                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default Menu;