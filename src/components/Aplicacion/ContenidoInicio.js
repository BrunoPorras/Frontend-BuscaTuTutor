import stylesApp from '../../styles/Aplicacion.module.css';
import TituloBienvenida from './TituloBienvenida';


import { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-loading-skeleton/dist/skeleton.css'


import TutoresList from "../../components/Demo/TutoresList"

import usePagination from '../../hooks/usePagination'
import { calcPages } from '../../helpers/calcPages'

import styles from '../../styles/DemoContainer.module.css'


const pageSize = 5;

const ContenidoInicio = ({ mode = "normal" }) => {

    //  Hook para la paginación
    const [currentPage, nextPage, prevPage, setPage] = usePagination()

    //  States para loading y lista de tutores
    const [loading, setLoading] = useState(true)
    const [data, setdata] = useState([])
    const [filterData, setFilterData] = useState([])

    //  States para el filtro
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('nombre')

    //  States para las páginas
    const [totalPages, setTotalPages] = useState(1)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    //  Método para obtener la lista de tutores
    const getData = async () => {
        if (loading) {
            if(mode == "normal"){
                const response = await axios({
                    method: 'GET',
                    url: 'https://buscatututorbackend.herokuapp.com/api/getTutores'
                })
                setdata(response.data)
                setFilterData(response.data)
                setLoading(false)
            } else {
                const response = await axios({
                    method: 'GET',
                    url: 'https://buscatututorbackend.herokuapp.com/api/getFavTutors',
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                })
                console.log(response)
                setdata(response.data)
                setFilterData(response.data)
                setLoading(false)
            }
        } else {
            if (search.length === 0) {
                setFilterData(data)
            } else {
                setFilterData(data.filter(item => item[filter].toLowerCase().includes(search.toLowerCase())))
            }
        }
    }

    useEffect(() => {
        getData()
    }, [search])

    useEffect(() => {
        setMin((currentPage - 1) * pageSize)
        setMax(currentPage * pageSize)
    }, [currentPage])

    useEffect(() => {
        setTotalPages(calcPages(filterData.length, pageSize))
    }, [filterData])

    return (
        <div>
            <TituloBienvenida />

            <div className={styles.bodyContainer}>
                <p className={stylesApp.textContainer}>
                    Tutores recomendados en base a tu perfil
                </p>
                <div className={styles.listContainer}>
                    <div style={{
                        "flex": "1"
                    }}>
                        <TutoresList
                            loading={loading}
                            data={filterData.slice(min, max)}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            totalPages={totalPages}
                            currentPage={currentPage}
                            demoMode={false}
                            mode={mode}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContenidoInicio