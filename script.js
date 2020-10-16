const result = document.getElementById('result');
const copy = document.getElementById('clipboard');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

const uppercaseIncluded = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseIncluded = 'abcdefghijklmnopqrstuvwxyz';
const numbersIncluded = '0123456789';
const symbolsIncluded = '!@#$%^&*()_+';
let selection = '';
let password = '';

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const pw = result.innerText

    if(!pw){return}

    textarea.value = pw;
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand('copy')
    textarea.remove();

})

generate.addEventListener('click', () => {
    selection = '';
    createSelection()
    generatePassword()
    password = ""
})

function createSelection() {
        if(uppercase.checked) {
             selection += uppercaseIncluded;
        }
        if(lowercase.checked){
            selection += lowercaseIncluded;
        }
        if(numbers.checked) {
            selection += numbersIncluded;
        }
        if(symbols.checked){
            selection += symbolsIncluded;
        }
       }

function generatePassword() {
    if(selection === '') {
        result.style.color = "red"
        result.innerHTML = 'Select at least one option'
        return
    }
    for (let c = 0; c < length.value; c++) {
        password += selection[Math.floor(Math.random() * selection.length)]
    }
    result.style.color = "white"
    result.innerHTML = password;
}

