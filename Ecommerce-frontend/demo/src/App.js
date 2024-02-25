import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' exact element={<Register/>}></Route>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/login' exact element={<Login/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
