import {sumArr} from './function.js'
let konfirmasi = true
let i = 0
let arr = []
while(konfirmasi===true){
    arr[i] = parseInt(prompt(`Masukkan bilangan ke-${i+1}`))
    konfirmasi = confirm('Apakah anda mau mengulang?')
    i += 1
}
alert (sumArr(arr))