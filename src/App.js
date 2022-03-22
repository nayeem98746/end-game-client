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
import AddService from './Components/AddService/AddService';
import About from './Components/About/About';
import AddDoctors from './Components/AddDoctors/AddDoctors';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddAdmin from './Components/Dashboard/Admin/AddAdmin/AddAdmin';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import DoctorInformation from './DoctorInformation/DoctorInformation';
import Appointment from './Components/Appointment/Appointment';
import Myappointments from './Components/Dashboard/Myappointments/Myappointments';
import DoctorsReview from './Components/DoctorsReview/DoctorsReview';
import ShowReview from './Components/ShowReview/ShowReview';

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
        {/* <Route path="/addservice" element={<AddService></AddService>} /> */}
        {/* <Route path="/adddoctors" element={<AddDoctors></AddDoctors>} /> */}
        <Route path="/about" element={<About></About>} />
        <Route path="/information/:service" element={<PrivateRoute><Information></Information></PrivateRoute>} />
        <Route path="/doctorinformation/:doctor" element={<PrivateRoute><DoctorInformation></DoctorInformation></PrivateRoute>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/showReview/:doctor" element={<ShowReview></ShowReview>} />
        <Route path="/doctorReview/:doctor" element={<DoctorsReview></DoctorsReview>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}> 

      <Route path={`/dashboard/addadmin`} element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>} />
      <Route path={`/dashboard/addservice`} element={<AdminRoute><AddService></AddService></AdminRoute>} />
      <Route path={`/dashboard/adddoctor`} element={<AdminRoute><AddDoctors></AddDoctors></AdminRoute>} />
      <Route path={`/dashboard/myappointments`} element={<Myappointments></Myappointments>} />
      {/* <Route path={`/dashboard/doctorsReview`} element={<DoctorsReview></DoctorsReview>} /> */}

        </Route>


        
      </Routes>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
