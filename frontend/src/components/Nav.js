import { Link } from 'react-router-dom'
import Uselogout from '../hook/Uselogout'
import { Uselogin } from '../hook/Uselogin';
import Useauthcontext from '../hook/Useauthcontext';

const Navbar = () => {
  const {logout}=Uselogout();
  const {user}=Useauthcontext();
const handleClick=()=>{
logout();
}
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
         {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
         {!user&&(

           <div>
             <Link to="/login">Login</Link>
             <Link to="/signup">Signup</Link>
           </div>
         )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar