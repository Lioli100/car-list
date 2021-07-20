import React from "react";
import getCarsService from "../services/get-car-service";

const useCars = () => {
  const [cars, setCars] = React.useState([]);
  function loadCars() {
    getCarsService().then((data) => {
      setCars(data);
    });
  }

  React.useEffect(() => {
    loadCars();
  }, []);

  return { cars, loadCars };
};

export default useCars;
