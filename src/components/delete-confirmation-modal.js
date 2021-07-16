import deleteBrandService from "../services/delete-brand-service";
import Button from "./button";
import Separator from "./separator";
import { useToast } from "./toast";

const DeleteConfirmationModal = ({ brand, onCancel, onSuccess }) => {
  const { notify } = useToast();

  return (
    <>
      <h3>{brand.name}</h3>
      <p>Tem certeza que deseja excluir {brand.name}?</p>
      <Separator />
      <div style={{ display: "flex" }}>
        <Button variant="outline" onClick={() => onCancel()}>
          Cancelar
        </Button>
        <Separator />
        <Button
          intent="danger"
          onClick={() => {
            deleteBrandService({ id: brand.id }).then(() => {
              notify({
                intent: "success",
                message: `Marca ${brand.name} excluída com sucesso!`,
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

export default DeleteConfirmationModal;
