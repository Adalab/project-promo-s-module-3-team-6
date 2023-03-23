import { Link } from "react-router-dom"
import ls from '../services/localStorage'
import '../styles/App.scss';
import user from '../images/user.png';
import Profile from './Profile';



const Landing = () => {

  const handleClickDeleteCard = (ev) => {
    ev.preventDefault()
  }


  const cardLanding = ls.get('cardList', [])
  const renderCardLanding = () => {
    return cardLanding.map((eachCard, i) => {
      return (
        <li className="li--items" key={i}>
          <section className='landing--autor'>
            <section className='info--project'>
              <div className='wrap--title__preview'>
                <div className='info--project__line1'></div>
                <p className='info--project__subtitle'>Personal Project Card</p>
                <div className='info--project__line2'></div>
              </div>
              <h2 className='info--project__title'>{eachCard.name}</h2>
              <p className='info--project__slogan'>{eachCard.slogan}</p>
              <p className='info--project__desc'>{eachCard.desc}</p>
              <section className='info--proyect__section'>
                <div className='info--project__technologies'>
                  <p className='info--project__technologies-text'>{eachCard.technologies}</p>
                </div>
                <div className='wrap--icon'>
                  <a href={eachCard.demo} target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></a>
                  <a href={eachCard.repo} target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></a>
                </div>
              </section>
            </section>

            <section className='info--autor'>
              <Profile className='info--autor__image' defaultAvatar={user} avatar={eachCard.photo} />
              <p className='info--autor__job'>{eachCard.job}</p>
              <p className='info--autor__name'>{eachCard.autor}</p>
            </section>
          </section>
          <i onClick={handleClickDeleteCard} class=" btn--delete__landing fa-solid fa-trash-can"></i>
        </li>
      )
    })
  }
  return (
    <div className='container'>
      <main>
        <section className="wrap--landing">
          <h1 className="landing--title">Proyectos molones</h1>
          <p className="landing--text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <Link className="landing--link btn-large" to="/create">Nuevo proyecto</Link>
        </section>
        <section>
          <ul className="list--element">{renderCardLanding()}</ul>
        </section>
      </main >
    </div>

  )
}
export default Landing