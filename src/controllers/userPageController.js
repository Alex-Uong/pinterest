import { responseSuccess } from "../common/helpers/response.helper";
import { userPageService } from "../services/userPageService";

export const userPageController = {
  create: async function (req, res, next) {
    try {
      const result = await userPageService.create(req);
      const response = responseSuccess(result, `Create userPage successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findAll: async function (req, res, next) {
    try {
      const result = await userPageService.findAll(req);
      const response = responseSuccess(
        result,
        `Get all userPages successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findOne: async function (req, res, next) {
    try {
      const result = await userPageService.findOne(req);
      const response = responseSuccess(
        result,
        `Get userPage #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  update: async function (req, res, next) {
    try {
      const result = await userPageService.update(req);
      const response = responseSuccess(
        result,
        `Update userPage #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  remove: async function (req, res, next) {
    try {
      const result = await userPageService.remove(req);
      const response = responseSuccess(
        result,
        `Remove image #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findSaved: async function (req, res, next) {
    try {
      const result = await userPageService.findSaved(req);
      const response = responseSuccess(
        result,
        `Get saved userPage #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },

  findCreated: async function (req, res, next) {
    try {
      const result = await userPageService.findCreated(req);
      const response = responseSuccess(
        result,
        `Get created userPage #${req.params.id} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
