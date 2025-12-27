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
    const user = userCredential.user;

    await user.reload();

    if (user.emailVerified) {
      window.location.href = "./index.html";
    } else {
      window.location.href = "./verify.html";
    }
  } catch (error) {
    alert(error.message);
  }
});
