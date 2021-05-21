function addContactEvents () {
    $(document).on('click', '#send-email', function () {
        checkEmail();
        // console.log("Debug Click_send_email >>>");

    });
}// end_addContactEvents

function checkEmail() {
    // console.log("Debug Click_send_email_2 >>>");

    let regName = /^[A-Za-z\s]{6,60}$/;
    let regMatter = /^[A-Za-z-\s]{6,60}$/;
    let regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,6}.[a-z]{2,4}$/;
    let regMessage = /^[A-Za-z0-9-\s.]{15,200}$/;
    let fields = {'#contact-name': regName, '#contact-email': regEmail, '#contact-matter': regMatter,'#message': regMessage};
    let keys = Object.keys(fields);
    let error = false;
    //////
    $('.error').remove();
    for (row in keys) {
        result = regExContact(fields[keys[row]], $(keys[row]).val());
        if (result === false) {
            $('<span></span>').attr({'class': 'error'}).html("The string isn't valid.").appendTo($(keys[row]).parent());
            error = true;
        }else if (result === -1) {
            $('<span></span>').attr({'class': 'error'}).html("This field can't be empty.").appendTo($(keys[row]).parent());
            error = true;
        }// end_else
    }// end_for
    if (error === false) {
        sendEmail({name: $('#contact-name').val(), email: $('#contact-email').val(), matter: $('#contact-matter').val() ,message: $('#message').val(),fromEmail: 'hugo_mico@hotmail.com'});
    }// end_if
    //////
}// end_checkEmail

function regExContact(regEx, value) {
    if (value.length > 0) {
        return regEx.test(value);
    }// end_if
    //////
    return -1;
}// end_regExContact

function sendEmail(content) {
    // friendlyURL('?page=contact&op=sendEmail')
  
    ajaxPromise(
        // "../../index.php?module=contact&function=sendEmail",
        amigable("?module=contact&function=sendEmail"),
        "POST",
        "JSON",
        content
      )
    .then(function(data) {
        console.log(data);
      
        $("#info_send").html('<span style="color: green ;"> Mensaje enviado, Grácias. </span>');
            //  toastr.success('Email sended');
        
     }).catch(function(error) {
            // toastr.error('Something happend when trying to send.' ,'Error');
            console.log("ErrorsendMail> "+error);
            $("#info_send").html('<span style="color: red ;"> Error en el envio </span>');
        //  });
    });
}// end_sendEmail

$(document).ready(function() {
   
    addContactEvents();
    localStorage.setItem('currentPage', 'contact');
});