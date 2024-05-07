let value_6 = 0;
let angle_6 = 0;
function rotate_6_wheel_to(v) {
    let rotate_amount = (6 + v - value_6)%6
    value_6 = v
    angle_6 += rotate_amount * -60
    document.getElementById('6-wheel').style.transform = `rotate(${angle_6}deg)`;
}

let value_7 = 0;
let angle_7 = 0;
function rotate_7_wheel_to(v) {
    let rotate_amount = (7 + v - value_7)%7
    value_7 = v
    angle_7 += rotate_amount * -51.42857143
    document.getElementById('7-wheel').style.transform = `rotate(${angle_7}deg)`;
}

let value_11 = 0;
let angle_11 = 0;
function rotate_11_wheel_to(v) {
    let rotate_amount = (11 + v - value_11)%11
    value_11 = v
    angle_11 += rotate_amount * -32.72727272
    document.getElementById('11-wheel').style.transform = `rotate(${angle_11}deg)`;
}

let total = 0;
let unlocked = false;
function rotate_all_wheels(v) {
    if( ! unlocked ) {
        total += v;

        if( total % (6*7*11) == 0) {
            unlocked = true;
        }

        rotate_6_wheel_to(total % 6);
        rotate_7_wheel_to(total % 7);
        rotate_11_wheel_to(total % 11);

        if( total % (6*7*11) == 0) {
            setTimeout(function(){
                alert("You have unlocked the safe!");
            }, 600);
        }
    }
}

document.getElementById('rotate-btn').addEventListener('click', function() {
    rotate_all_wheels(1);
});

document.getElementById('set-rotation-btn').addEventListener('click', function() {
    const inputDegrees = parseInt(document.getElementById('rotation-input').value);
    angle = isNaN(inputDegrees) ? 0 : inputDegrees; // Use 0 if input is not a number

    if (1000 >= angle && angle >= 0) {
        rotate_all_wheels(angle)
    }
});

document.addEventListener('DOMContentLoaded', function() {
    rotate_all_wheels(95)
});