import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";
import saveCarService from "../services/save-car-service";
import getCarByIdService from "../services/get-car-by-id-service";

const CarFormScreen = () => {
  const [carId, setCarId] = React.useState();
  const [carName, setCarName] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const saveCar = () => {
    const message = id
      ? `Carro ${carName} editada com sucesso!`
      : `Carro ${carName} adicionada com sucesso!`;

    saveCarService({ id, name: carName }).then(() => {
      notify({
        intent: "success",
        message,
      });
      setCarName("");
      goBack();
    });
  };

  React.useEffect(() => {
    if (id) {
      getCarByIdService({ id }).then((data) => {
        setCarId(data.id);
        setCarName(data.name);
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? "Editar Carro" : "Novo Carro"}</h1>
      <Separator />
      <label htmlFor="id">
        <b>id:</b>
      </label>
      <Separator />
      <form
        style={{ maxWidth: 500 }}
        onSubmit={(event) => {
          event.preventDefault();
          saveCar();
        }}
      >
        <Input id="id" disabled value={carId} />
        <Separator />
        <label htmlFor="name">
          <b>Nome:</b>
        </label>
        <Separator />
        <Input
          id="name"
          value={carName}
          onChange={(value) => setCarName(value)}
          required
        />
        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default CarFormScreen;
