console.log("Carga controller_login.js");

bikeShop.controller('controller_login', function($scope,services,toastr) {
    
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
                            localStorage.setItem('token',response); // guardamos el token generado, en localstorage.
                            location.href = "#/home";
                            }//end_if/else 
                        
                    }, function(error) {
                        console.log(error);
                }); // end_services
        }//end_if
    };
});