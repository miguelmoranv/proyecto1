import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            localStorage.setItem("user", JSON.stringify(response))
            navigate("/Home");
            console.log("Login exitoso", response)
        } catch (error) {
            console.error("Error al Ingresar", error)
        }
    }

  return (
    <IonPage>
        <IonContent>
            <IonItem>
                <IonLabel position="floating"> Correo Electronico </IonLabel>
                <IonInput type='email' value={email} onIonChange={(e) => setEmail(e.detail.value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position='floating'> Contraseña </IonLabel>
                <IonInput type='password' value={password} onIonChange={(e) => setPassword(e.detail.value)} ></IonInput>
            </IonItem>
            <IonButton expand='full' onClick={handleLogin}>Iniciar Sesion</IonButton>
        </IonContent>
    </IonPage>
  );
}

export default Login;