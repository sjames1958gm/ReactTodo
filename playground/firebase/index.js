import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "sjames-todo-app.appspot.com",
  messagingSenderId: ""
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref(); 
firebaseRef.set({
  app: {
    name: "Todo App",
    version: "0.1.0"
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }  
});

var todoRef = firebaseRef.child('todos');
todoRef.on('child_added', (snapshot) =>{
  console.log("user object changed", snapshot.val());
});

todoRef.push({text: "Walk the dog", completed: false});
todoRef.push({text: "Feed the cat", completed: false});
