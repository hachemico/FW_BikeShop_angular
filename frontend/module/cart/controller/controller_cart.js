bikeShop.controller('controller_cart',function($scope,services,$rootScope,services_cart, toastr) {

//MOSTRAR PRODUCTOS EN EL CART
        if(localStorage.token){
            // comprovar que el token del usuario es válido. timeExpiration.
            services.post('login', 'decodeTimeToken', {"token":localStorage.token})
                .then(function(response) {
                   
                    response2=JSON.parse(response);
                   
                    if(response2 === "CURRENT_TOKEN"){

                        services.post('login', 'decodeToken2', {"token":localStorage.token})
                        .then(function(response3) {
                                console.log(response3);

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
                            localStorage.removeItem('token');
                            location.href="#/login"
                    }

                }, function(error) {
                    console.log(error);
                });// end_services

        }else{
            
            let valorNoLog=localStorage.getItem('cartNoLog');
            let val=JSON.parse(valorNoLog);
            let query="";
            console.log(val);
            for(row in val){
                if(row == 0){
                 query = query +val[row]['id'];
                }else{
                    query = query +" OR idbike ="+''+val[row]['id']+'';
                }
            }
            console.log(query);

            services.post('cart', 'searchCartNolog', {'query':query})
            .then(function(response) {
               
                if(response == 0){ //no hay productos que mostrar

                    $rootScope.noDataCart = true;
                    $rootScope.noDataCartTotal = false;
                
                }else{  // hay productos
                  
                    response.forEach(value =>{

                        for(row1 in val){
                                
                            if(val[row1]['id'] == value['idbike'] ){
                            value.qty = val[row1]['qty']             
                            }
                        }
                    })
          
                $scope.showCart=response;
                $rootScope.noDataCart = false;
                $rootScope.noDataCartTotal = true;
                services_cart.calculateCart(response);
                }
            }, function(error) {
                    console.log(error);
            });// end_services
        }


$scope.addBike=function(id){ //añadir productos desde el cart.

if(localStorage.token){
    // comprovar que el token del usuario es válido. timeExpiration.
    services.post('login', 'decodeTimeToken', {"token":localStorage.token})
        .then(function(response) {
            // console.log(response);
            response2=JSON.parse(response);
           
            if(response2 === "CURRENT_TOKEN"){

                services.post('login', 'decodeToken2', {"token":localStorage.token})
                .then(function(response3) {
                        // console.log(response3);

                        services.post('cart', 'incrementCart', {'uid':response3,'idBike':id})
                        .then(function(response4) {
                                console.log(response4);
                                $scope.showCart=response4;
                                services_cart.calculateCart(response4);

                        }, function(error) {
                                console.log(error);
                        });// end_services

                        services_cart.listQtyHeader(response3); //Qty productos en cart

                    }, function(error) {
                        console.log(error);
                    });// end_services

            }else if(response2 === "INVALID_TOKEN"){
                console.log('Adios');
                toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                localStorage.removeItem('token');
                location.href="#/login"
            }    

        }, function(error) {
            console.log(error);
        });// end_services

}else{
    
    let valorNoLog=localStorage.getItem('cartNoLog');
    let val=JSON.parse(valorNoLog);
    let query="";
            console.log(val);
            for(row in val){
                if(row == 0){
                 query = query + val[row]['id'];
                }else{
                    query = query +" OR idbike ="+''+val[row]['id']+'';
                }
            }

            services.post('cart', 'searchCartNolog', {'query':query})
            .then(function(response) {
                 
                response.forEach(value =>{

                    for(row1 in val){
                            
                        if(val[row1]['id'] == value['idbike'] ){
                        value.qty = val[row1]['qty'] +1;          
                        }
                    }
                })
                let total_showHeader=0;
                for(row2 in val){
                            
                    if(val[row2]['id'] == id ){
                        val[row2]['qty'] = val[row2]['qty'] +1;         
                       
                    }
                    total_showHeader=total_showHeader+val[row2]['qty']; //nº productos en el cart.
                }

                console.log(response);
                $scope.showCart=response;
                $rootScope.noDataCart = false;
                $rootScope.noDataCartTotal = true;
                
                $rootScope.totalProductsHeader= total_showHeader;

                localStorage.setItem('listTotal',total_showHeader);
                services_cart.calculateCart(response);

                let str_val= JSON.stringify(val);
                localStorage.setItem('cartNoLog',str_val);

            }, function(error) {
                    console.log(error);
            });// end_services

}


};
$scope.removeBike=function(idbike){//quitar producto desde el cart.
    
    if(localStorage.token){
        // comprovar que el token del usuario es válido. timeExpiration.
        services.post('login', 'decodeTimeToken', {"token":localStorage.token})
            .then(function(response) {
             
                response2=JSON.parse(response);
               
                if(response2 === "CURRENT_TOKEN"){
    
                    services.post('login', 'decodeToken2', {"token":localStorage.token})
                    .then(function(response3) {
                         
                            services.post('cart', 'decrementCart', {'uid':response3,'idBike':idbike})
                            .then(function(response4) {
                                   
                                    $scope.showCart=response4;
                                    services_cart.calculateCart(response4); //calcular subtotales cart
    
                            }, function(error) {
                                    console.log(error);
                            });// end_services

                            services_cart.listQtyHeader(response3); //Qty products cart
                           
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

    let valorNoLog=localStorage.getItem('cartNoLog');
    let val=JSON.parse(valorNoLog);
    let query="";
            console.log(val);
            for(row in val){
                if(row == 0){
                 query = query +val[row]['id'];
                }else{
                    query = query +" OR idbike ="+''+val[row]['id']+'';
                }
            }
            console.log(query);

            services.post('cart', 'searchCartNolog', {'query':query})
            .then(function(response) {
                 
                response.forEach(value =>{ //actualizamos qty en el array.

                    for(row1 in val){   
                        if(val[row1]['id'] == value['idbike'] ){
                        value.qty = val[row1]['qty'] -1;             
                        }
                    }
                })
                let total_showHeader=0;
                for(row2 in val){
                            
                    if(val[row2]['id'] == idbike ){
                        val[row2]['qty'] = val[row2]['qty'] -1;         
                    }
                    total_showHeader=total_showHeader+val[row2]['qty']; //nº productos en el cart.
                }

                console.log(response);
                $scope.showCart=response;
                $rootScope.noDataCart = false;
                $rootScope.noDataCartTotal = true;
                
                $rootScope.totalProductsHeader= total_showHeader; //show total productos cart

                localStorage.setItem('listTotal',total_showHeader);
                services_cart.calculateCart(response);

                let str_val= JSON.stringify(val);
                localStorage.setItem('cartNoLog',str_val); //actualizamos datos.

            }, function(error) {
                    console.log(error);
            });// end_services
    }
};

$scope.deleteLine= function(idbike){
    

    if(localStorage.token){
        // comprovar que el token del usuario es válido. timeExpiration.
        services.post('login', 'decodeTimeToken', {"token":localStorage.token})
            .then(function(response) {
                
                response2=JSON.parse(response);
               
                if(response2 === "CURRENT_TOKEN"){
    
                    services.post('login', 'decodeToken2', {"token":localStorage.token})
                    .then(function(response3) {
    
                            services.post('cart', 'deleteLineCart', {'uid':response3,'idBike':idbike})
                            .then(function(response4) {
                                    console.log(response4);
                                    $scope.showCart=response4;
                                    services_cart.calculateCart(response4);
                               
                            }, function(error) {
                                    console.log(error);
                            });// end_services

                            services_cart.listQtyHeader(response3); //Qty productos cart
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
    
       
        let valorNoLog=localStorage.getItem('cartNoLog');
        let val=JSON.parse(valorNoLog);
        let query="";
                console.log(val);
                for(row in val){
                    if(row == 0){
                     query = query +val[row]['id'];
                    }else{
                        query = query +" OR idbike ="+''+val[row]['id']+'';
                    }
                }
    
                services.post('cart', 'searchCartNolog', {'query':query})
                .then(function(response) {
                    
                     let indice = response.findIndex(value => value.idbike === idbike);
                    response.splice(indice, 1); //eliminamos del array

                    let indice2 = val.findIndex(value2 => value2.id === idbike);
                    val.splice(indice2, 1) //eliminamos del array
                   
                    let str_val= JSON.stringify(val);
                    localStorage.setItem('cartNoLog',str_val); //actualizamos datos.

                    let total_showHeader=0;
                    for(row2 in val){
                        total_showHeader=total_showHeader+val[row2]['qty']; //nº productos en el cart.
                    }
                    $rootScope.totalProductsHeader= total_showHeader; //show total productos cart
    
                    localStorage.setItem('listTotal',total_showHeader);
                    services_cart.calculateCart(response);
                    $scope.showCart=response;
                    $rootScope.noDataCart = false;
                    $rootScope.noDataCartTotal = true;
                    location.href="#/cart/";
    
                }, function(error) {
                        console.log(error);
                });// end_services
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
    
            }, function(error) {
                console.log(error);
            });// end_services
    
    }else{
        // console.log("no hay usuario");
        toastr.info('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
        location.href="#/login"
        localStorage.setItem('checkout',"active");
    }
}

});
