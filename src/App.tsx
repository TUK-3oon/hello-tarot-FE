import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import './App.css';

import { Intro } from './pages/Intro';
import { Main } from './pages/Main';
import { Logo } from './component/Logo';
import { MainSelect } from './pages/MainSelect'

function App() {
=======
import { Intro } from './pages/intro/Intro';
import { Main } from './pages/main/Main';
import { MainSelect } from './pages/main/MainSelect'
import { Layout } from './routes/Layout';
>>>>>>> 37b217bd08e6ab58d85d7df5d8b69c303a8ff4bc

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Intro></Intro>} />
        <Route path="/main" element={<Main></Main>} />
        <Route path="/main/select" element={<MainSelect></MainSelect>} />
      </Route>
    </Routes>
  );
}

export default App;
