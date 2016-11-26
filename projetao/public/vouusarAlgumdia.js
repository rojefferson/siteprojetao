var doc = document.getElementById('Pessoas');

  ref =  firebase.database().ref().child('Pessoas');
  ref.on('value',snap => {

   // console.log (JSON.stringify(snap.val(),null,3));
      
      var obj =  JSON.parse(JSON.stringify(snap.val(),null,3));
      
      console.log(obj);
     

    //console.log(snap.val().Uname);
  });