var product = {};

//Funcion para mostrar las fotos en forma de galeria
function ShowProductGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
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
 //Funcion para cargar los comentarios desde el array
function Showcomments(array) {

    let htmlContentToAppend = "";
    // let span = document.createElement("span");
    // span.classList.add("fa", "fa-star", "checked");

    // Recorro el array e imprimo en pantalla los comentarios
    for (let i = 0; i < array.length; i++) {
        let comment = array[i];
        const scores = array[i].score;

        htmlContentToAppend += `
        <div name="comments" class="comments">
            <div>
                <div class="col-3">
                </div>
                <div class="col">
                    <div >
                        <h4 class="mb-1">`+ comment.user + `</h4> <p>` + comment.dateTime + `</p>
                    </div>
                    <div>
                        <p>`+ comment.description + `</p>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
         </div>
        `

        //Imprimimos las estrellas (puntaje)
        
        for (let c = 0; c < scores; c++) {

            htmlContentToAppend += `
            <span class="fa fa-star checked"></span>
            `
        }

        htmlContentToAppend += `
        <hr class="my-3">
        `

        document.getElementById("commentdiv").innerHTML = htmlContentToAppend;

    }

}

// Funcion para insertar comentarios
const insertCommment = () => {
    let htmlContentToAppend = "";
    let user = document.getElementById("commentuser").value;
    let comment = document.getElementById("boxcomment").value;
    let hoy = new Date(); 
    let score = document.getElementById("numberscore").value;
    let date= hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
    let time = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();


    htmlContentToAppend += `
      <div name="comments" class="comments">
            <div>
                <div class="col-3">
                </div>
                <div class="col">
                    <div >
                        <h4 class="mb-1">`+ user + `</h4> <p>` + date + ` ` + time + `</p>
                    </div>
                    <div>
                        <p>`+ comment + `</p>
                    </div>
                    <div>
                    
                    </div>
                </div>

            </div>
         </div>

`
    for (i = 0; i < score; i++) {
        htmlContentToAppend += `
        <span class="fa fa-star checked"></span>
        `
    }
    document.getElementById("commentdiv").innerHTML += htmlContentToAppend;
}

//Pre-cargo el nombre de usuario en el campo de usuario al ingrear el comentario
const GetNameUser = () => {
    const user = localStorage.getItem("usu");
    document.getElementById("commentuser").value = user;

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            //Almaceno en variasbles las etiquetas necesarias
            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("Cost");
            let productSoldCountHTML = document.getElementById("soldcount");
            let productCategoryHTML = document.getElementById("categoryinfo");

            //Inserto en las etiquetas los datos que preciso
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + " " + product.cost;
            productSoldCountHTML.innerHTML = "Vendidos: " + product.soldCount + " uds.";
            productCategoryHTML.innerHTML = "Categoria: " + product.category;


            //Muestro las imagenes en forma de galería
            ShowProductGallery(product.images);
            GetNameUser();
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj2) {
        if (resultObj2.status === "ok") {
            comments = resultObj2.data;
            let div = document.getElementById("commentdiv");


            Showcomments(comments);

            //Al hacer clicl en el boton enviar, ejecuta la funcion para insertar comentario
            document.getElementById("BtnComment").addEventListener("click", function (){ 
                insertCommment();
            });
        }
    });

});