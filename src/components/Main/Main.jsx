import './Main.css'
 
function Main (){
    return (
        <>
        <main>
        <div className='banner'>
          <div className='container-banner'>
            <div className='banner-content'>
              <h2>Bem-vindo ao Futuro do Mar</h2>
              <p>O mar é uma expressão de liberdade, as ondas são suas palavras.</p>
            </div>
          </div>
        </div>
        <div className='frase'>
          <div className='container-frase'>
            <div className='frase-content'>
              <h2>"Eu ainda acho melhor dizer que se arrependeu do que dizer que não teve coragem de tentar"</h2>
              <h3>-Ariel</h3>
            </div>
          </div>
        </div>
        <div className='cards'>
          <div className='container-cards'>
            <div className='card-grade'>
              <div className='card'>
                <img src="https://images.pexels.com/photos/10962931/pexels-photo-10962931.jpeg?_gl=1*16nymlp*_ga*NDk3NTMzNDA0LjE3NzE5Mzk5NjU.*_ga_8JE65Q40S6*czE3NzE5Mzk5NjQkbzEkZzEkdDE3NzE5Mzk5ODckajM3JGwwJGgw" alt="Peixe Boi Gordo" height={200} />
                <h3>Peixes de água doce</h3>
                <p>Espécies que vivem em rios e lagos, como os da Amazônia, adaptadas a ambientes com baixa concentração de sal e fundamentais para o equilíbrio dos ecossistemas aquáticos.</p>
              </div>
              <div className='card'>
                <img src="https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg?_gl=1*1r00nip*_ga*NDk3NTMzNDA0LjE3NzE5Mzk5NjU.*_ga_8JE65Q40S6*czE3NzE5Mzk5NjQkbzEkZzEkdDE3NzE5NDA2MjMkajM5JGwwJGgw" alt="Arraia nadando" height={200} />
                <h3>Peixes de água salgada</h3>
                <p>Espécies que vivem em mares e oceanos, como os do Oceano Atlântico, adaptadas a ambientes com alta concentração de sal e essenciais para a biodiversidade marinha.</p>
              </div>
              <div className='card'>
                <img src="https://images.pexels.com/photos/10810913/pexels-photo-10810913.jpeg?_gl=1*lbyxrw*_ga*NDk3NTMzNDA0LjE3NzE5Mzk5NjU.*_ga_8JE65Q40S6*czE3NzE5Mzk5NjQkbzEkZzEkdDE3NzE5NDA3NTEkajE5JGwwJGgw" alt="Caranguejo vermelho" height={200} />
                <h3>Crustáceos</h3>
                <p>Animais aquáticos com exoesqueleto rígido e corpo segmentado, como caranguejos e camarões, encontrados em ambientes marinhos e de água doce, essenciais para o equilíbrio das cadeias alimentares.</p>
              </div>
              <div className='card'>
                <img src="https://images.pexels.com/photos/9666592/pexels-photo-9666592.jpeg?_gl=1*o3p7e5*_ga*NDk3NTMzNDA0LjE3NzE5Mzk5NjU.*_ga_8JE65Q40S6*czE3NzE5Mzk5NjQkbzEkZzEkdDE3NzE5NDA5OTckajU5JGwwJGgw" alt="Família de lontras" height={200} />
                <h3>Animais Litoranios</h3>
                <p>Espécies que vivem na faixa entre o mar e a terra, como as encontradas no Litoral Brasileiro, adaptadas às variações de maré e fundamentais para o equilíbrio dos ecossistemas costeiros.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='fim'>
                <h2>Deixe o mar limpar sua alma.</h2>
                <p>O mar é um infinito em movimento, onde o silêncio das profundezas guarda mistérios que o vento conta só pra quem sabe escutar.</p>
        </div>
      </main>
        </>
    )
}
 
export default Main