function checkAndSortInputNumber(num) {
    if(String(num).length<=3){
        return Number(num.toString().split('').sort((a, b) => b - a).join(''));
    }
    else{
         return false;
    }
}
console.log(checkAndSortInputNumber(135));