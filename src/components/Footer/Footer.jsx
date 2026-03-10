import './Footer.css'
 
function Footer (){
    return (
        <>
        <footer className='site-footer'>
        <div className='container-footer'>
          <div className='footer-content'>
            <div className='footer-div'>
              <ul>
                <a>Política de Privacidade</a>
                <a>Termos de Uso</a>
                <a>Cookies</a>
                <a>Suporte</a>
              </ul>
            </div>
            <p>© 2026 Minha Página Exemplo. Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
        </>
    )
}
 
export default Footer