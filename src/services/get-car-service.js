import api from "./api";

const getCarsService = () => api({ url: "/cars" });

export default getCarsService;
