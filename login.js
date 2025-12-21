import { auth, signInWithEmailAndPassword } from "./firebase.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Logged In: " + userCredential.user.email);
    window.location.href = "./index.html";
  } catch (error) {
    alert(error.message);
  }
});