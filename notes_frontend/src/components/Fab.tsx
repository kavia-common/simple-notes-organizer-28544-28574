"use client";

import React from "react";

/**
 * PUBLIC_INTERFACE
 * Floating action button for creating a new note.
 */
export default function Fab(): React.ReactElement {
  const onCreate = () => {
    console.log("Create new note");
  };

  return (
    <button className="fab" aria-label="Add note" onClick={onCreate}>
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2h5z" fill="currentColor" />
      </svg>
    </button>
  );
}
