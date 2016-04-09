/*Logging form*/

function show(state) {
        document.getElementById('window').style.display = state;            
        document.getElementById('wrap').style.display = state;  
        document.getElementById('form1').style.display = state;  
        document.getElementById('form2').style.display = "none";        
}
function showForm(formOrigin, formToOpen) {
	document.getElementById(formOrigin).style.display = "none";  
	document.getElementById(formToOpen).style.display = "block";  
}


/*Authorized show*/

function showSub(state) {
    document.getElementById('authorized').style.display = state;
    document.getElementById('subMenuWrap').style.display = state;    
}


/*Resizing script*/


window.onresize = function(event) {
    var html = document.documentElement;
    if (html.clientWidth < 1170) {
        document.getElementById("main-menu-font").style.fontSize = "16px";
        
    } else {
        document.getElementById("main-menu-font").style.fontSize = "20px";
    
    }
    if (html.clientWidth < 1300) {
        document.getElementById("block1").style.height= "290px";   
        document.getElementById("block1").style.width = "341px";
        document.getElementById("block2").style.height = "290px";   
        document.getElementById("block2").style.width = "341px"; 
        document.getElementById("block3").style.height = "290px";   
        document.getElementById("block3").style.width = "341px"
        document.getElementById("teacher_id").style.height = "390px";
        document.getElementById("teacher_id").style.width = "335px";
        document.getElementById("teacher_id2").style.height = "390px";
        document.getElementById("teacher_id2").style.width = "335px";
        document.getElementById("teacher_id3").style.height = "390px";
        document.getElementById("teacher_id3").style.width = "335px";
        document.getElementById("words1").style.display = "none"
        document.getElementById("words2").style.display = "none"
    } else {
        document.getElementById("block1").style.height = "350px";     
        document.getElementById("block1").style.width = "429px";   
        document.getElementById("block2").style.height = "350px";     
        document.getElementById("block2").style.width = "429px"; 
        document.getElementById("block3").style.height = "350px";     
        document.getElementById("block3").style.width = "429px";
        document.getElementById("block3").style.marginRight = "0px"; 
        document.getElementById("teacher_id").style.height = "532px"; 
        document.getElementById("teacher_id").style.width = "424px";
        document.getElementById("teacher_id2").style.height = "532px"; 
        document.getElementById("teacher_id2").style.width = "424px";
        document.getElementById("teacher_id3").style.height = "532px"; 
        document.getElementById("teacher_id3").style.width = "424px";
        document.getElementById("words1").style.display = "block"
        document.getElementById("words2").style.display = "block"
    }
}

/*Onload Script*/


function a() {

    var html = document.documentElement;
    if (html.clientWidth < 1170) {
        document.getElementById("main-menu-font").style.fontSize = "16px";
        
    } else {
        document.getElementById("main-menu-font").style.fontSize = "20px";
    
    }
    if (html.clientWidth < 1300) {
        document.getElementById("words1").style.display = "none"
        document.getElementById("words2").style.display = "none"
        document.getElementById("block1").style.height= "290px";   
        document.getElementById("block1").style.width = "341px";
        document.getElementById("block2").style.height = "290px";   
        document.getElementById("block2").style.width = "341px"; 
        document.getElementById("block3").style.height = "290px";   
        document.getElementById("block3").style.width = "341px"
        document.getElementById("teacher_id").style.height = "390px";
        document.getElementById("teacher_id").style.width = "335px";
        document.getElementById("teacher_id2").style.height = "390px";
        document.getElementById("teacher_id2").style.width = "335px";
        document.getElementById("teacher_id3").style.height = "390px";
        document.getElementById("teacher_id3").style.width = "335px";
    } else {
        document.getElementById("words1").style.display = "block"
        document.getElementById("words2").style.display = "block"
        document.getElementById("block1").style.height = "350px";     
        document.getElementById("block1").style.width = "429px";   
        document.getElementById("block2").style.height = "350px";     
        document.getElementById("block2").style.width = "429px"; 
        document.getElementById("block3").style.height = "350px";     
        document.getElementById("block3").style.width = "429px";
        document.getElementById("block3").style.marginRight = "0px"; 
        document.getElementById("teacher_id").style.height = "532px"; 
        document.getElementById("teacher_id").style.width = "424px";
        document.getElementById("teacher_id2").style.height = "532px"; 
        document.getElementById("teacher_id2").style.width = "424px";
        document.getElementById("teacher_id3").style.height = "532px"; 
        document.getElementById("teacher_id3").style.width = "424px";
    }
}


/*Scroll button*/


var scrolly = 0;
var distance = 40;
var speed = 24;
function autoScrollTo(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var bodeHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\''+el+'\')', 24);
    if (yPos > bodeHeight) {
        clearTimeout(animator);
    } else {
        if(currentY < targetY-distance) {
            scrollY = currentY+distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
}

/*Курс описание*/

var actualState = true;
function showDescription () {
    if (actualState) {
        document.getElementById("block-hiden-id").style.display = "block";
        document.getElementById("test").style.transform = "rotate(225deg) scale(0.73)";
        document.getElementById("test").style.top = "8px";
        actualState = false;
    } else {
        document.getElementById("block-hiden-id").style.display = "none";
        document.getElementById("test").style.transform = "rotate(45deg) scale(0.73)";
        document.getElementById("test").style.top = "0px";
        actualState = true;
    }
}


