import api from "./api";

const saveBrandService = async ({ id, name }) =>
  api({
    url: `/brands${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name },
  });

export default saveBrandService;
