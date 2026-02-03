import mongoose from "mongoose";
import Book from "../models/book.model.js";


export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createBook = async (req, res) => {
    const book = req.body; // user will send this data
    if(!book.name || !book.pages || !book.image){
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }

    const newBook = new Book(book);

    try {
        await newBook.save();
        res.status(201).json({ success: true, date: newBook });
    }catch (error){
        console.error("Error in created product:", error.message);
        res.status(500).json({success: false, message: "Server error "});
    }
};

export const deleteBook = async (req, res) => {
    const { name } = req.params;
    let query = { name: name }

    if(!await Book.findOne(query)){
        return res.status(404).json({ success: false, message: "Invalid book name! "});
    }

    try {
        await Book.deleteOne(query)
        res.status(200).json({ success: true, message: "Book deleted successfuly"})
    }catch(error) {
        res.status(500).json({ success: false, message: "Server error"})
    }
};

export const updateBook = async (req, res) => {
    const { name } = req.params;
    let query = { name: name }
    const book = req.body;

    if(!await Book.findOne(query)){
        return res.status(404).json({ success: false, message: "Invalid book name! "});
    }

    try {
        const updatedBook = await Book.findOneAndUpdate(query, book, {new:true});
        res.status(200).json({success: true, data: updatedBook});
    } catch (error) {
        res.status(500).json({success: false, message:"Server Error" });
    }
};