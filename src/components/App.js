import PageWrapper from '../components/pageWrapper';
import Pelicula from './peliculas';

function App() {
  let peliculas = ''

  return (
    <PageWrapper>
      {peliculas.map(pelicula =>{
        return(
          <Pelicula 
            title={pelicula.title}
            img={pelicula.img}
            año={pelicula.año}
            calificacion={pelicula.calificacion}
            director1={pelicula.director1}
            director2={pelicula.director2}
            actor1={pelicula.actor1}
            actor2={pelicula.actor2}
            actor3={pelicula.actor3}
            fecha={pelicula.fecha}
            duracion={pelicula.duracion}>
            {pelicula.descripcion}
          </Pelicula>
        )
      })}
     
    </PageWrapper>
  );
}

export default App;
