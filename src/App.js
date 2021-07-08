import React from "react";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Button from "./components/Button";
import TextInput from "./components/textinput";
import Text from "./components/Text";
import Select from "./components/Select";
import Container from "./components/container";
import Separator from "./components/separator";
import Modal from "./components/modal";
import Routes from "./routes";

function App() {
  const [name, setName] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  return (


     <Container >
           <Menu  />

      <Separator />
      <Routes />
      <Separator />
      <MenuItem>Carro
          </MenuItem>


      <MenuItem>Marca</MenuItem>
      <Text>Filtrar por placa</Text>
      <TextInput
        id="name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Entrar com o modelo do carro"
        type="text"
      />
      <Separator />
      <Text>Filtrar por marca</Text>
      <Select />
      <Separator />
      <Button onClick={() => alert("Você clicou no botão!")}>Button</Button>
      <Separator />
      <Button onClick={() => {
        setVisible(true);
      }}
      >
        Open Modal
      </Button>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
      Ex dolor qui pariatur laborum irure eiusmod culpa velit aliquip ea do
        incididunt proident exercitation. Nulla non esse veniam ullamco nisi
        sunt. Est officia non fugiat enim tempor Lorem occaecat amet.
        </Modal>

    </Container>


);
}

export default App;


