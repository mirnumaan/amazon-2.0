const firebaseConfig = {
  apiKey: "AIzaSyAddfeFJrBFUz6-QulPzhm-BOMa84Cb150",
  authDomain: "clone-two-c8ab3.firebaseapp.com",
  projectId: "clone-two-c8ab3",
  storageBucket: "clone-two-c8ab3.appspot.com",
  messagingSenderId: "942979973050",
  appId: "1:942979973050:web:70aed40d0356ad43ef2783",
  measurementId:"${config.measurementId}"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();