import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Text from "./components/Text";
import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <Menu />
      <MenuItem>Carro</MenuItem>
    
      <MenuItem>Marca</MenuItem>
      <Text>Filtrar por placa</Text>
      <TextInput />
      <Text>Filtrar por marca</Text>
      <Select />
      <br />
      <br />
      <Button onClick={() => alert("Você clicou no botão!")}>Clicar</Button>
    </div>
  );
}

export default App;
