import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './containers/PhotographyContainer';
import Basket from './components/Basket';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {< Home />}/>
        <Route path = "/basket" element = {< Basket />}/>
        <Route path = "*" element = {< ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
