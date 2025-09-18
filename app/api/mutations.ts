import { useMutation } from "@tanstack/react-query";
import type { Note } from "~/types/note";

export const useAddNote = () => {
  return useMutation({
    mutationFn: async (data: Note) => {
      const storedNotes = localStorage.getItem("notes");
      const notes = storedNotes ? JSON.parse(storedNotes) : [];
      notes.push(data);
      localStorage.setItem("notes", JSON.stringify(notes));
      return data;
    },
  });
};
