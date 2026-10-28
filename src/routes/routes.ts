import { Router } from "express";
import userRouter from "../modules/user/user.route";
import crudRouter from "../modules/crud/crud.route";

const router: Router = Router();

const moduleroute = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/crud",
    route: crudRouter,
  },
];

moduleroute.forEach((route) => router.use(route.path, route.route));

export default router;
