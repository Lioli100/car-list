import api from "./api";

const getBrandsService = () => api({ url: "/brands" });

export default getBrandsService;
