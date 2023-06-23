function ordenarPorMedia(a, b){
  return b.media - a.media ;
}

let alunos = [
  {nome: 'Marcelo', nota1: 9, nota2: 9.5},
  {nome: 'Maria', nota1: 10, nota2: 9.5},
  {nome: 'Getulio', nota1: 4, nota2: 4},
  {nome: 'José', nota1: 8, nota2: 5},
  {nome: 'Matilda', nota1: 10, nota2: 10}
]

let mediaAlunos = alunos.map((aluno) => {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  aluno.media = media;
  return aluno;
})

mediaAlunos.sort(ordenarPorMedia);

mediaAlunos.forEach((mediaAluno) => {
  console.log(`Aluno(a): ${mediaAluno.nome}, Média: ${mediaAluno.media}`)
})

