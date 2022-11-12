setInterval(update, 1000);

var screenWidth;
var screenHeight;

var tagline = document.getElementById("tagline");
//------SECCIONES------//
var p2 = document.getElementById("section2").style;
var p3 = document.getElementById("section3").style;
var p4 = document.getElementById("section4").style;
var p5 = document.getElementById("section5").style;
var p6 = document.getElementById("section6").style;
var p7 = document.getElementById("section7").style;
//------INTEGRANTES------//
var phoneints = document.getElementById("phoneints");
var tabletints = document.getElementById("tabletints");
var computerints = document.getElementById("computerints");
//------PROGRAMAS------//
var phoneprog = document.getElementById("phoneprog");
var tabletprog = document.getElementById("tabletprog");
var computerprog = document.getElementById("computerprog");
//------PROYECTOS------//
var proyecttitle = document.getElementById("proyecttitle");
var proyectimage = document.getElementById("proyectimage");
var proyectdesc = document.getElementById("proyectdesc");
var proyecturl = document.getElementById("proyecturl");
var linkindicator = document.getElementById("linkindicator");
var anterior = document.getElementById("anterior");
var siguiente = document.getElementById("siguiente");
var proyectnumber = 1;
var maxproyectnumber = 3;

//------CONTENIDO PROYECTOS------//
const titlep1 = "JuanDiv";
const urlp1 = "https://marty276.github.io/pruebaJuanDiv/";
const imagep1 = "img/proyectos/1.png";
const descp1 = "Instalación de distintos productos en vidrio crudo o vidrio templado; pelicula de seguridad con diseño totalmente personalizable o sin diseño (empresa fuera del mercado actualmente).";

const titlep2 = "Fanta";
const urlp2 = "https://marty276.github.io/fantakamanda/";
const imagep2 = "img/proyectos/2.png";
const descp2 = "Página no oficial que describe la historia y algunos aspectos de la bebida Fanta, reconocida internacionalmente.";

const titlep3 = "Notas MCV";
const urlp3 = "https://marty276.github.io/proyectos/NotasMCVbyMarthy/";
const imagep3 = "img/proyectos/3.png";
const descp3 = "Página usada para calcular la nota del cuarto periodo necesaria para aprobar el año (calibrada para una nota mínima de 3.0).";
//------CONTENIDO PROYECTOS------//

//------MENÚ------//
const menuact = document.getElementById("menuact");
var menu = document.getElementById("menu");
const menuactb = document.getElementById("menuactb");
var menub = document.getElementById("menub");
var active = false;
var activeb = false;
var deleter = false;
var deleterb = false;

proyectos();


function update(){
    screenWidth = document.getElementById("body").offsetWidth;
    screenHeight = document.documentElement.clientHeight;
    
    tagline = document.getElementById("tagline");
        
    sectionsTOP();
    taglineSPACES();
	integrantes();
	programas();
}

//------UPDATER FUNCTIONS------//

function taglineSPACES(){
    if (screenWidth <= 600) {
        tagline.innerHTML = 'Desarrolla<br>tu<br>impulso';
    }else{
        tagline.innerHTML = 'Desarrolla tu impulso';
    }
}

function sectionsTOP(){
    if (screenWidth <= 600){
        p2.top = (screenHeight - 550)+ "px";
        p3.top = (screenHeight - 550 + p2.height) + "px";
		p4.top = (screenHeight - 550 + p2.height + p3.height) + "px";
		p5.top = (screenHeight - 550 + p2.height + p3.height + p4.height) + "px";
		p6.top = (screenHeight - 550 + p2.height + p3.height + p4.height + p5.height) + "px";
		p7.top = (screenHeight - 550 + p2.height + p3.height + p4.height + p5.height + p6.height) + "px";
    }else if(screenWidth <= 1024){
        p2.top = (screenHeight - 400)+ "px";
        p3.top = (screenHeight - 400 + p2.height) + "px";
		p4.top = (screenHeight - 400 + p2.height + p3.height) + "px";
		p5.top = (screenHeight - 400 + p2.height + p3.height + p4.height) + "px";
		p6.top = (screenHeight - 400 + p2.height + p3.height + p4.height + p5.height) + "px";
		p7.top = (screenHeight - 400 + p2.height + p3.height + p4.height + p5.height + p6.height) + "px";
    }else{
		p2.top = (screenHeight - 250)+ "px";
        p3.top = (screenHeight - 250 + p2.height) + "px";
		p4.top = (screenHeight - 250 + p2.height + p3.height) + "px";
		p5.top = (screenHeight - 250 + p2.height + p3.height + p4.height) + "px";
		p6.top = (screenHeight - 250 + p2.height + p3.height + p4.height + p5.height) + "px";
		p7.top = (screenHeight - 250 + p2.height + p3.height + p4.height + p5.height + p6.height) + "px";
	}
}


function integrantes(){
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

function programas(){
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


//------PROYECTOS------//

function proyectos(){
	anterior.style.backgroundColor = "gray";
	siguiente.addEventListener("click", next);
	anterior.addEventListener("click", back);
}
function next(){
	if(proyectnumber < maxproyectnumber){
		proyectnumber += 1;
		
		proyecttitle.style.color = "var(--gris)";
		proyectdesc.style.color = "var(--gris)";
		linkindicator.style.color = "var(--gris)";
		proyectimage.style.opacity = 0;
		
		setTimeout(displayproyect, 100);	
		
		if(proyectnumber == maxproyectnumber){
			siguiente.style.backgroundColor = "gray";
		}
	}
	anterior.style.backgroundColor = "var(--cian2)";
}
function back(){
	if(proyectnumber > 1){
		proyectnumber -= 1;
		
		proyecttitle.style.color = "var(--gris)";
		proyectdesc.style.color = "var(--gris)";
		linkindicator.style.color = "var(--gris)";
		proyectimage.style.opacity = 0;
		
		setTimeout(displayproyect, 100);	
		
		if(proyectnumber == 1){
			anterior.style.backgroundColor = "gray";
		}
	}
	siguiente.style.backgroundColor = "var(--cian2)";
}

function displayproyect(){
	if(proyectnumber == 1){
		proyecttitle.innerText = titlep1;
		proyecturl.href = urlp1;
		proyectimage.src = imagep1;
		proyectdesc.innerText = descp1;
	}else if(proyectnumber == 2){
		proyecttitle.innerText = titlep2;
		proyecturl.href = urlp2;
		proyectimage.src = imagep2;
		proyectdesc.innerText = descp2;
	}else if(proyectnumber == 3){
		proyecttitle.innerText = titlep3;
		proyecturl.href = urlp3;
		proyectimage.src = imagep3;
		proyectdesc.innerText = descp3;
	}
	setTimeout(proyectcolorer, 100);
}
function proyectcolorer(){
	proyecttitle.style.color = "var(--blanco)";
	proyectdesc.style.color = "var(--blanco)";
	linkindicator.style.color = "var(--blanco)";
	proyectimage.style.opacity = 1;
}

//------PROYECTOS------//

//------MENU------//
document.addEventListener("click",delete_menu);
menuact.addEventListener("click", maa);
function maa(){
	if(active == false){
		setTimeout(menuaa, 100);
	}
}
function delete_menu(){
	if(deleter == true){
		menuaa();
	}
	deleter = false;
}
function menuaa(){
	console.log(active);
	if(active == true){
		menu.style.left = "-100%";
		menu.style.opacity = "0";
		active = false;
		console.log(active);
		deleter = false;
	}else if(active == false){
		menu.style.left = "0px";
		menu.style.opacity = "0.8";
		active = true;
		deleter = true;
	}
	
}
document.addEventListener("click",delete_menub);
menuactb.addEventListener("click", mbb);
function mbb(){
	if(activeb == false){
		setTimeout(menubb, 100);
	}
}
function delete_menub(){
	if(deleterb == true){
		menubb();
	}
	deleterb = false;
}
function menubb(){
	console.log(activeb);
	if(activeb == true){
		menub.style.transform = "translate(-120%, 0px)";
		menub.style.opacity = "0";
		activeb = false;
		deleterb = false;
	}else if(activeb == false){
		menub.style.transform = "translate(0%, 0px)";
		console.log("activando");
		menub.style.opacity = "0.8";
		activeb = true;
		deleterb = true;
	}
	
}
//------MENU------//
