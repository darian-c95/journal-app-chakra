import { types } from "../types/types"
import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from "./notes";


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => { 

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user})  => {
                dispatch(login(user.uid, user.displayName, user.email)); 

                dispatch(finishLoading());
            })
            .catch (e => {
                console.log(e);
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const starRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user}) => { 
                await user.updateProfile({displayName: name}); 

                dispatch(
                    login(user.uid, user.displayName, user.email)
                )

            })
            .catch (e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName, user.email)
                )
            });

    }
}

export const login = (uid, displayName, email) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        email
    }
});


export const startLogout = () => {
    return async(dispatch)  => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    }
}


export const logout = () => ({
    type: types.logout
})