
console.log("Carga utils.inc.js");
function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData
        }).done((data) => {
            resolve(data);
        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(jqXHR.responseText);
        }); // end_ajax
    });
}// end_ajaxPromise

function amigable(url) {
   
    var link="";
    url = url.replace("?", "");
    // console.log("dentro de amigable"+ url);
    url = url.split("&");
    cont = 0;
    for (var i=0;i<url.length;i++) {
    	cont++;
        var aux = url[i].split("=");
        if (cont == 2) {
        	link +=  "/"+aux[1]+"/";	
        }else{
        	link +=  "/"+aux[1];
        }
    }
    console.log("Amigable >>"+ link);
    return "http://localhost/FW_BikeShop" + link;
}               
