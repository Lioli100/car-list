import api from "./api";

const saveCarService = async ({ id, name }) =>
  api({
    url: `/cars${id ? `/${id}` : ""}`,
    method: id ? "PUT" : "POST",
    body: { name },
  });

export default saveCarService;
