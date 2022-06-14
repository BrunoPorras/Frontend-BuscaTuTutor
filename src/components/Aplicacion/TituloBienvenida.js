import styles from '../../styles/Aplicacion.module.css';

const TituloBienvenida = () => {
    return(
        <div className={styles.tituloBienvenida}>
            <div className={styles.itemBienvenida}>
                <h1>{'Hola, ' + localStorage.getItem("nombre").split(" ")[0] + '!'}</h1>
            </div>
            <div></div>
            <div className={styles.itemBienvenida}>
                <img src= "https://i.ibb.co/K9ZrWMQ/welcome.png"></img>
            </div>
        </div>            
    )
}

export default TituloBienvenida