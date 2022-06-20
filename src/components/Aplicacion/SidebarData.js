import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, faUser, faStar, faCalendarDays,
    faMagnifyingGlass, faUserGraduate, faReceipt
} from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [

    {
        title: "Inicio",
        icon: <FontAwesomeIcon icon={faHome}/>,
        link: "/menu"
    }, 
    {
        title: "Mi Perfil",
        icon: <FontAwesomeIcon icon={faUser}/>,
        link: "/miperfil"
    }, 
    {
        title: "Mis favoritos",
        icon: <FontAwesomeIcon icon={faStar}/>,
        link: "/misfavoritos"
    }, 
    {
        title: "Mis clases",
        icon: <FontAwesomeIcon icon={faCalendarDays}/>,
        link: "/misclases"
    }, 
    {
        title: "Buscar tutor",
        icon: <FontAwesomeIcon icon={faMagnifyingGlass}/>,
        link: "/buscar"
    }, 
    {
        title: "Ser un tutor",
        icon: <FontAwesomeIcon icon={faUserGraduate}/>,
        link: "/upgrade"
    }, 
    {
        title: "Historial de pagos",
        icon: <FontAwesomeIcon icon={faReceipt}/>,
        link: "/pagos"
    }
]