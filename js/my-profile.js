"use strict";

let profileArr;

function saveModify() {

    profileArr = [];

    let email = document.getElementById("inputEmail4").value;
    let name = document.getElementById("inputName").value;
    let lastName = document.getElementById("inputLastName").value;
    let age = document.getElementById("inputAge").value;
    let numberPhone = document.getElementById("inputPhone").value;

    profileArr.push(email, name, lastName, age, numberPhone);
    localStorage.setItem("profile", JSON.stringify(profileArr));

};

function showModify() {

    let dateProfile = JSON.parse(localStorage.getItem("profile"));

    let email = dateProfile[0];
    let name = dateProfile[1];
    let lastName = dateProfile[2];
    let age = dateProfile[3];
    let numberPhone = dateProfile[4];

    document.getElementById("inputEmail4").value = email;
    document.getElementById("inputName").value = name;
    document.getElementById("inputLastName").value = lastName;
    document.getElementById("inputAge").value = age;
    document.getElementById("inputPhone").value = numberPhone;


};

function completed() {

    let htmlToContentAppen = "";

    htmlToContentAppen = `
    <span>* Complete todos los campos</span>
`
    document.getElementById("completed").innerHTML = htmlToContentAppen;
};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    if (JSON.parse(localStorage.getItem("profile"))) {

        showModify();

    } else {

        completed();
        
    };

    document.getElementById("btnSave").addEventListener("click", saveModify);

});