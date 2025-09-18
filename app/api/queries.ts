import { useQuery } from "@tanstack/react-query";

export const useListNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const notes = localStorage.getItem("notes");
      return notes ? JSON.parse(notes) : [];
    },
  });
};
