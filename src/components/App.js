import { useState } from 'react';
import '../styles/App.scss';
import avatar from '../images/user.png';
import icon1 from '../images/icon.png';
import adalab from '../images/logo-adalab.png';
import cover from '../images/cover.jpeg';
import dataApi from '../services/api';

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

  const handleClickCreateCard = () => {
    dataApi(data)
      .then(info => {
        setUrl(info.cardURL)
      })
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const handleInputs = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    setData({ ...data, [inputName]: inputValue }) // cogemos valor que hay dentro de inputName y lo definimos con inputValue
  }

  return (
    <div className='container'>
      <header className='header'>
        <div className='header--div'>
          <img className='header--img' src={icon1} alt='icono' />
          <p className='header--text'>Proyectos Molones</p>
        </div>
        <img className='header--img-adalab' src={adalab} alt='logo adalab' />
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='preview--image' src={cover} alt='' />

          <section className='preview--autor'>
            <section className='info--project'>
              <div className='wrap--title__preview'>
                <div className='info--project__line1'></div>
                <p className='info--project__subtitle'>Personal Project Card</p>
                <div className='info--project__line2'></div>
              </div>

              <h2 className='info--project__title'>
                {data.name || 'Elegant Workspace'}
              </h2>
              <p className='info--project__slogan'>
                {data.slogan || 'Diseños Exclusivos'}
              </p>
              <p className='info--project__desc'>
                {data.desc ||
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
              </p>
              <section className='info--proyect__section'>
                <div className='info--project__technologies'>
                  <p className='info--project__technologies-text'>
                    {data.technologies || 'React JS, MongoDB'}
                  </p>
                </div>
                <i className='fa-solid fa-globe info--project__technologies-icon1'></i>
                <i className='fa-brands fa-github info--project__technologies-icon1'></i>
              </section>
            </section>

            <section className='info--autor'>
              <img className='info--autor__image' src={avatar} alt='' />
              <p className='info--autor__job'>
                {data.job || 'Full Stack Developer'}
              </p>
              <p className='info--autor__name'>
                {data.autor || 'Emmelie Björklund'}
              </p>
            </section>
          </section>
        </section>

        <form onSubmit={handleSubmit} className='form'>
          <h2 className='form--title'>Información</h2>

          <section className='form--ask__info'>
            <p className='form--ask__info_subtitle'>
              Cuéntanos sobre el proyecto
            </p>
            <hr className='form--ask__info_line' />
          </section>

          <fieldset className='form--project'>
            <input
              required
              // pattern="^[A-Za-z]$"
              className='form--project__input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              value={data.name}
              onChange={handleInputs}
            />
            <input
              required
              className='form--project__input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              value={data.slogan}
              onChange={handleInputs}
            />
            <input
              required
              className="form--project__input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={data.repo}
              onChange={handleInputs}
            />
            <input
              required
              className="form--project__input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value={data.demo}
              onChange={handleInputs}
            />
            <input
              required
              className="form--project__input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={data.technologies}
              onChange={handleInputs}
            />
            <textarea
              required
              className="form--project__textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={data.desc}
              onChange={handleInputs}
            ></textarea>
          </fieldset>

          <section className="form-ask-info">
            <p className="form--ask__info_subtitle">Cuéntanos sobre la autora</p>
            <hr className="form--ask__info_line" />
          </section>

          <fieldset className='form--autor'>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              value={data.autor}
              onChange={handleInputs}
            />
            <input
              className='input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              value={data.job}
              onChange={handleInputs}
            />
          </fieldset>

          <section className="buttons-img1">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img2">
            <button className="btn-large" onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href={url} className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </form>
      </main>
    </div>
  );
}
export default App;
