import { language } from "./language.js";

window.addEventListener("DOMContentLoaded", () => {

    let Nav = document.querySelectorAll('.navbar-nav li a');


    let langs = document.querySelectorAll('.Site_Language button');


    const LangChangeHandle = (selected_lang)=>{
            Nav.forEach((element, index) =>{
                element.innerHTML = language[selected_lang].NAV[index];
            })
    }
    

    Array.from(langs).map((lang) => {
        lang.addEventListener('click', () => {
            langs.forEach(element => {
                element.classList.remove('active_btn');
            });
            lang.classList.add('active_btn');

            LangChangeHandle(lang.innerHTML);

        });
    });;



})