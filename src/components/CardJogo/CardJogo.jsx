import './CardJogo.css'

function CardJogo({ imagem, titulo, onsale, genero, preco }) {
  const statusTexto = onsale ? '🟢 On Sale' : '🔴 Off Sale'

  return (
    
    <section className="autor-card">
      <img src={imagem} alt={`Imagem de ${titulo}`} className="autor-imagem" />
      <h2>
        {titulo} <span className={`status-dot ${onsale ? 'On Sale' : 'Off Sale'}`} />
      </h2>
      <p>{genero}</p>
      <p>{`R$: ${preco}`}</p>
      <small>{statusTexto}</small>
    </section>
  )
}

export default CardJogo