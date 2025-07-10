import { responseSuccess } from "../common/helpers/response.helper";
import { updateUserService } from "../services/updateUserService";

export const updateUserController = {
  update: async function (req, res, next) {
    try {
      const result = await updateUserService.update(req);
      const response = responseSuccess(
        result,
        `Update updateUser #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
