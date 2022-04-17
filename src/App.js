import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rules from './pages/Rules/Rules';
import Quiz from './pages/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Rules' element={<Rules/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
      </Routes>
    </div>
  );
}

export default App;
