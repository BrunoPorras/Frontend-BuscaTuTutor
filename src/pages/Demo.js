import { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Cards, Carrousel } from "../components/Demo/Cards.js"
import { Search } from "../components/Demo/Search.js"
import TutoresList from "../components/Demo/TutoresList.js"
import NavbarLanding from "../components/Home/NavbarLanding.js"

import usePagination from '../hooks/usePagination.js'
import { calcPages } from '../helpers/calcPages.js'

import styles from '../styles/DemoContainer.module.css'

const pageSize = 5;

const Demo = () => {
    
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
            const response = await axios({
                method: 'GET',
                url: 'https://buscatututorbackend.herokuapp.com/api/getTutores'
            })
            setdata(response.data)
            setFilterData(response.data)
            setLoading(false)
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

    const countTutors = () => {
        if(loading){
            return(
                <Skeleton width={200}/>
            )
        } else {
            return(
                <>{filterData.length} tutores disponibles</>
            )
        }
    }

    return (
        <div>
            <NavbarLanding demoMode={true}/>
            <div className={styles.navContainer}>
                <Search
                    search={search}
                    setSearch={setSearch}
                    restartPage={setPage}
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.cardsContainer}>
                    <Cards/>
                </div>
                <p className={styles.textContainer}>
                    {countTutors()}
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
                        />
                    </div>
                    <div className={styles.carrousel}>
                        <Carrousel/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo