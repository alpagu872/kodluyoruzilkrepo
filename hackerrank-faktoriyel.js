
function factorial(n) {
    if(n>=0 && n<=10){
        if (n < 0) {
            return -1;
        } else if (n == 0) {
            return 1;
        } else {
            return (n * (factorial(n - 1)))
        }
    }else{
        console.log("Wrong Input")
    }
}

console.log(factorial(-1))