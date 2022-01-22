

let user = {userName: "Alpagu", isActive: true}

localStorage.setItem('userInfo', user)

let userInfo = localStorage.getItem('userInfo')
console.log(userInfo)