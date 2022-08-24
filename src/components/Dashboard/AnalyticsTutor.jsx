import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";

import axios from 'axios';
import { useState, useEffect } from 'react';

const urlBI = "https://buscatututorbackend.herokuapp.com/api/getDataForBi";

export default function AnalyticsTutor() {

  const [datosBI, setDatosBI] = useState({});

  useEffect (() => {        
    async function obtenerDatos() {
        const resultado = await peticionDatos();  
        setDatosBI(resultado);                                
    }  
    obtenerDatos();  
  }, []);

  //  Funcion para obtener todos los datos a mostrar en el dashboard del tutor
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
      <div className="analytic ">
        <div className="content">
          <h5>Total de clases dictadas</h5>
          <h2>{datosBI.clasesDictadas}</h2>
        </div>
        <div className="logo">
          <IoStatsChart />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
        <div className="content">
          <h5>Meses Tutor en Linea</h5>
          <h2>{datosBI.mesesTl}</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>Estudiantes contactados</h5>
          <h2>{datosBI.estudiantesConectados}</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Especialidad con más clases</h5>
          <h2>{datosBI.especialidadFrecuente}</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Especialidades</h5>
          <h2>{datosBI.especialidades}</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Horas invertidas clase</h5>
          <h2>{datosBI.horasInvertidas}</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #05378e;      
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;