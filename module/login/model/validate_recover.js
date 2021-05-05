function valide_recover(){
	
	var mailp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		//user_mail
		if(document.form_recover.recover_email.value.length === 0){
			document.getElementById('e_rec_email').innerHTML = "Tienes que escribir el mail";
			document.form_recover.recover_email.focus();
			return 0;
		}
		if(!mailp.test(document.form_recover.recover_email.value)){
			document.getElementById('e_rec_email').innerHTML = "El formato del mail es invalido";
			document.form_recover.recover_email.focus();
			return 0;
		}
}