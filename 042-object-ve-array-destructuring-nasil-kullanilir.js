//Object destructuring

let settings = {

    userName: "loremIpsum",
    password: "BadPassword",
    isActive : false,
    ip: "127.0.0.1",
    serverName: "alpagu.dev"
}

//Obje içindeki bilgilerin tek seferde çıkartılması
/*
let userName = settings.userName;
console.log(userName)
*/
 // rename ve destructuring 
let {userName: user, password,isActive,ip:serverIP,serverName} = settings
console.log(user, password,isActive,serverIP,serverName)
console.log(settings)

console.log(user)


//Obje içerisindeki bazı bilgilerin çıkartılması
let {userName:userName2,password:password2,serverName:serverName2, ...newSettings} = settings

console.log(newSettings)


//Objenin destructuring ile kopyalanması

//let settings2 = settings
/*
HATALI KULLANIM
settings2.userName = "Değişen Bilgi"
console.log("settings",settings)
console.log("settings 2",settings2)*/

//DOĞRU KULLANIM
let settings2 = {...settings}
console.log(settings)
settings2.userName = "Değişen Bilgi"
console.log("settings",settings)
console.log("settings 2",settings2)

let score = [100,200,300,400]

let [score1,score2, ...otherScore] = [score]

console.log(score1,score2,otherScore)
console.log(otherScore)


// obejct kopyalama ile aynı let settings2 = {...settings}

let copyOfScore = [...score]
console.log(copyOfScore)

let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
console.log(pronoun)
console.log(name)


let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)


