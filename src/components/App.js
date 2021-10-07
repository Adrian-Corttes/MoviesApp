import PageWrapper from '../components/pageWrapper';
import Pelicula from './peliculas';
import PeliculasJson from '../peliculas.json';
import Paginacion from '../components/paginacion'
import { useState } from 'react';

function App() {

  const [paginaActual,setPaginaActual] = useState(1);
  const totalPaginas = 4;

  let peliculas = PeliculasJson;

  
 const cargarPeliculas = ()=>{
    peliculas = peliculas.slice((paginaActual - 1) * totalPaginas, paginaActual * totalPaginas ); 
 }

  const getTotalPaginas = ()=>{
    let cantTotalDePeliculas = PeliculasJson.length;
    return Math.ceil(cantTotalDePeliculas / totalPaginas);
  }

  cargarPeliculas()

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
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina)=>{setPaginaActual(pagina)}}
      />
    </PageWrapper>
  );
}

export default App;
