$(document).bind("mobileinit", function () { 
$.support.cors = true; 
$.mobile.allowCrossDomainPages = true; });
function showDeviceDetail(id) {
    console.log("0"+id+"o");
    location.href = "./DeviceTopic.html?id="+ id;
}

function allNetworking() {
	$(document).ready(function(){
		var data = {brand: "", range: ""};
		ajax(data);
	});
}

function selectFilter() {
    var data = {brand: "", range: ""};
    
    var brand = document.getElementsByName("Brand")[0].value;
    var price = document.getElementsByName("Price")[0].value;
    
    if (brand !== "") {
        data["brand"] = "'" + brand + "'";
	}
    if (price !== "") {
        data["range"] = "'" + price + "'";
	}
	
	ajax(data);
}

function ajax(data) {
	$.ajax({
        method: "POST",
        crossDomain: true,
        data: data,
        url: "./php/networking.php",
        success: function (response) {
            if (response !== "") {
                var networking = JSON.parse(response);
				var i;
                $(".devices").html("");
                for (i = 0; i < networking.length; i++) {
                    $(".devices").append("<div class='device' id='" + i + "'></div>");
                    $("#" + i).append("<img src ='" + networking[i].img + "' class='image'>");
                    $("#" + i).append("<p class='name' style='text-align: center;'>" + networking[i].name + "</p2>");
                    $("#" + i).append("<p class='price' style='text-align: center;'> &euro; " + networking[i].price + "</p>");
					$("#" + i).append("<a type='submit' class='query btn btn-block btn-info' onclick='showDeviceDetail(" + networking[i].id + ");'>Discover it!</a>")
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