import { Prisma } from "@prisma/client";
import prisma from "../../config/prisma";
import AppError from "../../middleware/apperror";
import httpStatus from "http-status";

const createCrud = async (payload: Prisma.UserCreateInput) => {
  const createCrud = prisma.user.create({
    data: payload,
  });

  if (!createCrud) {
    throw new AppError(httpStatus.BAD_GATEWAY, "user creation failed!");
  }

  return createCrud;
};

const getCrud = async () => {
  const data = null;
  //  [{
  //     id:1,
  // name:"Jon do"
  // }]

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "User Data Not found");
  }
  return data;
};

const getAllCrud = async () => {
  return await prisma.user.findMany();
};

const getCrudById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};

const updateCrud = async (
  id: string,
  payload: Partial<Prisma.UserUpdateInput>,
) => {
  const updateCrud = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return updateCrud;
};

const deleteCrud = async (id: string) => {
  const deleteCrud = await prisma.user.delete({
    where: { id },
  });
  return deleteCrud;
};
const crudService = {
  createCrud,
  getCrud,
  getAllCrud,
  getCrudById,
  updateCrud,
  deleteCrud,
};

export default crudService;
