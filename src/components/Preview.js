
import Profile from './Profile';
import cover from '../images/cover.jpeg';
import user from '../images/user.png';

const Preview = ({ data }) => {
  return (
    <section className='preview'>
      <Profile className='preview--image' defaultAvatar={cover} avatar={data.image} />

      <section className='preview--autor'>
        <section className='info--project'>
          <div className='wrap--title__preview'>
            <div className='info--project__line1'></div>
            <p className='info--project__subtitle'>Personal Project Card</p>
            <div className='info--project__line2'></div>
          </div>
          <h2 className='info--project__title'>{data.name || 'Elegant Workspace'}</h2>
          <p className='info--project__slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
          <p className='info--project__desc'>{data.desc || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}</p>
          <section className='info--proyect__section'>
            <div className='info--project__technologies'>
              <p className='info--project__technologies-text'>{data.technologies || 'React JS, MongoDB'}</p>
            </div>
            <div className='wrap--icon'>
              <a href={data.demo} target="_blank" rel="noreferrer"><i className='fa-solid fa-globe info--project__technologies-icon1'></i></a>
              <a href={data.repo} target="_blank" rel="noreferrer"><i className='fa-brands fa-github info--project__technologies-icon1'></i></a>
            </div>
          </section>
        </section>

        <section className='info--autor'>
          <Profile className='info--autor__image' defaultAvatar={user} avatar={data.photo} />
          <p className='info--autor__job'>{data.job || 'Full Stack Developer'}</p>
          <p className='info--autor__name'>{data.autor || 'Emmelie Björklund'}</p>
        </section>
      </section>
    </section>
  )
}
export default Preview
