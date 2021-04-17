function valide_login(){
	
	var mailp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		//user_mail
		if(document.form_login.user_log_email.value.length === 0){
			document.getElementById('e_log_email').innerHTML = "Tienes que escribir el mail";
			document.form_login.user_log_email.focus();
			return 0;
		}
		if(!mailp.test(document.form_login.user_log_email.value)){
			document.getElementById('e_log_email').innerHTML = "El formato del mail es invalido";
			document.form_login.user_log_email.focus();
			return 0;
		}
		document.getElementById('e_log_email').innerHTML = "";
		//user_password
		if(document.form_login.user_log_passwd.value.length === 0){
			document.getElementById('e_log_passwd').innerHTML = "Tienes que escribir la contraseña";
			document.form_login.user_log_passwd.focus();
			return 0;
		}
		if(document.form_login.user_log_passwd.value.length < 6){
			document.getElementById('e_log_passwd').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
			document.form_login.user_log_passwd.focus();
			return 0;
		}
		document.getElementById('e_log_passwd').innerHTML = "";
}