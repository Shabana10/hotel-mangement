import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './containers/Home';
import './App.css';
import TopImg from './components/TopImg';
import SignIn from './containers/Signin';
import DetailForm from './containers/DetailForm';
import Credit from './containers/Credit';
import DisplayFormDetails from './containers/DisplayFormDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavbar />
      <TopImg />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<DetailForm />} />
        <Route path='/credit' element={<Credit />} />
        <Route path='/formdetails' element={<DisplayFormDetails />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
