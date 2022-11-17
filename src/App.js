import logo from './logo.svg';
import './App.css';
import CountryDetails from './  components/CountryDetails';
import CountriesList from './  components/CountriesList';
import Navbar from './  components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
