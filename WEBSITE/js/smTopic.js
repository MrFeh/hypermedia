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
        url: "./php/smTopic.php",
        success: function (response) {
            var smarts = JSON.parse(response);
			var i;
			$("#slimg").html("");
            $("#descriptions").html("");
            $("#related").html("");
			for (i = 0; i < smarts.length; i++) {
				$("#slimg").append("<img src='" + smarts[i].img + "' class='image'>");
				$("#descriptions").append("<h style='font-size: 30; color: #003d97'>" + smarts[i].name +"</h>");
                $("#descriptions").append("<p style='margin-top: 20px'>" + smarts[i].description + "</p>");
			}
     
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
});