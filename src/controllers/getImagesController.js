import getImagesService from "../services/getImagesService";
import { responseSuccess } from "../common/helpers/response.helper";

const getImagesController = {
  create: async function (req, res, next) {
    try {
      const result = await getImagesService.create(req);
      const response = responseSuccess(result, `Create getImages successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findAll: async function (req, res, next) {
    try {
      const result = await getImagesService.findAll(req);
      const response = responseSuccess(
        result,
        `Get all getImagess successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findOne: async function (req, res, next) {
    try {
      const result = await getImagesService.findOne(req);
      const response = responseSuccess(
        result,
        `Get getImages #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  update: async function (req, res, next) {
    try {
      const result = await getImagesService.update(req);
      const response = responseSuccess(
        result,
        `Update getImages #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  remove: async function (req, res, next) {
    try {
      const result = await getImagesService.remove(req);
      const response = responseSuccess(
        result,
        `Remove getImages #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};

export default getImagesController;
