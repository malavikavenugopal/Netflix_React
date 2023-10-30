
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import Requests from './Requests';


function App() {
  return (
    <div >
      <Nav/>
      <Banner fetchURL ={Requests.fetchNetflixOriginals}/>
    

    
     <Row isPoster={true}title="Trending Movies" fetchURL ={Requests.fetchTrending}/>
     <Row title="NetflixOriginals" fetchURL ={Requests.fetchNetflixOriginals}/>

     <Row title="Top Rated Movies" fetchURL ={Requests.fetchTopRated}/>
     <Row title="Action Movies" fetchURL ={Requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL ={Requests. fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL ={Requests. fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchURL ={Requests.fetchRomanceMovies}/>
     <Row title="Documenteries" fetchURL ={Requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
