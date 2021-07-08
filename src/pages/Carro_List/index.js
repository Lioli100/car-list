import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


function Carro_List() {
  return (
    <div style={{
      gap: "16px",
      display: "flex",

    }}> 
      Listagem de Carros
      <Link className="btn-novo-car" to={`/Carro_Form`}>
        <Button className="btn-incluir-carro">Novo Carro</Button>
      </Link>
    </div>
  );
}

export default Carro_List;
