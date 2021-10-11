let productosArray = [];
let filtro = "ascen";
let campo = "cost";
var minC = undefined;
var maxC = undefined;
const text = document.querySelector('#contents');

//Funcion para recorrer e imprimir en pantalla un array
function MostrarProductos(array) {
    const body = document.getElementById("containerprin");
    body.innerHTML = "";
    let htmlContentToAppend = "";
    for (let a = 0; a < array.length; a++) {
        let productos = array[a];

        if (((minC == undefined) || (minC != undefined && parseInt(productos.cost) >= minC)) &&
            ((maxC == undefined) || (maxC != undefined && parseInt(productos.cost) <= maxC))) {

            htmlContentToAppend += `
        <a href="product-info.html" id="pro">
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + productos.imgSrc + `" alt="` + productos.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ productos.name + `</h4>
                    </div>
                </div>
                <small class="text-muted">` + productos.description + `</small>
                
            </div>
            <h4 id="precio">` + productos.currency + " " + productos.cost + ` </h4>
        </div>
        </a>
        `
            body.innerHTML = htmlContentToAppend;
        }
    }
}

//Funcion para ordenar las arrays antes de mostrarlas usando sort
const OrdenarDatosyMostrar = (array, campo, filtro) => {

    if (filtro === "ascen")
        array.sort((a, b) => {
            if (a[campo] > b[campo]) return 1;
            if (a[campo] < b[campo]) return -1;
            return 0;
        });
    else
        array.sort((a, b) => {
            if (a[campo] > b[campo]) return -1;
            if (a[campo] < b[campo]) return 1;
            return 0;
        });
    MostrarProductos(array);
};

const search = (array) => {

    
    const body = document.getElementById("containerprin");
    body.innerHTML = "";
    let htmlContentToAppend = "";
    let content = text.value.toLowerCase();
   
    for (product of array) {
        let nomb = product.name.toLowerCase();
        if (nomb.indexOf(content) !== -1) {

            htmlContentToAppend += `
            
            <a href="product-info.html" id="pro">
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name + `</h4>
                        </div>
                    </div>
                    <small class="text-muted">` + product.description + `</small>
                    
                </div>
                <h4 id="precio">` + product.currency + " " + product.cost + ` </h4>
            </div>
            </a>
            `
            body.innerHTML = htmlContentToAppend;

        }

    }

    if(body.innerHTML === ""){

            htmlContentToAppend += `
            <br>
            <br>
            <h2 class="text-center"> Sin coincidencias...</h2>
            `
            
            body.innerHTML = htmlContentToAppend;
    }

}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productosArray = resultObj.data;
            hideSpinner();
            //Muestro las categorías ordenadas
            
            OrdenarDatosyMostrar(productosArray, campo, filtro);
        }
    });

    document.getElementById("contents").addEventListener("keyup", () => {
        search(productosArray);
    });

    //Agregos los eventos correspondientes para darle funcionalidad a los botones de filtrado
    document.getElementById("ascen").addEventListener("click", () => {
        campo = "cost";
        filtro = "ascen";
        OrdenarDatosyMostrar(productosArray, campo, filtro);

    });

    document.getElementById("desce").addEventListener("click", () => {
        campo = "cost";
        filtro = "desce";
        OrdenarDatosyMostrar(productosArray, campo, filtro);

    });

    document.getElementById("relev").addEventListener("click", () => {
        filtro = "desce";
        campo = "soldCount";
        OrdenarDatosyMostrar(productosArray, campo, filtro);

    });

    document.getElementById("btnlimpiar").addEventListener("click", function () {
        document.getElementById("minimo").value = "";
        document.getElementById("maximo").value = "";

        minC = undefined;
        maxC = undefined;

        MostrarProductos(productosArray);
    });

    document.getElementById("btnfiltrar").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minC = document.getElementById("minimo").value;
        maxC = document.getElementById("maximo").value;

        if ((minC != undefined) && (minC != "") >= 0) {
            minC = minC;
        } else {
            minC = undefined;
        }

        if ((maxC != undefined) && (maxC != "") >= 0) {
            maxC = maxC;
        } else {
            maxC = undefined;
        }

        MostrarProductos(productosArray);
    });

});