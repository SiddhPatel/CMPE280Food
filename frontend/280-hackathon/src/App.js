import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"
import Import from "./components/Import/Import"
import 'rsuite/dist/rsuite.min.css'; 
import Prediction from './components/Prediction/Prediction';



function App() {
  return (
    <BrowserRouter>  
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/predict" element={<Prediction/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
