import { Link } from "react-router-dom"
import ls from '../services/localStorage'
import '../styles/App.scss';


const Landing = () => {
  const cardLanding = ls.get('card', {})
  const renderCardLanding = () => {
    return cardLanding.map((eachCard, i) => {
      return (
        <li key={i}>
          <section>
            <img
              src={eachCard.photo}
              alt="Foto de la autora"
            />
            <p>{eachCard.job}</p>
            <p>{eachCard.autor}</p>
          </section>

          <section>
            <p>Personal Project Card</p>
            <h2>{eachCard.name}</h2>
            <p>{eachCard.slogan}</p>
            <p>{eachCard.desc}</p>
            <section>
              <p>{eachCard.technologies}</p>
              <div className='wrap--icon'>
                <a href={eachCard.demo} target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></a>
                <a href={eachCard.repo} target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></a>
              </div>
            </section>
          </section>
        </li>
      )
    })
  }
  return (
    <div className='container'>
      <main>
        <section>
          <h1>Proyectos molones</h1>
          <p>Escaparate en línea para recoger ideas a través de la tecnología</p>
          <Link to="/create">Nuevo proyecto</Link>
        </section>
        <section>
          <ul>{renderCardLanding}</ul>
        </section>
      </main >
    </div>

  )
}
export default Landing