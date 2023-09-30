import { language } from "./language.js";

window.addEventListener("DOMContentLoaded", () => {
    // lang btn
    let langs = document.querySelectorAll('.Site_Language button');
    let firstName = document.getElementById('firstNameLabel');
    let lastName = document.getElementById('lastNameLabel');
    let birthdayDate = document.getElementById('birthdayDate');
    let GenderHeader = document.getElementById('Gender');
    let Female = document.getElementById('FeMale');
    let Male = document.getElementById('Male');
    let Phone = document.getElementById('phoneNumberLabel');

    const LangChangeHandle = (selected_lang) => {

    firstName.innerHTML = language[selected_lang].Registration.FirstName;
    lastName.innerHTML = language[selected_lang].Registration.SecondName;
    birthdayDate.innerHTML = language[selected_lang].Registration.BirthDate;
    GenderHeader.innerHTML = language[selected_lang].Registration.Gender;
    Female.innerHTML = language[selected_lang].Registration.Female;
    Male.innerHTML = language[selected_lang].Registration.Male;
    Phone.innerHTML = language[selected_lang].Registration.Phone;


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