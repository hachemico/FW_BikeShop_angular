console.log("Carga controller_register.js");

bikeShop.controller('controller_register', function($scope,services,toastr) {

    // console.log("Entra en controller_register!>");

    $scope.register= function (){
       
        $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/;
        $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,7}.[a-z]{2,4}$/;
        $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/;
        let ok = 'false';
        // console.log(form_register.user_user.$valid);
        
        if(!$scope.user_user){
            $scope.e_user = "Introduzca un usuario valido";
            ok='false';
        }else if(!$scope.user_email){
                    $scope.e_user = "";
                    $scope.e_email = "Introduzca un email valido";
                    ok='false';
        }else if(!$scope.user_passwd){
                    $scope.e_user = "";
                    $scope.e_email = "";
                    $scope.e_passwd = "Introduzca una contraseña valida";
                    ok='false';
        }else if(!$scope.user_passwd2){
                    $scope.e_user = "";
                    $scope.e_email = "";
                    $scope.e_passwd = "";
                    $scope.e_passwd2 = "Introduzca una contraseña valida";
                    ok='false';
        }else if($scope.user_passwd2 != $scope.user_passwd){
                    $scope.e_user = "";
                    $scope.e_email = "";
                    $scope.e_passwd = "";
                    $scope.show_reg_dialog = "Las contraseñas no coinciden";
            ok='false';
        }else{
            ok='true';
        }
           
        console.log(ok);
        if(ok == 'true' && $scope.user_user && $scope.user_email && $scope.user_passwd &&  $scope.user_passwd2){
       
            let user = {'username': $scope.user_user, 
                    'email': $scope.user_email, 
                    'password': $scope.user_passwd, 
                    're_password': $scope.user_passwd2};
            
                    console.log(user['email']);
                    services.post('login', 'valideUser', {'user_email': user['email']})
                    .then(function(response) {
                        console.log("Hay respuesta >>"+ response);
                       
                        if(response == 1){ //EXISTE USUARIO CON ESE USUARIO/EMAIL

                            toastr.error('Existe usuario/email REGISTRADO' ,'Error');
                       
                        }else if(response == 0){ // PROCEDEMOS A REGISTRAR EL USUARIO Y ENVIAR CORREO CONFIRMACION
                        
                            services.post('login', 'register', user)
                                .then(function(response2) {
                                    console.log("Hay respuesta2 >>"+ response2);

                                    toastr.success('Gracias por registrarse. Recibirá un correo de confirmación' ,'Registrado correctamente');
                                    location.href = "#/home";
                                    
                                }, function(error) {
                                    console.log(error);
                            }); // end_services
                        }//ELSEIF response
                        
                    }, function(error) {
                        console.log(error);
                    }); // end_services
        }//end_if
    };//end Scope_register

});