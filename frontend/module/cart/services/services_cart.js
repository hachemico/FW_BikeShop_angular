bikeShop.factory('services_cart', ['services','toastr','$rootScope',  function( services,toastr,$rootScope) {
    let service = {calculateCart:calculateCart};
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
    console.log(subtotal);
    $rootScope.subtotalCart = subtotal;
    $rootScope.envioCart = envio;
        taxes = (subtotal*0.1);
        taxesEnvio = (envio*1.1);
    $rootScope.taxesCart= (subtotal*0.1);
    console.log(taxes);
    console.log(taxesEnvio);
        total= subtotal+taxes+taxesEnvio;
    $rootScope.totalCart = total;
}

}]);