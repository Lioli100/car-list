import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";
import saveCarService from "../services/save-car-service";
import getCarByIdService from "../services/get-car-by-id-service";
import Header from "../components/header";

const CarFormScreen = () => {
  const [carId, setCarId] = React.useState();
  const [carName, setCarName] = React.useState("");
  const [carLicensePlate, setCarLicensePlate] = React.useState("");
  const [carColor, setCarColor] = React.useState("");
  const [carMarca, setCarMarca] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const saveCar = () => {
    const message = id
      ? `Carro ${carName} editado com sucesso!`
      : `Carro ${carName} adicionado com sucesso!`;

    saveCarService({
      id,
      license_plate: carLicensePlate,
      color: carColor,
      name: carName,
      brandId: carMarca,
    }).then(() => {
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
        setCarLicensePlate(data.license_plate);
        setCarColor(data.color);
        setCarMarca(data.brandId);
      });
    }
  }, [id]);

  return (
    <Container>
      <Header />
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
        <label htmlFor="brandId">
          <b>Marca:</b>
        </label>
        <Input
          id="brandId"
          value={carMarca}
          onChange={(value) => setCarMarca(value)}
          required
        />
        <Separator />
        <label htmlFor="license_plate">
          <b>Placa:</b>
        </label>
        <Separator />
        <Input
          id="licence_plate"
          value={carLicensePlate}
          onChange={(value) => setCarLicensePlate(value)}
          required
        />
        <Separator />
        <label htmlFor="color">
          <b>Cor:</b>
        </label>
        <Separator />
        <Input
          id="color"
          value={carColor}
          onChange={(value) => setCarColor(value)}
          required
        />
        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default CarFormScreen;
