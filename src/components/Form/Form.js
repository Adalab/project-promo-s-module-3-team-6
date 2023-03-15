import Button from "./Button"
import Input from "./Input"
import TextArea from "./TextArea"

const Form = ({ handleSubmit, data, handleInputs, errorRepo, handleClickCreateCard, errorMsjBtn, url }) => {
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
          handleInputs={handleInputs}
        />

        <Input
          maxLenght={'30'}
          placeholder={'Slogan'}
          nameId={'slogan'}
          value={data.slogan}
          handleInputs={handleInputs}
        />

        <Input
          placeholder={'Repo'}
          nameId={'repo'}
          value={data.repo}
          handleInputs={handleInputs}
        />
        <span className='span--error'>{errorRepo}</span>

        <Input
          placeholder={'Demo'}
          nameId={'demo'}
          value={data.demo}
          handleInputs={handleInputs}
        />
        <span className='span--error'>{errorRepo}</span>

        <Input
          placeholder={'Tecnologías'}
          nameId={'technologies'}
          value={data.technologies}
          handleInputs={handleInputs}
        />

        <TextArea
          data={data}
          handleInputs={handleInputs}
        />

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
          handleInputs={handleInputs}
        />

        <Input
          placeholder={'Trabajo'}
          nameId={'job'}
          value={data.job}
          handleInputs={handleInputs}
        />

      </fieldset>

      <section className="buttons-img1">
        <button className="btn">Subir foto de proyecto</button>
        <button className="btn">Subir foto de autora</button>
      </section>
      <section className="buttons-img2">
        <Button
          handleClickCreateCard={handleClickCreateCard}
        />
      </section>

      <section >
        <p className="card"> {errorMsjBtn} </p>
        <a className="error--msj" href={url} target="_blank" rel="noreferrer"> {url}</a>
      </section>
    </form>
  )
}
export default Form