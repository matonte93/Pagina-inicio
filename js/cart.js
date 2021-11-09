"use strict";

let cartProducts = [];

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
                                <td> <input type="number" id="numbercount" value="${products.count}" step="1" max="20" min="1"> </td>
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
    <option value="0.05">Standar</option>
     <option value="0.07">Express</option>
    <option value="0.15">Premium</option>
    </select>
    
    <br>
    <br>
    <label id="country"><strong>Pais: </strong><input type="text" id="countryinput" style="width : 90px" requiered></label>
    <br>
    <label id="street"><strong>Calle: </strong><input type="text" id="streetinput" style="width : 90px" requiered></label>
    <br>
    <label id="numberHouse"><strong>Número: </strong><input type="text" id="numberinput" style="width : 90px" requiered></label>
    <br>
    <label id="corner"><strong>Esquina: </strong><input type="text" id="cornerinput" style="width : 90px" requiered></label>
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

        document.getElementById("numberHouse").value = valueBankNumber.replace(/\s/g, "")
        .replace(/\D/g, "")
        .trim(); 

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

        document.getElementById("cardName").addEventListener("keyup", (e) =>{

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
        <label><strong>Banco</strong></label>
        <input type="text" id="bankName" maxlength="12" autocomplete="off" requiered> 
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

//Le damos funcionalidad al boton Success del modal
const btnModalOk = () => {

    let option1 = document.getElementById("credit");
    let option2 = document.getElementById("bank");

    if (option1.checked) {

        let cardNumber = document.getElementById("cardNumber").value;
        let cardName = document.getElementById("cardName").value;
        let selectMes = document.getElementById("selectMes").value;
        let selectYear = document.getElementById("selectYear").value;
        let ccv = document.getElementById("ccv").value;

        if ((cardNumber === "" || cardNumber.length < 19) || cardName === "" || selectMes === "0" || selectYear === "0" || (ccv === "" || ccv.length < 3)) {
            alert("Campos vacíos y/o inválidos!")
        }else{
            alert("Funciona!")
        }

    } else if (option2.checked) {

        let bankNumber = document.getElementById("bankNumber").value;
        let bankName = document.getElementById("bankName").value;

        if ((bankNumber === "" || bankNumber.length < 9 ) || bankName === "") {
            alert("Porfavor complete todos los campos!")
        }else{

            alert("Funciona")
        }

    }else{

        alert("Selecciones metodo de pago");
    }

}

//Le damos funcionalidad al botón de comprar
const purchBtn = () => {

    let delivery = document.getElementById("select_delivery").value;
    let country = document.getElementById("countryinput").value;
    let street = document.getElementById("streetinput").value;
    let numberHouse = document.getElementById("numberinput").value;
    let corner = document.getElementById("cornerinput").value;


    if (delivery === "0" || street === "" || country === "" || numberHouse === "" || corner === "") {
        alert("Porfavor rellene todos los campos");
    } else {
        alert("Gracias por su compra, se le enviara un correo a la brevedad");
        document.getElementById("send").reset();
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

        document.getElementById("numbercount").addEventListener("click", () => {

            cartTotal(cartProducts);

        })

        document.getElementById("select_delivery").addEventListener("click", () => {

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