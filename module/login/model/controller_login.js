console.log("Carga controller_login.js");
function login(){
 
            if(valide_login() != 0){
                
                var userinfo = $("#form_login").serialize();
                
                ajax_log(amigable('?module=login&funtion=login'), userinfo)
                .then(function (data) {
                  
                    if(data == 0){
                      
                        $("#show_log_dialog").html('<span style="color: red ;"> La contraseña es Incorrecta </span>');
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
                    console.log(data);
                    let dataParse=JSON.parse(data);
                    console.log("valor de dataparse>"+dataParse);
                    if(dataParse ==='OK'){
                        $("#show_recover_dialog").empty();
                        $("#show_recover_dialog").html('<span style="color: green ;"> Proceso realizado satisfactoriamente. </span>');
                        window.location.href = amigable("?module=home&funtion=list"); //Saltamos al home para lanzar la vista.
                    
                    }else if(dataParse === 'errorNotExist'){
                      
                        $("#show_recover_dialog").html('<span style="color: red ;"> El usuario no existe. "Registrese" para Continuar. </span>');
                         
                    }else if(dataParse === 'errorInsertToken'){    
                        $("#show_recover_dialog").html('<span style="color: red ;"> Se ha producido un error. Intentelo más tarde. </span>');
                       
                    }//end_if/else.
                    
                }) //end_ajax_log
            }

}


function updateRecover(){

    if(valide_updateRecover() != 0){
        
        let passwd= $("#user_confRec_passwd2").val()
        let tokenRecover= localStorage.getItem('tokenRecover');
        let arrArgument={"pass":passwd,"token":tokenRecover}
     
        ajax_log(amigable('?module=login&funtion=updateRecover'), arrArgument)
        .then(function (data) {
            console.log(data);
            let dataParse=JSON.parse(data);
        
            if(dataParse === 'errorUpdatePass'){
                $("#show_confRec_dialog").html('<span style="color: red ;"> Error en el proceso. Intente de nuevo. </span>');
       
            }else if(dataParse === 'OK'){    
                $("#show_confRec_dialog").empty();
                $("#show_confRec_dialog").html('<span style="color: green ;"> Proceso realizado satisfactoriamente. </span>');
                localStorage.removeItem('tokenRecover');
                window.location.href = amigable("?module=login&funtion=listLogin"); //Saltamos al home para lanzar la vista.
            }//end_if/else.
        }) //end_ajax_log
    }

}
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

function recoverPass_click(){
   
    $("#recover_access").click(function (e) {
        console.log("DEBUG on SUBMIT recoverPass click >>>");
        window.location.href =amigable("?module=login&funtion=listRecover");
    });
}

function recoverButton(){
   
    $("#recover_input").click(function (e) {
        console.log("DEBUG on SUBMIT recoverButton click >>>");
        e.preventDefault();
        recoverPass();
    });
}

function recoverPass_submit(){

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
    });