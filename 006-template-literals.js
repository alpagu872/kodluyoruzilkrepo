let userName ="alpagu"
const DOMAIN ="alpagu.dev"

let email = userName + "@" + DOMAIN

console.log("Hoşgeldin",email)

let info = `
Merhaba ${userName}  mail adresi: ${email}
mail adresin ${email}
mail adresinin uzunluğu: ${email.length}
gunun saat bilgisi: ${new Date().getHours()}`

console.log(info)