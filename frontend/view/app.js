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
                            
                            // featuredCars: function (services) {
                            // showShop: function (services) {
                            //     let user="";
                            //     if(localStorage.token){
                            //          // console.log(localStorage.token);
                            //          let uemail=services.post('login','decodeToken2',{'token':localStorage.token});
                            //          // let email=uemail.toString().split(' ');
                            //          uemail.then(function(data) { //resolver los datos que llegan desde el servidor
                            //             console.log(data);
                                       
                                        
                
                            //             // user=data;
                            //             let aux= services.post('shop','getShop',{'user':data});
                            //             // aux.then(function(data) { //resolver los datos que llegan desde el servidor
                            //                 // console.log(aux);
                            //                 // showShop=data;
                            //                 // setPage (showShop,1);
                            //                 return aux;
                
                
                            //             // });//end. then_aux
                            //         });//end.then_uemail
                                  
                            //     }else{
                            //         user="visitor";
                            //         // return services.post('shop','getShop',{'user':user});
                            //         let aux= services.post('shop','getShop',{'user':user});
                            //             // aux.then(function(data) { //resolver los datos que llegan desde el servidor
                            //                 // console.log(aux);
                            //                 // showShop=data;
                            //         //         setPage (showShop,1);
                            //                 return aux;
                
                
                
                            //             // });//end. then_aux
                            //     }
                            // }
                            // // featuredCars: async function (services) {
                            // //     return await services.get('home','carousel');
                            // // },
                            // showSlider: function (services) {
                            //     return services.get('shop','carousel');
                            // }
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
                                // console.log("Valor recogido");
                                // console.log($route.current.params.token);
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

    bikeShop.run(function($rootScope,services_logIn) {
       
        $rootScope.logOut=function(){
            services_logIn.logOutUser();
        }

        if(!localStorage.token){
            $rootScope.menuHeader = true;
        }else{
            services_logIn.printMenu();
        }
      });