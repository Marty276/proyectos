let timeid;
var tagline = document.getElementById("tagline");
var screenWidth;
var screenHeight;
var p2 = document.getElementById("section2").style;
var p3 = document.getElementById("section3").style;



updater();

function updater(){
    timeid = setInterval(update, 1000);
}

function update(){
    screenWidth = document.getElementById("body").offsetWidth;
    screenHeight = document.documentElement.clientHeight;
    console.log(screenWidth, screenHeight);
    console.log(document.getElementById("body").style)
    
    tagline = document.getElementById("tagline");
        
    section2TOP();
    taglineSPACES();

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
        console.log(p2.top, "jhvddv")
    }else{
        p2.top = (screenHeight - 100)+ "px";
        p3.top = (screenHeight - 100 + p2.height) + "px";
    }
}

//------UPDATER FUNCTIONS------//






function pp(e){
    console.log(e.target);
}