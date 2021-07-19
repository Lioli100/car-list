import api from "./api";

const saveCarService = async ({ id, name, color, license_plate }) =>
  api({
    url: `/cars${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name, color, license_plate },
  });

export default saveCarService;
