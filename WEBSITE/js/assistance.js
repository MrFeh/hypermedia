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
    var value = getUrlVars()["id"];
    
    $.ajax({
        method: "GET",
        crossDomain: true,
        data: {id:value},
        url: "./php/assistance.php",
        success: function (response) {
            var assistances = JSON.parse(response);
			var i;
			$("#overview").html("");
            $("#faq").html("");
			for (i = 0; i < assistances.length; i++) {
				$("#overview").append("<h1>" + assistances[i].name + "</h1>");
				$("#overview").append("<p>" + assistances[i].description +"</p>");
                $("#faq").append("<p>" + assistances[i].faq + "</p>");
			}
     
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
});