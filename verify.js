import {auth, sendEmailVerification, onAuthStateChanged} from "./firebase.js"

onAuthStateChanged(auth, async (user) => {
    if (!user) return;

    if (!user.emailVerified) {
        const sent = sessionStorage.getItem("verificationSent");

        if (!sent) {
            try {
                await sendEmailVerification(user);
                sessionStorage.setItem("verificationSent", "true");
                alert(`Email verification sent to: ${user.email}`);
            } catch (error) {
                alert(error.message);
            }
        }
    } else {
        window.location.href = "./index.html";
    }
});


document.getElementById("checkBtn").onclick = async () => {
    const user = auth.currentUser;
    if (!user) return;

    await user.reload();

    if (user.emailVerified) {
        window.location.href = "./index.html";
    } else {
        alert("Email not verified yet. Please check your inbox.");
    }
};
