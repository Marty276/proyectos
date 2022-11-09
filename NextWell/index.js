let timeid;
var tagline = document.getElementById("tagline");
var screenWidth;
var screenHeight;
var p2 = document.getElementById("section2").style;
var p3 = document.getElementById("section3").style;
var p3Element = document.getElementById("section3");
var p4 = document.getElementById("section4").style;
var phoneints = document.getElementById("phoneints");
var tabletints = document.getElementById("tabletints");
var computerints = document.getElementById("computerints");

var phoneprog = document.getElementById("phoneprog");
var tabletprog = document.getElementById("tabletprog");
var computerprog = document.getElementById("computerprog");


updater();

function updater(){
    timeid = setInterval(update, 1000);
}

function update(){
    screenWidth = document.getElementById("body").offsetWidth;
    screenHeight = document.documentElement.clientHeight;
    
    tagline = document.getElementById("tagline");
        
    section2TOP();
    taglineSPACES();
	ints();
	prog();
}

//------UPDATER FUNCTIONS------//

function taglineSPACES(){
    if (screenWidth <= 600) {
        tagline.innerHTML = 'Desarrolla<br>tu<br>impulso';
    }else{
        tagline.innerHTML = 'Desarrolla tu impulso';
    }
}

function section2TOP(){
    if (screenWidth <= 600){
        p2.top = (screenHeight - 280)+ "px";
        p3.top = (screenHeight - 280 + p2.height) + "px";
		p4.top = (screenHeight - 280 + p2.height + p3.height) + "px";
    }else{
        p2.top = (screenHeight - 100)+ "px";
        p3.top = (screenHeight - 100 + p2.height) + "px";
		p4.top = (screenHeight - 100 + p2.height + p3.height) + "px";
    }
}


function ints(){
	if (screenWidth <= 600){
		phoneints.style = "";
		tabletints.style = "height: 0px; overflow: hidden";
		computerints.style = "height: 0px; overflow: hidden";
	}else if(screenWidth <= 1024){
		phoneints.style = "height: 0px; overflow: hidden";
		tabletints.style = "";
		computerints.style = "height: 0px; overflow: hidden";
	}else{
		phoneints.style = "height: 0px; overflow: hidden";
		tabletints.style = "height: 0px; overflow: hidden";
		computerints.style = "";
	}
}

function prog(){
	if (screenWidth <= 600){
		phoneprog.style = "";
		tabletprog.style = "height: 0px; overflow: hidden";
		computerprog.style = "height: 0px; overflow: hidden";
	}else if(screenWidth <= 1024){
		phoneprog.style = "height: 0px; overflow: hidden";
		tabletprog.style = "";
		computerprog.style = "height: 0px; overflow: hidden";
	}else{
		phoneprog.style = "height: 0px; overflow: hidden";
		tabletprog.style = "height: 0px; overflow: hidden";
		computerprog.style = "";
	}
}

//------UPDATER FUNCTIONS------//

