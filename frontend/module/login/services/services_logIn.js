bikeShop.factory('services_logIn', ['$rootScope', 'services',  function($rootScope, services) {
    let service = {printMenu: printMenu, logOutUser:logOutUser};
  
    return service;

    function printMenu() {
        if (localStorage.token) {

            services.post('login', 'decodeToken', {"token":localStorage.token})
            .then(function(response) {

                services.post('login', 'obtainDataUserMenu', {"user":response})
                .then(function(response) {
                    
                    $rootScope.showProfile = true;
                    $rootScope.showProfile2 = true;
                    $rootScope.showProfile3 = true;
                    $rootScope.menuHeader = false;
                    $rootScope.showAvatar = response[0]['avatar'];
                    $rootScope.showName = response[0]['name'];
                    
                }, function(error) {
                    console.log(error);
                });// end_services
                
            }, function(error) {
                console.log(error);
            });// end_services
        }// end_if
          
    }// end_printMenu

    function logOutUser(){
        // console.log("Entra en el logoutUser");
        localStorage.removeItem('token');
        localStorage.removeItem('filterBikes');
        localStorage.removeItem('listTotal');
        $rootScope.showProfile = false;
        $rootScope.showProfile2 = false;
        $rootScope.showProfile3 = false;
        $rootScope.menuHeader = true;   
        location.reload();
    };


    // function currentUser(id){
    //     console.log("entra currentUser"+id)
    //     if(localStorage.token){
    //         // comprovar que el token del usuario es válido. timeExpiration.
    //         services.post('login', 'decodeTimeToken', {"token":localStorage.token})
    //             .then(function(response) {
    //                 console.log(response);
    //                 response2=JSON.parse(response);
                   
    //                 if(response2 === "CURRENT_TOKEN"){

    //                    //obtener el usuario sobre el que agregar el favs
    //                     services.post('login', 'decodeToken', {"token":localStorage.token})
    //                     .then(function(response3) {
    //                             console.log(response3);

    //                             //Insertar el favs en la tabla idUser+idBike+like/unlike
    //                             services.post('shop', 'controlFav', {"uid":response3,"idbike":id})
    //                             .then(function(response4) {
    //                                     console.log(response4);
    //                                     console.log("AAA");
    //                                     // location.href = "#/shop";
    //                                     // location.href="#/shop";
    //                                     location.reload()
        
    //                             }, function(error) {
    //                                     console.log(error);
    //                             });// end_services


    //                         }, function(error) {
    //                             console.log(error);
    //                         });// end_services


    //                 }else if(response2 === "INVALID_TOKEN"){
    //                     console.log('Adios');
    //                     toastr.error('Usuario desconectado por Seguridad. Vuelva a iniciar sesion' ,'USUARIO INVALIDO');
    //                     location.href="#/login"
    //                 }
    //                 console.log(response);

    //             }, function(error) {
    //                 console.log(error);
    //             });// end_services

    //     }else{
    //         console.log("no hay usuario");
    //         toastr.error('Para realizar esta acción, tiene que activar su sesión.' ,'USUARIO');
    //         location.href="#/login"
    //     }
    // };






}]);// end_services_login