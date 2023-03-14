const Input = ({ nameId, placeholder, value, maxLenght, handleInputs }) => {
  return (
    <input
      required
      maxLength={maxLenght}
      className='form--project__input'
      type='text'
      placeholder={placeholder}
      name={nameId}
      id={nameId}
      value={value}
      onChange={handleInputs}
    />
  )
}
export default Input