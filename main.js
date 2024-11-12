const form = document.getElementById('form-atividade');
const ImgAprovado = '<img src="./images/aprovado.png" alt="Aprovado" />';
const ImgReprovado = '<img src="./images/reprovado.png" alt="Reprovado" />';
const Atividades = [];
const Notas = [];
const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const SpanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const NotaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    AdicionaLinha();
    AtualizaTabela();
    AtualizaMediaFinal();
});

function AdicionaLinha() {
    const InputNomeAtividade = document.getElementById('NomeAtividade');
    const InputNotaAtividade = document.getElementById('NotaAtividade');

    if (Atividades.includes(InputNomeAtividade.value)) {
        alert(`A atividade: ${InputNomeAtividade.value} já foi inserida`);
    } else {
        Atividades.push(InputNomeAtividade.value);
        Notas.push(parseFloat(InputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${InputNomeAtividade.value}</td>`;
        linha += `<td>${InputNotaAtividade.value}</td>`;
        linha += `<td>${InputNotaAtividade.value >= NotaMinima ? ImgAprovado : ImgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    InputNomeAtividade.value = '';
    InputNotaAtividade.value = '';
}

function AtualizaTabela() {
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}

function AtualizaMediaFinal() {
    const MediaFinal = CalculaMediaFinal();

    document.getElementById('MediaFinalValor').innerHTML = MediaFinal.toFixed(2);
    document.getElementById('MediaFinalResultado').innerHTML = MediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado;
}

function CalculaMediaFinal() {
    let SomaDasNotas = 0;
    for (let i = 0; i < Notas.length; i++) {
        SomaDasNotas += Notas[i];
    }
    return SomaDasNotas / Notas.length
}