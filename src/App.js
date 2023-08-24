import './styles/app.scss';
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
        <Button label="Kirjaudu sisään"></Button>
        <Button label="Luo käyttäjätunnus" class="secondary"></Button>
    </div>
  );
}

export default App;
