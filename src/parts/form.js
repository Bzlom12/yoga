function form() {
    let message = {
        loadind: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let sendForm = function (a) {
        let form = document.querySelector(a),
            input = form.getElementsByTagName("input"),
            statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form),
                obj = {};

            formData.forEach(function(value, key) {
                    obj[key] = value;
            });

            let json = JSON.stringify(obj),
                request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.send(json);
            request.addEventListener('readystatechange', function() {
                function postData() {
                        let promise = new Promise(function(resolve, reject) { 
                            if (request.readyState < 4) {
                                resolve(message.loadind);    
                            } else if (request.readyState === 4 && request.status == 200) {
                                    resolve(message.success);
                            } else {
                                    reject();
                            }    
                        }); 
                        return promise;     
                } // end postData
                postData().then(function() {
                    statusMessage.innerHTML = message.success;
                }).catch(function() {
                    statusMessage.innerHTML = message.failure;
                }).then(clearInput);
            }); 
        });
     
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
    };     
    sendForm(".main-form");
    sendForm("form");
    
    //Check form
    function validPhone(b) {
        let a = document.getElementById(b); //a
        let value = a.value;
        a.addEventListener("input", function(e) {
            let reg = /[^\d\+]/g;     
            let value2 = e.target.value;
                    
                if (!value2.match(reg)) {
                    a.value = value2;
                    return false;
                } else {
                    a.value = value;
                    return false;
                }    
        });
    }

    validPhone("phone");
    validPhone("phone1");
}

module.exports = form;