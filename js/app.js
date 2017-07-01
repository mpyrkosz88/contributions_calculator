document.addEventListener('DOMContentLoaded', function() {

    var price_val = document.getElementById('price-input');
    var calc_button = document.getElementById('calc_button');
    var checkbox = document.querySelectorAll('.checkbox input');
    var radiobutton = document.querySelectorAll('.radiobutton input');
    var result = document.getElementById('result');

    var sum = 0;
    var mod = 1;
    var rad_mod = 1;
    var price = 0;

    var check_button = function() {
        if ((price_val.value > 99) && (price_val.value < 10001)) {
            calc_button.disabled = false;
            result.innerHTML = "";
        } else {
            calc_button.disabled = true;
            result.innerHTML = "Kwota ubezpieczenia musi się mieścić<br /> między 100 PLN a 10 000 PLN";
        }
    }

    var check_price = function() {
        if ((price_val.value > 99) && (price_val.value < 1001)) {
            price = 20;
        } else if ((price_val.value > 1000) && (price_val.value < 3001)) {
            price = 70;
        } else if ((price_val.value > 3000) && (price_val.value < 6001)) {
            price = 130;
        } else if ((price_val.value > 6000) && (price_val.value < 9001)) {
            price = 180;
        } else if ((price_val.value > 9000) && (price_val.value < 10001)) {
            price = 200;
        }
    }

    for (var i = 0; i < radiobutton.length; i++) {
        radiobutton[i].addEventListener('change', function() {
            check_button();
            if (radiobutton[0].checked) {
                rad_mod = 0.98;
            } else if (radiobutton[2].checked) {
                rad_mod = 1.04;
            } else {
                rad_mod = 1;
            }
        })
    }


// W zasadzie to powinno być przerobione na radiobuttony
    checkbox[0].addEventListener('change', function() {
      result.innerHTML = "";
        if (checkbox[0].checked) {
          mod = 0.95;
          checkbox[1].checked = false;
            // mod = mod / 1.05;
        } else {
          mod = 1
            // mod = mod * 1.05;
        }
    })

    checkbox[1].addEventListener('change', function() {
      result.innerHTML = "";
        if (checkbox[1].checked) {
          mod = 1.08;
          checkbox[0].checked = false;
            // mod = mod * 1.08
        } else {
          mod = 1;
            // mod = mod / 1.08
        }
    })

    price_val.addEventListener('change', check_button);

    calc_button.addEventListener('click', function() {
        check_price();
        sum = Math.ceil(price * mod * rad_mod);
        result.innerHTML = sum + " PLN";
    })

});
