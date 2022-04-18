import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rules from './pages/Rules/Rules';
import Quiz from './pages/Quiz/Quiz';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Rules' element={<Rules/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
