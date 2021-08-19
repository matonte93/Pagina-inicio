const login = [];

const loggear = () => {
    const username = document.getElementById("TxtUser").value;
    const password = document.getElementById("TxtPass").value;
    debugger;
    console.log(username, password);
    if (username.trim()==="" || password.trim()==="") {
        alert("Nombre y apellido no deben ser vacíos");
    }else{
        username.value = "";
        password.value = "";
        debugger;
        login.push({ username: username, password: password });
        localStorage.setItem("usuario", JSON.stringify(login));
        window.location.href = "index.html";
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("BtnSubmit").addEventListener("click", loggear);
});