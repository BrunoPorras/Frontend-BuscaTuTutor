import React from "react";
import styled from "styled-components";
import image from '../../assets/Demo/perfil1.PNG';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";

import axios from 'axios';
import { useState, useEffect } from 'react';

const urlBI = "https://buscatututorbackend.herokuapp.com/api/getDataForBi";

export default function Profile() {

  const [datosBI, setDatosBI] = useState({proxima_clase: {alumno: '', diasRestantes: '' , hora:'', curso:''}});

  useEffect (() => {        
    async function obtenerDatos() {
        const resultado = await peticionDatos();  
        setDatosBI(resultado);                                
    }  
    obtenerDatos();  
  }, []);

  //  Funcion para obtener todos los datos del tutor seleccionado a partir de su id general
  const peticionDatos = async () => {        
    const result = await axios({
        method: 'GET',
        url: urlBI,
        headers: {
            "Content-Type": "application/json"            
        }
    })
    console.log(result.data)
    return result.data;
  }

  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Próxima Clase</h2>
        <h5>
          {datosBI.proxima_clase.alumno}
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Curso</h5>
          <h3>{datosBI.proxima_clase.curso}</h3>
        </div>
        <div className="container">
          <h5>DFaltantes</h5>
          <h3>{datosBI.proxima_clase.diasRestantes}</h3>
        </div>
        <div className="container">
          <h5>Hora</h5>
          <h3>{datosBI.proxima_clase.hora}</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  padding-top:40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #00c5ea;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;