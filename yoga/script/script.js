window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let  tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
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
    //Таймер
    let deadline = '2019-03-14';   //дата до которой будет отсчет

    function getTimeRemaning(endtime) {
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
    function setClock (id, endtime) {
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

        

    let li1 = document.getElementsByTagName('li')[0],
        li2 = document.getElementsByTagName('li')[1],
        li3 = document.getElementsByTagName('li')[2],
        li4 = document.getElementsByTagName('li')[3],
        scr = window.pageYOffset;
        console.log(window.pageYOffset); 

    li1.addEventListener('click', scrollToLi1);
    li2.addEventListener('click', scrollToLi2);
    li3.addEventListener('click', scrollToLi3);
    li4.addEventListener('click', scrollToLi4);

    function scrollToLi1() {
        let timer;
        if (scr < 650 || scr == 0) {
            window.scrollTo(0, scr);
            scr = scr + 1;
            timer = setTimeout(scrollToLi1);
        } else if (scr > 652 || scr != 650) {
            window.scrollTo(0, scr);
            scr = scr - 1;
            timer = setTimeout(scrollToLi1);
        }
    }    
    function scrollToLi2() {
        let timer;
        if (scr < 1933 || scr == 0) {
            window.scrollTo(0, scr);
            scr = scr + 1;
            timer = setTimeout(scrollToLi2);
        } else if (scr > 1950 || scr != 1933) {
            window.scrollTo(0, scr);
            scr = scr - 1;
            timer = setTimeout(scrollToLi2);
        }
    }
    function scrollToLi3() {
        let timer;
        if (scr < 4679 || scr == 0) {
            window.scrollTo(0, scr);
            scr = scr + 1;
            timer = setTimeout(scrollToLi3);
        } else if (scr > 4680 || scr != 4679) {
            window.scrollTo(0, scr);
            scr = scr - 1;
            timer = setTimeout(scrollToLi3);
        }
    }
    function scrollToLi4() {
        let timer;
        if (scr < 5221 || scr == 0) {
            window.scrollTo(0, scr);
            scr = scr + 1;
            timer = setTimeout(scrollToLi4);
        } else if (scr > 5230 || scr != 5221) {
            window.scrollTo(0, scr);
            scr = scr - 1;
            timer = setTimeout(scrollToLi4);
        }
    }   
});

 