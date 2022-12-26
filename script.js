function encrypt() {

  var output = document.querySelector("#textoSaida");
    
    document.getElementById("default").style.display = "none";
    document.getElementById("decripto-section").style.display = "inline-block";

    var input = document.querySelector("#cripto");
    var mensagem = input.value;
    var novaMensagem = "";

  // a string criptografada
    var listaCaractere = mensagem.split("")

  // loop pelos caracteres da string original
  for(var i=0; i<listaCaractere.length; i++){
        
    if(listaCaractere[i] == "a"){
        listaCaractere[i] = "ai";
    }
    else if(listaCaractere[i] == "e"){
        listaCaractere[i] = "enter";
    }
    else if(listaCaractere[i] == "i"){
        listaCaractere[i] = "imes";
    }
    else if(listaCaractere[i] == "o"){
        listaCaractere[i] = "ober";
    }
    else if(listaCaractere[i] == "u"){
        listaCaractere[i] = "ufat";
    }
    novaMensagem = novaMensagem + listaCaractere[i];
}

output.value = novaMensagem;
console.log(novaMensagem);
}

function descriptografa(){
    
  var output = document.querySelector("#textoSaida");
  
  document.getElementById("default").style.display = "none";
  document.getElementById("decripto-section").style.display = "inline-block";

  
  var input = document.querySelector("#cripto");
  var mensagem = input.value;


  mensagem = mensagem.replaceAll("ai", "a");
  mensagem = mensagem.replaceAll("enter", "e");
  mensagem = mensagem.replaceAll("imes", "i");
  mensagem = mensagem.replaceAll("ober", "o");
  mensagem = mensagem.replaceAll("ufat", "u");
  
  output.value = mensagem;
  console.log(mensagem);
}

function copiar(){

  var output = document.querySelector("#textoSaida");
  navigator.clipboard.writeText(output.value);
  alert("O texto foi copiado!");
}

