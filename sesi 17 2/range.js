function range(numb){    
    if (numb === 0){
        return numb
    }
    else {
        return `${range(numb-1)}${numb}`
    }
}

export {
    range,
}