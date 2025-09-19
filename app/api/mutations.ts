import { QueryClient, useMutation } from "@tanstack/react-query";
import type { Note } from "~/types/note";

const queryClient = new QueryClient();

export const useAddNote = () => {
  return useMutation({
    mutationFn: async (data: Note) => {
      const storedNotes = localStorage.getItem("notes");
      const notes = storedNotes ? JSON.parse(storedNotes) : [];
      notes.push({ ...data, id: notes.length + 1, createdAt: new Date() });
      localStorage.setItem("notes", JSON.stringify(notes));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export const useDeleteNote = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      const storedNotes = localStorage.getItem("notes");
      const notes = storedNotes ? JSON.parse(storedNotes) : [];
      const newNotes = notes.filter((note: Note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
