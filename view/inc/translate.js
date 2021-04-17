function cambiarIdioma(lang) {
    // Habilita las 2 siguientes para guardar la preferencia.
    language = lang || localStorage.getItem('app-lang') || 'es';
    var Element= document.querySelectorAll('[data-tr]');

      $.ajax({
          url: 'view/inc/language/'+language+'.json',
          type: 'POST',
          dataType: 'JSON',
          success: function (data) {

           // console.log("DEBUG SUCCES");
           
              for (var c = 0; c < Element.length; c++) {
                if(language!='es'){
                  Element[c].innerHTML= data[language][Element[c].dataset.tr];
                }else{
                  Element[c].innerHTML= Element[c].dataset.tr;
                }
              }
          }
      })
      localStorage.setItem('app-lang',language);
    }
  
 
  $(document).ready(function(){
  
    cambiarIdioma();

    $("#btn-es").on("click", function(){
      cambiarIdioma('es');
      console.log("idioma es");
    });

    $("#btn-en").on("click", function(){
      cambiarIdioma('en');
      console.log("idioma en");
    });
    $("#btn-va").on("click", function(){
      cambiarIdioma('va');
      console.log("idioma va");
    });
     
   });