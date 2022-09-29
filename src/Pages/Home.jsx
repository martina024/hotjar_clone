import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">
        Login Page
      </Link>
      <Link to="/dashboard">
        Home
      </Link>
    </div>
  );
}
export default Home;
