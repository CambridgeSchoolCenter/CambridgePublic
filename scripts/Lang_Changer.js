import { language } from "./language.js";

window.addEventListener("DOMContentLoaded", () => {

    let Nav = document.querySelectorAll('.navbar-nav li a');

    let logo_main_text = document.querySelector('.Hero div div p');
    let langs = document.querySelectorAll('.Site_Language button');
    let apply_btn = document.querySelector(".Hero div div div button")

    const LangChangeHandle = (selected_lang)=>{

            Nav.forEach((element, index) =>{
                element.innerHTML = language[selected_lang].NAV[index];
            })
            
            logo_main_text.innerHTML = language[selected_lang].main[0];
            apply_btn.innerHTML = language[selected_lang].NAV[4]
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