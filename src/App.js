import React from "react";
import Menu from "./components/menu";
import MenuItem from "./components/menuitem";
import Button from "./components/button";
import TextInput from "./components/text-input";
import Text from "./components/text";
import Select from "./components/select";
import Container from "./components/container";
import Separator from "./components/separator";
import Modal from "./components/modal";
import TextArea from "./components/text-area";
import Toast from "./components/toast";
import Table from "./components/table";
import DeleteConfirmationModal from "./components/delete-confirmation-modal";
import Routes from "./routes";

function App() {
  const [name, setName] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [selectedBrand, setSelectedBrand] = React.useState(2);
  const [text, setText] = React.useState("");
  const [people, setPeople] = React.useState([
    { id: 1, name: "Rafael", age: 31 },
    { id: 2, name: "Henrique", age: 29 },
    { id: 3, name: "Juan", age: 28 },
    { id: 4, name: "Leandro", age: 31 },
    { id: 5, name: "Lioli", age: 50 },
  ]);
  const [deletingPerson, setDeletingPerson] = React.useState();

  //TODO: Get db.json brands
  const brands = [
    { id: 1, name: "Citroen" },
    { id: 2, name: "Volkswagen" },
    { id: 3, name: "Chevrolet" },
  ];
  const options = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  return (
    <Container>
      <Menu>Carro Marca</Menu>
      <Separator />
      <Routes />
      <MenuItem>Carro</MenuItem>
      <Text>Filtrar por placa</Text>
      <Separator />
      <TextInput
        id="name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Entrar com o modelo do carro"
        type="text"
      />
      <Separator />
      <Text>Filtrar por marca</Text>
      <Separator />
      <Select
        value={selectedBrand}
        options={options}
        onChange={setSelectedBrand}
      />
      <Separator />
      <Button onClick={() => alert("Você clicou no botão!")}>Button</Button>
      <Separator />
      <Button
        intent="primary"
        variant="outline"
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        80-Lines Processador: Intel(R) Core(TM) i5-8300H CPU @ 2.30GHz 2.30 GHz
        RAM: 8GB HD: 1TB Placa de vídeo: Nvidia GTX 1050 4GB Tem pra vender esse
        modelo com SSD, mais memória e placa de vídeo mais avançada também.
        Preços podem variar.
      </Modal>
      <Separator />
      <TextArea
        value={text}
        onChange={(value) => setText(value)}
        placeholder="Enter a long message"
      />
      <Separator />
      <Toast text="isto é um teste" intent="success">
        Notificação
      </Toast>
      <Separator />
      <Modal
        visible={Boolean(deletingPerson)}
        onRequestClose={() => setDeletingPerson(null)}
      >
        Tem certeza que deseja excluir o jovem {deletingPerson?.name}??
        <div>
          <Button
            onClick={() => {
              setPeople((currentState) =>
                currentState.filter((person) => person.id !== deletingPerson.id)
              );
              setDeletingPerson(null);
            }}
          >
            Com certeza.
          </Button>
          <Button onClick={() => setDeletingPerson(null)}>
            Não, obrigado.
          </Button>
        </div>
      </Modal>
      <Separator />
      <Table
        columns={[
          { path: "name", label: "Nome" },
          { path: "age", label: "Idade" },
          {
            path: "actions",
            label: "Ações",
            render: ({ rowData, index }) => {
              return (
                <div>
                  <Button>Editar</Button>
                  <Button onClick={() => setDeletingPerson(rowData)}>
                    Excluir
                  </Button>
                </div>
              );
            },
          },
        ]}
        data={people}
      />
      <DeleteConfirmationModal />
    </Container>
  );
}

export default App;
