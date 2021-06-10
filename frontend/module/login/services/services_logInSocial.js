bikeShop.factory('services_logInSocial', ['services',function() {
    let service = {initialize: initialize};
    return service;
    function initialize() {
      console.log("");
    var config = {

        apiKey: LOGINSOCIAL_KEY,
        authDomain: "test-php-js-192e6.firebaseapp.com",
        databaseURL: "https://test-php-js.firebaseio.com",
        projectId: "test-php-js-192e6",
        storageBucket: "",
        messagingSenderId: LOGINSOCIAL_ID
      };    

      firebase.initializeApp(config);
 }// end_initialize
   
}]);// end_services_logInSocial

bikeShop.factory('services_Google',['services','toastr','services_logIn','services_cart', function(services,toastr,services_logIn, services_cart) {
  let service = {logIn: logIn};
  return service;
  function logIn() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
   
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
       
        var socialUser = {"user":result.user.providerData[0]};
        // console.log("Social Google>> " + result.user.providerData[0]);
       
        services.post('login', 'socialLoginGoogle',socialUser)
        .then(function(response2) {
            // console.log("Hay respuesta >>"+ response2);
           
            if(response2 === 'ERROR_USER' || response2 === 'ERROR_INSERT' ){
                  
                  toastr.error('Error en el Proceso, Intentelo de nuevo más tarde.' ,'Error');
                }else{ 
 
                  localStorage.setItem('token',response2); // guardamos el token generado en localstorage.
                  services_logIn.printMenu();
                  toastr.success('Bienvenido a BikeShop' ,'BikeShop');
                  services_cart.listQtyHeader('GOOGLE='+result.user.providerData[0]['uid']+'');

                  location.href ="#/home/";
                }//end_if/else 
            
        }, function(error2) {
            console.log(error2);
        }); // end_services    
    }).catch((error2) => {
                console.log(error2);    
    }); //end firebaseAuth
 }// end_logIn
}]);// end_services_Google

bikeShop.factory('services_GitHub', ['services','toastr','services_logIn','services_cart', function(services,toastr,services_logIn,services_cart) {
  let service = {logIn: logIn};
  return service;
  function logIn() {

    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('email');

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {

        var socialUser = {'user':result.user.providerData[0]};
        
        services.post('login', 'socialLoginGithub',socialUser)

        .then(function(response) {
            console.log("Hay respuesta >>"+ response);
           
            if(response === 'ERROR_USER' || response === 'ERROR_INSERT' ){
                  
                  toastr.error('Error en el Proceso, Intentelo de nuevo más tarde.' ,'Error');
                }else{ 
 
                  localStorage.setItem('token',response); // guardamos el token generado en localstorage.
                  services_logIn.printMenu();
                  toastr.success('Bienvenido a BikeShop' ,'BikeShop');
                  services_cart.listQtyHeader('GITHUB='+result.user.providerData[0]['uid']+'');
                  location.href ="#/home/";
                }//end_if/else 
            
        }, function(error2) {
            console.log(error2);
        }); // end_services  

    }).catch((error) => {
        console.log(error);
    });
  }// end_logIn

  
}]); 