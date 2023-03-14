import Input from "./Input"
import TextArea from "./TextArea"

const Form = () => {

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
            value={data.name} ></Input>
            <Input
            maxLenght={'30'} 
            placeholder={'Slogan'} 
            nameId={'slogan'} 
            value={data.slogan} 
            ></Input>
            <Input 
            placeholder={'Repo'} 
            nameId={'repo'} 
            value={data.repo} ></Input>
            <span className='span--error'>{errorRepo}</span>
            <Input
            placeholder={'Demo'} 
            nameId={'demo'} 
            value={data.demo} ></Input>
            <span className='span--error'>{errorRepo}</span>
            <Input 
            placeholder={'Tecnologías'} 
            nameId={'technologies'} 
            value={data.technologies}></Input>
            <TextArea></TextArea>

          </fieldset>

          <section className="form-ask-info">
            <p className="form--ask__info_subtitle">Cuéntanos sobre la autora</p>
            <hr className="form--ask__info_line" />
          </section>

          <fieldset className='form--autor'>
          <Input
            placeholder={'Nombre'} 
            nameId={'autor'} 
            value={data.autor} ></Input>

          <Input
            placeholder={'Trabajo'} 
            nameId={'job'} 
            value={data.job} ></Input>
          </fieldset>

          <section className="buttons-img1">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img2">
            <input type="submit" className="btn-large" onClick={handleClickCreateCard} value='Crear Tarjeta'>
              
            </input>
          </section>

          <section >
            <p className="card"> {errorMsjBtn} </p>
            <a className="error--msj" href={url}  target="_blank" rel="noreferrer"> {url}</a>
          </section>
        </form>
)
}

export default Form