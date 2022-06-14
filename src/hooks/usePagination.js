import { useState } from "react";

const usePagination = () => {

    const [currentPage, setCurrentPage] = useState(1)

    //  Ir a la página siguiente o anterior
    const nextPage = (totalPages) => currentPage < totalPages ? setCurrentPage(currentPage + 1) : null
    const previousPage = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : null

    return [currentPage, nextPage, previousPage, setCurrentPage]
}

export default usePagination