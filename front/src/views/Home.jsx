import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";
import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, []);

    const handleLogout = () =>{
        localStorage.removeItem("user");
        setUser(null);
        navigate("/")
    }

    console.log(user)

    return(
        <>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <h2 className=""> {user?.nombre} {user?.email} </h2>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton onClick={handleLogout}>Cerrar Sesión</IonButton>
            </IonContent>
        </IonPage>
        </>
    )
}
export default Home;