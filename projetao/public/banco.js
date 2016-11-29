
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFwtaxX9OKyA9uMfTMPzhFl18s6E7nCG8",
    authDomain: "nodotq-c0833.firebaseapp.com",
    databaseURL: "https://nodotq-c0833.firebaseio.com",
    storageBucket: "nodotq-c0833.appspot.com",
    messagingSenderId: "38972939481"
  };
  firebase.initializeApp(config);

function enviarUsuarioBanco(userId, name, lname,email,password) {
  firebase.database().ref('Pessoas/30').set({
    Uname : name,
	 Uemail : email
  });
}

function insertRestaurante(nome,endereco)
{
   //var pedidos = firebase.database().ref("pedidos")
   //var Restaurante = firebase.database().ref("refeicoes");
   var key  = firebase.database().ref("clientes");
   
    key.push().set({
      nome: "Restaurante legal",
    endereco: "Perto da sua casa"
    });

}


function confirmarEstado(idRestaurante)
{
   var ref  = firebase.database().ref("pedidos/30/" + idRestaurante).update({"estado":"Confirmado"});

}



//var activeVisitors = firebase.database().ref("pedidos/30");
//activeVisitors.on('child_changed', function (snapshot) {
 
  //var v = JSON.parse(JSON.stringify(snapshot.val(),null,3));
 
  //console.log(v.precoFinal);

//    InsertNotificacao(v);
//  });

function listarPedidos(keyRestaurante)
{
  
  var refRestaurante = firebase.database().ref("pedidos/"+ keyRestaurante).orderByKey();

  //var query = firebase.database().ref("users").orderByKey();

  refRestaurante.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        // key will be "ada" the first time and "alan" the second time
        var key = childSnapshot.key;

        // childData will be the actual contents of the child
        var childData = childSnapshot.val();
        console.log(childData.estado);
        if(childData.estado == "Aberto")
        {
           InsertNotificacao(childData,key);         
        }
  
    });
  });


}

 function getRestaurantes()
           {
                var refRestaurante = firebase.database().ref("restaurantes/").orderByKey();
                refRestaurante.once("value")
                    .then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        // key will be "ada" the first time and "alan" the second time
                        var key = childSnapshot.key;

                        // childData will be the actual contents of the child
                        var childData = childSnapshot.val();
                        console.log(childData.nome);
                        if(childData.adminID == "C08E8ajCBwTHLRgJqoxiz8JoCQu2")
                        {
                         inserirRestaurantes(childData,key);         
                        }
                
                    });
                });

           }
  
getRestaurantes();

function processandoPedido()
{



  // var ref  = firebase.database().ref("pedidos/30/-KXbFxUUnVn86z1TprZ3  ").update({"estado":"Confirmado"});
    
  // console.log("asd");
   
   // console.log(est);

   //firebase.database().ref(keyRestaurante+ "/" + numPedido).set({
    //Uname : name,
   //Uemail : email
  //});
 // }


}

processandoPedido();


function insertPedidoRestaurante()
{
  
  firebase.database().ref('pedidos/30/0').set({
    PrecoFinal : 0,
    Tempo : 0
  }); 

  alert("aidjsa");
}
  
//insertPedidoRestaurante();




 function logar(email,senha)
 {

      firebase.auth().signInWithEmailAndPassword(email, senha ).catch(function(error) {
           var errorCode = error.code;
           var errorMessage = error.message;
          });

      var user = firebase.auth().currentUser;

        if (user) {
         
         
          window.location.href = "/index";

        } else {  
        alert("deslogado");
        }


 }

function logout()
{
    firebase.auth().signOut().then(function() {
      alert("Saiu");
    }, function(error) {
    alert("Ocorreu um erro ao deslogar");
  });
}


function getIdUser()
{
  return firebase.auth().currentUser.uid;
}




function testeBanco()
{

  var query = firebase.database().ref("Pessoas").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      //console.log(key);
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      var obj =  JSON.parse(JSON.stringify(childData,null,3));
      console.log(obj.Uname);
  });
});



}

