import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyB44XmaAnabd4adYctoCxBWar2OEEF41TQ',
  authDomain: 'mailehereko.firebaseapp.com',
  databaseURL: '<replace this>',
  projectId: 'mailehereko',
  storageBucket: 'mailehereko.appspot.com',
  messagingSenderId: '823471565644',
  appId: '1:823471565644:web:5632e4f8c236ddb4a8bde9',
}
const apps = getApps()
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {})
export { db }
