function login(){
    console.log("DEBUG CARGA EL JS. LOGIN >>>")
     
            if(valide_login() != 0){
                var userinfo = $("#form_login").serialize();
                // console.log("DEBUG valor userinfo >>>"+ userinfo[0].value);
                ajax_log('module/login/controller/controller_login.php?&op=login&', userinfo)
                .then(function (data) {
                    // console.log("DEBUG valor data Ajax_LOG >>>"+ data);
                    
                    localStorage.setItem('token',data); // guardamos el token generado en localstorage.
                    setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000); //Saltamos al home para lanzar la vista.
                }) //end_ajax_log
               
                // $.ajax({
                //     type : 'POST',
                //     url  : 'module/login/controller/controller_login.php?&op=login&' + data,
                //     data : data,
                //     beforeSend: function(){	
                //         $("#error_login").fadeOut();
                //     },
                //     success: function(response){			
                //            console.log(response)		
                //         if(response=="ok"){
                //             localStorage.setItem("user", data.name);
                //             localStorage.setItem("type", data.type);
                //             localStorage.setItem("avatar", data.avatar);
                //             localStorage.setItem("email", data.email);
                //             setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000);
                //         }else if (response=="okay") {
                //             InsertCompra(); //en cart.js
                //         }else{
                //             $("#error_login").fadeIn(1000, function(){						
                //                 $("#error_login").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+' !</div>');
                //             });
                //         }
                //     }
                // });
            }
    
} // end function login


// var ajax_log = function (url, data) { // Funcion ajax_reg con promise

//     // console.log(data)

//     return new Promise(function (resolve) {
//         $.ajax({
//             type: "POST",
//             url: url,
//             data: data
//         })
//             .done(function (data_log) {
//                 resolve(data_log);
//             })
//     })
// };


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
        setTimeout('window.location.href ="index.php?page=controller_login&op=list_register";',1000)
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