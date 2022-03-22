import { getAuth, createUserWithEmailAndPassword , signOut, onAuthStateChanged ,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeaFirebase from "../Components/Login/Firebase/firebase.init";
initializeaFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [ authError, setAuthError ] = useState('');
    const [ modal, setModal ] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)
    const provider = new GoogleAuthProvider()

    const auth = getAuth();
// register function
const registerUser = (email,password ,name)=> {
  setIsLoading(true)
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('')
      const newUser = {email, displayName: name};
      setUser(newUser)
      userDatabase(email, name, 'POST')
      updateProfile(auth.currentUser, {
          displayName: name 
        }).then(() => {
          setModal(true)
          
        }).catch((error) => {
         
        });
     
    })
    .catch((error) => {
      
      setAuthError(error.message);
      
    })
    .finally(() => setIsLoading(false));
}



    // google function 
    const googleSignIn = () => {
      setIsLoading(true)
      signInWithPopup(auth, provider)
  .then((result) => {
    setUser(result.user)
    userDatabase(result.user.email, result.user.displayName, 'PUT')  

  }).catch((error) => {
    setAuthError(error.message) 
  })
  .finally(() => setIsLoading(false))

    }




// Email and password function
    const loginUser = (email, password) => {
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then( result => {
    setUser(result.user)
    setModal(true)
    setAuthError('')

  })
  .catch((error) => { 
    setAuthError( error.message )
  })
  .finally(() => setIsLoading(false))

    }

// admin data load 
    useEffect(()=> {
      fetch(`https://secure-temple-05589.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

    } ,[user.email])



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

    const userDatabase = (email, displayName,method ) => {
      const user = {email, displayName}
      fetch('https://secure-temple-05589.herokuapp.com/users', {
        method: method,
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }






    return{
        user, 
        registerUser,
        isLoading,
        admin,
        authError,
        setModal,
        modal,
        googleSignIn,
        loginUser,
        logout,
    }
    

}
export default useFirebase