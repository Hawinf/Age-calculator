// INPUT
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');

// OUTPUT
const outYy = document.getElementById('YY');
const outMm = document.getElementById('MM');
const outDd = document.getElementById('DD');

// FORM ELEMENT
const form = document.querySelector('form');

// ADDING THE SUBMIT EVENLISTENER TO FORM
form.addEventListener('submit', handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// VALIDATION USER INPUT
function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if(!i.value) {
            validator = false;
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'this field is required';
        } else if (inputMonth > 12) {
            validator = false;
            inputMonth.style.borderColor = 'red';
            inputMonth.parentElement.querySelector('small').innerText = 'must be valid month';
        } else if (inputDay.value > 31) {
            validator = false;
            inputDay.style.borderColor = 'red';
            inputDay.parentElement.querySelector('small').innerText = 'must be valid day'
        } else {
            validator = true;
        }
    })
    return validator;
}


function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (inputDay.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (inputMonth.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - inputDay.value;
        const m = month - inputMonth.value;
        const y = year - inputYear.value;

        outDd.innerHTML = d;
        outMm.innerHTML = m;
        outYy.innerHTML = y;
    }
}