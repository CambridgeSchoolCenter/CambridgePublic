import { language } from "./language.js";

window.addEventListener("DOMContentLoaded", () => {


    let langs = document.querySelectorAll('.Site_Language button');

    let Apply_Header = document.getElementById('Apply_Header');
    let firstName = document.getElementById('firstNameLabel');
    let lastName = document.getElementById('lastNameLabel');
    let birthdayDate = document.getElementById('birthdayDate');
    let GenderHeader = document.getElementById('Gender');
    let Female = document.getElementById('FeMale');
    let Male = document.getElementById('Male');
    let Phone = document.getElementById('phoneNumberLabel');

    let CourseSelect = document.getElementById('CourseSelect'); 
    let LevelSelect = document.querySelector('.SelectLevel');

    // Btn
    let submit_btn = document.getElementById('submit_btn');

    const LangChangeHandle = (selected_lang) => {
        Apply_Header.innerHTML = language[selected_lang].Registration.Apply;
        firstName.innerHTML = language[selected_lang].Registration.FirstName;
        lastName.innerHTML = language[selected_lang].Registration.SecondName;
        birthdayDate.innerHTML = language[selected_lang].Registration.BirthDate;
        GenderHeader.innerHTML = language[selected_lang].Registration.Gender;
        Female.innerHTML = language[selected_lang].Registration.Female;
        Male.innerHTML = language[selected_lang].Registration.Male;
        Phone.innerHTML = language[selected_lang].Registration.Phone;

        CourseSelect[0].innerHTML =  language[selected_lang].Registration.Course;
        LevelSelect[0].innerHTML = language[selected_lang].Registration.Choose;
        submit_btn.value =  language[selected_lang].NAV[3];

        // Course

        for (let i = 1; i <= 4; i++) {
            CourseSelect[i].innerHTML = language[selected_lang].Course[2][i];
        }
        for (let i = 1; i <= 4; i++) {
            CourseSelect[i + 4].innerHTML = language[selected_lang].Course[1][i];
        }

        for (let i = 1; i <= 7; i++) {
            CourseSelect[i + 8].innerHTML = language[selected_lang].Course[0][i];
        }



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


    // For language outo changeing

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