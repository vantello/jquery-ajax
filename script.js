function jokes(){  
          $.ajax({
              url: 'http://api.icndb.com/jokes/random',
              dataType: 'json',
              success: function(result){
                  var jokes = $("#resultat");
                $.each(result, function(index, elemento){
                    jokes.text(elemento.joke); // S'assigna el text que es vol.
                });
              },
              error: function(){
                  console.log("Chuck Norris is not available, you're in trouble!");
              }
          });
}

/*
    Si la petició de dades és correcte, entra dins el success,
    si no és correcta, entra dins de l'error i dona el missatge assignat.

    var chistes = $("#resultat"); --> var chistes = document.getElementById("resultat");
*/