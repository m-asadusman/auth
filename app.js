import { auth, onAuthStateChanged, signOut } from "./firebase.js";

onAuthStateChanged(auth, async (user) => {
    if (!user) {
        window.location.href = "./login.html";
        return;
    }

    await user.reload();

    if (!user.emailVerified) {
        window.location.href = "./verify.html";
    }
});

document.getElementById('logoutBtn').onclick = async () => {
    await signOut(auth);
    window.location.href = "./login.html";
};
