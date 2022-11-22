import './App.css';
import Konyv from './Konyv';

const konyvTomb=[
  {
    cim:"Malevil",
    szerzo:"Robert Merle",
    ar:1200
  },
  {
    cim:"Védett férfiak",
    szerzo:"Robert Merele",
    ar:850
  },
  {
    cim:"Kecske",
    szerzo:"Robert Merle",
    ar:1750
  }
]
  


function App() {
  function kosarKezles(adat){
    console.log(adat)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>
      <article>
        {
          konyvTomb.map((konyv, index) => {
            return(<Konyv konyvObj={konyv} key={index} kosarKezelesfv={kosarKezles}/>)
          }
          )
        }
      </article>
      <footer>
        <p>Vitay Zalán</p>
      </footer>
    </div>
  );
}

export default App;
