import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import DeleteConfirmationModalCar from "../components/delete-confirmation-modal-car";
import getCarsService from "../services/get-car-service";
import SelectBrand from "../components/select-brands";

const CarsScreen = () => {
  const [cars, setCars] = React.useState([]);
  const [deletingCar, setDeletingCar] = React.useState();
  const [marcaSelecionada, setMarcaSelecionada] = React.useState(null);

  const getCars = () => {
    getCarsService().then((data) => {
      setCars(data);
    });
  };

  React.useEffect(() => {
    getCars();
  }, []);

  const onRequestClose = () => {
    setDeletingCar(undefined);
  };

  return (
    <Container>
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
      <SelectBrand
        value={marcaSelecionada?.id}
        onChange={(marca) => setMarcaSelecionada(marca)}
      />
      Marca Selecionada: {marcaSelecionada?.name}
      <br />
      <br />
      <SelectBrand onChange={() => null} />
      <Separator />
      <Table
        data={cars}
        columns={[
          { path: "id", label: "Código", width: "5%" },
          { path: "name", label: "Nome", width: "90%" },
          { path: "color", label: "Cor", width: "5%" },
          { path: "license_plate", label: "Placa", width: "5%" },
          {
            path: "",
            label: "Ações",
            render: ({ rowData }) => (
              <div style={{ display: "flex", width: "20%" }}>
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
              getCars();
              onRequestClose();
            }}
          />
        ) : null}
      </Modal>
    </Container>
  );
};

export default CarsScreen;
