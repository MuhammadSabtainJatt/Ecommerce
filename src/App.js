import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.scss';
import Login from './Auth/Login/login';
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './Auth/Register/Register'
import About from './pages/About'
import Contact from './pages/Contact/index'
import Routes from './Routes'
function App() {
  return (
    <>
    <Routes />
    </>
  );
}

export default App;
