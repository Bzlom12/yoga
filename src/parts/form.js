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
        
            let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                            
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            resolve();
                        } else {
                            reject();
                        }    
                    }
                    };
                
                    let obj = {};
                    formData.forEach(function(value, key) {
                            obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                    request.send(data);
                });
            } // end postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            
            postData(formData)
                .then(()=> status.message.innerHTML = message.loadind)
                .then(()=> {
                    statusMessage.innerHTML = message.success; 
                })
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput);
        }); 
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
                    console.log("good");
                    return false;
                } else {
                    console.log("not");
                    a.value = value;
                    return false;
                }
                
        });
    };

    validPhone("phone");
    validPhone("phone1");
}

module.exports = form;