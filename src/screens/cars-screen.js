import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import DeleteConfirmationModal from "../components/delete-confirmation-modal";
import getCarsService from "../services/get-car-service";

const CarsScreen = () => {
  const [cars, setCars] = React.useState([]);
  const [deletingCar, setDeletingCar] = React.useState();

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
          <Button>Adicionar Carro teste</Button>
        </Link>
      </div>
      <Separator />
      <Table
        data={cars}
        columns={[
          { path: "id", label: "#", width: "5%" },
          { path: "name", label: "Nome", width: "90%" },
          {
            path: "",
            label: "Ações",
            render: ({ rowData }) => (
              <div style={{ display: "flex" }}>
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
          <DeleteConfirmationModal
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
