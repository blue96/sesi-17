function sumArr(arr){
    if (arr.length===0){
        return 0
    }
    else{
        return arr[0] + sumArr(arr.slice(1))
    }

}
export {
    sumArr,
}