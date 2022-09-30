import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Dashboard from "../Components/Dashboard";

function Home() {
  return (
    <div>
      <Navbar/>
      
      <Dashboard/>
      <Footer/>
    </div>
  );
}
export default Home;
