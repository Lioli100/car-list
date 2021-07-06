import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Menu />
      <MenuItem>Carro</MenuItem>
    
      <MenuItem>Marca</MenuItem>
      <Button onClick={() => alert("Você clicou no botão!")}>Clicar</Button>
    </div>
  );
}

export default App;
