import { getAuth, createUserWithEmailAndPassword , signOut, onAuthStateChanged ,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeaFirebase from "../Components/Login/Firebase/firebase.init";
initializeaFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
// register function
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

    
// Email and password function
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }





// observer user state
    useEffect( () => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              setUser(user)
            } else {
              setUser({})
            }
          });
          return () => unsubscribe;
    } , [])

    // logOut function
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }








    return{
        user, 
        registerUser,
        loginUser,
        logout,
    }
    

}
export default useFirebase