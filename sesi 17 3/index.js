import {checkLetter} from './function.js'

let word = prompt("masukkan Kalimat","")
let letter = prompt("masukkan huruf","")

alert(`huruf ${letter} terdapat ${checkLetter(word,letter)} pada kata ${word}`)