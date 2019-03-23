function modal() {
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
}

module.exports = modal;