
import './App.css';
import CurrentWeather from './Components/currentWeather/currentWeather';
import Search from './Components/search/Search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <>
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </>
  );
}

export default App; 
