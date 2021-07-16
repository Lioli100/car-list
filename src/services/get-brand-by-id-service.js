import api from "./api";

const getBrandByIdService = ({ id }) => api({ url: `/brands/${id}` });

export default getBrandByIdService;
