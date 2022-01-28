let userName = prompt("Kullanıcı Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if(userName && age >=18){
    info.innerHTML = "Ehliyet alabilirsiniz."
}else if(!userName){
    info.innerHTML = "Kullanici adinizi giriniz"
}else if(! (age>= 18)){
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
}