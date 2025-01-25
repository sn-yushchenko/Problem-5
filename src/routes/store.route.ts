import "reflect-metadata";
import * as express from "express";
import {StoreController} from "../controllers/store.controller";

const Router = express.Router();

Router.get("/", StoreController.getStores);
Router.get("/:id", StoreController.getStore);
Router.put("/:id", StoreController.update);
Router.post("/", StoreController.create);
Router.delete("/:id", StoreController.delete);
export {Router as storeRouter};