let email = "alpagu@alpagudev.com"
let firstName = "Alpagu"
let lastName = "ETLI"


console.log( email.length )

console.log(firstName[3])
console.log(firstName.charAt(2))

console.log(firstName.toLocaleUpperCase())

console.log(firstName.toLowerCase())


console.log(email.search("@"))

console.log(email.search("sdf")) // olmayan -1 olarak döner

console.log(email.slice(0,5))



let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)
DOMAIN.charCodeAt