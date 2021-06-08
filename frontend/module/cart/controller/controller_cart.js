console.log("carga controller cart");
bikeShop.controller('controller_cart',function($scope,services,$rootScope,services_cart, toastr) {

        if(localStorage.token){
            // comprovar que el token del usuario es válido. timeExpiration.
            services.post('login', 'decodeTimeToken', {"token":localStorage.token})
                .then(function(response) {
                    console.log(response);
                    response2=JSON.parse(response);
                   
                    if(response2 === "CURRENT_TOKEN"){

                       //obtener el usuario sobre el que agregar el favs
                        services.post('login', 'decodeToken2', {"token":localStorage.token})
                        .then(function(response3) {
                                console.log(response3);

                                //Insertar el favs en la tabla idUser+idBike+like/unlike

                                services.post('cart', 'searchCart', {"uid":response3})
                                .then(function(response4) {
                                        console.log(response4);
                                    if(response4 == 0){
                                        console.log("ENTRAAAA");
                                        $rootScope.noDataCart = true;
                                        $rootScope.noDataCartTotal = false;
                                    }else{
                                        console.log("NO DETECTA");
                                        $scope.showCart=response4;
                                        services_cart.calculateCart(response4);
                                        $rootScope.noDataCart = false;
                                        $rootScope.noDataCartTotal = true;
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
                    console.log(response);

                }, function(error) {
                    console.log(error);
                });// end_services

        }else{
            console.log("no hay usuario");
            toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
            location.href="#/login"
        }



$scope.addBike=function(id){ //añadir productos desde el cart.

console.log(id);
if(localStorage.token){
    // comprovar que el token del usuario es válido. timeExpiration.
    services.post('login', 'decodeTimeToken', {"token":localStorage.token})
        .then(function(response) {
            console.log(response);
            response2=JSON.parse(response);
           
            if(response2 === "CURRENT_TOKEN"){

               //obtener el usuario sobre el que agregar el favs
                services.post('login', 'decodeToken2', {"token":localStorage.token})
                .then(function(response3) {
                        console.log(response3);

                        
                        services.post('cart', 'incrementCart', {'uid':response3,'idBike':id})
                        .then(function(response4) {
                                console.log(response4);
                                $scope.showCart=response4;
                                services_cart.calculateCart(response4);

                        }, function(error) {
                                console.log(error);
                        });// end_services

                        services_cart.listQtyHeader(response3);
                   

                    }, function(error) {
                        console.log(error);
                    });// end_services


            }else if(response2 === "INVALID_TOKEN"){
                console.log('Adios');
                toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                location.href="#/login"
            }
            console.log(response);

        }, function(error) {
            console.log(error);
        });// end_services

}else{
    // console.log("no hay usuario");
    // toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
    // location.href="#/login"
}


};
$scope.removeBike=function(idbike){//quitar producto desde el cart.
console.log("decrement");
    console.log(idbike);
    
    if(localStorage.token){
        // comprovar que el token del usuario es válido. timeExpiration.
        services.post('login', 'decodeTimeToken', {"token":localStorage.token})
            .then(function(response) {
                console.log(response);
                response2=JSON.parse(response);
               
                if(response2 === "CURRENT_TOKEN"){
    
                   //obtener el usuario sobre el que agregar el favs
                    services.post('login', 'decodeToken2', {"token":localStorage.token})
                    .then(function(response3) {
                            console.log(response3);
    
                            
                            services.post('cart', 'decrementCart', {'uid':response3,'idBike':idbike})
                            .then(function(response4) {
                                    console.log(response4);
                                    $scope.showCart=response4;
                                    services_cart.calculateCart(response4);
    
                            }, function(error) {
                                    console.log(error);
                            });// end_services

                            services_cart.listQtyHeader(response3);
                           

    
                        }, function(error) {
                            console.log(error);
                        });// end_services
    
    
                }else if(response2 === "INVALID_TOKEN"){
                    console.log('Adios');
                    toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                    location.href="#/login"
                }
                console.log(response);
    
            }, function(error) {
                console.log(error);
            });// end_services
    
    }else{
        // console.log("no hay usuario");
        // toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
        // location.href="#/login"
    }






};

$scope.deleteLine= function(idbike){
    console.log("Entra deleteLine");

    if(localStorage.token){
        // comprovar que el token del usuario es válido. timeExpiration.
        services.post('login', 'decodeTimeToken', {"token":localStorage.token})
            .then(function(response) {
                console.log(response);
                response2=JSON.parse(response);
               
                if(response2 === "CURRENT_TOKEN"){
    
                   //obtener el usuario sobre el que agregar el favs
                    services.post('login', 'decodeToken2', {"token":localStorage.token})
                    .then(function(response3) {
                            console.log(response3);
    
                            
                            services.post('cart', 'deleteLineCart', {'uid':response3,'idBike':idbike})
                            .then(function(response4) {
                                    console.log(response4);
                                    $scope.showCart=response4;
                                    services_cart.calculateCart(response4);
                               
                            }, function(error) {
                                    console.log(error);
                            });// end_services

                            services_cart.listQtyHeader(response3);
                            location.reload();
    
                        }, function(error) {
                            console.log(error);
                        });// end_services
    
    
                }else if(response2 === "INVALID_TOKEN"){
                    console.log('Adios');
                    toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                    location.href="#/login"
                }
                console.log(response);
    
            }, function(error) {
                console.log(error);
            });// end_services
    
    }else{
        // console.log("no hay usuario");
        // toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
        // location.href="#/login"
    }



};
$scope.checkout= function(){

    console.log("entra");
    if(localStorage.token){
        // comprovar que el token del usuario es válido. timeExpiration.
        services.post('login', 'decodeTimeToken', {"token":localStorage.token})
            .then(function(response) {
                console.log(response);
                response2=JSON.parse(response);
               
                if(response2 === "CURRENT_TOKEN"){
    
                   //obtener el usuario sobre el que agregar el favs
                    services.post('login', 'decodeToken2', {"token":localStorage.token})
                    .then(function(response3) {
                            console.log(response3);
    
                            services.post('cart', 'controlCheckout', {'uid':response3})
                            .then(function(response4) {
                                    console.log(response4);

                                    services_cart.listQtyHeader(response3);
                                    toastr.success('Pedido Realizado con éxito. Gracias por confiar en BikeShop.' ,'PEDIDO REALIZADO');
                                    location.href = "#/home";
                               
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
                console.log(response);
    
            }, function(error) {
                console.log(error);
            });// end_services
    
    }else{
        // console.log("no hay usuario");
        // toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
        // location.href="#/login"
    }


}

});
