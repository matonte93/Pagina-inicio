
var product = {};

//Funcion para mostrar las fotos en forma de galeria
function showProductGallery(array) {

    let htmlContentToAppend =+ "";

    for (let i = 1; i < array.length; i++) {
        
        let image = array[i];

        htmlContentToAppend = `
    
    <div class="carousel-item">
      <img src="${image}" class="d-block w-100" alt="...">
    </div>
    
    `
        // for (let i = 0; i < array.length; i++) {
        //     let image = array[i];

        //     htmlContentToAppend += `
        //     <div class="col-lg-3 col-md-4 col-6">
        //         <div class="d-block mb-4 h-100">
        //             <img class="img-fluid img-thumbnail" src="` + image + `" alt="">
        //         </div>
        //     </div>
        //     `

        document.getElementById("gallery").innerHTML += htmlContentToAppend;
        // }

    }
}

//     htmlContentToAppend += `

//     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>

//     `



//Funcion para cargar los comentarios desde el array
function showComments(array) {

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
    let today = new Date();
    let score = document.getElementById("numberscore").value;
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    document.getElementById("commentuser").value = "";
    document.getElementById("boxcomment").value = "";

    if (user === "" || comment === "") {

        Swal.fire({
            title: 'Atenci??n!',
            text: 'Campos Vac??os',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });


    } else {
        htmlContentToAppend += `
      <div id="newComment" tabindex="-1" name="comments" class="comments">
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

        htmlContentToAppend += `
    <hr class="my-3">
    `
        document.getElementById("commentdiv").innerHTML += htmlContentToAppend;
        
        Swal.fire({
            title: '??xito!',
            text: 'Comentario ingresado con ??xito!',
            icon: 'success',
            confirmButtonText: 'Ok',
            width: '30%',
            timer: 3000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'center'
        });

        document.getElementById("newComment").scrollIntoView();
    }


}

//Pre-cargo el nombre de usuario en el campo de usuario al ingrear el comentario
const getNameUser = () => {

    const user = localStorage.getItem("usu");
    document.getElementById("commentuser").value = user;

}

const relatedProduct = (object, array) => {

    htmlContentToAppend = "";

    for (i = 0; i < object.relatedProducts.length; i++) {

        const related = object.relatedProducts[i];
        let arr = array[related];
        htmlContentToAppend += `
        
        <div class="card">
        <a href="#" class="list-group-item" id="prodinf">
            <img src="` + arr.imgSrc + `" class="card-img-top" alt="...">
        <div class="card-body">
        
         <h5 class="card-title">` + arr.name + `</h5>
             <p class="card-text">` + arr.description + `</p>
          </div>
        <div class="cardFoot">
         <p id="costCard">` + arr.currency + ` ` + arr.cost + `</p>
         <small class="text-muted">Vendidos: ` + arr.soldCount + ` </small>
         </div>
         </a>
        </div>
        
        `
    }

    document.getElementById("card").innerHTML += htmlContentToAppend;
}

//Funci??n que se ejecuta una vez que se haya lanzado el evento de
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
            productSoldCountHTML.innerHTML = "Vendidos: " + product.soldCount + " unid.";
            productCategoryHTML.innerHTML = "Categoria: " + product.category;


            //Muestro las imagenes en forma de galer??a
            showProductGallery(product.images);
            getNameUser();
        };

        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj2) {
            if (resultObj2.status === "ok") {

                comments = resultObj2.data;

                showComments(comments);

                //Al hacer clicl en el boton enviar, ejecuta la funcion para insertar comentario
                document.getElementById("BtnComment").addEventListener("click", function () {

                    insertCommment();
                    getNameUser();
                    // document.getElementById("newComment").className += "target";
                    // document.getElementById("").focus();
                });

            }

            getJSONData(PRODUCTS_URL).then(function (resultObj3) {
                if (resultObj3.status === "ok") {
                    item = resultObj3.data;

                    relatedProduct(product, item);


                }
            });


        });

    });



});