import api from "./api";

const deleteBrandService = ({ id }) =>
  api({ url: `/brands/${id}`, method: "DELETE" });

export default deleteBrandService;
