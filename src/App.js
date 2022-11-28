import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav />
            <Routes>
                {/*<Route path={"/"} element={}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
