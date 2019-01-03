import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4eTGUrqrlEchTacaeNjNKiuJzTMks12w",
  authDomain: "wesbos-react-tutorial-529f1.firebaseapp.com",
  databaseURL: "https://wesbos-react-tutorial-529f1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp }

// Default export
export default base;