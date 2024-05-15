import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import SignupForm from '../components/ExploreContainer';

const Home: React.FC = () => {
  return (
    <IonPage  >
      <IonHeader>
        <IonToolbar>
          <IonTitle  >
            <img src='../../public/logo.jpeg' style={{
              width: '100px'
            }} />

          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>

          </IonToolbar>
        </IonHeader>
        <SignupForm />
      </IonContent>
    </IonPage>
  );
};

export default Home;
