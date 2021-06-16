// console.log("carga app.js");

var bikeShop = angular.module('bikeShop', ['ngRoute', 'ui.bootstrap','ngSanitize','toastr'] );
//////
bikeShop.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
                .when("/home", {
                    
                    templateUrl: "frontend/module/home/view/view_home.html", 
                    controller: "controller_home",
                    resolve: {

                        // featuredCars: function (services) {
                        showCategories: function (services) {
                            return  services.get('home','categories');
                        },
                        // featuredCars: async function (services) {
                        //     return await services.get('home','carousel');
                        // },
                        showSlider: function (services) {
                            return services.get('home','carousel');
                        }
                    }// end_resolve


                }).when("/shop", {
                    
                        templateUrl: "frontend/module/shop/view/view_shop.html", 
                        controller: "controller_shop",
                        resolve: {
                            
                            
                        }// end_resolve
                    }).when("/shopDetail", {
                    
                        templateUrl: "frontend/module/shopDetail/view/view_shopDetail.html", 
                        controller: "controller_shopDetail"
                      
                    }).when("/login", {
                    
                        templateUrl: "frontend/module/login/view/view_login.html", 
                        controller: "controller_login"
                       
                    }).when("/register", {
                    
                        templateUrl: "frontend/module/login/view/view_register.html", 
                        controller: "controller_register"
                       
                    }).when("/userActivate/:token", {
                        resolve: {
                            
                            userActivate: function(services, $route, toastr) {
                                console.log("Valor recogido");
                              
                            setTimeout(function(){ //ESPERAR PARA QUE LLEGUEN TODOS LOS FLAGS EVITANDO QUE SE EJECUTE VARIAS VECES.
                                    //Código a ejecutar
                               
                                services.put('login', 'active_user', {'token': $route.current.params.token})
                                .then(function(response) {
                                    console.log(response);
                                    
                                  
                                        if (response == 1) {
                                            toastr.success('Ahora puede acceder a su cuenta.' ,'Cuenta verificada.');
                                        }else {
                                            toastr.error('The current token is invalid.' ,'Error');
                                        }// end_else
                                        location.href = "#/login";
                                    
                                }, function(error) {
                                    console.log(error);
                                });// end_services

                            },300);

                            }// end_activateUser
                        }// end_resolve

                    }).when("/login/viewRecoverPass", { //solo lanza una vista para recoger el email del usuario
                        templateUrl: "frontend/module/login/view/view_recoverPass.html", 
                        controller: "controller_login"
                    
                    }).when("/login/recoverPass/:token", {
                    
                        templateUrl: "frontend/module/login/view/view_confirmRecover.html", 
                        controller: "controller_login",
                        resolve: {
                            passUpdate: function(services, $route, toastr) {
                                console.log("Valor recogido");
                                console.log($route.current.params.token);
                                services.put('login', 'compareToken', {'token': $route.current.params.token})
                                .then(function(response) {
                                    
                                    if (response == 0) {
                                        toastr.error('No esta autorizado a realizar este proceso.' ,'ERROR PROCESO.');
                                    }else {
                                        localStorage.tokenRecover=response;
                                    }// end_else
                                }, function(error) {
                                    console.log(error);
                                });// end_services
                            }// end_passUpdate
                        }// end_resolve  
                }).when("/cart", { //solo lanza una vista para recoger el email del usuario
                        templateUrl: "frontend/module/cart/view/view_cart.html", 
                        controller: "controller_cart"

                        
                }).otherwise("/", {
                    templateUrl: "frontend/module/home/view/view_home.html", 
                    controller: "controller_home",
                    resolve: {

                        // featuredCars: function (services) {
                        showCategories: function (services) {
                            return  services.get('home','categories');
                        },
                        // featuredCars: async function (services) {
                        //     return await services.get('home','carousel');
                        // },
                        showSlider: function (services) {
                            return services.get('home','carousel');
                        }


                    }// end_resolve
                });
    }]);

    // https://cursoangularjs.es/doku.php?id=unidades:04_masdirectivas:11_rootscope

    bikeShop.run(function($rootScope,services_logIn,services,services_cart,services_shop,toastr) {
        
//CONTROL LOGOOUT     
        $rootScope.logOut=function(){
            services_logIn.logOutUser();
        }
        
//CONTROL SEARCH HEADER.

        $rootScope.searchHeader = function(){
             services_shop.search();
        }

//CONTROL MENU USUARIO
        if(!localStorage.token){
            $rootScope.menuHeader = true;
        }else{
            services_logIn.printMenu();
        }

//CONTROL nºPRODUCTOS DEL CART en el HEADER.

        if(localStorage.token){
                // comprovar que el token del usuario es válido. timeExpiration.
                services.post('login', 'decodeTimeToken', {"token":localStorage.token})
                    .then(function(response) {
                        // console.log(response);
        
                        response2=JSON.parse(response);
                       
                        if(response2 === "CURRENT_TOKEN"){
            
                            services.post('login', 'decodeToken2', {"token":localStorage.token})
                            .then(function(response3) {
                                
                                    services_cart.listQtyHeader(response3);
                               
                                }, function(error) {
                                    console.log(error);
                                });// end_services
            
                        }else if(response2 === "INVALID_TOKEN"){
                            console.log('Adios');
                            toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
                            localStorage.removeItem('token');
                            location.href="#/login"
                        }
                        // console.log(response);
            
                    }, function(error) {
                        console.log(error);
                    });// end_services
            
            }else{ //

                if(localStorage.cartNoLog){

                    let valorNoLog=localStorage.getItem('cartNoLog');
                    let val=JSON.parse(valorNoLog);
                    let total_prod=0;
                    for(row in val){ //total productos cart
                        total_prod= total_prod+val[row]['qty'];
                    }
                    console.log(total_prod);
                    $rootScope.totalProductsHeader= total_prod;
                    localStorage.setItem('listTotal',total_prod);

                }else{
                     $rootScope.totalProductsHeader = 0;   
                }
               
            }

      });