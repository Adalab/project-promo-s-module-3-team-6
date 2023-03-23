import Button from "./Button"
import Input from "./Input"
import TextArea from "./TextArea"
import GetAvatar from '../GetAvatar';
import ButtonReset from './ButtonReset'

const Form = ({ handleSubmit, data, handleInputs, errorRepo, errorDemo, handleClickCreateCard, errorMsjBtn, url, updateAvatar, updateCover, handleClickReset }) => {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2 className='form--title'>Información</h2>
      <section className='form--ask__info'>
        <p className='form--ask__info_subtitle'>
          Cuéntanos sobre el proyecto
        </p>
        <hr className='form--ask__info_line' />
      </section>

      <fieldset className='form--project'>
        <Input
          maxLenght={'20'}
          placeholder={'Nombre del proyecto'}
          nameId={'name'}
          value={data.name}
          handleInputs={handleInputs} />

        <Input
          maxLenght={'30'}
          placeholder={'Slogan'}
          nameId={'slogan'}
          value={data.slogan}
          handleInputs={handleInputs} />

        <Input
          placeholder={'Repo'}
          nameId={'repo'}
          value={data.repo}
          handleInputs={handleInputs} />
        <span className='span--error'>{errorRepo}</span>

        <Input
          placeholder={'Demo'}
          nameId={'demo'}
          value={data.demo}
          handleInputs={handleInputs} />
        <span className='span--error'>{errorDemo}</span>

        <Input
          placeholder={'Tecnologías'}
          nameId={'technologies'}
          value={data.technologies}
          handleInputs={handleInputs} />

        <TextArea
          data={data.desc}
          handleInputs={handleInputs} />
      </fieldset>

      <section className="form-ask-info">
        <p className="form--ask__info_subtitle">Cuéntanos sobre la autora</p>
        <hr className="form--ask__info_line" />
      </section>

      <fieldset className='form--autor'>
        <Input
          placeholder={'Nombre'}
          nameId={'autor'}
          value={data.autor}
          handleInputs={handleInputs} />

        <Input
          placeholder={'Trabajo'}
          nameId={'job'}
          value={data.job}
          handleInputs={handleInputs} />
      </fieldset>

      <section className="buttons-img1">
        <GetAvatar
          btnText='Subir foto de la autora'
          updateAvatar={updateAvatar}
          className='btn' />

        <GetAvatar
          updateAvatar={updateCover}
          btnText='Subir foto del proyecto'
          className='btn' />
      </section>

      <section className="buttons-img2">
        <Button
          handleClickCreateCard={handleClickCreateCard} />
      </section>

      <section >
        <p className="card"> {errorMsjBtn} </p>
        <a className="error--msj" href={url} target="_blank" rel="noreferrer"> {url}</a>
      </section>
      <ButtonReset handleClickReset={handleClickReset} />

    </form>
  )
}
export default Form