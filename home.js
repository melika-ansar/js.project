import { ACCESS_TOKEN } from "./utils.js";


function checkToken(){
    const token =localStorage.getItem("access-token");
    if(!token){
        window.location.href ="login.html"
    }
}
checkToken()

console.log(ACCESS_TOKEN)