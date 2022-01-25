let items = [10, 20, 30, 40]
console.log("items- ilk hali: ", items)

//array sona öğe/eleman ekleme
items.push(50)
console.log("50 : ",items)

//array başa öğre/eleman ekleme
items.unshift(5)
console.log("5: ", items)

//sondan veri çıkarma
items.pop()
console.log(items)

let lastItem = items.pop() //son elemanı lastItem içerisine ekledil
console.log(lastItem)

//baştan bir item çıkartma
let firstItem = items.shift()
console.log("firstItem ", firstItem)
console.log(items)


// Array içerisindeki bir öğenin bilgisini değiştirme
items[0] = 21;
console.log(items)


//sondan eleman değiştirme
items[items.length -1 ] = 390
console.log(items)
