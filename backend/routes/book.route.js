import express from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

export default router;