import PageWrapper from '../components/pageWrapper';
import Pelicula from './peliculas';
import PeliculasJson from '../peliculas.json';
import Paginacion from '../components/paginacion'

function App() {
  let peliculas = PeliculasJson;

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

      <Paginacion
        pagina={1}
        total={4}
        onChange={(pagina)=>{alert(pagina)}}
      />
    </PageWrapper>
  );
}

export default App;
