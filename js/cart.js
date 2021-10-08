
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
                                <th scope="col" class="text-right d-none d-md-block" width="200">Precio Total Unit.</th>
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
                    
                        <div class="form-group"> 
                        
                        <label for="pet-select">Seleccionar metodo de envio:</label>

                <select name="delivery" id="select_delivery">
                <option value="">Ingresar opción</option>
                <option value="0.05">Standar</option>
                 <option value="0.07">Express</option>
                <option value="0.15">Premium</option>
                </select>
              
                        </div>
                    </form>
                    <div class="card" id="metodoPurch">
                    <dl class="dlist-align">
                    <lable id="labelPurch"><strong> Metodo de pago:</strong> </label>
                    <br>
                    <br>
                    <input type="radio" name="purch"> <strong>Trjeta de Credito</strong>
                    <br>
                    <input type="radio" name="purch"> <strong>Transf. Bancaria</strong>
                    </dl>
                    </div>
                </div>
            </div>

            <div id="infoPurch" class="card mb-3">
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

const cart = () =>{

    count = document.getElementById("numbercount").value;
    let totalLabel = document.getElementById("Total");
    let subTotal = document.getElementById("subTotal");
    let unitCost = products.unitCost;
    let send = document.getElementById("delivery");
    let totalunit = document.getElementById("total-unit");
    let subTotalCost = count * unitCost;
    totalunit.innerHTML = "$" + subTotalCost;
    let delivery = document.getElementById("select_delivery").value;
    let costDelivery = delivery * subTotalCost;
    let total = subTotalCost + costDelivery;
    send.innerHTML = "$ " + costDelivery.toFixed(2);
    subTotal.innerHTML =  "$ " + subTotalCost;
    totalLabel.innerHTML = "$ " + total;

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
            // let subTotal = document.getElementById("subTotal");
            // let count = document.getElementById("numbercount").value;
            // let unitCost = products.unitCost;
            // let totalunit = document.getElementById("total-unit");
            // let subTotalCost = count * unitCost;
            // totalunit.innerHTML = "$" + subTotalCost;
            // subTotal.innerHTML =  "$" + subTotalCost;
            cart()

        }

        document.getElementById("numbercount").addEventListener("click", () => {
           
            cart();

        })

        document.getElementById("select_delivery").addEventListener("click", () => {
          
           cart();
        })
    });



});