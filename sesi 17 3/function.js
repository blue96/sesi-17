function checkLetter(word,letter){
    let hasil
    if (word.length === 0){
        return 0
    }
    else {
        if (word.substring(0,1) === letter){
            hasil = 1
        }
        else {
            hasil = 0
        }
        return hasil + checkLetter(word.substring(1,word.length) ,letter)
    }
}

export {
    checkLetter,
}