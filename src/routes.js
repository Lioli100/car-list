import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carro_Form from "./pages/Carro_Form";
import Carro_List from "./pages/Carro_List";
import Marca_Form from "./pages/Marca_Form";
import Marca_List from "./pages/Marca_List";





const Routes = () => (
  
  <BrowserRouter>
    <div className="Inicio">
    </div>
    <Switch>
      < Route exact path="/" component={Carro_List} />
      {/* <Route exact path="/" component={Carro_List} /> */}
      < Route path="/Carro_Form" component={Carro_Form} />
      < Route path="/Marca_Form" component={Marca_Form} />
      < Route path="/Marca_List" component={Marca_List} />
      
      
      
      {/* <Route path="/listaProdutos/:categoria_id" component={ListaProdutos} />
      <Route path="/detalhesProduto/:produto_id" component={DetalhesProduto} /> */}
    </Switch>
  </BrowserRouter> 
 
);

export default Routes;