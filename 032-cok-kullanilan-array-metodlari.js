let items = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

//başa ekleme
items.unshift(femaleUsers)
console.log(items)

//sona ekleme
items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length) // içindeki arrayin uzunluk verisine ulaştık output: 3
console.log(items[0][0]) // Ayse bilgisine ulaşırız


//array içerisinden öğe ayırmak

let newItems = items.splice(1, 5)
console.log("newItems: ", newItems)
console.log("Items: ", items)

// array içerisindeki öğrenin index bilgisini bulmak

items.unshift("Lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

// array kopyalamak -->slice, ES6

let copyItems = items
console.log(items)
copyItems.pop()
console.log("items: ", items)
console.log("copyItems", copyItems)

console.log("Kopyalandıktan sonraki hali: ")

copyItems = items.slice()//kopyalama yaptı
copyItems.pop()//son öğeyi çıkarttık
console.log("items: ", items) 
console.log("copyItems", copyItems)
//veya
let es6Items = [...items] //es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] //es6 ile birlikte gelen array birleştirme
console.log(allUsers)

//array içerisindeki bilgiyi stringe çevirmek --> toString veya join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

//istenilen index bilgisine öğe eklemek
allUsers.splice(allUsers.length -1 ,0," Melissa")
allUsers.splice(Math.floor(allUsers.length)/2,0 ,"Lorem")
console.log(allUsers)
