console.log("Carga controller_login.js");
function login(){
 
            if(valide_login() != 0){
                
                var userinfo = $("#form_login").serialize();
                
                ajax_log(amigable('?module=login&funtion=login'), userinfo)
                .then(function (data) {

                  let dataParse=JSON.parse(data);
                   
                  if(dataParse === '0'){
                        $("#show_log_dialog").html('<span style="color: red ;"> La contraseña es Incorrecta </span>');
                    
                    }else if(dataParse === 'NOactivate'){
                        $("#show_log_dialog").html('<span style="color: red ;"> Usuario inválido. Consulte su correo para activar su sesión. </span>');
                   
                    }else if(dataParse === 'NOexist'){
                        $("#show_log_dialog").html('<span style="color: red ;"> Usuario no registrado. </span>');
                   
                    }else{ 
                        $("#show_log_dialog").empty();
                        localStorage.setItem('token',data); // guardamos el token generado en localstorage.
                        window.location.href = amigable("?module=home&funtion=list"); //Saltamos al home para lanzar la vista.
                        }//end_if/else 
                }) //end_ajax_log
            }//end_if_valideLogin

} // end function login

function recoverPass(){
    // console.log("RecoverPass function!>>");
            if(valide_recover() != 0){
                
                $("#e_rec_email").empty();
                let userinfo = {"user_email":$('#recover_email').val()};
                
                ajax_log(amigable('?module=login&funtion=recoverPass'), userinfo)
                .then(function (data) {
                   
                    let dataParse=JSON.parse(data);
                    console.log(data);

                     if(dataParse === 'errorNotExist'){
                        console.log("notExist");
                        $("#show_recover_dialog").html('<span style="color: red ;"> El usuario no existe. "Registrese" para Continuar. </span>');
                         
                    }else if(dataParse === 'errorInsertToken'){   
                        console.log("errorInsertToken"); 
                        $("#show_recover_dialog").html('<span style="color: red ;"> Se ha producido un error. Intentelo más tarde. </span>');
                       
                    }else{

                        console.log("OK");
                        $("#show_recover_dialog").empty();
                        $("#show_recover_dialog").html('<span style="color: green ;"> Proceso realizado satisfactoriamente. </span>');
                        window.location.href = amigable("?module=home&funtion=list"); //Saltamos al home para lanzar la vista.
                        
                    }//end_if/else.
                    
                }) //end_ajax_log
            }//end if_valide
}//end recover_pass


function updateRecover(){

    if(valide_updateRecover() != 0){
        
        let passwd= $("#user_confRec_passwd2").val();
        let tokenRecover= localStorage.getItem('tokenRecover');
        let arrArgument={"pass":passwd,"token":tokenRecover};
     
        ajax_log(amigable('?module=login&funtion=updateRecover'), arrArgument)
        .then(function (data) {
           
            let dataParse=JSON.parse(data);
            console.log("UPDATE RECOVER>>"+data);
            if(dataParse == 'errorUpdatePass'){
                $("#show_confRec_dialog").html('<span style="color: red ;"> Error en el proceso. Intente de nuevo. </span>');
       
            }else if(dataParse == 'OK'){    
                $("#show_confRec_dialog").empty();
                $("#show_confRec_dialog").html('<span style="color: green ;"> Proceso realizado satisfactoriamente. </span>');
                localStorage.removeItem('tokenRecover');
                window.location.href = amigable("?module=login&funtion=listLogin"); //Saltamos al home para lanzar la vista.
            }//end_if/else.
        }) //end_ajax_log
    }

}


// function socialLogin_google(){
//     console.log("socialGoogle");

// }//end socialLogin_Google

// function socialLogin_github(){
//     console.log("socialGithub");

// }//end social_login Github

// function button_socialGoogle(){
//     $("#buttonGoogle").click(function (e) {
        
//         // console.log("DEBUG on buttonGoogle click >>>");
//         socialLogin_google();
//     });

// }//end buttonGoogle

// function button_socialGithub(){
//     $("#buttonGithub").click(function (e) {
        
//         console.log("DEBUG on buttonGithub click >>>");
//         // socialLogin_github();
       
//     });

// }//end buttonGithub

// function login_button(){ //trasladado al init.js para que detecte el evento.
    
//     $("#login-button").click(function(){
//         console.log("DEBUG CARGA EL JS. LOGIN GO GO >>>");
//         setTimeout('window.location.href ="index.php?page=controller_login&op=list_login";',1000);

//     }); 
    
// }
function login_submit(){
   
    $("#login_input").click(function (e) {
        console.log("DEBUG on SUBMIT login >>>");
        e.preventDefault();
        login();
    });
}

function login_keydown(){

    $('#form_login').keypress(function (e) {
        console.log("DEBUG keydown login >>>");
        if (e.which == 13) {
            console.log("DEBUG pressEnter login >>>");
             e.preventDefault();
            login();
        }
    });  
}

function redir_register(){
   
    $("#redir_register").click(function (e) {
        console.log("DEBUG on SUBMIT redirect_register >>>");
        window.location.href =amigable("?module=login&funtion=listRegister");
    });
}

function recoverPass_click(){ //salta a la vista para introduci el correo a recuperar
   
    $("#recover_access").click(function (e) {
        console.log("DEBUG on SUBMIT recoverPass click >>>");
        window.location.href =amigable("?module=login&funtion=listRecover");
    });
}

function recoverButton(){ // introducimos el correo a recuperar.
   
    $("#recover_input").click(function (e) {
        console.log("DEBUG on SUBMIT recoverButton click >>>");
        e.preventDefault();
        recoverPass();
    });
}

function recoverPass_submit(){ // introducimos los valores para update.

    $("#confRec_input").click(function (e) {
        console.log("DEBUG on SUBMIT login >>>");
        e.preventDefault();
        updateRecover();
    });
}


$(document).ready(function () {
    // login_button();
    login_submit();
    login_keydown();
    redir_register();
    recoverPass_click();
    recoverButton();
    recoverPass_submit();
    // button_socialGithub();
    // button_socialGoogle();
    });