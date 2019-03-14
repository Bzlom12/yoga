'use strict';

let age = document.getElementById('age'),
    user = {
        age:age.value
    };
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.age);
        
}
showUser.call(user, "Mark", "Green");