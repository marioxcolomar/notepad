import { useForm, type SubmitHandler } from "react-hook-form";
import { useAddNote } from "../api/mutations";
import type { Note } from "../types/note";
import { Alert, Button } from "@mui/material";
import { NavigateButton } from "~/components/NavigateButton";
import { useNavigate } from "react-router";

export function AddNote() {
  const createNoteMutation = useAddNote();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Note>();
  const navigate = useNavigate();

  const handleAddNote: SubmitHandler<Note> = (data) => {
    createNoteMutation.mutate(data);
    navigate("/");
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center min-h-0 min-w-1">
        <form
          onSubmit={handleSubmit(handleAddNote)}
          className="flex flex-col gap-4"
        >
          <h4>Add note:</h4>
          <input
            placeholder="Title"
            {...register("title", {
              validate: (value) =>
                value.trim().length > 0 || "Title is required",
            })}
          />
          {errors.title && (
            <Alert severity="warning">{errors.title.message}</Alert>
          )}
          <textarea
            rows={5}
            cols={3}
            placeholder="Description"
            {...register("description", {
              validate: (value) =>
                value.trim().length > 0 || "Description is required",
            })}
          />
          {errors.description && (
            <Alert severity="warning">{errors.description.message}</Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={createNoteMutation.isPending}
          >
            Submit Note
          </Button>
          <NavigateButton path="/" text="Cancel" color="warning" />
        </form>
      </div>
    </main>
  );
}
