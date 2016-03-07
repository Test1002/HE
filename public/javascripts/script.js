 window.onresize = function(event) {
    var html = document.documentElement;
    if (html.clientWidth < 1222) {
        document.getElementById("block-margin").style.marginRight = "80px";           
    } else {
        document.getElementById("block-margin").style.marginRight = "0px";           
    }
};