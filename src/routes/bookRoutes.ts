import bookController from "../controllers/bookController";
import { Router } from "express";

const router = Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getOneBookById);
router.post("/:id/update", bookController.updateBook);
router.post("/:id/delete", bookController.deleteOneBook);

export default router;