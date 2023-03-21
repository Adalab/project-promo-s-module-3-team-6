const TextArea = ({ data, handleInputs }) => {
  const handleChangeInputs = (ev) => {
    handleInputs(ev.target.value, ev.target.name)
  }
  return (
    <textarea
      maxLength='200'
      className="form--project__textarea"
      type="text"
      placeholder="Descripción"
      name="desc"
      id="desc"
      value={data}
      onChange={handleChangeInputs}
    ></textarea>
  )
}
export default TextArea


