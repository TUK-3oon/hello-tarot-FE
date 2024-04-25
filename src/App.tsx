import { Routes, Route } from 'react-router-dom'
import './App.css';

import { Intro } from './pages/intro/Intro';
import { Main } from './pages/main'
import { Logo } from './component/logo';

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-main relative'>
        <Logo></Logo>
        <Routes>
          <Route path="/" element={<Intro></Intro>} />
          <Route path="/main" element={<Main></Main>} />
        </Routes>
      </div >
    </>
  );
}

export default App;
