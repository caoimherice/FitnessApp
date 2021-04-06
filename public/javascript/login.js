function login()
{
    let email = document.getElementById('exampleInputEmail1').value
    let passwordexample = document.getElementById('exampleInputPassword1').value
    firebase.auth().signInWithEmailAndPassword(email, passwordexample)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // If successful redirect to a secure page
            window.location.href = "/nutrition.html"
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

