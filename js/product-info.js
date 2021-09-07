var producto = {};

function MonstarProductoGaleria(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let image = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + image + `" alt="">
            </div>
        </div>
        `

        document.getElementById("gallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            producto = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("Precio");
            // let productCountHTML = document.getElementById("productCount");
            // let productCriteriaHTML = document.getElementById("productCriteria");
        
            productNameHTML.innerHTML = producto.name;
            productDescriptionHTML.innerHTML = producto.description;
            productCostHTML.innerHTML = producto.currency +" "+ producto.cost;
            // productCountHTML.innerHTML = category.productCount;
            // productCriteriaHTML.innerHTML = category.productCriteria;

            //Muestro las imagenes en forma de galería
            MonstarProductoGaleria(producto.images);
        }
    });
});