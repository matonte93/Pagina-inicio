var product = {};

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

function Showcomments(array) {

    let htmlContentToAppend = "";
    let span = document.createElement("span");
    let div = document.getElementById("score");
    span.classList.add("fa", "fa-star", "checked");


    for (let i = 0; i < array.length; i++) {
        let comment = array[i];
        const scores = array[i].score;
        console.log(scores);

        htmlContentToAppend += `
        <div name="comments" class="list-group-item list-group-item-action">
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

        for (let c = 0; c <= scores; c++) {
            debugger;
            div.appendChild(span);

        }

        document.getElementById("commentdiv").innerHTML = htmlContentToAppend;


    }

}

// const GetNameUser = () => {
//     const user = localStorage.getItem("usu");
//     const Text = document.getElementById("commentuser");

// }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("Cost");
            let productSoldCountHTML = document.getElementById("soldcount");
            let productCategoryHTML = document.getElementById("categoryinfo");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + " " + product.cost;
            productSoldCountHTML.innerHTML = "Vendidos: " + product.soldCount + " uds.";
            productCategoryHTML.innerHTML = "Categoria: " + product.category;


            //Muestro las imagenes en forma de galería
            ShowProductGallery(product.images);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj2) {
        if (resultObj2.status === "ok") {
            comments = resultObj2.data;


            Showcomments(comments);
        }
    });

});