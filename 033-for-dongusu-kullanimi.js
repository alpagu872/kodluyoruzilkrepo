let users = ["Lorem", "Ipsum", "Dolor",]
/*
for(let index = 0; index < users.length ;index++){
    console.log(users[index])
}*/
/*let index = 0

for(; index < users.length ;index++){
    console.log(users[index])
}*/

let index = 0 ;

const userListDOM = document.querySelector('#userList')

for(; index < users.length;index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
    
}