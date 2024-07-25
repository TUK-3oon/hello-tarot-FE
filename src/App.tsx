import { Routes, Route } from 'react-router-dom';
import { Intro } from './pages/intro/Intro';
import { Main } from './pages/main/Main';
import { MainSelect } from './pages/main/MainSelect';
import { Layout } from './routes/Layout';
import { GameTypeProvider } from './contexts/GameTypeContext';
import { Error } from './components/common/Error';
import { NotFound } from './components/common/NotFound';

const App = () => {
  return (
    <GameTypeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/select" element={<MainSelect />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </GameTypeProvider>
  );
};

export default App;
