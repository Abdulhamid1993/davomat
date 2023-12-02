import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Bolajonlar from './component/Bolajonlar';
import Teacher from './component/Teacher';
import './index.css'





function App() {



  return (
    <div className= "App"  >
    
     <Routes>
      <Route path="/" element={ <Teacher/>}/>
      <Route path="/:id" element={<Bolajonlar/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
