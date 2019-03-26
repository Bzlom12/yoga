window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    //tabs
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

    // modal window
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

    close.addEventListener('click', () => {
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
        });
        
    //form
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
        let obj = {};

        formData.forEach(function(value, key) {
                obj[key] = value;
        });
        let json = JSON.stringify(obj);
        let request = new XMLHttpRequest();
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

    //Check calk
    let num = document.querySelectorAll('.counter-block-input');

    num.forEach(function(item) {
        let value = item.value;
        
        item.addEventListener("input", function(e) {
        let reg = /[^\d$]/g;
        let value2 = e.target.value;

        if (!value2.match(reg)) {
            item.value = value2;
            console.log("good");
            return false;
        } else {
            console.log("not");
            item.value = value;
            return false;
        }
        });
    }); 
        
    






    //Timer
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
    };
    setClock('timer', deadline);

    //slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        //Второй вариант
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex -1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //Calc
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        k = 1;
    
        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            
            if (restDays.value == '' || personsSum == "" || restDays.value == 0 || personsSum == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = k * total;
            }
        });

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            
            total = (daysSum + personsSum) * 4000;
           
            if (persons.value == '' || daysSum == "") {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = k * total;
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == "" || persons.value == "" || restDays.value == 0 || personsSum == 0) {
                totalValue.innerHTML = 0;
                k = this.options[this.selectedIndex].value;
            } else {
                let a = total;
                k = this.options[this.selectedIndex].value;
                totalValue.innerHTML = a * k;
            }
        });


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

 