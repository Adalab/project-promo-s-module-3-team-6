const Header = ({ icon1, adalab }) => {

  return (
    <header className='header'>
      <div className='header--div'>
        <img className='header--img' src={icon1} alt='icono' />
        <p className='header--text'>Proyectos Molones</p>
      </div>
      <img className='header--img-adalab' src={adalab} alt='logo adalab' />
    </header>
  )
}
export default Header
