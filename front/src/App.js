import React,{useState, useEffect} from "react";


//Componentes
import {IonApp} from '@ionic/react';
import { setupIonicReact } from "@ionic/react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



//Css
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './App.css'
import Login from "./views/Login";
import Home from "./views/Home";





setupIonicReact();
function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(prefersDark.matches);

    prefersDark.addEventListener('change', (e) => {
      setDarkMode(e.matches);
    });

    return () => {
      prefersDark.removeEventListener('change', (e) => {
        setDarkMode(e.matches);
      });
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);


  return (
    <>
    <IonApp>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
    </IonApp>
    </>
  );
}

export default App;
