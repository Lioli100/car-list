import deleteCarService from "../services/delete-car-service";
import Button from "./button";
import Separator from "./separator";
import { useToast } from "./toast";

const DeleteConfirmationModalCar = ({ car, onCancel, onSuccess }) => {
  const { notify } = useToast();

  return (
    <>
      <h3>{car.name}</h3>
      <p>Tem certeza que deseja excluir {car.name}?</p>
      <Separator />
      <div style={{ display: "flex" }}>
        <Button variant="outline" onClick={() => onCancel()}>
          Cancelar
        </Button>
        <Separator />
        <Button
          intent="danger"
          onClick={() => {
            deleteCarService({ id: car.id }).then(() => {
              notify({
                intent: "success",
                message: `Carro ${car.name} excluído com sucesso!`,
              });
              onSuccess();
            });
          }}
        >
          Excluir
        </Button>
      </div>
    </>
  );
};

export default DeleteConfirmationModalCar;
