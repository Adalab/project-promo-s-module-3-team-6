import { useState } from 'react';
import dataApi from '../services/api';
import Preview from './Preview';
import Form from './Form/Form';
import ls from '../services/localStorage'

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
      }
    }
    if (inputName === 'repo') {
      if (inputValue === '') {
        setErrorRepo('')
      } else if (!regex.test(inputValue)) {
        setErrorRepo('*Introduce un enlace válido, Ej: https://...')
      }
    }
    ls.set('card', data)
  }

  const handleClickCreateCard = () => {
    console.log('holi')
    dataApi(data)
      .then((data) => {
        if (!data.success) {
          setErrorMsjBtn("*Debes completar todos los campos");
        } else {
          setErrorMsjBtn("La tarjeta ha sido creada:")
          setUrl(data.cardURL)
        }
      })
    ls.set('card', data)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <>
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
      />
    </>
  )
}
export default CreateProyect