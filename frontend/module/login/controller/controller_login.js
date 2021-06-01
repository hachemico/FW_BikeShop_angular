// console.log("Carga controller_login.js");

bikeShop.controller('controller_login', function($scope,services,toastr,services_logInSocial,services_Google,services_GitHub,services_logIn) {
    
    console.log("Carga controller_login function");
   
    $scope.login = function(){
        console.log("scope_login");

        $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,7}.[a-z]{2,4}$/;
        $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/;
        let ok = 'false';
        // console.log(form_register.user_user.$valid);

        if(!$scope.user_log_email){
                    $scope.e_log_email = "Introduzca un email valido";
                    ok='false';
        }else if(!$scope.user_log_passwd){
                 
                    $scope.e_log_email = "";
                    $scope.e_log_passwd = "Introduzca una contraseña valida";
                    ok='false';
        }else{
            $scope.e_log_email = "";
            $scope.e_log_passwd = "";
            ok='true';
        }//end_if_valide
           
        // console.log(ok);
        if(ok == 'true' && $scope.user_log_email && $scope.user_log_passwd){
      
            let user = {'email': $scope.user_log_email, 
                    'password': $scope.user_log_passwd};

                    // console.log(user);
                    services.post('login', 'login', user)
                    .then(function(response) {
                        // console.log("Hay respuesta >>"+ response);
                        let dataParse=JSON.parse(response);
                
                        if(dataParse == '0'){
                            toastr.error('La contraseña es incorrecta' ,'ERROR');

                        }else if(dataParse == 'NOactivate'){
                            toastr.error('Usuario inválido. Consulte su correo para activar su sesión.' ,'ERROR VALIDACIÓN');

                        }else if(dataParse == 'NOexist'){
                            toastr.error('Usuario no registrado.' ,'ERROR');

                        }else{ 
                            toastr.success('Bienvenido a BikeShop' ,' www.BIKESHOP.com');
                            services_logIn.printMenu();
                            localStorage.setItem('token',response); // guardamos el token generado, en localstorage.
                            location.href = "#/home";
                            location.reload();
                            }//end_if/else 
                        
                    }, function(error) {
                        console.log(error);
                }); // end_services
        }//end_if
    };


    $scope.socialGoogle = function() {
        // console.log("entra google");
        services_logInSocial.initialize();
        services_Google.logIn();
    };// end_logInGoogle

    $scope.socialGitHub = function() {
        // console.log("entra github");
        services_logInSocial.initialize();
        services_GitHub.logIn();
    };// end_logInGitHub

    // $scope.socialLogout = function() {
    // console.log("entra logOut");
    //     services_logOut.social_logOut();
    // };// end_logInGitHub


    $scope.recoverPass = function (){
    
        $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,7}.[a-z]{2,4}$/;
        if(!$scope.recover_email){
            $scope.e_rec_email = "Introduzca un email valido";
            ok='false';
        }else{
            ok='true';
            $scope.e_rec_email ="";
        }
     
        if(ok == 'true' && $scope.recover_email){
      
            let user = {'email': $scope.recover_email};
         
            services.post('login', 'recoverPass', user)
                    .then(function(response) {
                
                 
                        let dataParse=JSON.parse(response);

                        if(dataParse === 'errorNotExist'){
                            toastr.error('El usuario no existe. "Registrese" para Continuar.' ,'ERROR');
                            console.log(response);
                        }else if(dataParse === 'errorInsertToken'){   
                            toastr.error('Se ha producido un error. Intentelo más tarde' ,'ERROR');
                            console.log(response);
                        }else{
                            console.log(response);
                            toastr.success('Consulte su correo para completar el proceso.' ,' Email Enviado correctamente');
                            location.href="#/home"; //Saltamos al home para lanzar la vista.
                            
                        }//end_if/else.
            }, function(error) {
                console.log(error);
            }); // end_services
        }//end_if

    };

    $scope.updateRecover= function (){ // recoge valores introducidos y actualiza el pass del usuario.
       

            $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/;
                if(!$scope.user_confRec_passwd){
                    $scope.e_confRec_passwd = "Introduzca contraseña válida";
                    ok='false';
                }else if(!$scope.user_confRec_passwd2){
                        $scope.e_confRec_passwd2 = "Introduzca una contraseña válida";
                        $scope.e_confRec_passwd = "";
                        ok='false';
                }else if($scope.user_confRec_passwd2 != $scope.user_confRec_passwd){
                        $scope.e_confRec_passwd = "";
                        $scope.e_confRec_passwd2 = "Las contraseñas no coinciden";
                        ok='false';
                }else{
                    ok='true';
                    $scope.e_confRec_passwd ="";
                    $scope.e_confRec_passwd2 = "";
                    $scope.show_confRec_dialog = "";
                }
                
                if(ok == 'true' && $scope.user_confRec_passwd){
                    let token=localStorage.tokenRecover;
                    // console.log(token);
                    let user = {'password': $scope.user_confRec_passwd,'token':token};
                    // console.log(user);
                    services.post('login', 'updateRecover', user)
                            .then(function(response) {
                                // console.log(response);
                                let dataParse=JSON.parse(response);
        
                                if(dataParse === 'OK'){
                                    toastr.success('Contraseña reestablecida' ,'PROCESO COMPLETADO');
                                    localStorage.removeItem('tokenRecover');
                                    location.href="#/login"; //Saltamos al home para lanzar la vista.
                                }else if(dataParse === 'errorUpdatePass'){   
                                    toastr.error('Se ha producido un error. Intentelo más tarde' ,'ERROR');
        
                                }     
                    }, function(error) {
                        console.log(error);
                    }); // end_services
                }//end_if
        
            };


});