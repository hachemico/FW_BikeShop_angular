function load_usermenu(){
    console.log("DEBUG carga init.JS >>>");
    $('#user_avatar').empty();
    $('#user_log').append( //por defecto muestra el menu para el visitante. REGISTER/LOGIN
        '<h4><i class="fa fa-user"></i> Menu Usuario</h4>'+
        '<button class="btn btn-white btn-sm" id="register-button">Register</button> &nbsp; <button class="btn btn-color btn-sm" id="login-button">Log In</>'
    ); 

    if(localStorage.getItem('token')!= null){
        var down_token = localStorage.getItem('token')
            token = down_token.replace(/"/g,''); //Quitamos las comillas para dejar el token limpio
            // console.log("DEBUG valor token LocalStorage >>>"+token);
            ajax_log('module/login/controller/controller_login.php?&op=menu&',{"token":token})
            .then(function (data) {
                // console.log(data);
                var userdata= JSON.parse(data);
                // console.log(userdata[0].name);

                if(userdata[0].type === 'admin'){ //muestra el menu para el admin.
                    $('#user_log').empty();
                    $('#user_avatar').append(
                        
                            '<img src="'+userdata[0].avatar+'"></img>'
                        
                    );    
                    $('#user_log').append(
                            '<h4><i class="fa fa-cogs"></i> Menu Admin '+ userdata[0].name +' </h4>'+
                            '<img src="'+userdata[0].avatar+'"></img>'+
                            '<button id="logout_button" class="btn btn-white btn-xs"><i class="fa fa-sign-out"></i> </i> <span> LogOut </span></button>'
                    ); 
                    $('#logout_button').click(function(){
                        localStorage.removeItem('token');
                        setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000); //Saltamos al home para lanzar la vista.
                    })


                }else if(userdata[0].type === 'client'){ //muestra el menu para el usuario loggeado.
                    $('#user_log').empty(); 
                    $('#user_avatar').append(
                        '<img src="'+userdata[0].avatar+'"></img>'
                    );     
                    $('#user_log').append(
                            '<h4><i class="fa fa-user"></i> Menu Usuario</h4>'+
                            '<img src="'+userdata[0].avatar+'"></img>'+
                            
                                    '<label >'+userdata[0].name+'</label>'+'</br>'+
                                    '<label >'+userdata[0].email+'</label>'+'</br>'+
                                    '<button id="logout_button" class="btn btn-white btn-xs"><i class="fa fa-sign-out"></i> </i> <span> LogOut </span></button>'
                    ); 
                    $('#logout_button').click(function(){
                        localStorage.removeItem('token');
                        setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000); //Saltamos al home para lanzar la vista.
                    })
                }
        
            }) //end_ajax_log
    }else{
        down_token=0;
    }
}

function login_button(){
    
    $("#login-button").click(function(){
        console.log("DEBUG CARGA EL JS. LOGIN GO GO >>>");
        setTimeout('window.location.href ="index.php?page=controller_login&op=list_login";',1000);

    }); 
    
}
function register_button(){

    $("#register-button").click(function(){
        console.log("DEBUG CARGA EL JS. REGISTER GO GO >>>");
        setTimeout('window.location.href ="index.php?page=controller_login&op=list_register";',1000);
    });
}

function log_out(){
    console.log("carga log_out >>>");
    $('#logout_button').click(function(){
        localStorage.removeItem('token');
        setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000); //Saltamos al home para lanzar la vista.
    })

}
var ajax_log = function (url, data) { // Funcion ajax_reg con promise

    // console.log(data)

    return new Promise(function (resolve) {
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data_log) {
                resolve(data_log);
            })
    })
};

$(document).ready(function () {
    log_out();
    load_usermenu();
    login_button();
    register_button();

});