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
import useForm from "../hooks/use-form";

const CarFormScreen = () => {
  // const [carId, setCarId] = React.useState();
  // const [carName, setCarName] = React.useState("");
  // const [carLicensePlate, setCarLicensePlate] = React.useState("");
  // const [carColor, setCarColor] = React.useState("");
  // const [carMarca, setCarMarca] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  // const saveCar = () => {
  //   const message = id
  //     ? `Carro ${carName} editado com sucesso!`
  //     : `Carro ${carName} adicionado com sucesso!`;

  const { getValue, setValue, submit } = useForm({
    initialValues: {},
    onSubmit: ({ car }) => {
      const { id, name, color, brandId, license_plate } = car;
      const message = id
        ? `Carro ${name} editado com sucesso!`
        : `Carro ${name} adicionado com sucesso!`;

      // saveCarService({
      //   id,
      //   license_plate: carLicensePlate,
      //   color: carColor,
      //   name: carName,
      //   brandId: carMarca,
      // }).then(() => {
      //   notify({
      //     intent: "success",
      //     message,
      saveCarService({ id, name, color, brandId, license_plate }).then(() => {
        notify({
          intent: "success",
          message,
        });

        // setCarName("");
        goBack();
      });
    },
  });

  React.useEffect(() => {
    if (id) {
      getCarByIdService({ id }).then((data) => {
        // setCarId(data.id);
        // setCarName(data.name);
        // setCarLicensePlate(data.license_plate);
        // setCarColor(data.color);
        // setCarMarca(data.brandId);
        setValue("car", data);
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
          // saveCar();
          submit();
        }}
      >
        {/* <Input id="id" disabled value={carId} /> */}
        <Input id="id" disabled value={getValue("car.id")} />
        <Separator />
        <label htmlFor="name">
          <b>Nome:</b>
        </label>
        <Separator />
        <Input
          id="name"
          // value={carName}
          // onChange={(value) => setCarName(value)}
          value={getValue("car.name")}
          onChange={(value) => setValue("car.name", value)}
          required
        />
        <Separator />
        <label htmlFor="brandId">
          <b>Marca:</b>
        </label>
        <Input
          id="brandId"
          // value={carMarca}
          // onChange={(value) => setCarMarca(value)}
          value={getValue("car.brandId")}
          onChange={(value) => setValue("car.brandId", value)}
          required
        />
        <Separator />
        <label htmlFor="license_plate">
          <b>Placa:</b>
        </label>
        <Separator />
        <Input
          id="license_plate"
          value={getValue("car.license_plate")}
          onChange={(value) => setValue("car.license_plate", value)}
          // value={carLicensePlate}
          // onChange={(value) => setCarLicensePlate(value)}
          required
        />
        <Separator />
        <label htmlFor="color">
          <b>Cor:</b>
        </label>
        <Separator />
        <Input
          id="color"
          // value={carColor}
          // onChange={(value) => setCarColor(value)}
          value={getValue("car.color")}
          onChange={(value) => setValue("car.color", value)}
          required
        />
        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default CarFormScreen;
