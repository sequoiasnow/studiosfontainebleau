import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD-xEtN9HbIG2i_2YYROnHarhCCKl4PJYg",
    authDomain: "studiosfontainebleau-484ec.firebaseapp.com",
    databaseURL: "https://studiosfontainebleau-484ec.firebaseio.com",
    projectId: "studiosfontainebleau-484ec",
    storageBucket: "studiosfontainebleau-484ec.appspot.com",
    messagingSenderId: "852939221418"
  }
const f = firebase.initializeApp(config)
const database = f.database()
export default database
