console.log("carga validate_UpdateRecover.js");

function valide_updateRecover(){
	console.log("entra en el valide_updateRecover");
//user_password
		
        if(document.form_confirmRecover.user_confRec_passwd.value.length === 0){
			document.getElementById('e_confRec_passwd').innerHTML = "Tienes que escribir la contraseña";
			document.form_confirmRecover.user_confRec_passwd.focus();
			return 0;
		}
		if(document.form_confirmRecover.user_confRec_passwd.value.length < 6){
			document.getElementById('e_confRec_passwd').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
			document.form_confirmRecover.user_confRec_passwd.focus();
			return 0;
		}
		document.getElementById('e_confRec_passwd').innerHTML = "";

        
        if(document.form_confirmRecover.user_confRec_passwd2.value.length === 0){
			document.getElementById('e_confRec_passwd2').innerHTML = "Tienes que escribir la contraseña";
			document.form_confirmRecover.user_confRec_passwd2.focus();
			return 0;
		}
		// if(document.form_confirmRecover.user_confRec_passwd2.value.length < 6){
		// 	document.getElementById('e_confRec_passwd2').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
		// 	document.form_confirmRecover.user_confRec_passwd2.focus();
		// 	return 0;
		// }
		document.getElementById('e_confRec_passwd2').innerHTML = "";
        
        if($("#user_confRec_passwd").val() != $("#user_confRec_passwd2").val()){
			document.getElementById('show_confRec_dialog').innerHTML = "Las contraseñas no coinciden.";
			document.form_confirmRecover.user_confRec_passwd.focus();
			return 0;
		}

}