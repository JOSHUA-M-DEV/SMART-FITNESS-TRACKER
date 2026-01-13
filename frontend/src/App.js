import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Useauthcontext from "./hook/Useauthcontext";
function App() {
  const {user}=Useauthcontext();
  console.log("App user:",user);
  return (

    <div className="App">

      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home/>:<Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <Login />:<Navigate to="/"/>} />
            <Route path="/signup" element={!user ?<Signup />:<Navigate to="/"/>} />
          </Routes>
         
         
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
