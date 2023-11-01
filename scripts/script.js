
import { language } from "./language.js";
// import {axios} from '../node_modules/axios/dist/axios.js'
window.addEventListener('DOMContentLoaded', () => {

    // Modal

    // DATA
    // let firstName = document.getElementById('firstName');
    // let lastName = document.getElementById('lastName');
    // let birthdayDate = document.getElementById('Birth');
    // let Gender = document.querySelector('input[type = radio]:checked');
    // let Phone = document.getElementById('phoneNumber');
    let SelectLevel = document.querySelector('.SelectLevel');
    var Course = document.querySelector("#CourseSelect");



    // Btn
    let submit_btn = document.getElementById('submit_btn');


    Course.addEventListener('change', () => {

        if (Course.selectedIndex > 0 && Course.selectedIndex < 5) {
            SelectLevel.innerHTML = `<option value="nothing" disabled selected>${language[localStorage.getItem('language')].Registration.Choose}</option>`;
            SelectLevel.classList.remove('hide');
            language.levels[Course.selectedIndex - 1].forEach(element => {
                SelectLevel.innerHTML += `<option value="${element}" >${element}</option>`
            });

        } else {
            SelectLevel.innerHTML = ` <option value="nothing" disabled selected></option>`;
            SelectLevel.classList.remove('hide');
            SelectLevel.classList.add('hide');
        }
    })

    // Button to send DATA to the server 
    // submit_btn.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     if (Course[Course.selectedIndex].value === "nothing") {
    //         return alert(language[localStorage.getItem('language')].Registration.CourseNotSelected);
    //     } else if (Course.selectedIndex > 0 && Course.selectedIndex < 5) {
    //         if (SelectLevel[SelectLevel.selectedIndex].value === 'nothing') {
    //             return alert(language[localStorage.getItem('language')].Registration.LevelNotSelected);
    //         }
    //     }

    //     console.log("Herfs");
    //     // Data himself;
    //     const DATA = {
    //         name: firstName.value,
    //         surname: lastName.value,
    //         BirthDay: birthdayDate.value,
    //         Gender: Gender.value,
    //         Phone: Phone.value,
    //         Course: Course[Course.selectedIndex].value,
    //         Level: SelectLevel[SelectLevel.selectedIndex].value
    //     }

    //     // SENDING...

    //     // axios.post('http://192.168.0.112:3002/registration', DATA)
    //     //     .then(response => {
    //     //         // Handle the successful response
    //     //         console.log(response.data);
    //     //     })
    //     //     .catch(error => {
    //     //         // Handle the error
    //     //         console.error(error);
    //     //     });
    //     console.log("Helloasdasdf sd");

    //     // axios.get('http://192.168.0.112:3002/students')
    //     // .then(response => {
    //     //     // Handle the successful response
    //     //     console.log(response.data);
    //     // })
    //     // .catch(error => {
    //     //     // Handle the error
    //     //     console.error(error);
    //     // });


    //     // After...






    // })





});