

let user = {userName: "Alpagu", isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')
console.log(userInfo)