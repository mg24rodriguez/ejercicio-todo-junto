import logo from './logo.png';
import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Ejercicio todo junto - React </h1>
      </header>

        <PersonalCard firstName = {"Mario"} lastName = {"Rodriguez"} age = {36} haircolor = {"Rubio"} />
        <PersonalCard firstName = {"Silvi"} lastName = {"Moncayo"} age = {34} haircolor = {"Castaño"} />
        <PersonalCard firstName = {"Gabriel"} lastName = {"Rodriguez"} age = {2} haircolor = {"Castaño"} />
        
    </div>
  );
}

export default App;
