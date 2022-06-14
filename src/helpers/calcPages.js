//  Calcular el total de páginas
const calcPages = (total, sizePerPage) => {
    if (total % sizePerPage === 0) {
        return total / sizePerPage
    } else {
        return parseInt((total / sizePerPage) + 1)
    }
}

export { calcPages }