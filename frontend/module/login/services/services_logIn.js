bikeShop.factory('services_logIn', ['$rootScope', 'services',  function($rootScope, services) {
    let service = {printMenu: printMenu, logOutUser:logOutUser};
  
    return service;

    function printMenu() {
        if (localStorage.token) {
          
            services.post('login', 'decodeToken', {"token":localStorage.token})
            .then(function(response) {

                services.post('login', 'obtainDataUserMenu', {"user":response})
                .then(function(response2) {
                    // console.log(response2);
                    $rootScope.showProfile = true;
                    $rootScope.showProfile2 = true;
                    $rootScope.showProfile3 = true;
                    $rootScope.menuHeader = false;
                    $rootScope.showAvatar = response2[0]['avatar'];
                    $rootScope.showName = response2[0]['name'];
                    
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
        $rootScope.totalProductsHeader=0;
    
        location.href="#/home/";
    };

}]);// end_services_login