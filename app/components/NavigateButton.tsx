import { Button } from "@mui/material";
import { useNavigate } from "react-router";

interface NavigateButtonProps {
  path: string;
  text: string;
  color?: "primary" | "secondary" | "warning";
}

export function NavigateButton({ path, text, color }: NavigateButtonProps) {
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate(path);
  };
  return (
    <Button
      variant="contained"
      color={color || "primary"}
      onClick={handleAddNote}
    >
      {text}
    </Button>
  );
}
