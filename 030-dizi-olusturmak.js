let domain = "kodluyoruz"
isActive = false

let items = [17, 27, 37, isActive, domain]
console.log(items)

let emptyArray = []  //boş liste


console.log(
    items.length//array içindeki öğe sayısı
)

document.querySelector('#info').innerHTML = items.length

//array içerisindeki ilk elemanın çağrılması
console.log(
items[0])

//array içindeki son elemanın çağrılması
console.log(
    items[items.length-1]
)

//değişken içindeki bilginin tipini öğrenme

console.log(
    typeof(items) //object olarak çıktı veriyor
)

console.log(
    Array.isArray(items)// array check
)

//hangileri isArray -->True ?

console.log("[] : ",
    Array.isArray( [] )
)

console.log("1: " , Array.isArray(1))

console.log("true : " , Array.isArray(true))
