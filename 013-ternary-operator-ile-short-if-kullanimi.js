let userName = prompt("Kullanici bilgisini yaziniz")
let info = document.querySelector("#info")


//ternary kullanimi
//kosul ? dogruysa : yanlissa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz bulunamadi"}`

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
>> false

console.log(boolean)

var money;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) 