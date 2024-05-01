import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Intro } from './pages/intro/Intro';
import { Main } from './pages/main/Main';
import { MainSelect } from './pages/main/MainSelect'
import { Layout } from './routes/Layout';

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
