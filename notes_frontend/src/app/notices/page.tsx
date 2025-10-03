import React from "react";

/**
 * PUBLIC_INTERFACE
 * Accessibility and keyboard usage help page for the Notes UI. This complements the visual design
 * by documenting keyboard interactions and focus behavior consistent with the design system.
 *
 * Returns:
 *  - A simple text page describing keyboard operations and focus states.
 */
export default function NoticesPage(): React.ReactElement {
  return (
    <div className="app" style={{ alignItems: "stretch" }}>
      <main
        className="notes-list"
        role="main"
        aria-label="Usage and accessibility notices"
      >
        <section
          style={{
            background: "var(--bg-card-2)",
            borderRadius: "var(--border-radius-card)",
            boxShadow: "var(--shadow-card)",
            padding: "var(--space-16)",
          }}
        >
          <h1 className="app-title" style={{ fontSize: 20, lineHeight: 1.3 }}>
            Accessibility and Keyboard Usage
          </h1>
          <p style={{ marginTop: 12, color: "var(--text-secondary)" }}>
            - Use Tab/Shift+Tab to move focus across interactive elements.
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            - Press Enter or Space on a note card to open it.
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            - Header action buttons (Search, Info) are focusable and expose
            aria-labels; focus rings follow the accent color.
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            - Cards and buttons show a visible focus ring outlined with the
            accent color to meet accessibility guidelines.
          </p>
        </section>
      </main>
    </div>
  );
}
