import { Link, Outlet } from "react-router-dom";
import LoginForm from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <div>
        <Header/>
        
         <main>
        <Outlet />
         </main>
    </div>
  );
}

export default App;
