import './App.css';
import Header from './components/Header'
import Movie from './components/Movie';
import Movies from './movie.json'

function App() {  
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          Movies.map((element,index) =>{
            return(
            <Movie
            key= {index}
            imdbID={element.imdbID}
            Title={element.Title}
            year={element.Year}
            img={element.Poster}
            />
            )

          })
        }
      </div>
    </div>
    
  );
}

export default App;
