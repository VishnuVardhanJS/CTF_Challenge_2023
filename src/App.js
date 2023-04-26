import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Main from './pages/Main/Main';
import Challenge1 from './pages/Challenges/Challenge1'
import Challenge2 from './pages/Challenges/Challenge2'
import Challenge3 from './pages/Challenges/Challenge3'
import Challenge4 from './pages/Challenges/Challenge4'
import Challenge5 from './pages/Challenges/Challenge5'
import Challenge6 from './pages/Challenges/Challenge6'
import Clear from './pages/Misc/Clear';
import Evaluate from './pages/Misc/Evaluate';
import Menu from './pages/Main/Menu';
import Code from './pages/Misc/Code';



function App() {
  return (
    <Layout >
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/Code' element={<Code />} />
        <Route path='/ctf' element={<Main />} />
        <Route path='/Challenge1' element={<Challenge1 />} />
        <Route path='//Challenge2' element={<Challenge2 />} />
        <Route path='/Challenge3' element={<Challenge3 />} />
        <Route path='/Challenge4' element={<Challenge4 />} />
        <Route path='/Challenge5' element={<Challenge5 />} />
        <Route path='/Challenge6' element={<Challenge6 />} />
        <Route path='/clear' element={<Clear />} />
        <Route path='/Evaluate' element={<Evaluate />} />
      </Routes>
    </Layout>

  );
}

export default App;
