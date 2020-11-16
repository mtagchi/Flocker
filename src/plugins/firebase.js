import firebase from 'firebase'
import '@firebase/auth'
import store from '@/store/index'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  dbURL: process.env.VUE_APP_FIREBASE_db_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGEING_SENDERID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

export default {
  init() {
    firebase.initializeApp(firebaseConfig)
    firebase.firestore()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  },
  login() {
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
      if (result.user) {
        const currentUser = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          username: result.additionalUserInfo.username,
          photoURL: result.user.photoURL
        }
        store.dispatch('user/auth', { user: currentUser })
        const db = firebase.firestore()
        const users = db.collection('users')
        users.doc(currentUser.uid).set({ currentUser })
      }
    })
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        const db = firebase.firestore()
        db.collection('users').doc(currentUser.uid).get().then((doc) => {
          if (doc.exists) {
            const user = doc.data().currentUser
            store.dispatch('user/auth', { user: user })
          }
        })
      } else {
        const user = {}
        store.dispatch('user/auth', { user: user })
      }
    })
  }
}
