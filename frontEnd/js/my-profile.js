"use strict";

let profileArr;

function saveModify() {

    let email = document.getElementById("inputEmail4").value;
    let name = document.getElementById("inputName").value;
    let lastName = document.getElementById("inputLastName").value;
    let age = document.getElementById("inputAge").value;
    let numberPhone = document.getElementById("inputPhone").value;


    if (email === "") {


    } else if (name === "") {

    } else if (lastName === "") {


    } else if (age === "") {

    } else if (numberPhone === "") {

    } else {

        profileArr = {

            email: `${email}`,
            name: `${name}`,
            lastName: `${lastName}`,
            age: `${age}`,
            numberPhone: `${numberPhone}`
        };

        localStorage.setItem("profile", JSON.stringify(profileArr));

        Swal.fire({
            title: 'Éxito!',
            text: 'Se han guardado los datos correctamente!',
            icon: 'success',
            confirmButtonText: 'Ok',
            width: '20%',
            // timer: 5000,
            // backdrop: true,
            // timerProgressBar: true,  
            // toast: true,
            position: 'top'
        });

    }


};

function showModify() {

    let dateProfile = JSON.parse(localStorage.getItem("profile"));

    let email = dateProfile.email;
    let name = dateProfile.name;
    let lastName = dateProfile.lastName;
    let age = dateProfile.age;
    let numberPhone = dateProfile.numberPhone;


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