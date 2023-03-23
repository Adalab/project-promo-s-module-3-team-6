import '../styles/App.scss';
import Landing from './Landing';
import icon1 from '../images/icon.png';
import adalab from '../images/logo-adalab.png';
import Header from './Header';
import CreateProyect from './CreateProyect';
import { Route, Routes } from 'react-router-dom';
import ErrorMsn from './ErrorMsn';

function App() {

  return (
    <div className='container'>
      <Header icon1={icon1} adalab={adalab} />

      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/create' element={<CreateProyect></CreateProyect>}></Route>
        <Route path='*' element={<ErrorMsn></ErrorMsn>} ></Route>
      </Routes>

    </div>

  );
}
export default App;
