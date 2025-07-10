import { responseSuccess } from "../common/helpers/response.helper";
import { uploadImageService } from "../services/uploadImageService";

export const uploadImageController = {
  create: async function (req, res, next) {
    try {
      const result = await uploadImageService.create(req);
      const response = responseSuccess(
        result,
        `Create uploadImage successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
