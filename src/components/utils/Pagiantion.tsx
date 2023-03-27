const Pagiantion = (page: number) => {
    const inicialPage = () => {
        if (page === 0) {
            return 0
        } else {
            return page * 5
        }
    }
    const finalPage = () => {
        return (page + 1) * 5
    }

    let array = []

    for (let i = inicialPage(); i < finalPage(); i++) {
        array.push(i)
    }

    return console.log(array)
}

export default Pagiantion
