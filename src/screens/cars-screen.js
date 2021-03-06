import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import DeleteConfirmationModalCar from "../components/delete-confirmation-modal-car";
import SelectBrand from "../components/select-brands";
import Header from "../components/header";
import useCars from "../hooks/use-cars";
import Input from "../components/input";
import Text from "../components/text";

const CarsScreen = () => {
  const { cars, loadCars } = useCars();
  const [deletingCar, setDeletingCar] = React.useState();
  const [marcaSelecionada, setMarcaSelecionada] = React.useState(null);
  const [filter, setFilter] = React.useState("");

  const onRequestClose = () => {
    setDeletingCar(undefined);
  };

  const filteredCars = cars.filter((car) => {
    const isCarNameStartingWithCurrentFilter = car.name
      .toLowerCase()
      .startsWith(filter);
    const isCarBrandMatchingBrandFilter = car.brandId == marcaSelecionada?.id;
    return isCarNameStartingWithCurrentFilter && isCarBrandMatchingBrandFilter;
  });

  return (
    <Container>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Carros</h1>
        <Link to="/carros/novo">
          <Button>Adicionar Carro</Button>
        </Link>
      </div>
      <Separator />
      <Text>Filtrar por nome:</Text>
      <Input value={filter} onChange={(value) => setFilter(value)} />
      <Separator />
      <Separator />
      <SelectBrand
        value={marcaSelecionada?.id}
        onChange={(marca) => {
          setMarcaSelecionada(marca);
          console.log(marca);
        }}
      />
      Marca Selecionada: {marcaSelecionada?.name}
      <br />
      <br />
      <Separator />
      <Table
        data={filteredCars}
        columns={[
          { path: "name", label: "Nome", width: "40%" },
          { path: "color", label: "Cor", width: "40%" },
          { path: "license_plate", label: "Placa", width: "10%" },
          { path: "brandId", label: "Marca", width: "10%" },
          {
            path: "",
            label: "A????es",
            render: ({ rowData }) => (
              <div style={{ display: "flex", width: "5%" }}>
                <Link to={`/carros/${rowData.id}`}>
                  <Button size="sm">Editar</Button>
                </Link>
                <Separator size="sm" />
                <Button
                  intent="danger"
                  size="sm"
                  onClick={() => {
                    setDeletingCar(rowData);
                  }}
                >
                  Excluir
                </Button>
              </div>
            ),
          },
        ]}
      />
      <Modal
        visible={!!deletingCar}
        onRequestClose={() => {
          onRequestClose();
        }}
      >
        {deletingCar ? (
          <DeleteConfirmationModalCar
            car={deletingCar}
            onCancel={() => onRequestClose()}
            onSuccess={() => {
              loadCars();
              onRequestClose();
            }}
          />
        ) : null}
      </Modal>
    </Container>
  );
};

export default CarsScreen;
