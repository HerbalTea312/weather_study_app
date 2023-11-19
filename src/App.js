import Table from './components/Table';
import City from './components/City';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>SIMPLE WEATHER</h1>
      </header>
      <City />
      <Table />
    </div>
  );
}

export default App;
