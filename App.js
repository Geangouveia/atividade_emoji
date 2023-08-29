  import novic from "./img/novic.png"
  import "./App.css"
  function App() {
    return(
    <     div className="App" >
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      Github:<a class="url" href="https://github.com/Geangouveia">https://github.com/Geangouveia</a><p/>
  <h1>Hello World</h1>
  <img src={novic} title="Confuso" className="foto" alt="novic"/>
        <div className="Texto2">
  <p> Clique no novic para exibir o nome dele </p>
    </div>
      <div className="novic">
  <section class="novic">
  <button onclick="CarConteudo()" title="Sorriso" >😀</button> 
  <span id="conteudo"></span>
  </section>
  <section class="novic">
  <button title="Soltando Confetes">🎉</button>
  </section>
  <section class="novic">
  <button title="Dançando">💃</button>
  </section>
  </div>
  </div>
  );
  }
  export default App;