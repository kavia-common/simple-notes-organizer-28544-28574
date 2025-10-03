import Header from "@/components/Header";
import NoteList from "@/components/NoteList";
import Fab from "@/components/Fab";

/**
 * PUBLIC_INTERFACE
 * Landing page that renders the Notes home screen based on provided assets.
 */
export default function Home(): React.ReactElement {
  return (
    <div className="app">
      <Header />
      <NoteList />
      <Fab />
    </div>
  );
}
