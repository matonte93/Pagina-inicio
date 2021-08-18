//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const login = [];

const loggear = () => {
    const username = document.getElementById("TxtUser").value;
    const password = document.getElementById("TxtPass").value;
    debugger;
    console.log(username, password);
    if (username && password) {
        document.getElementById("TxtUser").value = "";
        document.getElementById("TxtPass").value = "";
        debugger;
        login.push({ user: user, pass: pass });

        localStorage.setItem("usuario", JSON.stringify(login));
        window.open = ("index.html", "Loggear");
    } else {
        alert("Nombre y apellido no deben ser vacíos");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("BtnSubmit").addEventListener("click", loggear);
});