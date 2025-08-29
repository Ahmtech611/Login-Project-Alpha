const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".Login-link");
const registrationLink = document.querySelector(".Registration-link");

const btnPopUp = document.querySelector(".btnLoginpopup");

const closeIcon = document.querySelector(".login-close-icon");

registrationLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click', ()=>{
    wrapper.classList.add('activePopUp');
});

closeIcon.addEventListener('click', ()=>{
    wrapper.classList.remove('activePopUp');
});