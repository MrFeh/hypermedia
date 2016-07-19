$(document).bind("mobileinit", function () { 
$.support.cors = true; 
$.mobile.allowCrossDomainPages = true; });
function showSmDetail(id) {
    console.log("0"+id+"o");
    location.href = "./SLTopic.html?id="+ id;
}

function allSmProm() {
	ajaxSM();
}

function ajaxSM() {
	$.ajax({
        method: "POST",
        crossDomain: true,
        data: "",
        url: "./php/smPromotions.php",
        success: function (response) {
            if (response !== "") {
                var sml = JSON.parse(response);
				var i;
                $(".sm").html("");
                for (i = 0; i < sml.length; i++) {
                    $(".sm").append("<div class='device' id='" + i + "'></div>");
                    $("#" + i).append("<img src ='" + sml[i].img + "' class='image'>");
                    $("#" + i).append("<p class='name' style='text-align: center;'>" + sml[i].name + "</p2>");
                    $("#" + i).append("<p class='price' style='text-align: center;'> &euro; " + sml[i].price + "/mese</p>");
					$("#" + i).append("<a type='submit' class='query btn btn-block btn-info' onclick='showSmDetail(" + sml[i].id + ");'>Discover it!</a>")
                }
            } else {
                $(".sm").html("");
                $(".sm").append("<div class='alert alert-info fade in'>Not found</div>");
            }
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
}