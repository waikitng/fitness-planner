import firebase from 'firebase';

export const addLog = (date, name, muscle, reps1,reps2, reps3, lbs1, lbs2, lbs3 ) => {
    
    // var myRef = db.ref('/items').push();
    // var key = myRef.key;
    // myRef.set(key)

    const { currentUser } = firebase.auth();

    var items ={
        date,
        name,
        muscle,
        reps1,
        reps2, 
        reps3, 
        lbs1, 
        lbs2, 
        lbs3 
    };
    firebase.database().ref(`/users/${currentUser.uid}/items`).push((items))
}