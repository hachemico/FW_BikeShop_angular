console.log("Carga controller_login.js");
function login(){
    console.log("DEBUG CARGA EL JS. LOGIN >>>")
     
            if(valide_login() != 0){
                var userinfo = $("#form_login").serialize();
                // console.log("DEBUG valor userinfo >>>"+ userinfo[0].value);
                ajax_log(amigable('?module=login&funtion=login'), userinfo)
                // ajax_log('module/login/controller/controller_login.php?&op=login&', userinfo)
                .then(function (data) {
                    console.log("DEBUG valor data Ajax_LOGIN >>>"+ data);
                   
                    if(data == 0){
                        // console.log("NAAAAAA");
                        $("#show_log_dialog").html('<span style="color: red ;"> La contraseña es Incorrecta </span>');
                    }else{
                        $("#show_log_dialog").empty();
                        // console.log("PAPAPAPA");
                        console.log("valor de data>>"+data)
                        localStorage.setItem('token',data); // guardamos el token generado en localstorage.
                    window.location.href = amigable("?module=home&funtion=list"); //Saltamos al home para lanzar la vista.

                    }
                    
                }) //end_ajax_log
               
            }
    
} // end function login

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
function redir_register(){
   
    $("#redir_register").click(function (e) {
        console.log("DEBUG on SUBMIT redirect_register >>>");
        window.location.href =amigable("?module=login&funtion=listRegister");
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

$(document).ready(function () {
    // login_button();
    login_submit();
    login_keydown();
    redir_register();
    
    });