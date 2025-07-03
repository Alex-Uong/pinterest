import { responseSuccess } from "../common/helpers/response.helper";
import { imageDetailService } from "../services/imageDetailService";

export const imageDetailController = {
  create: async function (req, res, next) {
    try {
      const result = await imageDetailService.create(req);
      const response = responseSuccess(
        result,
        `Create imageDetail successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findAll: async function (req, res, next) {
    try {
      const result = await imageDetailService.findAll(req);
      const response = responseSuccess(
        result,
        `Get all imageDetails successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findOne: async function (req, res, next) {
    try {
      const result = await imageDetailService.findOne(req);
      const response = responseSuccess(
        result,
        `Get imageDetail #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findMany: async function (req, res, next) {
    try {
      const result = await imageDetailService.findMany(req);
      const response = responseSuccess(
        result,
        `Get imageDetail #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  update: async function (req, res, next) {
    try {
      const result = await imageDetailService.update(req);
      const response = responseSuccess(
        result,
        `Update imageDetail #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  remove: async function (req, res, next) {
    try {
      const result = await imageDetailService.remove(req);
      const response = responseSuccess(
        result,
        `Remove imageDetail #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  isImageSavedByUser: async function (req, res, next) {
    try {
      const result = await imageDetailService.isImageSavedByUser(req);
      const response = responseSuccess(
        result,
        `get isImageSavedByUser #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  addCommentToImage: async function (req, res, next) {
    try {
      const result = await imageDetailService.addCommentToImage(req);
      const response = responseSuccess(
        result,
        `post addCommentToImage #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
