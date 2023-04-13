
import './App.css';
import Search from './Components/search/Search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <>
      <Search onSearchChange={handleOnSearchChange}/>
    </>
  );
}

export default App; 
