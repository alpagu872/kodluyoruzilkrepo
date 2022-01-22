let greeting = document.querySelector("#greeting")
greeting.addEventListener("play",domClick)

function domClick() {
    console.log("Tıklandı")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}