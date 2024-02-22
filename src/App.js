import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">  
      <div className='contenedor-principal'>
        <h1>Mis cuentas favoritas de YouTube</h1>
        < Perfil
          nombre= 'Brais Moure'
          pais= 'España'
          imagen='brais'
          cargo='Ingeniero de software'
          empresa='Google'
          resena='Es un presentador en YouTube'
          linkedin='https://www.linkedin.com/in/braismoure/'
          youtube='https://www.youtube.com/@mouredev'
          twitter='https://twitter.com/MoureDev'
        />
        < Perfil
          nombre= 'Facundo'
          pais= 'España'
          imagen='facundo'
          cargo='Ingeniero de software'
          empresa='Google'
          resena='Es un presentador en YouTube'
          linkedin='https://www.linkedin.com/in/braismoure/'
          youtube='https://www.youtube.com/@mouredev'
          twitter='https://twitter.com/MoureDev'
        />
        < Perfil
          nombre= 'Rubius'
          pais= 'España'
          imagen='rubius'
          cargo='Streamer'
          empresa='Youtube'
          resena='Es un presentador en YouTube'
          linkedin='https://www.linkedin.com/in/braismoure/'
          youtube='https://www.youtube.com/@mouredev'
          twitter='https://twitter.com/MoureDev'
        />    
      </div>

    </div>
  );
}

export default App;
