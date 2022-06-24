import { useState } from 'react'
import axios from 'axios';
import styles from '../../styles/SerTutor.module.css'
import { useNavigate } from 'react-router-dom';

const Convertir = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        descripcion: '',
        foto: "htttp//foto.prueba.com",
        habilidades: [
            {
                desc_esp: '' 
            }
        ],
        especialidades: [
            {
                desc_esp: '' 
            }
        ]
    })

    //  Funcion para obtener los datos del formulario
    const handleChange = e => {
        if(e.target.name === "descripcion"){
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        } else {
            setForm({
                ...form,
                [e.target.name]:[
                    {
                        desc_esp: e.target.value
                    }
                ] 
            })
        }
    }

    //  Crear suscripción
    const createSub = async () => {
        const result = await axios({
            method: 'POST',
            url: "https://api-m.sandbox.paypal.com/v1/billing/subscriptions",
            auth: {
                username: "ARhPeEJW5QX5ccwoXh9Y-_7D7H0kbpWqa14k-Kx-gyL5G347YPMcJycN0glW13MYFnEgpFVVNNvWqnoF",
                password: "ECr0WUslf0vO-ETVD3RIjIArOT1yoKDjyDWcFpK5N_4-ZwsKAjS9p7Om4IReGhODVAu5UdGPnKCSmLVV"
            },
            data: {
                plan_id: "P-2UH176825E527351WMKVJQZQ",
                application_context: {
                    brand_name: "BuscaTuTutor",
                    locale: "en-US",
                    cancel_url: "http://localhost:3000/menu",
                    return_url: "http://localhost:3000/",
                    user_action: "SUBSCRIBE_NOW",
                    payment_method: {
                        payer_selected: "PAYPAL",
                        payee_preferred: "IMMEDIATE_PAYMENT_REQUIRED"
                    }
                }
            }
        })
        window.location.href = result.data.links[0].href
    }

    return(
        <div className={styles.formSerTutor}>
            <div className={styles.head}>Complete sus datos como tutor</div>
            <div className={styles.inputContainer}>
                <div className={styles.input}>
                    <p>Especialidades</p>
                    <input name='especialidades' type="text" placeholder='Escriba sus especialidades' onChange={handleChange}/>
                </div>
                <div className={styles.input}>
                    <p>Habilidades</p>
                    <input name='habilidades' type="text" placeholder='Escriba sus habilidades' onChange={handleChange}/>
                </div>
                <div className={styles.input}>
                    <p>Descripcion</p>
                    <input name='descripcion' type="text" placeholder='Escriba su descripción' onChange={handleChange}/>
                </div>
            </div>
            <button onClick={createSub}>Continuar</button>
        </div>
    )
}

export default Convertir