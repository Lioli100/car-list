import api from "./api";

const deleteCarService = ({ id }) =>
  api({ url: `/cars/${id}`, method: "DELETE" });

export default deleteCarService;
