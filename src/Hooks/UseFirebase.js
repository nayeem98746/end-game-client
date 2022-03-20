import { getAuth, createUserWithEmailAndPassword , signOut, onAuthStateChanged ,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeaFirebase from "../Components/Login/Firebase/firebase.init";
initializeaFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [ authError, setAuthError ] = useState('');

    const [ isLoading, setIsLoading ] = useState(true)
    const provider = new GoogleAuthProvider()

    const auth = getAuth();
// register function
    const registerUser = (email, password) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
   setAuthError('')
  })
  .catch((error) => {
    setAuthError(error.message)
   
  })
  .finally(() => setIsLoading(false))
    }

    // google function 
    const googleSignIn = () => {
      signInWithPopup(auth, provider)
  .then((result) => {
    setUser(result.user)

  }).catch((error) => {
    setAuthError(error.message)
  });

    }












// Email and password function
    const loginUser = (email, password) => {
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('')

  })
  .catch((error) => {
    setAuthError( error.message )
  })
  .finally(() => setIsLoading(false))

    }





// observer user state
    useEffect( () => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              setUser(user)
              setIsLoading(false)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    } , [])

    // logOut function
    const logout = () => {
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            setAuthError(error.message)
          })
          .finally(() => setIsLoading(false))

    }








    return{
        user, 
        registerUser,
        isLoading,
        authError,
        googleSignIn,
        loginUser,
        logout,
    }
    

}
export default useFirebase