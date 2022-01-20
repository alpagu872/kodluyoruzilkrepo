var vizeNot = prompt("Vize Notunuzu Giriniz");
var finalNot = prompt("Final Notunuzu Giriniz:")

var ort = ((vizeNot *0.3) + (finalNot * 0.7));
console.log(ort)
if(ort >= 0 && ort <= 30){

    console.log("Kaldınız.")
}else if(ort >= 31 && ort <=49){
    console.log("DC İLE GECTİNİZ")
}else if(ort >= 50 && ort <= 84){
    console.log("DC İLE GEÇTİNİZ")
}else if(ort >= 85 && ort <= 100){

    console.log("AA İLE GEÇTİNİZ")
}else{
    console.log("YANLIS GIRDI")
}
