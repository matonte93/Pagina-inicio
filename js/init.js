const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const CART_INFO_URL2 ="https://japdevdep.github.io/ecommerce-api/cart/654.json";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

//Verificamos y traemos de una url el Json deseado, y verifica su estado.
var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}


//Verificamos que los datos de loggeo existan, sino redirecciona al login
const userOk = () => {
  if (!localStorage.getItem("usu")) {
    window.top.location.href = "login.html";
  } else {
    showUser();
  }
}

//Convertimos la primera letra del nombre de usario a mayus
const PrimeraLetraMayus = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



const showUser = () => {

  let htmlContentToAppend = "";
  const user = localStorage.getItem("usu");

  htmlContentToAppend += `

      <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <a id="usu" class="py-2 d-none d-md-inline-block">${user}</a>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
          <a class="dropdown-item" href="cart.html">Mi Carrito</a>
          <a id="closeSesion" class="dropdown-item" href="#">Cerrar sesión</a>
        </div>
      </div>
`
  const Nav = document.getElementById("Nav");

  Nav.innerHTML += htmlContentToAppend;

  // const a = document.createElement("a");
  // a.className+="py-2 d-none d-md-inline-block";
  // const Node = document.createTextNode(`${user}`);
  // a.appendChild(Node);
  // Nav.appendChild(a);

}

const closeSesion = () => {
  localStorage.removeItem("usu");
  window.location.href = "login.html";
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  userOk();

  document.getElementById("closeSesion").addEventListener("click", function () {
    closeSesion();
  });

});