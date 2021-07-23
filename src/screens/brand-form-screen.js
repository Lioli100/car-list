import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";
import saveBrandService from "../services/save-brand-service";
import getBrandByIdService from "../services/get-brand-by-id-service";
import Header from "../components/header";
import useForm from "../hooks/use-form";
import Text from "../components/text";

const BrandFormScreen = () => {
  const [nameError, setNameError] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const { getValue, setValue, submit } = useForm({
    initialValues: {},
    onSubmit: ({ brand }) => {
      const { id, name } = brand;
      if (!name) {
        setNameError("Campo nome é obrigatório!");
        return;
      }
      const message = id
        ? `Marca ${name} editada com sucesso!`
        : `Marca ${name} adicionada com sucesso!`;

      saveBrandService({ id, name }).then(() => {
        notify({
          intent: "success",
          message,
        });

        goBack();
      });
    },
  });

  React.useEffect(() => {
    if (id) {
      getBrandByIdService({ id }).then((data) => {
        setValue("brand", data);
      });
    }
  }, [id]);

  return (
    <Container>
      <Header />

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
          submit();
        }}
      >
        <Input id="id" disabled value={getValue("brand.id")} />
        <Separator />
        <label htmlFor="name">
          <b>Nome:</b>
        </label>
        <Separator />
        <Input
          id="name"
          value={getValue("brand.name")} // mesma coisa se fosse: form["brand"]["name"]
          onChange={(value) => setValue("brand.name", value)}
          required
        />
        <Text style={{ color: "red" }}>{nameError}</Text>

        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default BrandFormScreen;
