function factorial(numb){
    if (numb === 1){
        return numb
    }
    else {
        return numb * factorial(numb-1)
    }

}

export {
    factorial,
}