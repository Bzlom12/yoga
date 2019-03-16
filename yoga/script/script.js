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

    // Модальное окно
    let more = document.querySelectorAll('.description-btn'),
        moreTimer = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

        more.forEach(function() {
        addEventListener('click', function(event) {
            for(let i = 0; i < more.length; i++) {
                if (more[i] == event.target) {
                    overlay.style.display = 'block';
                    more[i].classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                }
                close.addEventListener('click', function() {
                    overlay.style.display = 'none';
                    more[i].classList.remove('more-splash');
                    document.body.style.overflow = '';
                    });
                }   
            });
        });
    moreTimer.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
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
});




    // let inf = document.getElementsByClassName("info");
    // //Scroll
    // let li = document.querySelectorAll("li");
    // // console.log(li);
    // for (let i = 0; i < li.length; i++) {
    //     li[i].addEventListener('click', function(event) {
    //         if (li[0] == event.target) {
    //             let scr = window.pageYOffset;
    //             console.log(scr);
    //             let get =function() {
    //                     let timer;
    //                     if(scr == 0 || scr < 650) {
    //                         scr = scr + 1;
    //                         timer = setTimeout(get());
    //                     } else {
    //                         scr = scr - 1;
    //                         timer = setTimeout(set());
    //                     }
    //             }
    //         }
    //     });
    // }
        //     let scr = window.pageYOffset;
        //     console.log(scr);
        //     console.log(this);
        //     let timer;
        //     if (scr == 0 || scr < 650) {
        //         window.scrollTo(0, scr);
        //         scr++;
        //         // timer = setTimeout(timeInt);
        //     }

    //     // });
    // });

    // let scroll = function() {

    // };

    // scr = window.pageYOffset;
    // console.log(window.pageYOffset); 
    // li1.addEventListener('click', scrollToLi1);
    // li2.addEventListener('click', scrollToLi2);
    // li3.addEventListener('click', scrollToLi3);
    // li4.addEventListener('click', scrollToLi4);
   
    // function scrollToLi1() {
    //     let timer;
    //     if (scr < 650 || scr == 0) {
    //         window.scrollTo(0, scr);
    //         scr = scr + 1;
    //         timer = setTimeout(scrollToLi1);
    //     } else if (scr > 652 || scr != 650) {
    //         window.scrollTo(0, scr);
    //         scr = scr - 1;
    //         timer = setTimeout(scrollToLi1);
    //     }
    // }    
    // function scrollToLi2() {
    //     let timer;
    //     if (scr < 1933 || scr == 0) {
    //         window.scrollTo(0, scr);
    //         scr = scr + 1;
    //         timer = setTimeout(scrollToLi2);
    //     } else if (scr > 1950 || scr != 1933) {
    //         window.scrollTo(0, scr);
    //         scr = scr - 1;
    //         timer = setTimeout(scrollToLi2);
    //     }
    // }
    // function scrollToLi3() {
    //     let timer;
    //     if (scr < 4679 || scr == 0) {
    //         window.scrollTo(0, scr);
    //         scr = scr + 1;
    //         timer = setTimeout(scrollToLi3);
    //     } else if (scr > 4680 || scr != 4679) {
    //         window.scrollTo(0, scr);
    //         scr = scr - 1;
    //         timer = setTimeout(scrollToLi3);
    //     }
    // }
    // function scrollToLi4() {
    //     let timer;
    //     if (scr < 5221 || scr == 0) {
    //         window.scrollTo(0, scr);
    //         scr = scr + 1;
    //         timer = setTimeout(scrollToLi4);
    //     } else if (scr > 5230 || scr != 5221) {
    //         window.scrollTo(0, scr);
    //         scr = scr - 1;
    //         timer = setTimeout(scrollToLi4);
    //     }
    // }




 