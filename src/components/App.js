import { useState } from 'react';
import '../styles/App.scss';
import avatar from '../images/user.jpeg'

function App() {

  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [desc, setSDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');
  const [photo, setPhoto] = useState('');
  const [image, setImage] = useState('');

  const handleInputs = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === "name") {
      setName(inputValue)
    } else if (inputName === "slogan") {
      setSlogan(inputValue)
    } else if (inputName === "technologies") {
      setTechnologies(inputValue)
    } else if (inputName === "repo") {
      setRepo(inputValue)
    } else if (inputName === "demo") {
      setDemo(inputValue)
    } else if (inputName === "desc") {
      setSDesc(inputValue)
    } else if (inputName === "autor") {
      setAutor(inputValue)
    } else if (inputName === "job") {
      setJob(inputValue)
    } else if (inputName === "photo") {
      setPhoto(inputValue)
    } else if (inputName === "image") {
      setImage(inputValue)
    }
  }


  return (
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="preview--image" src="./images/cover.jpeg" alt="" />

          <section className="preview--autor">
            <section className="info--project">
              <p className="info--project__subtitle">Personal Project Card</p>
              <hr className="info--project__line" />

              <h2 className="info--project__title">{name || 'Elegant Workspace'}</h2>
              <p className="info--project__slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="info--project__desc">{desc || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}

              </p>
              <section className="info--project__technologies">
                <p className="text">{technologies || 'React JS, MongoDB'}</p>
              </section>
            </section>

            <section className="info--autor">
              <img className="info--autor__image" src={avatar} alt="" />
              <p className="info--autor__job">{job || 'Full Stack Developer'}</p>
              <p className="info--autor__name">{autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="form--title">Información</h2>

          <section className="form--ask__info">
            <p className="form--ask__info_subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="form--ask__info_line" />
          </section>

          <fieldset className="form--project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={name}
              onChange={handleInputs}
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={slogan}
              onChange={handleInputs}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              value={repo}
              onChange={handleInputs}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              value={demo}
              onChange={handleInputs}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange={handleInputs}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              value={desc}
              onChange={handleInputs}
            ></textarea>
          </fieldset>

          <section className="form--ask__info">
            <p className="form--ask__info_subtitle">Cuéntanos sobre la autora</p>
            <hr className="form--ask__info_line" />
          </section>

          <fieldset className="form--autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              value={autor}
              onChange={handleInputs}
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value={job}
              onChange={handleInputs}
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
    </div>
  )
}

export default App;
