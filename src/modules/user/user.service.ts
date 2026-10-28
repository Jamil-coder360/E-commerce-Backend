import httpStatus from "http-status";

import AppError from "../../middleware/apperror";
import { Prisma } from "@prisma/client";
import prisma from "../../config/prisma";

const createUser = async (payload: Prisma.UserCreateInput) => {
  const createdUser = await prisma.user.create({
    data: payload,
  });

  if (!createdUser) {
    throw new AppError(httpStatus.BAD_GATEWAY, "user creation failed!");
  }

  return createdUser;
};

const getUser = async () => {
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

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};

const updateUser = async (id: string, payload: Partial<Prisma.UserUpdateInput>) => {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return updatedUser;
};

const deleteUser = async (id: string) => {
  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  return deletedUser;
};

const userService = {
  getUser,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

export default userService;
