import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";
import type { Note } from "~/types/note";
import { NoteModal } from "./NoteModal";

interface ListNotesProps {
  notes: Note[];
}

const CardStyle = {
  minHeight: 120,
  minWidth: 300,
  bgcolor: "#a9a9a9 ",
  border: "2px solid #D3D3D3",
  borderRadius: 2,
  boxShadow: 3,
  mb: 2,
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    boxShadow: 6,
    transform: "scale(1.03)",
    bgcolor: "#708090 ",
  },
};

export function ListNotes({ notes }: ListNotesProps) {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleClick = (note: Note) => setSelectedNote(note);
  const handleClose = () => setSelectedNote(null);

  const truncate = (text: string) =>
    text.length > 30 ? text.substring(0, 30) + "..." : text;

  return (
    <>
      <Grid container spacing={2}>
        {notes?.length > 0
          ? notes.map((note) => (
              <Grid key={note.id}>
                <Card onClick={() => handleClick(note)} sx={CardStyle}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {note.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {truncate(note.description)}
                    </Typography>
                    <Typography variant="body2">
                      {new Date(note.createdAt).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
      <NoteModal note={selectedNote} onClose={handleClose} />
    </>
  );
}
