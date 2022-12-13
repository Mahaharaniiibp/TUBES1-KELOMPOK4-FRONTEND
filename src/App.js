import Index from './pages/index';
import logo from './logo.svg';
import './App.css';
import Detail_aufa from './pages/detail_aufa';
import Detail_andini from './pages/detail_andini';
import Detail_maska from './pages/detail_maska';
import Detail_rani from './pages/detail_rani';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Calculator from './pages/Calculator';
// import Calculator from './pages/Calculator';

function App() {
  return (
   <div className> 
   <Router>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/detail_aufa' element={<Detail_aufa/>} />
      <Route path='/detail_andini' element={<Detail_andini/>} />
      <Route path='/detail_maska' element={<Detail_maska/>} />
      <Route path='/detail_rani' element={<Detail_rani/>} />
      <Route path='/Calculator' element={<Calculator/>} />
     
      
    </Routes>
   </Router>
   </div> 
  
  )
  ;
}

export default App;
