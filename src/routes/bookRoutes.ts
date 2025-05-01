import bookController from "../controllers/bookController";
import { Router } from "express";

const router = Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getOneBookById);
router.post("/:bookId/update", bookController.updateBook);
router.post("/:bookId/delete", bookController.deleteOneBook);

export default router;
