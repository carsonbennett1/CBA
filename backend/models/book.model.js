import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true  //createdAt, updatedAt
});

const Book = mongoose.model('Book', bookSchema);

export default Book;