var form = document.getElementById("form");
var listaContatos = [];

// função que evita que a página se recarregue cada vez que é enviada uma mensagem pelo formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // capturando os dados
  var nomeForm = document.getElementById("nome");
  var emailForm = document.getElementById("email");
  var assuntoForm = document.getElementById("assunto");
  var mensagemForm = document.getElementById("mensagem");
  // almacenando a data adicionada pelo visitante do site num json
  data = {
    nome: nomeForm.value,
    email: emailForm.value,
    assunto: assuntoForm.value,
    mensagem: mensagemForm.value,
  };

  listaContatos.push(data);
  // Mais adinte serão almacenados apropriadamente
});
