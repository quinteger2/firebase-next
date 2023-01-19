import styles from '../../styles/Evernote.module.scss'
import { app, database } from '../../firebaseConfig';
import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react'

export default function NoteOperations() {
    const dbNotes = collection(database, 'notes');
    const dbCities = collection(database, 'cities');
    const saveNote = () => {
        addDoc(dbNotes, {
            noteTitle: noteTitle
        })
    }
    const saveCity = () => {
        async function asyncCall() {
            const citiesRef = collection(database, "cities");

            await setDoc(doc(citiesRef, "SF"), {
                name: "San Francisco", state: "CA", country: "USA",
                capital: false, population: 860000,
                regions: ["west_coast", "norcal"]
            });
            await setDoc(doc(citiesRef, "LA"), {
                name: "Los Angeles", state: "CA", country: "USA",
                capital: false, population: 3900000,
                regions: ["west_coast", "socal"]
            });
            await setDoc(doc(citiesRef, "DC"), {
                name: "Washington, D.C.", state: null, country: "USA",
                capital: true, population: 680000,
                regions: ["east_coast"]
            });
            await setDoc(doc(citiesRef, "TOK"), {
                name: "Tokyo", state: null, country: "Japan",
                capital: true, population: 9000000,
                regions: ["kanto", "honshu"]
            });
            await setDoc(doc(citiesRef, "BJ"), {
                name: "Beijing", state: null, country: "China",
                capital: true, population: 21500000,
                regions: ["jingjinji", "hebei"]
            });
            alert('Promise resolved')
        }

        asyncCall()
    }
    const [noteTitle, setNoteTitle] = useState('');
    const [cityData, setCityData] = useState({});

    /*const unsub = onSnapshot(doc(database, "cities", "SF"), (doc) => {
        console.log("Current data: ", doc.data());
        console.log(typeof doc.data())
        setCityData(doc.data())
    });*/

    useEffect(() => {
        console.log('mounted');

        async function heartOfFunction() {
            const docRef = doc(database, "cities", "SF");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

    }, [])

    return (
        <>
            <div className={styles.btnContainer}>

                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder='Enter the Title..'
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                </div>
                <button
                    onClick={saveNote}
                    className={styles.saveBtn}>
                    Save Note
                </button>
                <button
                    onClick={saveCity}
                    className={styles.saveBtn}>
                    Save City
                </button>
            </div>
            <div>
            </div>
        </>
    )
}