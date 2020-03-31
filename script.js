//unique config variable
const firebaseConfig = {
   //your config here
};
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

//signup
document.getElementById("btnSignUp").addEventListener('click', e => {
    console.log('clicked')
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
        console.log(error.message);
    });
})
//login
document.getElementById("btnLogin").addEventListener('click', e => {
    console.log('clicked')
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    promise.catch(e => { console.log(e.massage) })
})
//logout
document.getElementById("btnLogOut").addEventListener('click', e => {
    firebase.auth().signOut()
    console.log('logged out')
})

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user)
        document.getElementById("btnLogOut").classList.remove('hide')
    } else {
        document.getElementById("btnLogOut").classList.add('hide')
    }
})