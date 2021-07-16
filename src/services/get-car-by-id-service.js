import api from "./api";

const getCarByIdService = ({ id }) => api({ url: `/cars/${id}` });

export default getCarByIdService;
