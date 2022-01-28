
let formDOM =document.querySelector("#userForm")
formDOM.addEventListener('sumbit' , formSumbit)
function formSumbit(event){
    event.preventDefault()
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score' , scoreInputDOM.value)

}