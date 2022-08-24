import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";

export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Clases último mes</h5>
          <h2>+ 350</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Comunidad Tutor en Linea</h5>
          <h2>+ 28 000</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>Nuevos usuarios</h5>
          <h2>+ 300</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Nuevos profesores</h5>
          <h2>+ 120</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Habilidades</h5>
          <h2>+ 120</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Especialidades</h5>
          <h2>+ 120</h2>
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