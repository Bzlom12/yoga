window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let  tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Модальное окно
    let more = document.querySelectorAll('.description-btn'),
        moreTimer = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    more.forEach( () => {
        addEventListener('click', (event) => {
            for(let i = 0; i < more.length; i++) {
                if (more[i] == event.target) {
                    moreOpen(more[i]);
                }
            }   
        });
    });

    let moreOpen = (button) => {
        overlay.style.display = 'block';
        button.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };

    moreTimer.addEventListener('click', () => {
        moreOpen(moreTimer);
    });

    // Animate form
    close.addEventListener('click', () => {
        if (navigator.appName == 'Microsoft Internet Explorer' 
            || navigator.appName == 'Microsoft Edge') {
        
            // close.addEventListener('click', () => {
            //     moreTimer.classList.remove('more-splash');
            //     document.body.style.overflow = '';
            //     overlay.style.display = "none";
            //     overlay.style.animation = "closing";
            //     overlay.style.animationDuration = "2s";
            //     console.log("css анимация");
            // });
        } else if (navigator.userAgent.indexOf("Opera") != -1 || navigator.userAgent.indexOf("Chrome") != -1
        || navigator.userAgent.indexOf("Safari") != -1 || navigator.userAgent.indexOf("Firefox") != -1) {

            overlay.style.animation = "closing";
            overlay.style.animationDuration = "2s";
            let counter = 100;
            const id = setInterval(frame, 10);
            function frame() {
                if ( counter == 10) {
                    clearInterval(id);
                    overlay.style.display = "none";
                    moreTimer.classList.remove('more-splash');
                    document.body.style.overflow = '';
                    overlay.style.opacity = 100;
                } else {
                    counter--;
                    overlay.style.transform = `translateY(-${counter}px)`;
                    overlay.style.opacity = '.' + counter;
                }   
            }    
        }
    
    });
    // Form
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

        let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'appLication/x-www-form-urlencoded');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
                obj[key] = value;
        });
        
        let json = JSON.stringify(obj);
        // request.send(formData);
        request.send(json);
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loadind;
            } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
            } else {
                    statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            }
        });
    }
    sendForm(".main-form");
    sendForm("form");
    
    function validPhone() {
        let reg = /^\d[\d\(\)\ -]{4,14}\d$/,
            phone = document.getElementById('phone').value,
            valid = reg.test(phone);
            if (valid) output = "Номер телефона введен правильно!";
            else output = "Номер телефона введен не правильно!";
            return valid;
    }
             
    //Таймер
    let deadline = '2019-04-14';   //дата до которой будет отсчет

    let getTimeRemaning = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()), //время оставшееся от текущей даты
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            if (seconds < 10) {
                seconds ="0" + Math.floor((t/1000) % 60);
            }
            if (minutes < 10) {
                minutes = "0" + Math.floor((t/1000/60) % 60);
            }
            if (hours < 10) {
                hours = "0" + Math.floor((t/(1000*60*60)));
            }

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }
    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaning(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }
    setClock('timer', deadline);

  




    // let inf = document.getElementsByClassName("info")[0],
    //     slider = document.getElementsByClassName("slider")[0],
    //     counter = document.getElementsByClassName("counter")[0],
    //     contact = document.getElementsByClassName("contact")[0];
    // // console.log(contact.getBoundingClientRect().top);
    
    // let li = document.querySelectorAll("li");
   
    // // console.log(li);
    // for (let i = 0; i < li.length; i++) {
    //     li[i].addEventListener('click', function(event) {
    //         if (li[i] == event.target) {
    //             if (i == 0) {
    //                 get(inf);
    //             }
    //             if (i == 1) {
    //                 get(slider);
    //             }
    //             if (i == 2) {
    //                 get(counter);
    //             }
    //             if (i == 3) {
    //                 get(contact);
    //             }
    //         }
    //     }
    // );
    // }
    //  let get = function(a) {
    //     let scr = window.pageYOffset;
    //     let timer;
    //     if (a.getBoundingClientRect().top != 0) {
    //         window.scrollTo(0, scr);
    //         scr = scr + 1;
    //         timer = setTimeout(get(a));
    //     }
    // };
});

 