import { create } from "zustand"

export const useBookArchive = create((set) => ({
    books: [],
    setBooks: (books) => set({books}),
    addBook: async (newBook) => {
        if(!newBook.name || !newBook.pages || !newBook.image){
            return {success:false, message:"Please fill in all fields"}
        }
        const res = await fetch("/api/books", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newBook)
        })
        const data = await res.json()
        set((state) => ({books:{...state.books, data}}))
    }
}))