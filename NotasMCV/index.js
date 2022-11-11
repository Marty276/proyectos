//parse float

const pt = document.getElementById("periodos").value;
const pa = document.getElementById("periodo_actual").value;
const pr = pt-pa;
console.log("Periodos restantes:",pr);

const nmin = document.getElementById("nota_min").value;
const nmax = document.getElementById("nota_max").value;
const nnec = nmin * pt;

console.log("Nota necesaria",nnec);

let inpps = document.getElementById("inpperiodos");
console.log(inpps.innerHTML);


const p1 = '<input type="text" placeholder="nota primer periodo" id="p1"/>'
const p2 = '<input type="text" placeholder="nota segundo periodo" id="p2"/>'
const p3 = '<input type="text" placeholder="nota tercer periodo" id="p3"/>'
const p4 = '<input type="text" placeholder="nota cuarto periodo" id="p4"/>'
const p5 = '<input type="text" placeholder="nota quinto periodo" id="p5"/>'
const p6 = '<input type="text" placeholder="nota sexto periodo" id="p6"/>'
const p7 = '<input type="text" placeholder="nota séptimo periodo" id="p7"/>'
const p8 = '<input type="text" placeholder="nota octavo periodo" id="p8"/>'
const p9 = '<input type="text" placeholder="nota noveno periodo" id="p9"/>'
const p10 = '<input type="text" placeholder="nota décimo periodo" id="p10"/>'

const input = document.getElementById("input");
input.addEventListener("click", crear_periodos);

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', clean)

function clean(){
	inpps.innerHTML = brbr;
	givers.style = "visibility: hidden;"
}


var brbr = "<br><br><h3>Ingresa tus notas</h3>"
const addcalc = '<br><br>';

function crear_periodos(){
	const pa = document.getElementById("periodo_actual").value;
	inpps.innerHTML = brbr;
	console.log("funciona?", pa);
	for(i = 1; i <= pa; i += 1){
		if(i == 1){
			inpps.innerHTML += p1;
		}else if(i == 2){
			inpps.innerHTML += p2;
		}else if(i == 3){
			inpps.innerHTML += p3;
		}else if(i == 4){
			inpps.innerHTML += p4;
		}else if(i == 5){
			inpps.innerHTML += p5;
		}else if(i == 6){
			inpps.innerHTML += p6;
		}else if(i == 7){
			inpps.innerHTML += p7;
		}else if(i == 8){
			inpps.innerHTML += p8;
		}else if(i == 9){
			inpps.innerHTML += p9;
		}else if(i == 10){
			inpps.innerHTML += p10;
		}
	}
	givers.style = "visibility: visible;"
}

const givers = document.getElementById("givers");
givers.addEventListener('click', resultados);

const rsltsbox = document.getElementById("resultados");

const n1 = document.getElementById("p1");
const n2 = document.getElementById("p2").value;
const n3 = document.getElementById("p3").value;
const n4 = document.getElementById("p4").value;
const n5 = document.getElementById("p5").value;
const n6 = document.getElementById("p6").value;
const n7 = document.getElementById("p7").value;
const n8 = document.getElementById("p8").value;
const n9 = document.getElementById("p9").value;
const n10 = document.getElementById("p10").value;


function resultados(){
	const nact = p1.value+p2.value+p3.value+p4.value+p5.value+p6.value+p7.value+p8.value+p9.value+p10.value;
	const prom = nact / pa;
	const nfal = nnec - nact;
	const nfalpp = nfal / pr;
	
	rsltsbox.innerHTML += "<h1>Promedio actual:</h1>";
	console.log(n1.value);
	
}




console.log(pa);

/*const btn = document.getElementById("btn");
btn.addEventListener("click",pp);

function pp(){
	console.log(pt, pa,"a");
}
*/