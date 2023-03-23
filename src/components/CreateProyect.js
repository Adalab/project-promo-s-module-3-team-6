import { useState } from 'react';
import dataApi from '../services/api';
import Preview from './Preview';
import Form from './Form/Form';
import ls from '../services/localStorage'
import { NavLink } from 'react-router-dom';

const CreateProyect = () => {

  //VARIABLES
  const [data, setData] = useState(ls.get('card', {
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
    photo: '',
    image: '',
  }
  ));
  const [url, setUrl] = useState('');
  const [errorMsjBtn, setErrorMsjBtn] = useState('');
  const [errorDemo, setErrorDemo] = useState('');
  const [errorRepo, setErrorRepo] = useState('');
  const regex = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  const updateAvatar = (avatar) => {
    setData({ ...data, photo: avatar });
    ls.set('card', data)
  };

  const updateCover = (avatar) => {
    setData({ ...data, image: avatar });
    ls.set('card', data)
  };

  const handleInputs = (inputValue, inputName) => {
    setData({ ...data, [inputName]: inputValue })
    if (inputName === 'demo') {
      if (inputValue === '') {
        setErrorDemo('')
      } else if (!regex.test(inputValue)) {
        setErrorDemo('*Introduce un enlace válido, Ej: https://...')
      } else {
        setErrorDemo('')
      }
    }
    if (inputName === 'repo') {
      if (inputValue === '') {
        setErrorRepo('')
      } else if (!regex.test(inputValue)) {
        setErrorRepo('*Introduce un enlace válido, Ej: https://...')
      } else {
        setErrorRepo('')
      }
    }
    ls.set('card', data)
  }

  const handleClickCreateCard = () => {
    console.log('holi')
    dataApi(data)
      .then((info) => {
        if (!info.success) {
          setErrorMsjBtn("*Debes completar todos los campos");
        } else {
          setErrorMsjBtn("La tarjeta ha sido creada:")
          setUrl(info.cardURL);

          const storedCardList = ls.get('cardList', []);
          storedCardList.push(data);
          ls.set('cardList', storedCardList);


        }
      })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const handleClickReset = () => {
    setData({
      name: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    })
    setErrorMsjBtn('')
    setUrl('')
    ls.remove('card')
  }

  return (
    <>
      <NavLink className='btn--project' to='/'><i class="detail__link fa-sharp fa-solid fa-arrow-left"></i>Ver proyectos</NavLink>

      <Preview data={data} />
      <Form
        updateAvatar={updateAvatar}
        updateCover={updateCover}
        handleSubmit={handleSubmit}
        data={data}
        handleInputs={handleInputs}
        errorRepo={errorRepo}
        errorDemo={errorDemo}
        handleClickCreateCard={handleClickCreateCard}
        errorMsjBtn={errorMsjBtn}
        url={url}
        handleClickReset={handleClickReset}
      />
    </>
  )
}
export default CreateProyect