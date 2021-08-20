var productosArray = [];

function MostrarProductos(array){

    let htmlContentToAppend = "";
    for(let a = 0; a < array.length; a++){
        let productos = array[a];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + productos.imgSrc + `" alt="` + productos.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ productos.name+`</h4>
                    </div>
                </div>
                <small class="text-muted">` + productos.description+ `</small>
                
            </div>
            <h4 id="precio">` +productos.currency+" "+productos.cost+ ` </h4>
        </div>
        `

        document.getElementById("containerprin").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productosArray = resultObj.data;
            hideSpinner();
            //Muestro las categorías ordenadas
            MostrarProductos(productosArray);
        }
    });

});