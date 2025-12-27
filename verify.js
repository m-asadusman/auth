import {auth, sendEmailVerification, onAuthStateChanged} from "./firebase.js"

verify()

async function verify(){
    const email = document.getElementById('email').value
    
    try {
        await sendEmailVerification(auth)
        alert('Email verification sent to: ', email)
        onAuthStateChanged(auth, (user) =>{
            if(user.emailVerified){
                window.location.href = "./login.html"
            }   
        })
        
    } catch (error) {
        alert(error.message)
    }
}

document.getElementById('verifyBtn').onclick = async ()=>{
    const email = document.getElementById('email').value
    try {
        await sendEmailVerification(auth)
        alert('Email verification sent to: ', email)
    } catch (error) {
        alert(error.message)
    }
}
