var firebaseConfig = {
    apiKey: "AIzaSyClqrMrPYpQ61Xf5M29nk3YFoI4ZDhDTl0",
    authDomain: "gce-website-f2e54.firebaseapp.com",
    databaseURL: "https://gce-website-f2e54.firebaseio.com",
    projectId: "gce-website-f2e54",
    storageBucket: "gce-website-f2e54.appspot.com",
    messagingSenderId: "233893955093",
    appId: "1:233893955093:web:3d98a9ad92f23002"
  };


function save_user() {
    var user_name = document.getElementById('Name').value;
    var user_email = document.getElementById('Email').value;
    var user_phone = document.getElementById('Phone').value;
    var user_message = document.getElementById('Message').value;

    var uid = firebase.database().ref().child('users').push().key;

    var data = {
        user_id: uid,
        user_name: user_name,
        user_email: user_email,
        user_phone: user_phone,
        user_message: user_message
    }

    var updates = {};
    updates['/mori/' + uid] = data;
    firebase.database().ref().update(updates);

    alert('Thank you! Your message has been sent successfully!');
    window.setInterval('refresh()', 1000);
}

// Call a function every 10000 milliseconds 
// (OR 10 seconds).

// Refresh or reload page.
function refresh() {
    window.location.reload();
}
