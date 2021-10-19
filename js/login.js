

// Creamos la funciion loggear donde verificamos que los datos ingresados no estan vacios, y de no ser el caso limpia los compas y guarda en el local
//localstorage el usuaio que a la vez le muestra un mensaje de bienvenida
const loggear = () => {
    const username = document.getElementById("TxtUser").value;
    const password = document.getElementById("TxtPass").value;
    if (username === "" || password === "") {
        alert("Nombre y apellido no deben ser vacíos");
    } else {
        username.value = "";
        password.value = "";
        localStorage.setItem("usu", username);
        alert("Bienvenido " + username);
        window.location.href = "index.html";
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", () => {
    
    //Asociamos un evento al boton de loggear para que ejecute la funcion al darle click
    document.getElementById("BtnSubmit").addEventListener("click", loggear);
    
});