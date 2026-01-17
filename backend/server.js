import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Book from "./models/book.model.js";

dotenv.config();

const app = express();
app.use(express.json()); // allows acceptance of JSON data in req body

app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.post("/api/books", async (req, res) => {
    const book = req.body; // user will send this data
    if(!book.name || !book.pages || !book.image){
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    const newBook = new Book(book);

    try {
        await newBook.save();
        res.status(201).json({ success: true, date: newBook });
    }catch (errpr){
        console.error("Error in created product:", error.message);
        res.status(500).json({success: false, message: "Server error "});
    }
});

app.delete("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Book deleted"});
    } catch (error) {
        res.status(404).json({success: false, message: "Book not found"});
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});