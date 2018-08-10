

var titulo = document.querySelector(".titulo");
	titulo.textContent = "Flávia Nutricionista";
	

//CALCULAR IMC DO PACIENTE://

//pegar os dados do paciente;
//fazer a validação do peso e altura;
//calcula o imc e insere os dados na tabela.

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i]//percorre em cada linha do array

	var tdPeso = paciente.querySelector(".info-peso")

	var peso = tdPeso.textContent;


	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso > 100) {
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido")


	}

	if (altura <= 0 || altura > 2.00) {
		console.log("Altura inválida!");
		alturaEhValida = false;
		tdAltura.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido")

	}
	if (alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc; // Usa-se o toFixed para limitar as casas decimais através do parâmetro.
		

	}
}
	function calculaImc(peso,altura) {
		var imc=0;
		imc=peso / (altura * altura);
		return imc.toFixed(2);
	}
	
//evento de click- através do elemento titulo.
//escutar através do evento utilizado: addEventListener
//função nomeada
// titulo.addEventListener("click",mostraMensagem);
// function mostraMensagem() {
// console.log('clicou!!'); }


//função anonima:
titulo.addEventListener('click', function() {
	console.log("Isso se chama função anônima")

})

//capturar evento de click no botão.
var botao = document.querySelector('#adicionar-paciente');
//console.log(botao);	

//escutar o evento de click
botao.addEventListener('click', function () {
	//console.log("clicou")
	event.preventDefault();
	console.log("Eu sou um botão e fui clicado!!!")
})
