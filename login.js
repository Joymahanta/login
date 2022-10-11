const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const log_in = document.querySelector("#login");
const Sign_up= document.querySelector("#Signup");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");

});
log_in.addEventListener("click", () => {
  alert ("You have Logedin succesfully")

});
Sign_up.addEventListener("click", () => {
  alert ("You have signed-up succesfully")

});
