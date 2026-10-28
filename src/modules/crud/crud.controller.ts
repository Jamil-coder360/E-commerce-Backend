import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import crudService from "./crud.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createCrud = catchAsync(async (req: Request, res: Response) => {
  const result = await crudService.createCrud(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "crud create successfully",
    data: result,
  });
});

const getCrud = catchAsync(async (req: Request, res: Response) => {
  const result = await crudService.getCrud();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "crud fetch successfully",
    data: result,
  });
});
const getAllCrud = catchAsync(async (req: Request, res: Response) => {
  const result = await crudService.getAllCrud();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "crud fetch successfully",
    data: result,
  });
});
const getCrudById = catchAsync(async (req: Request, res: Response) => {
  const result = await crudService.getCrudById(req.params.id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "crud fetch successfully",
    data: result,
  });
});

const updateCrud = catchAsync(async (req: Request, res: Response) => {
  const result = await crudService.updateCrud(
    req.params.id as string,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user fetch successfully",
    data: result,
  });
});
const deleteCrud = catchAsync(async (req: Request, res: Response) => {
  const result = await crudService.deleteCrud(req.params.id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user fetch successfully",
    data: result,
  });
});

const crudController = {
  createCrud,
  getCrud,
  getAllCrud,
  getCrudById,
  updateCrud,
  deleteCrud,
};

export default crudController;
