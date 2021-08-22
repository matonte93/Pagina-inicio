
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
    document.getElementById("BtnSubmit").addEventListener("click", loggear);
});