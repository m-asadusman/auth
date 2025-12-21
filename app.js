import { auth, onAuthStateChanged, signOut } from "./firebase.js";

const logoutBtn = document.getElementById('logoutBtn')

onAuthStateChanged(auth, user =>{
    if(!user){
        window.location.href = "./login.html"
    }
})

logoutBtn.onclick = async function(){
    
    try {
        await signOut(auth)
        window.location.href = "./login.html"
    } catch (error) {
        alert(error.message)
    }
}


