bikeShop.factory('services_cart', ['services','toastr','$rootScope',  function( services,toastr,$rootScope) {
    let service = {calculateCart:calculateCart,listQtyHeader:listQtyHeader,checkoutNolog:checkoutNolog};
    return service;


function calculateCart(producto){
let subtotal= 0;
let taxes =0;
let envio = 3.50;
let taxesEnvio=0;
let Total =0;

   console.log("calculate cart OK");
    for( row in producto){ // montamos la query >>>
        subtotal = subtotal + producto[row].qty * producto[row].price;
    }
    $rootScope.subtotalCart = subtotal;
    $rootScope.envioCart = envio;
        taxes = (subtotal*0.1);
        taxesEnvio = (envio*1.1);
    $rootScope.taxesCart= (subtotal*0.1);
        total= subtotal+taxes+taxesEnvio;
    $rootScope.totalCart = total;
}

function listQtyHeader(userId){

    services.post('cart','totalLine', {"uid": userId})
    .then(function(response) {
                   
        if(response[0]['SUM(qty)'] != null){

        $rootScope.totalProductsHeader= response[0]['SUM(qty)'];
        localStorage.setItem('listTotal',response[0]['SUM(qty)']);
     
    }else{

        $rootScope.totalProductsHeader= 0;
        localStorage.setItem('listTotal',0);
     
    }
    }, function(error) {
     console.log(error);
    });// end_services

}

function checkoutNolog(){
console.log("ENTRAA checkoutNolog >>>");

services.post('login', 'decodeTimeToken', {"token":localStorage.token})
.then(function(response) {
    console.log(response);
    response2=JSON.parse(response);
   
    if(response2 === "CURRENT_TOKEN"){

        services.post('login', 'decodeToken2', {"token":localStorage.token})
        .then(function(response3) {
                console.log(response3);

                services.post('cart', 'searchCart', {'uid':response3})
                .then(function(response4) {
                        console.log(response4);
                        if(response4 == 0){

                            console.log("Sin Articulos previos");
                           
                            let valorNoLog = localStorage.getItem('cartNoLog');
                            let val = JSON.parse(valorNoLog);
                            let sql = "";
                            let user = response3.replace(/ /g, "")
                            for(row in val){
                                sql = sql +"INSERT INTO cart (uid,idbike,qty) VALUES ('"+user+"','"+val[row]['id']+"','"+val[row]['qty']+"');";
                            }
                            console.log(sql);
                            
                            services.post('cart', 'CheckoutNolog', {'query':sql})
                            .then(function(response4) {
                                    console.log(response4);
                                localStorage.removeItem('cartNoLog');
                                localStorage.removeItem('checkout');
                                toastr.info('Se han Añadido los productos a tu carrito anterior.' ,'INFO BIKESHOP');
                                location.href="#/cart";

                                //UNA VEZ REDIRECCIONADO AL CART Y CON LOS ARTICULOS INSERTADOS EL PROCESO DE CHECKOUT TRANSCURRE COMO USUARIO LOGGUEADO.
                                
                            }, function(error) {
                                    console.log(error);
                            });// end_services

                        }else{
                            
                            console.log("Con articulos");
                           
                            let valorNoLog=localStorage.getItem('cartNoLog');
                            let val=JSON.parse(valorNoLog);

                            // Se tedría que desarrollar el codigo par realizar las funciones de comparación
                            // SI EXISTE el mismo "id" del articulo que deje el actual con la cantidad actual (LOCALSTORAGE)
                            // SI NO EXISTE el mismo "id" del articulo en DB se añade la linea equivalente.
                        }
                   
                }, function(error) {
                        console.log(error);
                });// end_services

        }, function(error) {
                console.log(error);
        });// end_services


    }else if(response2 === "INVALID_TOKEN"){
        console.log('Adios');
        toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
        location.href="#/login"
    }

}, function(error) {
    console.log(error);
});// end_services


}

}]);