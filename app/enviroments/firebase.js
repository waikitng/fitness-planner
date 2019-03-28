import firebase from '@firebase/app';
import '@firebase/auth';

const config = {
  apiKey: 'AIzaSyAhmSuCV7zn69EaAJKMMRgkFlern_McwK8',
  authDomain: 'mobile-fitness-planner.firebaseapp.com',
  databaseURL: 'https://mobile-fitness-planner.firebaseio.com',
  projectId: 'mobile-fitness-planner',
  storageBucket: 'mobile-fitness-planner.appspot.com',
  messagingSenderId: '928462755945'
};  

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
