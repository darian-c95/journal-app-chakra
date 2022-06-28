import Swal from 'sweetalert2'
import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import {types} from "../types/types"


export const startNewNote = (title, body, fileUrl) => {
    return async(dispatch, getState) => {

        const uid = getState().auth.uid;  

        
        const newNote = {
            body: body, 
            title: title,
            url: fileUrl,
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote); 

        return dispatch(addNewNote(doc.id, newNote)); 
    }
}


export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})


export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = (uid) => {
    return async(dispatch) => {

        const notes = await loadNotes(uid, 'notes');
        dispatch(setNotes(notes));

    }
}


export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});


export const startSaveNote = (note) => {
    return async(dispatch, getState) => {
        
        const uid = getState().auth.uid;

        if(!note.url) {
            delete note.url;
        }

        
        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore))
        Swal.fire('Saved', note.title, 'success');
    }
}


export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id, 
            ...note
        }
    }
})


export const startUploading = (file, title, body) => {
    return async(dispatch) => { 

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file); 

        dispatch(startNewNote(title, body, fileUrl));

        Swal.close();
    }
}


export const startDeleting = (id) => {
    return async(dispatch, getState) => {

        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})


export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})
 