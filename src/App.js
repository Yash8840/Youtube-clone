import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleVideo from './pages/SingleVideo';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="video/:id" element={<SingleVideo/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
