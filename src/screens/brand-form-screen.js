import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";
import saveBrandService from "../services/save-brand-service";
import getBrandByIdService from "../services/get-brand-by-id-service";

const BrandFormScreen = () => {
  const [brandId, setBrandId] = React.useState();
  const [brandName, setBrandName] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const saveBrand = () => {
    const message = id
      ? `Marca ${brandName} editada com sucesso!`
      : `Marca ${brandName} adicionada com sucesso!`;

    saveBrandService({ id, name: brandName }).then(() => {
      notify({
        intent: "success",
        message,
      });
      setBrandName("");
      goBack();
    });
  };

  React.useEffect(() => {
    if (id) {
      getBrandByIdService({ id }).then((data) => {
        setBrandId(data.id);
        setBrandName(data.name);
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? "Editar Marca" : "Nova Marca"}</h1>
      <Separator />
      <label htmlFor="id">
        <b>id:</b>
      </label>
      <Separator />
      <form
        style={{ maxWidth: 500 }}
        onSubmit={(event) => {
          event.preventDefault();
          saveBrand();
        }}
      >
        <Input id="id" disabled value={brandId} />
        <Separator />
        <label htmlFor="name">
          <b>Nome:</b>
        </label>
        <Separator />
        <Input
          id="name"
          value={brandName}
          onChange={(value) => setBrandName(value)}
          required
        />
        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default BrandFormScreen;
