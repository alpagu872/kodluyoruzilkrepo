let counterDOM = document.querySelector(`#counter`)
let increaseDOM =document.querySelector(`#increase`)
let decreaseDOM = document.querySelector(`#decrease`)
let counter = 0

counterDOM.innerHTML = counter


function clickEvent(){
    this.id == "increase" ? counter +=1 : counter -=1;
    counterDOM.innerHTML = counter
}

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)
