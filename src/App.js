import Home from "./components/Home";
import Contact from './components/Contact'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
