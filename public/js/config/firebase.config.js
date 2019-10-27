var firebaseConfig = {
  apiKey: "AIzaSyBM5-w_oHI1tNcApvKCUhtJBK3Ktfqk0As",
  authDomain: "fire-app-4d20c.firebaseapp.com",
  databaseURL: "https://fire-app-4d20c.firebaseio.com",
  projectId: "fire-app-4d20c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
