
const printCart = (array) => {
    const body = document.getElementById("cont-prin");
    let htmltocontentAppen = "";


    for (products of array.articles) {

        htmltocontentAppen += `
        <div class="container-fluid">
    <div class="row">
        <aside class="col-lg-9">
            <div class="card">
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
                                <td> <input type="number" id="numbercount" value="1" max="20" min="1"> </td>
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
        <aside class="col-lg-3">
            <div class="card mb-3">
                <div class="card-body">
              
            <form>
                    
            <div class="form-group" > 
                        
                <label for="pet-select"><strong>Seleccionar metodo de envio:</strong></label>

                <select name="delivery" id="select_delivery" requiered>
                <option value="0" disabled selected>Ingresar opción</option>
                <option value="0.05">Standar</option>
                 <option value="0.07">Express</option>
                <option value="0.15">Premium</option>
                </select>
                <br>
                <br>
                <label id="country"><strong>Pais: </strong><input type="text" id="countryinput" style="width : 90px"></label>
                <br>
                <label id="street"><strong>Calle: </strong><input type="text" id="streetinput" style="width : 90px"></label>
                <br>
                <label id="numberhouse"><strong>Número: </strong><input type="text" id="numberinput" style="width : 90px"></label>
                <br>
                <label id="corner"><strong>Esquina: </strong><input type="text" id="cornerinput" style="width : 90px"></label>
              </div>
              
            </form>
                    <hr>
                    <div class="" id="metodoPurch">
                    
                    <lable id="labelPurch"><strong> Metodo de pago:</strong> </label>
                    <br>
                    <form style="padding-top : 10px" id="formPurch">
                    <input type="radio" name="purch" value="credit" id="credit"> <strong>Trjeta de Credito</strong>
                    <br>
                    <input type="radio" name="purch" value="bank" id="bank"> <strong>Transf. Bancaria</strong>
                    </form>
                    
                    </div>
                </div>
            </div>
            
            <div id="infoPurch" class="card mb-3 form-group">

            </div>
           
            <div class="card">
                <div class="card-body">
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
                     <a href="#" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Comprar</a>
                </div>
            </div>
        </aside>
    </div>
</div>  
    `
        body.innerHTML = htmltocontentAppen;
    }



}

const cart = () => {

    count = document.getElementById("numbercount").value;
    let totalLabel = document.getElementById("Total");
    let subTotal = document.getElementById("subTotal");
    let unitCost = products.unitCost;
    let send = document.getElementById("delivery");
    let totalunit = document.getElementById("total-unit");

    //Aca calculamos el total del las unidades que lleva de ese producto
    let subTotalCost = count * unitCost;
    totalunit.innerHTML = "$" + subTotalCost;
    let delivery = document.getElementById("select_delivery").value;
    let costDelivery = delivery * subTotalCost;
    let total = subTotalCost + costDelivery;
    send.innerHTML = "$ " + costDelivery.toFixed(2);
    subTotal.innerHTML = "$ " + subTotalCost;
    totalLabel.innerHTML = "$ " + total;

}

const methodPurch = () => {


    htmltocontentAppen = "";
    let methodDiv = document.getElementById("infoPurch");
    let option1 = document.getElementById("credit");
    let option2 = document.getElementById("bank");

    if (option1.checked) {

        methodDiv.innerHTML = "";
        htmltocontentAppen += `
        <label><strong>N° Tarjeta</strong></label>
        <input type="text" id="cardNumber" maxlength="19" autocomplete="off">
        <br>
        <label><strong>Nombre Titular</strong></label>
        <input type="text" id="cardName" maxlength="19" autocomplete="off">
        <br>
        <label style="text-align: center"><strong>Vencimiento</strong></label>

        <div class="mounthYear">
        <label style="text-align: left">Mes</label>
        <br>
        <select style="width : 26%" name="mes" id="selectMes">
        <br>
        <option disabled selected>Mes</option>
        </select>
        
        <label style="">Año</label>
        
        <select style="width : 26%" name="mes" id="selectMes">
        <option disabled selected>Año</option>
        
        </select>
        </div>
        `
        methodDiv.innerHTML = htmltocontentAppen;

    } else if (option2.checked) {
        methodDiv.innerHTML = "";
        htmltocontentAppen += `
        
        `
        methodDiv.innerHTML = htmltocontentAppen;
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

            cart()
            methodPurch();
        }

        document.getElementById("numbercount").addEventListener("click", () => {

            cart();

        })

        document.getElementById("select_delivery").addEventListener("click", () => {

            cart();
        })


        document.getElementById("formPurch").addEventListener("change", () => {

            methodPurch();

        })
    });



});