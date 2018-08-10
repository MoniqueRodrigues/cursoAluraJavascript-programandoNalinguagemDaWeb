

//ADICIONANDO PACIENTE NA TABELA://


//capturar evento de click no botão.
//Através do formulário, temos acesso aos seus inputs, 
//acessando através da sua propriedade name. 
//É possível vermos no HTML que todos os inputs possuem
// uma propriedade name, bastando utilizá-lo para termos acesso ao input:
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function (event) {
	event.preventDefault();
	//Vamos adicionar um id ao formulário
	//Agora conseguimos selecioná-lo no mundo JavaScript
	

	//extraindo do form os valores:
	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;


	//Criando tr e td para cada paciente:
	var pacienteTr = document.createElement("tr");
	
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	//colocando valores dentro do td:
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent= calculaImc(peso,altura);
	


	//Agora devemos adicionar cada td dentro da tr. No JavaScript existe uma 
	//função chamada appendChild. Ela adiciona como filho o elemento passado a ela como parâmetro. Logo, vamos chamar 
	//essa função na tr, passando a td como parâmetro, uma por uma:
	
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);


	//Agora já temos algo mais próximo do que é um paciente, e 
	//falta colocarmos ele dentro da tabela.Para isto, vamos selecionar a 
	//tabela, o tbody do HTML através do seu id, e utilizar a 
	//função appendChild para adicionar a tr como sua filha:

	var tabela= document.querySelector("#tabela-pacientes");
	//appendChild para colocar o pacienteTr dentro da tabela.
	tabela.appendChild(pacienteTr);

	//Agora, no momento em que preenchemos os dados do formulário e clicamos em Adicionar,
	// o paciente é adicionado à tabela!
	

});