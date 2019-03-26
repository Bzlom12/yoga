function calc() {
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

    //check calc
    let num = document.querySelectorAll('.counter-block-input');

    num.forEach(function(item) {
        let value = item.value;
        
        item.addEventListener("input", function(e) {
            let reg = /[^\d$]/g;
            let value2 = e.target.value;

            if (!value2.match(reg)) {
                item.value = value2;
                return false;
            } else {
                item.value = value;
                return false;
            }
        });
    }); 
}

module.exports = calc;