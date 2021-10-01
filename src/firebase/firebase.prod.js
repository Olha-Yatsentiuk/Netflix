import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import { seedDatabase } from './seed';

const config = {
  apiKey: 'AIzaSyDPc25-7VByFbaWcmRm45HxAs--NWOiRR8',
  authDomain: 'copyofnetflix.firebaseapp.com',
  databaseURL:
    'https://copyofnetflix-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'copyofnetflix',
  storageBucket: 'copyofnetflix.appspot.com',
  messagingSenderId: '779034482992',
  appId: '1:779034482992:web:9d4682829f41bb4e8e90f5',
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
