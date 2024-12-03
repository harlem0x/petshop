const tipoServico = document.getElementById("tipo-servico"); 
const dataInput = document.getElementById("data"); 
const horarioInput = document.getElementById("horario");
const agendarButton = document.getElementById("agendar-servico"); 


agendarButton.addEventListener('click', function(){
    let servico = tipoServico.value;
    let data = dataInput.value;
    let hora= horarioInput.value;
    

    const resultado1 =document.getElementById('resultado')
    resultado1.innerHTML =`
    <p>Serviço: <strong>${servico}</strong></p>
        <p>Data: <strong>${data}</strong></p>
        <p>Hora: <strong>${hora}</strong></p>
    `
    

})

