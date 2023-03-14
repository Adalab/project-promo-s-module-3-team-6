import { useState } from 'react';
import '../styles/App.scss';
import avatar from '../images/user.png';
import icon1 from '../images/icon.png';
import adalab from '../images/logo-adalab.png';
import cover from '../images/cover.jpeg';
import dataApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form/Form';


function App() {

  const [data, setData] = useState({
    //color: 'dark',
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
    photo: avatar,
    image: cover,
  }
  );
  const [url, setUrl] = useState('');
  const [errorMsjBtn, setErrorMsjBtn] = useState('');
  const [errorDemo, setErrorDemo] = useState('');
  const [errorRepo, setErrorRepo] = useState('');

   


  const handleClickCreateCard = () => {
    dataApi(data)
    .then((data) => {
      if (!data.success) {
        setErrorMsjBtn("*Debes completar todos los campos");
      } else {
        setErrorMsjBtn("La tarjeta ha sido creada:")
        setUrl(data.cardURL)
      }
    })  
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }


  

  return (
    <div className='container'>
      <Header icon1={icon1} adalab={adalab}></Header>
      <main className='main'>
        <Preview cover={cover} data={data} avatar={avatar}></Preview>
        <Form></Form>

    
      </main>
    </div>
  );
}
export default App;
