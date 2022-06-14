import React from "react";
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [

    {
        title: "Inicio",
        icon: <FaIcons.FaHome className="me-2"/>,
        link: "/inicio"
    }, 
    {
        title: "Mi Perfil",
        icon: <FaIcons.FaUserAlt className="me-2"/>,
        link: "/miperfil"
    }, 
    {
        title: "Mis favoritos",
        icon: <FaIcons.FaStar className="me-2"/>,
        link: "/misfavoritos"
    }, 
    {
        title: "Mis clases",
        icon: <FaIcons.FaRegCalendarAlt className="me-2"/>,
        link: "/misclases"
    }, 
    {
        title: "Buscar tutor",
        icon: <FaIcons.FaSearch className="me-2"/>,
        link: "/buscar"
    }, 
    {
        title: "Ser un tutor",
        icon: <FaIcons.FaUserGraduate className="me-2"/>,
        link: "/upgrade"
    }, 
    {
        title: "Historial de pagos",
        icon: <FaIcons.FaReceipt className="me-2"/>,
        link: "/pagos"
    }
]