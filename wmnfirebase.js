const firebaseConfig = {
    apiKey: "AIzaSyAlrurC10KZn905VsXFug7Eu6IcqXMmA48",
    authDomain: "wmn-datastorage.firebaseapp.com",
    projectId: "wmn-datastorage",
    storageBucket: "wmn-datastorage.appspot.com",
    messagingSenderId: "139026167064",
    appId: "1:139026167064:web:e352921ba8cea8d9fdda6d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var contactFormDB=firebase.database().ref('wmn-datastorage');
  document.getElementById('contactForm').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name');
    var placename=getElementVal('placename');
    var arrival=getElementVal('arrival');
    var till=getElementVal('till');

    console.log(name,placename,arrival,till);
  }

  const getElementVal=(id)=>{
    return doucment.getElementById(id).value;
  };