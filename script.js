function jokes(){  
          $.ajax({
              url: 'http://api.icndb.com/jokes/random',
              dataType: 'json',
              success: function(result){
                  var chistes = $("#resultat");
                $.each(result, function(index, elemento){
                    chistes.text(elemento.joke); // S'assigna el text que es vol.
                });
              },
              error: function(){
                  console.log("no va");
              }
          });
}

/*
    Si la petició de dades és correcte, entra dins el success,
    si no és correcta, entra dins de error i dona el missatge assignat.

    var chistes = $("#resultat"); --> var chistes = document.getElementById("resultat");
*/