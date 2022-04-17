import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rules from './pages/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Rules' element={<Rules/>}/>
      </Routes>
    </div>
  );
}

export default App;
