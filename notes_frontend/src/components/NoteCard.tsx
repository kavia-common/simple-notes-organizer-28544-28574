"use client";

import React from "react";

export type NoteCardSize = "size-lg" | "size-md" | "size-sm" | "size-xs";
export type NoteCardBg = "bg-1" | "bg-2" | "bg-3" | "bg-4" | "bg-5";

export interface NoteCardProps {
  /** PUBLIC_INTERFACE: display title for the note card */
  title: string;
  /** PUBLIC_INTERFACE: size token from the design */
  size?: NoteCardSize;
  /** PUBLIC_INTERFACE: background token from the design */
  bg?: NoteCardBg;
  /** PUBLIC_INTERFACE: onClick handler when card is activated */
  onClick?: () => void;
}

/**
 * PUBLIC_INTERFACE
 * A stylized note card with size and background variants.
 */
export default function NoteCard({
  title,
  size = "size-md",
  bg = "bg-1",
  onClick,
}: NoteCardProps): React.ReactElement {
  const className = `note-card ${size} ${bg}`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={className}
      tabIndex={0}
      role="button"
      aria-label={title}
      aria-roledescription="Open note"
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <h2 className="note-title">{title}</h2>
    </article>
  );
}
