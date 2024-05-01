import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Intro } from './pages/Intro';
import { Main } from './pages/Main';
import { MainSelect } from './pages/MainSelect'
import { Layout } from './routes/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Intro></Intro>} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/main" element={<Main></Main>} />
        <Route path="/main/select" element={<MainSelect></MainSelect>} />
      </Route>

    </Routes>
  );
}

export default App;
