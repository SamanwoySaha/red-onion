import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

const userInfoTemplate = (name, email, error = '') => {
    let success = error === '' ? true : false;
    const newUser = {name, email, error, success};
    return newUser;
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then (res => {
            const newUser = userInfoTemplate(name, email);
            updateUserInfo(name);
            return newUser;
        })
        .catch((err) => {
            const newUser = userInfoTemplate('', '', err.message);
            return newUser;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then (res => {
            const {displayName, email} = res.user;
            const newUser = userInfoTemplate(displayName, email);
            return newUser;
        })
        .catch((err) => {
            const newUser = userInfoTemplate('', '', err.message);
            return newUser;
        });
}

const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: name,
    })
    .then(res => console.log('updated'))
    .catch(err => console.log('not updated'));
}
