import React from 'react';
import 'normalize.css';
import { GlobalStyles } from './GlobalStyles';
import { Routes } from './routes/Routes';
import { firebase } from './firebase/firebase.prod';
import { FirebaseContext } from './firebase/firebaseContext';


export function App() {
  return (
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <Routes />
    </FirebaseContext.Provider>
  </React.StrictMode>
)
  }
