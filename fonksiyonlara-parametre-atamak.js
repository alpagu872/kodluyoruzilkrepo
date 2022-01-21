let firstName = "Lorem";

function greetings(firstName = "" , lastname = " "){//default parametre alır

    //console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName} ${lastname}`)

}
console.log(firstName)//degisken
greetings("Alpagu")// fonksiyona parametre göndermedik ??
greetings("Parametre")



function greetings2(firstName, lastName){

    let info = `Merhaba ${firstName} ${lastName}`
    return info
}
let info = greetings2("Ad", "Soyad")
console.log(info)


function domIdWriteInfo(id, info){

let domObject = document.querySelector(`#${id}`)
domObject.innerHTML = info

}

domIdWriteInfo('greeting', greetings2("Lorem", "Ipsum"))

