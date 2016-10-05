;'use strict';
$(function(){
    $.getJSON("http://www.json-generator.com/api/json/get/bUqmHPelWq?indent=2", function (data) {
        localStorage.setItem('questions', JSON.stringify(data));
    });
});
let test = localStorage.getItem('questions');
test = JSON.parse(test);

let title = 'FrontEnd Quiz';
let btnValue = 'Check';
let quizTemplate = document.getElementById('template').innerHTML;
let html = _.template(quizTemplate)(test);
document.write(html);

let btnTemplate = document.getElementById('button').innerHTML;
let btn = _.template(btnTemplate)();
document.write(btn);

let yourAns = new Array;
let score = 0;
function Engine(test, answer) {
    yourAns[test]=answer
};

let modalWindow = document.getElementById('modal_form');
let overlay = document.getElementById('overlay');

function showModal() {
    modalWindow.style.display = 'block';
    modalWindow.style.opacity = 1;
    overlay.style.display = 'block';
}
function closeModal() {
    modalWindow.style.display = 'none';
    modalWindow.style.opacity = 0;
    overlay.style.display = 'none';
    clearForm("quiz");
}

function Modal(){
    showModal();

    let modalTemplate = document.getElementById('myModal').innerHTML;
    let modal = _.template(modalTemplate)();
    modalWindow.innerHTML = modal;

    yourAns = [];
    score = 0;
};

function clearForm(name) {
    var f = document.forms[name];
    var elements = document.getElementsByTagName('input');
    for(let value of elements) {
        if(value.checked)
            value.checked = false;
    }
};
