"use strict";

let profileArr;

function saveModify() {

    let email = document.getElementById("inputEmail4").value;
    let name = document.getElementById("inputName").value;
    let lastName = document.getElementById("inputLastName").value;
    let age = document.getElementById("inputAge").value;
    let numberPhone = document.getElementById("inputPhone").value;


    if (email === "") {

        alert("Complete todos los")
    } else if (name === "") {
        alert("Complete todos los")
    } else if (lastName === "") {

        alert("Complete todos los")
    } else if (age === "") {
        alert("Complete todos los")
    } else if (numberPhone === "") {
        alert("Complete todos los")
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

const avatar = () => {

    document.querySelector('#fileInput').addEventListener("change", function () {

        const reader = new FileReader();

        reader.addEventListener("load", () => {

            localStorage.setItem("avatar", reader.result);

            const avatarImg = localStorage.getItem("avatar");
            document.querySelector('#imgPreview').setAttribute("src", avatarImg);

        });
        reader.readAsDataURL(this.files[0]);

    });


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

    avatar();

    if (localStorage.getItem("avatar")) {
        const avatarImg = localStorage.getItem("avatar");
        document.querySelector('#imgPreview').setAttribute("src", avatarImg);
    }

    if (JSON.parse(localStorage.getItem("profile"))) {

        showModify();
        avatar();
    } else {

        completed();

    };

    document.getElementById("btnSave").addEventListener("click", saveModify);

});