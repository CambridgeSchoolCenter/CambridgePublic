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
    let apply_btn2 = document.querySelector(".About div div div button");

    // Curse section
    let CourseHeader = document.querySelector('#CourseHeader');
    let CourseHeaders = document.querySelectorAll('.CourseH');
    let Medlist = document.querySelectorAll('.MedicineCourse ul li');
    let Sublist = document.querySelectorAll('.SubcurseCourse ul li');
    let LangCurse = document.querySelectorAll('.LanguageCourse ul li');

    //About section

    let h_about = document.getElementById('h_about');


    const LangChangeHandle = (selected_lang) => {

        // Navigation
        Nav.forEach((element, index) => {
            element.innerHTML = language[selected_lang].NAV[index];
        })

        // Logo and Apply btns
        logo_main_text.innerHTML = language[selected_lang].main[0].toUpperCase();;
        apply_btn.innerHTML = language[selected_lang].NAV[3];
        apply_btn2.innerHTML = language[selected_lang].NAV[3];

        ////////// Curse //////////
        // head
        CourseHeader.innerHTML = language[selected_lang].NAV[1];

        CourseHeaders.forEach((element, index) => {
            element.innerHTML = language[selected_lang].Course[index][0];
        });

        console.log
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

            localStorage.setItem('language', lang.innerHTML);
            LangChangeHandle(lang.innerHTML);

        });
    });;


    if (localStorage.getItem('language') === null) {
        localStorage.setItem('language', 'RU');
        LangChangeHandle(localStorage.getItem('language'));
    } else {
        
        LangChangeHandle(localStorage.getItem('language'));
        Array.from(langs).map((lang) => {
            lang.classList.remove('active_btn');

            if(lang.innerHTML === localStorage.getItem('language')){
                lang.classList.add('active_btn');
            }
        });;

        
    }




})