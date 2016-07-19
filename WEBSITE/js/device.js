$(document).bind("mobileinit", function () { 
$.support.cors = true; 
$.mobile.allowCrossDomainPages = true; });
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


$("document").ready(function(){
	console.log("la funzione loadass stata chiamata correttamente");
	var value = getUrlVars()["id"];
	console.log(value);
	$.ajax({
        method: "GET",
        crossDomain: true,
        data: {id:value},
        url: "./php/device.php",
        success: function (response) {
			var smartphones = JSON.parse(response);
			var i;
			$("#overview").html("");
			$("#technical").html("");
			for (i = 0; i < smartphones.length; i++) {
				$("#overview").append("<p style='font-size:30; color:darkblue; text-align:left; margin-left:70px; margin-bottom:40px'>Overview:</p>");
				$("#overview").append("<div class='col-sm-4 conteiner-fluid' style='text-align:right' id='thumbnail-" + i + "'></div>");
				$("#thumbnail-" + i).append("<img src ='" + smartphones[i].img + "' class='image'>");
				
				$("#overview").append("<div class='col-sm-8 conteiner-fluid' style='text-align:center' id='description-" + i + "'></div>");
				$("#description-" + i).append("<p class='name' style='text-align: center;'><b>" + smartphones[i].name + "</b></p>");
				$("#description-" + i).append("<p style='text-align: center;'>" + smartphones[i].description + "</p>");
				$("#description-" + i).append("<p class='price' style='text-align: center;'>&euro; " + smartphones[i].price + "</p>");
				
				
				$("#technical").append("<p style='font-size:30; color:darkblue; text-align:left; margin-left:70px; margin-bottom:40px'>Technical:</p>");
				$("#technical").append("<p style='text-align: left; margin-left:70px'>" + smartphones[i].technical + "</p>");
			}
     
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
});