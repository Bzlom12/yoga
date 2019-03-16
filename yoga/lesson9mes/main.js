'use strict';

let age = document.getElementById('age'),
    user = {
        surname:"Green",
        name:"Ann"
    };
    age.addEventListener('change', function get() {
        // console.log(this);
        alert("Пользователь " + user.surname + " " + user.name + ", его возраст " + this.value);
    });  