"use client";

import React from "react";

/**
 * PUBLIC_INTERFACE
 * A header bar for the notes app showing the title and action icons.
 */
export default function Header(): React.ReactElement {
  // Handle icon button clicks (Search/Info). Currently just logs.
  const handleAction = (action: "search" | "info") => () => {
    console.log(`[Header] ${action} clicked`);
  };

  return (
    <header
      className="app-header"
      role="banner"
      aria-label="Application header"
    >
      <h1 className="app-title">Notes</h1>

      <div
        className="header-actions"
        role="group"
        aria-label="Header actions"
      >
        <button
          className="icon-button"
          aria-label="Search"
          title="Search"
          onClick={handleAction("search")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          className="icon-button"
          aria-label="Info"
          title="Information"
          onClick={handleAction("info")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10
              10-4.48 10-10S17.52 2 12 2z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
