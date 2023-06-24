class Livros {
  titulo;
  autor;
  anoPublicacao;
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
  obterInformacoes(){
    return `Informações: Livro "${this.titulo}" do autor "${this.autor}" de ${this.anoPublicacao}.`
  }
}

let livro1 = new Livros('Primeiros Passos com React: Construindo Aplicações web', 'Stoyan Stefanov', 2016);
let livro2 = new Livros('Código limpo: Habilidades práticas do Agile Software', 'Robert C. Martin', 2009);
let livro3 = new Livros('Engenharia de software', 'Roger S. Pressman', 2021);

console.log(livro1.obterInformacoes());
console.log(livro2.obterInformacoes());
console.log(livro3.obterInformacoes());
