const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
const inputEndereco = document.getElementById('endereco');
const btnCadastro = document.getElementById('Cadastrar');
const output = document.getElementById('resultado');

const tetarea= document.getElementById('petinfo')
const inputPet1 = document.getElementById('petNome1');
const inputPetIdade = document.getElementById('petIdade1');
const inputPetTipo = document.getElementById('petTipo1');
const btnAddPet = document.getElementById('adicionar-pet');


document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault();
    
    
    let nome = inputNome.value;
    let telefone = inputTelefone.value;
    let endereco = inputEndereco.value;
    
    let textearea= tetarea.value
    let petNome = inputPet1.value;
    let petIdade = inputPetIdade.value;
    let petTipo = inputPetTipo.value;

   
    output.innerHTML = `
        <h3>Cadastro realizado com sucesso!</h3>
        <p><strong>Nome do Cliente:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <h4>Informações do Pet</h4>
        <p><strong>Nome do Pet:</strong> ${petNome}</p>
        <p><strong>Idade do Pet:</strong> ${petIdade}</p>
        <p><strong>Tipo do Pet:</strong> ${petTipo}</p>
         <p><strong>Tipo do Pet:</strong> ${textearea}</p>
        
    `;
});



//ATUALIZÇOES 
//cria a funcionalidade do adicionar mais pets 