// import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home/Home/Home';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Header from './Components/Home/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Services from './Components/Services/Services';
import Information from './Components/Information/Information';
import Doctors from './Components/Doctors/Doctors';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/doctor" element={<Doctors></Doctors>} />
        <Route path="/service" element={<Services></Services>} />
        <Route path="/information/:service" element={<Information></Information>} />
        <Route path="/register" element={<Register></Register>} />

        
      </Routes>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
