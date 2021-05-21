console.log("Carga firebase.js");

function config(){
    var config = {

        apiKey: LOGINSOCIAL_KEY,
        authDomain: "test-php-js-192e6.firebaseapp.com",
        databaseURL: "https://test-php-js.firebaseio.com",
        projectId: "test-php-js-192e6",
        storageBucket: "",
        messagingSenderId: LOGINSOCIAL_ID
      };    

      firebase.initializeApp(config);
}

function socialLogin_google(){

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
       
    
        var socialUser = {"user":result.user.providerData[0]};

        console.log("Email >> " + result.user.providerData[0]['email']);
       
        ajaxPromise(
            amigable("?module=login&function=socialLoginGoogle"),
            "POST",
            "JSON",
            socialUser
          )
          .then(function(data) {
           console.log("Valor socialLogin>> "+ data);
           
        //    let dataParse=JSON.parse(data);
            // console.log(dataParse);
            if(data === 'ERROR_USER' || data === 'ERROR_INSERT' ){
                $("#show_log_dialog").html('<span style="color: red ;"> Error en el Proceso. Intentelo de nuevo más tarde. </span>');
            }else{ 
                $("#show_log_dialog").empty()
                localStorage.setItem('token',data); // guardamos el token generado en localstorage.
                window.location.href = amigable("?module=home&funtion=list"); //Saltamos al home para lanzar la vista.
            }//end_if/else dataparse
          
          }).catch(function(error) {
            console.log("Error Ajax Social Login" + error); 
          });   

         
    }).catch((error) => {
                console.log("error SingSocialGoogle");     
    }); //end firebaseAuth

}//end socialLogin_Google

function socialLogin_github(){
    console.log("socialGithub");


    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('email');
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var socialUID = result.user.uid;
        var socialAvatar = result.user.photoURL;
        var socialEmail= result.user.email;
        var socialUser=result.user.provider[0];
       
        console.log("Nombre"+ socialUser);
        console.log("Email"+ socialEmail);
        console.log("Avatar"+ socialAvatar);
        console.log("Nombre"+socialName);
        console.log("Result user UID>> "+socialUID);
        // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
        // ...
    });










}//end social_login Github
function social_google(){
    $("#buttonGoogle").click(function (e) {
        console.log("DEBUG on buttonGoogle click >>>");
        socialLogin_google();
    });
}

function social_github(){
    $("#buttonGithub").click(function (e) {
        console.log("DEBUG on buttonGoogle click >>>");
        socialLogin_github();
    });
}



function Social_logOut_button(){
    $("#logoutButton").click(function (e) {
        console.log("DEBUG on logout click >>>");
        firebase.auth().signOut();
        location.reload();
    });
}
function auth_stateChanged(){

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log('AuthStateChanged', user.displayName);
        console.log('AuthStateChanged', user.email);
        console.log('AuthStateChanged', user.photoURL);
         // document.getElementById('datosuser').innerHTML = JSON.stringify(user);
        // document.getElementById('botonlogin').style.display = 'none';
        // document.getElementById('botonlogout').style.display = 'block';
        } else {
            console.log("Sin usuario logueado...");
        // document.getElementById('datosuser').innerHTML = 'Sin usuario logueado...'
        // document.getElementById('botonlogin').style.display = 'block';
        // document.getElementById('botonlogout').style.display = 'none';
        }
    });

}




$(document).ready(function () {
    social_google();
    social_github()
    config();
    auth_stateChanged();
    Social_logOut_button();
});