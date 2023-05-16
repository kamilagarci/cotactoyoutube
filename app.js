const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyCqrgPswgnKxurUDG5uddVFTU6WNlbBwmo",
    authDomain: "contactform-7923f.firebaseapp.com",
    databaseURL: "https://contactform-7923f-default-rtdb.firebaseio.com",
    projectId: "contactform-7923f",
    storageBucket: "contactform-7923f.appspot.com",
    messagingSenderId: "289789965569",
    appId: "1:289789965569:web:1604542d0314517eadd700",
    measurementId: "G-ZW0DG5QBFJ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  const database = firebase.database()

  const ref = database.ref("messages")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    ref.push({
        name:name,
        email:email,
        message:message
    })

    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },2000)

    form.reset()

})