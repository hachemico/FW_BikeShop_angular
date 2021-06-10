bikeShop.factory('services_cart', ['services','toastr','$rootScope',  function( services,toastr,$rootScope) {
    let service = {calculateCart:calculateCart,listQtyHeader:listQtyHeader};
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
        // $rootScope.noDataCart = false;
    }else{

        $rootScope.totalProductsHeader= 0;
        localStorage.setItem('listTotal',0);
        // $rootScope.noDataCart = true;
    }
    }, function(error) {
     console.log(error);
    });// end_services

}

}]);