import { loginUser } from './user.js';

const goPage = document.getElementById("goPage");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const signInBtn = document.getElementById("signInBtn");

goPage.addEventListener("click", function(){
    window.location.href = "/onboarding1.html";
});

signInBtn.addEventListener("click",function(){
   const userData = {emailInput:emailInput.value,passwordInput:passwordInput.value};
    login(userData);
});

async function login(params) {
    try{
   const response = await loginUser(params.emailInput,params.passwordInput);
   console.log(response)
     if(!!response.accessToken) {
        window.location.href = "home.html";
     }
}catch (error) {
    console.error("an error occurred", error);
}}


// function checkInput(){
//     const allFilled = Array.from(inputs).every(input=>input.value.trim() !=='');
//     if (allFilled) {
//         button.classList.add('active');
//     }else{
//         button.classList.remove('active');
//     }
// }

// checkInput()