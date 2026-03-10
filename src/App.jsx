import "./App.css";
import CardJogo from "./components/CardJogo/CardJogo";

import Imagem1 from "./assets/img/MiSide.png";
import Imagem2 from "./assets/img/Stardew.png";
import Imagem3 from "./assets/img/SOSops.png";
import Imagem4 from "./assets/img/Terraria.png";
import Imagem5 from "./assets/img/Sally Face.png";
import Imagem6 from "./assets/img/Kirby.png";
import Imagem7 from "./assets/img/HelloKitty.png";
import Imagem8 from "./assets/img/HelloNeibor.png";
import Imagem9 from "./assets/img/Undertale.png";
import Imagem10 from "./assets/img/Kindergarten.png";

function App() {
  return (
    <>

      <main className="site">
        <CardJogo
          imagem={Imagem1}
          titulo="MiSide"
          genero="Terror"
          preco={79.27}
          onsale={false}
        />

        <CardJogo
          imagem={Imagem2}
          titulo="Stardew Valley"
          genero="Rpg"
          preco={12.99}
          onsale={true}
        />

        <CardJogo
          imagem={Imagem3}
          titulo="SOS Ops"
          genero="Cooperativo"
          preco={3.99}
          onsale={false}
        />

        <CardJogo
          imagem={Imagem4}
          titulo="Terraria"
          genero="RPG"
          preco={9.99}
          onsale={true}
        />

        <CardJogo
          imagem={Imagem5}
          titulo="Sally Face"
          genero="Indie"
          preco={31.18}
          onsale={false}
        />

        <CardJogo
          imagem={Imagem6}
          titulo="Kirby"
          genero="Plataforma"
          preco={349.0}
          onsale={false}
        />

        <CardJogo
          imagem={Imagem7}
          titulo="Hello Kitty Island Adventure"
          genero="Aventura"
          preco={95.43}
          onsale={true}
        />

        <CardJogo
          imagem={Imagem8}
          titulo="Hello Neighbor"
          genero="Terror furtivo"
          preco={22.0}
          onsale={false}
        />

        <CardJogo
          imagem={Imagem9}
          titulo="Undertale"
          genero="Indie"
          preco={19.99}
          onsale={false}
        />

        <CardJogo
          imagem={Imagem10}
          titulo="Kindergarten"
          genero="Puzzle"
          preco={26.41}
          onsale={false}
        />

      </main>
    </>
  );
}

export default App;
