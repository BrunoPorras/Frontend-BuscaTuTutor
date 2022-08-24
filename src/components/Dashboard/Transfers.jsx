import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from '../../assets/Demo/perfil1.PNG';
import { cardStyles } from "./ReusableStyles";

import axios from 'axios';
import { useState, useEffect } from 'react';

const urlBI = "https://buscatututorbackend.herokuapp.com/api/getDataForBi";

export default function Transfers() {

  const [datosBI, setDatosBI] = useState({tres_ultimas_clases: [{alumno: '', precio: ''}]});

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

  const transactions = [
    {
      image: avatarImage,
      name: "Pedro Suarez",
      time: "Biologia",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "Edinson Chinchay",
      time: "Historia",
      amount: "+$25",
    },
    {
      image: avatarImage,
      name: "Lorena Alvarez",
      time: "Biologia",
      amount: "+$150",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Últimas clases dictadas</h2>
      </div>
      <div className="transactions">
        {datosBI.tres_ultimas_clases.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.alumno}</h3>
                  <h5>Biologia</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>+$ {transaction.precio}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="#">
        Ver todas <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #00c5ea;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
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
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #00c5ea;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;