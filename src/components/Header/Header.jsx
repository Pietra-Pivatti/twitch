import './Header.css'
 
function Header (){
    return (
        <>
        <header className='site'>
        <div className='container-site'>
          <div className='contem-header'>
            <h1>Minha Página Exemplo</h1>
            <div className='main-div'>
              <ul>
                  <a>Inicio</a>
                  <a>Sobre</a>
                  <a>Contato</a>
              </ul>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}
 
export default Header