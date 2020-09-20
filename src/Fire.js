import firebase from "firebase";
var config = {
  apiKey: "AIzaSyD6ydWRDvcym6poj2t_5PilCrcZITzhfMc",
  authDomain: "paperupload-a0ac8.firebaseapp.com",
  databaseURL: "https://paperupload-a0ac8.firebaseio.com",
  projectId: "paperupload-a0ac8",
  storageBucket: "paperupload-a0ac8.appspot.com",
  messagingSenderId: "618842251224"
};
var fire = firebase.initializeApp(config);
export default fire;
