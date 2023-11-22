    
       // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
        import { getAuth, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
        
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCAWeEeu7CdYXVbibjHwjXOgzUXLVM0Nrg",
            authDomain: "mini-netflix-674bf.firebaseapp.com",
            projectId: "mini-netflix-674bf",
            storageBucket: "mini-netflix-674bf.appspot.com",
            messagingSenderId: "1035726937816",
            appId: "1:1035726937816:web:7daa2f4fc8b6a3544fc1ad",
            measurementId: "G-5YYPXJ58CH"
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        const signInGoogle = () => {
            alert("gvb")
            signInWithPopup(auth, provider)
            .then((result) => {
                if(result){
                    sendEmailVerification(auth.currentUser)
                    .then(()=>{
                        console.log("Verification email sent");
                    })
                    window.location.href="dashboard.html"
                }else{
                    window.location.href = 'index.html'
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        window.signInGoogle = signInGoogle