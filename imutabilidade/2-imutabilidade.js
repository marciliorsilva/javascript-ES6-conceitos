const estudantes = [
    {
        nome: 'Marcilio',
        nota: 7
    },
    {
        nome: 'Fulano',
        nota: 4
    },
    {
        nome: 'Sicrano',
        nota: 10
    }

];

function getAlunoAprovado(listaEstudantes){
    return estudantes.filter(estudante => estudante.nota >= 7 );
} 

console.log('Alunos Aprovados');
console.log(getAlunoAprovado(estudantes));

console.log('\nLista de alunos');
console.log(estudantes);