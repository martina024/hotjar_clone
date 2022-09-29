import {Routes,Route} from "react-router-dom" ; 

import DashBoard from "../Components/DashBoard"

import Signup from './Signup' ; 

import SignIn from "./SignIn";
import Home from "./Home";



function AllRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/" element={<Home/>}/>
    
       
      </Routes>

    </div>
  );
}

export default AllRoutes;