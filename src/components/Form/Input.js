const Input = ({ nameId, placeholder, value, maxLenght, handleInputs }) => {

  const handleChangeInputs = (ev) => {
    handleInputs(ev.target.value, ev.target.name)
  }
  return (
    <input
      maxLength={maxLenght}
      className='form--project__input'
      type='text'
      placeholder={placeholder}
      name={nameId}
      id={nameId}
      value={value}
      onChange={handleChangeInputs}
    />
  )
}
export default Input