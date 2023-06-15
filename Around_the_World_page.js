var firebaseConfig = {
    apiKey: "AIzaSyCG2vgrNP5VCDHkUgI15grf3qCf-bbtPzQ",
    authDomain: "around-the-world-af532.firebaseapp.com",
    databaseURL: "https://around-the-world-af532-default-rtdb.firebaseio.com",
    projectId: "around-the-world-af532",
    storageBucket: "around-the-world-af532.appspot.com",
    messagingSenderId: "552943836937",
    appId: "1:552943836937:web:a8f990451ecaa42b6f3dd8"
  };
  
firebase.initializeApp(firebaseConfig);

function send()
{
    msg = document.getElementById('msg').value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();



function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
}