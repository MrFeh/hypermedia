$(document).bind("mobileinit", function () { 
$.support.cors = true; 
$.mobile.allowCrossDomainPages = true; });
function showDeviceDetail(id) {
    console.log("0"+id+"o");
    location.href = "./DeviceTopic.html?id="+ id;
}

function allOutlet() {
	ajax();
}

function ajax() {
	$.ajax({
        method: "POST",
        crossDomain: true,
        data: "",
        url: "./php/outlet.php",
        success: function (response) {
            if (response !== "") {
                var devices = JSON.parse(response);
				var i;
                $(".devices").html("");
                for (i = 0; i < devices.length; i++) {
                    $(".devices").append("<div class='device' id='" + i + "'></div>");
                    $("#" + i).append("<img src ='" + devices[i].img + "' class='image'>");
                    $("#" + i).append("<p class='name' style='text-align: center;'>" + devices[i].name + "</p2>");
                    $("#" + i).append("<p class='price' style='text-align: center;'> &euro; " + devices[i].price + "</p>");
					$("#" + i).append("<a type='submit' class='query btn btn-block btn-info' onclick='showDeviceDetail(" + devices[i].id + ");'>Discover it!</a>")
                }
            } else {
                $(".devices").html("");
                $(".devices").append("<div class='alert alert-info fade in'>Not found</div>");
            }
        },
        error: function (request, error) {
            console.log(request + ":" + error);
        }
    });
}