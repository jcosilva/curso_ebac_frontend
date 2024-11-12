const form_numeros = document.getElementById('form_numeros'); 

form_numeros.addEventListener('submit', function(e) {
    e.preventDefault();

    let CampoA = document.getElementById('CampoA').value;
    let CampoB = document.getElementById('CampoB').value;

    if (CampoA > CampoB) {
        mensagem.textContent = "O número do Campo A é maior que o número do Campo B";
        document.getElementById('CampoALabel').style.backgroundColor = 'green';
        document.getElementById('CampoBLabel').style.backgroundColor = 'red';
    } else if (CampoA === CampoB) {
        mensagem.textContent = "O número do Campo A é igual ao número do Campo B";
        document.getElementById('CampoALabel').style.backgroundColor = 'yellow';
        document.getElementById('CampoBLabel').style.backgroundColor = 'yellow';
    } else {
        mensagem.textContent = "O número do Campo B é maior que o número do Campo A";
        document.getElementById('CampoALabel').style.backgroundColor = 'red';
        document.getElementById('CampoBLabel').style.backgroundColor = 'green';
    }
})

form_numeros.addEventListener('reset', function(e) {
    e.preventDefault();

    document.getElementById('CampoA').value = "";
    document.getElementById('CampoB').value = "";
    document.getElementById('CampoALabel').style.backgroundColor = 'gray';
    document.getElementById('CampoBLabel').style.backgroundColor = 'gray';
    let CampoA = 0;
    let CampoB = 0;
    mensagem.textContent = "";
    mensagem.className = "";
})