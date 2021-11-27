"use strict";

let cartProducts = [];
let info = true;
let info2 = false;

//Carrito
const printCart = (objectCart) => {

    const body = document.getElementById("fluid");
    let htmltocontentAppen = "";

    for (let products of objectCart.articles) {

        htmltocontentAppen += `
        
       
    <div class="row">
        <aside class="col-lg-9">
            <div class="card back">
                <div class="table-responsive">
                    <table class="table table-borderless table-shopping-cart">
                        <thead class="text-muted">
                            <tr class="small text-uppercase">
                                <th scope="col">Productos</th>
                                <th scope="col" width="120">Cantidad</th>
                                <th scope="col" width="120">Precio Unit.</th>
                                <th scope="col" class="d-none d-md-block" width="200">Precio Total Unit.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <figure class="itemside align-items-center">
                                        <div class="aside"><img src="${products.src}" class="img-sm"></div>
                                        <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">${products.name}</a>
                                            <p class="text-muted small">Vendidos: ${products.count}</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td> <input type="number" id="numbercount" value="${products.count}" step="1" max="20" min="1" pattern="^[0-9]+"> </td>
                                <td>
                                    <div class="price-wrap"> <var class="price">${products.currency} ${products.unitCost}</var> </div>
                                </td>
                                <td>
                                <label id="total-unit">$ </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </aside>
        <aside class="col-lg-3 back">
            <div class="card mb-3">
                <div style="padding-bottom : 0%" class="card-body">
              
            
                    
    `

    }

    htmltocontentAppen += `

    <div class="form-group" > 
    
    <form id="send">
    <label for="pet-select"><strong>Seleccionar metodo de envio:</strong></label>

    <select name="delivery" id="select_delivery" requiered>
    <option value="0" disabled selected>Ingresar opción</option>
    <option value="0.05">Standar (12-15 días)</option>
     <option value="0.07">Express (5-8 días)</option>
    <option value="0.15">Premium (2-5 días)</option>
    </select>
    
    <br>
    <br>
    <label id="country"><strong>Pais: </strong><input type="text" id="countryinput" style="width : 90px" maxlength="15" requiered></label>
    <br>
    <label id="street"><strong>Calle: </strong><input type="text" id="streetinput" style="width : 90px" maxlength="15" requiered></label>
    <br>
    <label id="numberHouse"><strong>Número: </strong><input type="text" id="numberInput" style="width : 90px" maxlength="6" requiered></label>
    <br>
    <label id="corner"><strong>Esquina: </strong><input type="text" id="cornerinput" style="width : 90px" maxlength="15" requiered></label>
  </div>
  
  </form>
  
        <hr>
        <div id="metodoPurch">
    
        <button class="btn btn-success" data-toggle="modal" data-target="#myModal">Metodo de pago</button>
        
        </div>
    </div>



<div class="card">
    <div style="padding-top : 0%" class="card-body">
    <hr>
        <dl class="dlist-align">
            <dt>SubTotal: </dt>
            <dd class="text-right ml-3"><label id="subTotal"> </label></dd>
        </dl>
        <dl class="dlist-align">
            <dt>Envio:</dt>
            <dd class="text-right ml-3"><label id="delivery">$ 0.00 </label></dd>
        </dl>
        <dl class="dlist-align">
            <dt>Total:</dt>
            <dd class="text-right text-dark b ml-3"><strong><label id="Total">$ 0.00</label></strong></dd>
        </dl>
         <button id="purchBtn" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Comprar</button>
    </div>
</div>
</aside>

 
`

    body.innerHTML = htmltocontentAppen;

    document.getElementById("numberHouse").addEventListener("keyup", (e) => {

        let valueBankNumber = e.target.value;

        document.getElementById("numberInput").value = valueBankNumber.replace(/\s/g, "")
            .replace(/\D/g, "")
            .trim();

    });

    document.getElementById("countryinput").addEventListener("keyup", (e) => {

        let valueCountryInput = e.target.value;
        document.getElementById("countryinput").value = valueCountryInput
            .replace(/[0-9]/g, "");
    });

}

//Calculo tanto el sub total, como el envio y el total
const cartTotal = (products) => {

    let count = document.getElementById("numbercount").value;
    let totalLabel = document.getElementById("Total");
    let subTotal = document.getElementById("subTotal");

    for (let object of products.articles) {
        let unitCost = object.unitCost;

        let send = document.getElementById("delivery");
        let totalunit = document.getElementById("total-unit");

        //Aca calculamos el total del las unidades que lleva de ese producto
        let subTotalCost = count * unitCost;
        totalunit.innerHTML = "$" + subTotalCost;

        //Calculamos envio 
        let delivery = document.getElementById("select_delivery").value;
        let costDelivery = delivery * subTotalCost;

        let total = subTotalCost + costDelivery;

        send.innerHTML = "$ " + costDelivery.toFixed(2);
        subTotal.innerHTML = "$ " + subTotalCost;
        totalLabel.innerHTML = "$ " + total;

    }
}

//Le otorgo funcionalidad al modal de metodo de pago
const methodPurch = () => {


    let htmltocontentAppen = "";
    let methodDiv = document.getElementById("infoPurch");
    let option1 = document.getElementById("credit");
    let option2 = document.getElementById("bank");

    if (option1.checked) {


        methodDiv.innerHTML = "";
        htmltocontentAppen += `
        
        <hr>
        <label><strong>N° Tarjeta: </strong></label>
        <input type="text" id="cardNumber" maxlength="19">
        <br>
        <label><strong>Nombre Titular: </strong></label>
        <input type="text" id="cardName" maxlength="19" autocomplete="off">
        <br>

        <label><strong>Apellidos: </strong></label>
        <input type="text" id="cardLastName" maxlength="19" autocomplete="off">
        <br>
    
        <label style="text-decoration: solid"><strong>Vencimiento: </strong></label>
        
        <div class="mounthYear">
        <label>Mes</label>
        
        <select name="mes" id="selectMes">
        <option value="0" disabled selected>Mes</option>
        </select>
        
        <label style="">Año</label>
        
        <select name="year" id="selectYear">
        <option value="0" disabled selected>Año</option>
        </select>

        </div>
        
        <div class="ccv">
        <label><strong>CCV: </strong></label>
        <input style="width: 15%" type="text" id="ccv" maxlength="3" autocomplete="off">
        </div>
        <hr>
        `
        methodDiv.innerHTML = htmltocontentAppen;

        document.getElementById("cardNumber").addEventListener("keyup", (e) => {

            let valueCardNumber = e.target.value;

            document.getElementById("cardNumber").value = valueCardNumber.replace(/\s/g, "")
                .replace(/\D/g, "")
                .replace(/([0-9]{4})/g, "$1 ")
                .trim();

        });

        document.getElementById("cardName").addEventListener("keyup", (e) => {

            let valueCardName = e.target.value;
            document.getElementById("cardName").value = valueCardName
                .replace(/[0-9]/g, "");
        });

        document.getElementById("ccv").addEventListener("keyup", (e) => {

            let valueCCV = e.target.value;

            document.getElementById("ccv").value = valueCCV.replace(/\s/g, "")
                .replace(/\D/g, "")
                .trim();

        });

        years();
        mounths();

    } else if (option2.checked) {

        methodDiv.innerHTML = "";
        htmltocontentAppen += `

        <div class="bankTrans">
        <hr>
        <label><strong>Nro. de Cuenta: </strong></label>
        <input type="text" id="bankNumber" maxlength="12" autocomplete="off" requiered> 
        <br>
        <label><strong>Nombre Banco:</strong></label>
        <input type="text" id="bankName" maxlength="12" autocomplete="off" requiered> 
        </div>
        <label><strong>N° de sucursal;</strong></label>
        <input style="width: 10%" type="text" id="branchNumber" maxlength="4" autocomplete="off" requiered> 
        </div>
        <hr>
        `
        methodDiv.innerHTML = htmltocontentAppen;

        document.getElementById("bankNumber").addEventListener("keyup", (e) => {

            let valueBankNumber = e.target.value;

            document.getElementById("bankNumber").value = valueBankNumber.replace(/\s/g, "")
                .replace(/\D/g, "")
                .trim();

        });

        document.getElementById("branchNumber").addEventListener("keyup", (e) => {

            let valueBranch = e.target.value;

            document.getElementById("branchNumber").value = valueBranch.replace(/\s/g, "")
                .replace(/\D/g, "")
                .trim();

        });
    }

}

//Año de vencimiento de tarjeta
const years = () => {

    const yearReal = new Date().getFullYear();
    for (let i = yearReal; i <= yearReal + 8; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerText = i;
        document.getElementById("selectYear").appendChild(option);
    }

}

//Mes de vencimiento de tarjeta
const mounths = () => {

    for (let i = 1; i <= 12; i++) {

        let option = document.createElement("option");
        option.value = i;
        option.innerText = i;
        document.getElementById("selectMes").appendChild(option);

    }
}

const validationDelivery = () => {

    let delivery = document.getElementById("select_delivery").value;
    let country = document.getElementById("countryinput").value;
    let street = document.getElementById("streetinput").value;
    let numberHouse = document.getElementById("numberInput").value;
    let corner = document.getElementById("cornerinput").value;

    if (delivery === "0") {

        Swal.fire({
            title: 'Atención!',
            text: 'Porfavor selecciones metodo de envío!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("select_delivery").focus();
        info = false;

    } else if (country === "") {

        Swal.fire({
            title: 'Atención!',
            text: 'Ingrese país!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("countryinput").focus();
        info = false;

    } else if (street === "") {

        Swal.fire({
            title: 'Atención!',
            text: 'Ingrese calle del destino!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("streetinput").focus();
        info = false;

    } else if (numberHouse === "") {

        Swal.fire({
            title: 'Atención!',
            text: 'Ingrese número de casa/apto.!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("numberinput").focus();
        info = false;

    } else if (corner === "") {

        Swal.fire({
            title: 'Atención!',
            text: 'Ingrese esquina!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("cornerinput").focus();
        info = false;

    } else {

        let count = document.getElementById("numbercount").value;

        if (count != 0) {

            Swal.fire({
                title: 'Éxito!',
                text: 'Gracias por su compra, se le enviara un correo a la brevedad!',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                width: '40%'
            });

            document.getElementById("send").reset();
            document.getElementById("formPurch").reset();
            document.getElementById("infoPurch").innerHTML = "";
            
        }else{

            Swal.fire({
                title: 'Atención!',
                text: 'La cantidad de los productos no puede ser nula!',
                icon: 'warning',
                confirmButtonText: 'Ok',
                // width: '20%',
                timer: 2000,
                // backdrop: true,
                // timerProgressBar: true,  
                toast: true,
                position: 'top'
            });

        }
    }

}

const validationCard = () => {


    var expRegLastName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    let cardNumber = document.getElementById("cardNumber").value;
    let cardName = document.getElementById("cardName").value;
    let cardLastName = document.getElementById("cardLastName").value;
    let selectMes = document.getElementById("selectMes").value;
    let selectYear = document.getElementById("selectYear").value;
    let ccv = document.getElementById("ccv").value;

    if ((cardNumber === "" || cardNumber.length < 19)) {

        Swal.fire({
            title: 'Atención!',
            text: 'Número de tarjeta inválido!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("cardNumber").focus();
        info = false;
    } else if (cardName === "") {

        Swal.fire({
            title: 'Atención!',
            text: 'Nombre de tarjeta inválido!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("cardName").focus();
        info = false;
    } else if (cardLastName === "" || !expRegLastName.exec(cardLastName)) {

        Swal.fire({
            title: 'Atención!',
            text: 'Apellido/s de tarjeta inválido!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("cardLastName").focus();
        info = false;
    } else if (selectMes === "0") {

        Swal.fire({
            title: 'Atención!',
            text: 'Seleccione mes de vencimiento!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        info = false;
        document.getElementById("selectMes").focus();
    } else if (selectYear === "0") {

        Swal.fire({
            title: 'Atención!',
            text: 'Seleccione año de vencimiento!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });


        document.getElementById("selectYear").focus();
        info = false;

    } else if (ccv === "" || ccv.length < 3) {

        Swal.fire({
            title: 'Atención!',
            text: 'CCV Inválido!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("ccv").focus();
        info = false;

    } else if (info2 === false) {

        validationDelivery();

    }
}

const validationBank = () => {


    let bankNumber = document.getElementById("bankNumber").value;
    let bankName = document.getElementById("bankName").value;
    let branchNumber = document.getElementById("branchNumber").value;

    if ((bankNumber === "" || bankNumber.length < 9)) {

        Swal.fire({
            title: 'Atención!',
            text: 'Porfavor ingrese número de cuenta válido!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("bankNumber").focus();
        info = false;
    } else if (bankName === "" || bankName.length <= 4) {

        Swal.fire({
            title: 'Atención!',
            text: 'Porfavor ingrese el nombre del banco!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("bankName").focus();
        info = false;
    } else if (branchNumber === "") {

        Swal.fire({
            title: 'Atención!',
            text: 'Porfavor ingrese número de sucursal!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            // backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

        document.getElementById("branchNumber").focus();
        info = false;

    } else if (info2 === false) {

        validationDelivery();

    }

}
//Le damos funcionalidad al boton Success del modal
const btnModalOk = () => {

    info = true;
    let option1 = document.getElementById("credit");
    let option2 = document.getElementById("bank");


    if (option1.checked) {

        info2 = true;
        validationCard();

        if (info) {
            $('#myModal').modal('toggle');

        }

    } else if (option2.checked) {

        info2 = true;

        validationBank();

        if (info) {

            $('#myModal').modal('toggle');

        }

    } else {

        Swal.fire({
            title: 'Atención!',
            text: 'Elija metodo de pago!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });

    }


}

//Le damos funcionalidad al botón de comprar
const purchBtn = () => {

    info = true;
    info2 = false;
    let option1 = document.getElementById("credit");
    let option2 = document.getElementById("bank");


    if (!option1.checked && !option2.checked) {
        Swal.fire({
            title: 'Atención!',
            text: 'Elija metodo de pago!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            // width: '20%',
            timer: 2000,
            backdrop: true,
            // timerProgressBar: true,  
            toast: true,
            position: 'top'
        });


    } else if (option1.checked) {

        validationCard();


    } else if (option2.checked) {

        validationBank();

    }

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cartProducts = resultObj.data;
            hideSpinner();
            printCart(cartProducts);

            cartTotal(cartProducts)
            methodPurch();

        }

        document.getElementById("numbercount").addEventListener("change", () => {

            cartTotal(cartProducts);

        })

        document.getElementById("select_delivery").addEventListener("change", () => {

            cartTotal(cartProducts);
        })


        document.getElementById("formPurch").addEventListener("change", () => {

            methodPurch();

        })

        document.getElementById("purchBtn").addEventListener("click", () => {

            purchBtn();

        })

        document.getElementById("successBtn").addEventListener("click", () => {

            btnModalOk();

        })


    });



});