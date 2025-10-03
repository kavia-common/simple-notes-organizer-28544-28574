"use client";

import React from "react";
import NoteCard, { type NoteCardBg, type NoteCardSize } from "./NoteCard";

/**
 * PUBLIC_INTERFACE
 * Renders the vertical list of notes following the asset layout.
 */
export default function NoteList(): React.ReactElement {
  type NoteItem = {
    title: string;
    size: NoteCardSize;
    bg: NoteCardBg;
  };

  const notes: NoteItem[] = [
    {
      title: "Book Review : The Design of Everyday Things by Don Norman",
      size: "size-lg",
      bg: "bg-1",
    },
    { title: "Animes produced by Ufotable", size: "size-md", bg: "bg-2" },
    { title: "Mangas planned to read", size: "size-sm", bg: "bg-3" },
    { title: "Awesome tweets collection", size: "size-md", bg: "bg-4" },
    { title: "List of free & open source apps", size: "size-xs", bg: "bg-5" },
  ];

  const openNote = (title: string) => () => {
    console.log("Open note", title);
  };

  return (
    <main className="notes-list" role="main" aria-label="Notes list">
      {notes.map((n, idx) => (
        <NoteCard
          key={`${n.title}-${idx}`}
          title={n.title}
          size={n.size}
          bg={n.bg}
          onClick={openNote(n.title)}
        />
      ))}
    </main>
  );
}
