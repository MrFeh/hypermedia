$(document).bind("mobileinit", function () { 
$.support.cors = true; 
$.mobile.allowCrossDomainPages = true; });
$(function () {
  $('[data-toggle="popover"]').popover()
})


$(function () {
  $('[rel="popover"]').popover()
})

function setDeviceByCategory(id) {
    window.open(""+id+".html");
}