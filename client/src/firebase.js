import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



const app = firebase.initializeApp({
  apiKey: "AIzaSyAa024TL8Mcp7lTW2UdY4KMkRpA3Fpoe8M",
  authDomain: "drive-dabda.firebaseapp.com",
  projectId: "drive-dabda",
  storageBucket: "drive-dabda.appspot.com",
  messagingSenderId: "268591182278",
  appId: "1:268591182278:web:0cc3b1624a5eb427e0c2c7"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
