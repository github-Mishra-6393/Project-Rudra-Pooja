// book form buttton with class btn
const btn = document.getElementsByClassName('btn');

// form div with id book-form
const form = document.getElementById('book-form');

// boockign form background wit id wrapper
const wraper = document.getElementById('wrapper');
// adding form open in button click
for (let button of btn) {
    button.addEventListener('click', function () {
        wraper.classList.add('active');
    });
}
// form close button
document.getElementById('cancle-form').addEventListener('click', function () {
    wraper.classList.remove('active');

})

// input values
let nameInput, mobileInput, anushthanInput, addressInput;
nameInput = document.getElementById('name');
mobileInput = document.getElementById('contact');
anushthanInput = document.getElementById('puja');
addressInput = document.getElementById('address');

// form validation
let validPuja, validName, validPhone;
validPhone = false;
validPuja = false;
validName = false;
validAddress = false;

nameInput.addEventListener('blur', () => {

    let nameError = document.querySelector('.name-error');
    let reg = /^[A-Za-z]([A-Za-z]){2,10}\s{0,1}([A-Za-z]){0,10}\s{0,1}([A-Za-z]){0,10}$/
    let name = nameInput.value;
    if (reg.test(name)) {
        nameError.innerHTML = '';
        validName = true;
    }
    else {
        nameError.style.display = 'block';
        nameError.innerHTML = 'Please Enter a Valid Name'
        validName = false;
    }
})
mobileInput.addEventListener('blur', () => {

    mobileError = document.querySelector('.phone-error');
    let reg = /^0?([0-9]){10}$/
    let num = mobileInput.value;
    if (reg.test(num)) {
        mobileError.innerHTML = '';
        validPhone = true;
    } else {
        mobileError.innerHTML = 'Mobile number is invalid'
        validPhone = false;
    }
})
anushthanInput.addEventListener('blur', () => {

    let allPuja = ["rudrabhishek", "maha mrityunjay mantra jap", 'maha rudra yagya', 'ati rudra yagay', 'laghu rudra yagya', 'lakshay chandi yagya', 'sahastra chandi yagya', 'sat chandi yagya', 'baglamukhi jap', 'katyayni jap', 'kal sarp shanti', 'kundali nirman aur sampoorn vichar', 'vivah vichar', 'grah shanti', 'mangal dosh nivaran', 'durga saptsati path', 'vastu shanti'];
    pujaError = document.querySelector('.puja-error');
    let pujaLower = anushthanInput.value.toLowerCase();
    if (allPuja.includes(pujaLower)) {
        validPuja = true;
        pujaError.innerHTML = '';
    }
    else {
        pujaError.innerHTML = "Enter a valid Puja";
        validPuja = false;

    }
})
addressInput.addEventListener('blur', () => {

    let addError = document.querySelector('.add-error');
    let gen = /^[0-9a-zA-z]([0-9A-Za-z\s-,]){5,50}$/
    str = addressInput.value;

    if (gen.test(str)){
        validAdd = true;
        addError.innerHTML = '';
    }
    else {
        addError.innerHTML = "Enter a valid Address";
        validAdd = false;

    }
})







//  click event on button with id 'submit-form'
document.getElementById('submit-form').addEventListener('click', submit);
// form submit with Enter key


// submit function
function submit(ev) {
    ev.preventDefault();getComputedStyle;
    if (validName && validPhone && validPuja && validAdd) {
        document.querySelector('.label-input').style.display ='none';
        document.querySelector('.form-confirmation').style.display ='block';

    }
    else {
        alert('Enter Valid details to Submit Form');
    }
}


// form submition notification

