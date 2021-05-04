console.log("Carga controller_register.js");

function register(){
        // console.log("DEBUG dentro REGISTER >>>");
         if (valide_register() != 0) {
           
            var userinfo = $("#form_register").serialize();
               
                ajax_reg(amigable("?module=login&function=valideUser"), userinfo)
                    .then(function (data) {
                        console.log("si llega"+data);
                        if(data == 0){
                            console.log("DEBUG data No hay usuario con ese nick + email >>> ");
            
                            ajax_reg(amigable("?module=login&function=register"), userinfo)
                            .then(function (token_email) {
                                console.log("DEBUG valor data_reg: >>> "+token_email);
                                let aux_token_email = token_email.replace(/"/g, "");
                                userinfo=userinfo+'&token_email='+aux_token_email;
                                userinfo=userinfo.replace(/ /g, "")
                                $("#show_reg_dialog").html('<span style="color: green ;"> Usuario Registrado correctamente </span>');
                                console.log(userinfo);
                               
                                     ajaxPromise(
                                        amigable("?module=login&function=sendEmail"),
                                        "POST",
                                        "JSON",
                                        userinfo
                                        )
                                    .then(function (dataSendEmail) {
                                        console.log("DEBUG AjaxPromise>>> " + dataSendEmail);
                                        window.location.href =amigable("?module=login&function=listLogin");
                                     })
                                    .catch(function () {
                                         console.log("Error Ajaxpromise sendmail");
                                    });

                                   
                            }) //end_ajax_reg
                        }else if(data == 1){
                        
                            console.log("DEBUG data Usuario con ese nick + email >>> ");
                            $("#show_reg_dialog").html('<span style="color: red ;"> El correo ya existe. </span>');
                        }//end_if_else

                        // console.log("no hace na de na");
                }) //end_ajax_reg
        } //end_if
}//end_register

var ajax_reg = function (url, data) { // Funcion ajax_reg con promise

    console.log(data)

    return new Promise(function (resolve) {
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data) {
                resolve(data);
            })
    })
};
// function register_button(){ //Trasladado al init.js para que detect el evento.

//     $("#register-button").click(function(){
//         console.log("DEBUG CARGA EL JS. REGISTER GO GO >>>");
//         setTimeout('window.location.href ="index.php?page=controller_login&op=list_register";',1000);
//     });
// }
function register_submit(){
   
    $("#register_input").click(function (e) { // detectamos click para enviar el formulario
        // console.log("DEBUG on SUBMIT >>>");
        e.preventDefault();
        register();
    });
}
function register_keydown(){ //detectamos la tecla intro

    $('#form_register').keypress(function (e) {
        // console.log("DEBUG keydown register >>>");
        if (e.which == 13) {
            // console.log("DEBUG pressEnter register >>>");
             e.preventDefault();
            register();
        }
    });  
}
function redir_login(){ //redireccionamos del register al login
   
    $("#redir_login").click(function (e) {
        // console.log("DEBUG on SUBMIT redirect_login >>>");
        window.location.href =amigable("?module=login&function=listLogin");
    });
}
$(document).ready(function () {
    // register_button();
    register_submit();
    register_keydown();
    redir_login();
    
    });