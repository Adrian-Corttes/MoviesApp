import PageWrapper from '../components/pageWrapper';
import Pelicula from './peliculas';

function App() {
  return (
    <PageWrapper>
      <Pelicula 
        title='oblivion'
        img='images/uploads/mv1.jpg'
        año='(2012)'
        calificacion='8.1'
        director1='Joss Whedon'
        direstor2=''
        actor1='Robert Downey Jr.'
        actor2='Chris Evans'
        actor3='Chris Hemsworth'
        fecha='1 May 2015'
        duracion='2h21’'>
        Earth's mightiest heroes must come together and learn to fight as a
        team if they are to stop the mischievous Loki and his alien army from
        enslaving humanity...
      </Pelicula>

      <Pelicula 
        title='into the wild'
        img='images/uploads/mv2.jpg'
        año='(2014)'
        calificacion='7.8'
        director1='Anthony Russo, '
        director2='Joe Russo'
        actor1='Chris Evans'
        actor2='Samuel L. Jackson'
        actor3='Scarlett Johansson'
        fecha='1 May 2015'
        duracion='2h21’'>
        As Steve Rogers struggles to embrace his role in the modern
        world, he teams up with a fellow Avenger and S.H.I.E.L.D
        agent, Black Widow, to battle a new threat...
      </Pelicula>
    </PageWrapper>
  );
}

export default App;
