function valide_register(){

	console.log("DEBUG INTO >> VALIDE_REGISTER >>>");

	var mailp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	// var e_name="", e_surname="",e_user="", e_mail="",e_passwd="", e_passwd2="";
//user_name	
	if(document.form_register.user_name.value.length === 0){
		document.getElementById('e_name').innerHTML = "Tienes que escribir el nombre";
		document.form_register.user_name.focus();
		return 0;
	}
	if(document.form_register.user_name.value.length < 2){
		document.getElementById('e_name').innerHTML = "El nombre tiene que tener más de 2 caracteres";
		document.form_register.user_name.focus();
		return 0;
	}
	document.getElementById('e_name').innerHTML = "";

	//user_surname
	if(document.form_register.user_surname.value.length === 0){
		document.getElementById('e_surname').innerHTML = "Tienes que escribir el apellido";
		document.form_register.user_surname.focus();
		return 0;
	}
	if(document.form_register.user_surname.value.length <= 2){
		document.getElementById('e_surname').innerHTML = "El apellido tiene que tener más de 2 caracteres";
		document.form_register.user_surname.focus();
		return 0;
	}
	document.getElementById('e_surname').innerHTML = "";
	
	//user_mail
	if(document.form_register.user_email.value.length === 0){
		document.getElementById('e_email').innerHTML = "Tienes que escribir el mail";
		document.form_register.user_email.focus();
		return 0;
	}
	if(!mailp.test(document.form_register.user_email.value)){
		document.getElementById('e_email').innerHTML = "El formato del mail es invalido";
		document.form_register.user_email.focus();
		return 0;
	}
	document.getElementById('e_email').innerHTML = "";
	
	//user_user
	if(document.form_register.user_user.value.length === 0){
		document.getElementById('e_user').innerHTML = "Tienes que escribir el usuario";
		document.form_register.user.focus();
		return 0;
	}
	if(document.form_register.user_user.value.length <= 2){
		document.getElementById('e_user').innerHTML = "El usuario tiene que tener más de 2 caracteres";
		document.form_register.user.focus();
		return 0;
	}
	document.getElementById('e_user').innerHTML = "";

	//user_password
	if(document.form_register.user_passwd.value.length === 0){
		document.getElementById('e_passwd').innerHTML = "Tienes que escribir la contraseña";
		document.form_register.user_passwd.focus();
		return 0;
	}
	if(document.form_register.user_passwd.value.length < 6){
		document.getElementById('e_passwd').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
		document.form_register.user_passwd.focus();
		return 0;
	}
	document.getElementById('e_passwd').innerHTML = "";
	//user_password2
	if(document.form_register.user_passwd2.value.length === 0){
		document.getElementById('e_passwd2').innerHTML = "Tienes que escribir la contraseña";
		document.form_register.user_passwd2.focus();
		return 0;
	}
	if(document.form_register.user_passwd.value != document.form_register.user_passwd2.value){
		document.getElementById('e_passwd2').innerHTML = "Las contraseñas no coinciden";
		document.formregister.user_passwd2.focus();
		return 0;
	}
	document.getElementById('e_passwd2').innerHTML = "";

}	
