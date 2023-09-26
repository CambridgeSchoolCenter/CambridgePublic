window.addEventListener("DOMContentLoaded", () => {

    let langs = document.querySelectorAll('.Site_Language button');




    Array.from(langs).map((lang) => {
        lang.addEventListener('click', () => {
            langs.forEach(element => {
                element.classList.remove('active_btn');
            });
            lang.classList.add('active_btn');

        });
    });;



})