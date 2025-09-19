import { Box, Button, Modal } from "@mui/material";
import { useDeleteNote } from "~/api/mutations";
import type { Note } from "~/types/note";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "#a9a9a9 ",
  border: "2px solid #D3D3D3",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

interface NoteModalProps {
  note: Note | null;
  onClose: () => void;
}

export function NoteModal({ note, onClose }: NoteModalProps) {
  const deleteNoteMutation = useDeleteNote();

  const handleDeleteNote = (id: number) => {
    if (id) {
      deleteNoteMutation.mutate(id);
    }
    onClose();
  };

  return (
    <Modal open={!!note} onClose={onClose}>
      <Box sx={style}>
        <h3>{note?.title}</h3>
        <p>{note?.description}</p>
        {note?.createdAt && <p>{new Date(note?.createdAt).toLocaleString()}</p>}
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteNote(note?.id!)}
        >
          Delete note
        </Button>
      </Box>
    </Modal>
  );
}
