
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


  

 function logar(email,senha)
 {

      firebase.auth().signInWithEmailAndPassword(email, senha ).catch(function(error) {
           var errorCode = error.code;
           var errorMessage = error.message;
          });

      var user = firebase.auth().currentUser;

        if (user) {
         // User is signed in.
          window.location.href = "/index";
        } else {
        // No user is signed in.
        
        alert("deslogado");
        }


 }

function getIdUser()
{
  return firebase.auth().uid;
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

