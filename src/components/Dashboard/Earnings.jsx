import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";

import axios from 'axios';
import { useState, useEffect } from 'react';

const urlBI = "https://buscatututorbackend.herokuapp.com/api/getDataForBi";

const data = [
  { data: 1 },
  { data: 1 },
  { data: 0 },
  { data: 2 },
  { data: 3 },
  { data: 1 },
  { data: 1 },
  { data: 2 },
  { data: 1 },
  { data: 1 },
  { data: 2 },
  { data: 3 },
  { data: 1 },
  { data: 2 },
  { data: 1 },
];

export default function Earnings() {

  const [datosBI, setDatosBI] = useState({});

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
      <div className="top">
        <div className="info">
          <h5>Clases dictadas ultimos 15 días</h5>
          <h1>22</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={datosBI.quince_dias}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #00c5ea;
          span {
            color: black;
          }
        }
        span {
          color: #00c5ea;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;