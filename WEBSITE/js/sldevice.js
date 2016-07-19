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
        url: "./php/sldevice.php",
        success: function (response) {
			var sl = JSON.parse(response);
			var i;

			for (i = 0; i < sl.length; i++) {
				$("#related").append("<div class='device' style='margin-top:0' id='dev-" + i + "'></div>");
				$("#dev-" + i).append("<img src ='" + sl[i].img + "' class='image'>")
				$("#dev-" + i).append("<p class='name' style='text-align: center;'>" + sl[i].name + "</p>");
				$("#dev-" + i).append("<a href='DeviceTopic.html?id=" + sl[i].id + "'>More details</a>");
			}
     
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
});