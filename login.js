function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value
    
if(username === "admin" && password === "1234"){
    
localStorage.setItem("adminLoggedIn","true")
    
window.location.href = "admin.html"
    
}
else{
    
document.getElementById("error").innerText = "Invalid login credentials"
    
}
    
}