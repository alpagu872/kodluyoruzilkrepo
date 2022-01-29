let laptop1 = {

brand : "Apple",
model: "MacBook Pro",
"2kg":2,
//model-name: "MacBook Pro" ** Can't use '-'
model_name: "MacBook Pro"
}

console.log(laptop1.brand)
console.log(laptop1["brand"])// different using style

//different side eğer rakam var ise başında köşeli parantez içinde key'i yazıyoruz
console.log(laptop1["2kg"])

//Anahtar bilgisine yeni değer eklemek
//we can manipulate this using
laptop1.brand = "Mac"
console.log(laptop1)
//or
laptop1["brand"] = "Ma2c"
console.log(laptop1)

//Yeni değer eklemek
laptop1.version = "12.1.6",
console.log(laptop1)
//we're added new key value

//Anahtar değerlere ulaşmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)

//or 
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {

    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

//Değer verilerine ulaşmak

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(valueInfo =>{

    console.log("Value:", valueInfo)
})

let settings = {
    password: 1234,
    userName: 'user1'
}
keySet = Object.keys(settings)
console.log(settings.password)

keySet.forEach(sett=> {
    console.log(sett)
})