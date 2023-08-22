import './styles/app.scss';
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Jee
        <Button label="Nice button"></Button>
        <Input 
          type="text"
          placeholder="Text here"
        />
      </header>
    </div>
  );
}

export default App;
