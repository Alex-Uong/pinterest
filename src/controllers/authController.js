import authService from "../services/authService.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

const authController = {
  register: async (req, res) => {
    console.log(req.body);
    const result = await authService.register(req);
    const resData = responseSuccess(result);
    res.status(resData.statusCode).json(resData);
  },
  login: async (req, res) => {
    const result = await authService.login(req);
    const resData = responseSuccess(result);
    res.status(resData.statusCode).json(resData);
  },
};

export default authController;
