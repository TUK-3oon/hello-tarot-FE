import { Routes, Route } from 'react-router-dom'
import './App.css';

import { Intro } from './pages/Intro';
import { Main } from './pages/Main';
import { Logo } from './component/Logo';
import { MainSelect } from './pages/MainSelect'

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-main relative cursor-default'>
        <Logo></Logo>
        <Routes>
          <Route path="/" element={<Intro></Intro>} />
          <Route path="/main" element={<Main></Main>} />
          <Route path="/main/select" element={<MainSelect></MainSelect>} />
        </Routes>
      </div >
    </>
  );
}

export default App;
