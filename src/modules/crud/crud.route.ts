import { Router } from "express";
import crudController from "./crud.controller";

const crudRouter = Router();
crudRouter.post("/", crudController.createCrud);
crudRouter.get("/", crudController.getAllCrud);
crudRouter.get("/:id", crudController.getCrudById);
crudRouter.patch("/:id", crudController.updateCrud);
crudRouter.delete("/:id", crudController.deleteCrud);

export default crudRouter;
