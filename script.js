/* function loadJSON(callback) {   


    alert(clienteTexto);
    let clienteTexto = '{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}'
  let cliente = JSON.parse(clienteTexto)

document.getElementById("demo").innerHTML = cliente.nome + ", " + cliente.idade + ' - ' + cliente.cidade + '/' + cliente.estado
 }

 function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
    });
  }  */

  /*  let clienteTexto = '{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}'
  let cliente = JSON.parse(clienteTexto)

document.getElementById("demo").innerHTML = cliente.nome + ", " + cliente.idade + ' - ' + cliente.cidade + '/' + cliente.estado */

$.getJSON("dados.json", function(data) {
  var dados = data.dados;

  for (i = 0; i < dados.length; i++) {
    saida += '<div class="row">';
    saida += '<div class="col-lg-4 band-img">';
    saida += '<img src="' + dados[i].foto + '" alt="' + dados[i].nome + '" title="' + dados[i].cargo + '">';
    saida += '</div>';
    saida += '</div>';
  }

  document.getElementById('tela').innerHTML = saida;
});