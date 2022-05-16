import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        {/* <Register /> */}
        {/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
