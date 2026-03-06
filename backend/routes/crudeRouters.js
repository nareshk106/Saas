import express from "express";
import { verifyUser } from "../middlewares/authMiddleware.js";
import {
  GetContent,
  PostContent,
  UpdateContent,
  DeleteContent
} from "../controllers/crude.js";

const ContentRouter = express.Router();
// CRUD Routes
ContentRouter.get("/",  verifyUser, GetContent);         // GET /user/
ContentRouter.post("/",  verifyUser, PostContent);       // POST /user/
ContentRouter.put("/:id",  verifyUser, UpdateContent);   // PUT /user/:id
ContentRouter.delete("/:id",  verifyUser, DeleteContent); // DELETE /user/:id

export default ContentRouter;
