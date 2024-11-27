//001 - Criação de array com nome e nota dos alunos
const Alunos = [
  { nome: "Julio", nota: 10 },
  { nome: "Vanessa", nota: 9 },
  { nome: "Heitor", nota: 8 },
  { nome: "Durvanil", nota: 7 },
  { nome: "Maria Helena", nota: 6 },
  { nome: "Wilson", nota: 9.5 },
  { nome: "Danilo", nota: 8.5 },
  { nome: "Wagner", nota: 5 },
  { nome: "Maria Giovanna", nota: 10 },
  { nome: "Pitro", nota: 4 },
];
console.log("----------------------");
console.log(`Total de alunos matriculados: ${Alunos.length}`);
console.log("Lista de alunos do curso EBAC:", Alunos);
console.log("----------------------");

//002 - Função que filtra os alunos com nota => 6
function FiltrarAlunosAprovados(Alunos) {
  return Alunos.filter(Alunos => Alunos.nota >= 6);
}
const AlunosAprovados = FiltrarAlunosAprovados(Alunos);
console.log("----------------------");
console.log(`Total de alunos aprovados: ${AlunosAprovados.length}`);
console.log("Lista de alunos aprovados do curso EBAC:", AlunosAprovados);
console.log("----------------------");