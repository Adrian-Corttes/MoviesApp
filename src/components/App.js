import PageWrapper from '../components/pageWrapper';
import Pelicula from './peliculas';

function App() {
  return (
    <PageWrapper>
      <Pelicula 
        title='oblivion'
        img='images/uploads/mv1.jpg'
        calificacion='8.1'
        director='Joss Whedon'
        actor1='Robert Downey Jr.'
        actor2='Chris Evans'
        actor3='Chris Hemsworth'
        fecha='1 May 2015'
        duracion='2h21’'>
        Earth's mightiest heroes must come together and learn to fight as a
        team if they are to stop the mischievous Loki and his alien army from
        enslaving humanity...
      </Pelicula>
    </PageWrapper>
  );
}

export default App;
