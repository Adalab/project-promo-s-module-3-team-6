const Button = ({ handleClickCreateCard }) => {
  return (
    <input type="submit" className="btn-large" onClick={handleClickCreateCard} value='Crear Tarjeta'>
    </input>
  )
}
export default Button;