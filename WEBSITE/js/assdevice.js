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
        url: "./php/assdevice.php",
        success: function (response) {
			var as = JSON.parse(response);
			var i;
			$("#related").html("");
			for (i = 0; i < as.length; i++) {
				$("#related").append("<a href='DeviceTopic.html?id=" + as[i].id + "'>" + as[i].name + "</a>");
			}
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
});