import { useQuery } from "@tanstack/react-query";
import { useListNotes } from "../api/queries";
import { NavigateButton } from "../components/NavigateButton";
import { ListNotes } from "~/components/ListNotes";

export function Home() {
  const { data } = useListNotes();
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1>Notepad App</h1>
        </header>

        <ListNotes notes={data} />
        <NavigateButton path="/add" text="Add Note" />
      </div>
    </main>
  );
}
