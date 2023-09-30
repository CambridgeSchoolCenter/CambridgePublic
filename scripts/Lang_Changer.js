import { language } from "./language.js";

window.addEventListener("DOMContentLoaded", () => {

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;


    // lang btn
    let langs = document.querySelectorAll('.Site_Language button');

    // Nav
    let Nav = document.querySelectorAll('.navbar-nav li a');

    // Hero section
    let logo_main_text = document.querySelector('.Hero div div p');
    let apply_btn = document.querySelector(".Hero div div div button");

    // Curse section
    let CurseHeader = document.querySelector('#CourseHeader');
    let CurseHeaders = document.querySelectorAll('#CourseCard h3');
    let Medlist = document.querySelectorAll('.MedicineCurse ul li');
    let Sublist = document.querySelectorAll('.SubcurseCurse ul li');
    let LangCurse = document.querySelectorAll('.LanguageCurse ul li');

    //About section

    let h_about = document.getElementById('h_about');


    const LangChangeHandle = (selected_lang) => {

        // Navigation
        Nav.forEach((element, index) => {
            element.innerHTML = language[selected_lang].NAV[index];
        })

        // Logo and Apply btns
        logo_main_text.innerHTML = language[selected_lang].main[0];
        apply_btn.innerHTML = language[selected_lang].NAV[3]

        ////////// Curse //////////
        // head
        CurseHeader.innerHTML = language[selected_lang].NAV[1];

        CurseHeaders.forEach((element, index) => {
            element.innerHTML = language[selected_lang].Course[index][0];
        });

        Medlist.forEach((element, index) => {
            element.innerHTML = language[selected_lang].Course[0][index + 1];
        })

        Sublist.forEach((element, index) => {
            element.innerHTML = language[selected_lang].Course[1][index + 1];
        })

        LangCurse.forEach((element, index) => {
            element.innerHTML = language[selected_lang].Course[2][index + 1];
        })

        // About
        h_about.innerHTML = language[selected_lang].NAV[2];



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