
const Input =({nameId,placeholder,value,maxLenght}) => {

  const regex =  /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ ; 

  const handleInputs = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
  
    setData({ ...data, [inputName]: inputValue }) // cogemos valor que hay dentro de inputName y lo definimos con inputValue

    if(inputName === 'demo'){
      if(inputValue === ''){
        setErrorDemo('')
      }else if (!regex.test(inputValue)) {
        setErrorDemo('*Introduce un enlace válido, Ej: https://...')
      } 
    }
    if(inputName === 'repo'){
      if(inputValue === ''){
        setErrorRepo('')
      }else if (!regex.test(inputValue)) {
        setErrorRepo('*Introduce un enlace válido, Ej: https://...')
      } 
    }
  }

  return (
            <input
              required
              maxLength={maxLenght}
              className='form--project__input'
              type='text'
              placeholder= {placeholder}
              name= {nameId}
              id= {nameId}
              value={value}
              onChange={handleInputs}
            />

  )
}

  export default Input