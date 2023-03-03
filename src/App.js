import './App.css';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom' ;
// import SignUp from './Pages/Login_Signup_Page/SignUp/SignUp'
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div >
         <Router>
            <AllRoutes/>
         </Router>
        
    </div>
  );
}

export default App;
