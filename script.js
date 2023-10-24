let firstPage = document.getElementById('first');
let secondPage = document.getElementById('second');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const communication = '';
const text = document.getElementById('text');

function hideFirst(){
    firstPage.style.display = 'none';
}

function show(){
    secondPage.style.display = 'contents'
}

let activeButton = null;

function changeColor(buttonNumber) {
  const currentButton = document.getElementById(`button${buttonNumber}`);

  if (activeButton !== null) {
    activeButton.classList.remove('blue');
  }

  currentButton.classList.add('blue');
  activeButton = currentButton;
}


let form1 = document.getElementById('first');
let form2 = document.getElementById('second');
let form3 = document.getElementById('third');
let next1 = document.getElementById('next1');
let prev1 = document.getElementById('prev1');
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let submit = document.getElementById('submit'); 
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

next1.onclick = function() {
  if (name.value.trim() === ''){
    name.classList.add('empty');
  }
  if(email.value.trim() === '') {
    email.classList.add('empty');
  }
  if(phone.value.trim() === '') {
    phone.classList.add('empty');
  }else if(name.value.trim() != '' && email.value.trim() != '' && phone.value.trim() != '') {
      if(name.classList != null){
        name.classList.remove('empty');
      }
      if(email.classList != null){
        email.classList.remove('empty');
      }
      if(phone.classList != null){
        phone.classList.remove('empty');
      }
        form1.style.left = '-550px';
        form2.style.left = '30px';
        circle2.classList.add('filled');
        circle1.classList.remove('filled');
  }
};

next2.onclick = function() {
  if (address.value.trim() === ''){
    address.classList.add('empty');
  }
  if(city.value.trim() === '') {
    city.classList.add('empty');
  }
  if(state.value.trim() === '') {
    state.classList.add('empty');
  }
  if(zip.value.trim() === '') {
    zip.classList.add('empty');
  }else if(address.value.trim() != '' && city.value.trim() != '' && state.value.trim() != '' && zip.value.trim() != ''){
    if(address.classList != null){
      address.classList.remove('empty');
    }
    if(city.classList != null){
      city.classList.remove('empty');
    }
    if(state.classList != null){
      state.classList.remove('empty');
    }
    if(zip.classList != null){
      zip.classList.remove('empty');
    }
      form2.style.left = '-550px';
      form3.style.left = '30px';
      circle2.classList.remove('filled');
      circle3.classList.add('filled');
  }
};

submit.onclick = function(){
  if(communication.val === ''){
    alert('Please fill in all fields before proceeding.');
  }else{
    text.innerHTML = 'Successfull';
  }
} 


prev1.onclick = function(){
  form1.style.left = '30px';
  form2.style.left = '550px';
  circle2.classList.remove('filled');
  circle1.classList.add('filled');
}
prev2.onclick = function(){
  form2.style.left = '30px';
  form3.style.left = '550px';
  circle2.classList.add('filled');
  circle3.classList.remove('filled');
}
