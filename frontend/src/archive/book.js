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
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newBook),
        });
        const data = await res.json();
        set((state) => ({books:{...state.books, data}}));
        return {success:true, message:"Product created successfuly"};
    },
    fetchBooks: async () => {
        const res = await fetch("/api/books");
        const data = await res.json();
        set({ books: data.data});
    },
    deleteBook: async (bid) => {
        const res = await fetch(`/api/books/${bid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) return { success: false, message: data.message };

        set(state => ({ books: state.books.filter(book => book._id !== bid) }));
        return { success: true, message: data.message };
    }
}))