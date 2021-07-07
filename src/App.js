import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Text from "./components/Text";
import Select from "./components/Select";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
      <Menu />
      <MenuItem>Carro</MenuItem>
    
      <MenuItem>Marca</MenuItem>
      <Text>Filtrar por placa</Text>
      <TextInput />
      <Text>Filtrar por marca</Text>
      <Select />
      <br />
      <br />
      <Button onClick={() => alert("Você clicou no botão!")}>teste</Button>     
    </div>
  );
}

export default App;
