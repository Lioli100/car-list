import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";
import Modal from "../components/modal";
import { Link } from "react-router-dom";
import DeleteConfirmationModal from "../components/delete-confirmation-modal";
import useBrands from "../hooks/use-brands";
import Header from "../components/header";
import Text from "../components/text";
import Input from "../components/input";

const BrandsScreen = () => {
  const { brands, loadBrands } = useBrands();
  // const [brands, setBrands] = React.useState([]);
  const [deletingBrand, setDeletingBrand] = React.useState();
  const [filter, setFilter] = React.useState("");

  // const getBrands = () => {
  //   getBrandsService().then((data) => {
  //     setBrands(data);
  //   });
  // };

  // React.useEffect(() => {
  //   getBrands();
  // }, []);

  const onRequestClose = () => {
    setDeletingBrand(undefined);
  };
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().startsWith(filter)
  );

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
        <h1>Marcas</h1>
        <Link to="/marcas/nova">
          <Button>Adicionar Marca</Button>
        </Link>
      </div>
      <Separator />
      <Text>Filtrar por marca</Text>
      <Input value={filter} onChange={setFilter} />
      <Separator />
      <Separator />
      <Table
        data={filteredBrands}
        columns={[
          { path: "id", label: "#", width: "5%" },
          { path: "name", label: "Nome", width: "90%" },
          {
            path: "",
            label: "Ações",
            render: ({ rowData }) => (
              <div style={{ display: "flex" }}>
                <Link to={`/marcas/${rowData.id}`}>
                  <Button size="sm">Editar</Button>
                </Link>
                <Separator size="sm" />
                <Button
                  intent="danger"
                  size="sm"
                  onClick={() => {
                    setDeletingBrand(rowData);
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
        visible={!!deletingBrand}
        onRequestClose={() => {
          onRequestClose();
        }}
      >
        {deletingBrand ? (
          <DeleteConfirmationModal
            brand={deletingBrand}
            onCancel={() => onRequestClose()}
            onSuccess={() => {
              loadBrands();
              // getBrands();
              onRequestClose();
            }}
          />
        ) : null}
      </Modal>
    </Container>
  );
};

export default BrandsScreen;
