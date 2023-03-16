import '../styles/App.scss';
import Landing from './Landing';
import icon1 from '../images/icon.png';
import adalab from '../images/logo-adalab.png';
import Header from './Header';
import CreateProyect from './CreateProyect';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <Header icon1={icon1} adalab={adalab} />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>
          <Route path='/create' element={<CreateProyect></CreateProyect>}></Route>
        </Routes>
      </main>
    </div>

  );
}
export default App;
