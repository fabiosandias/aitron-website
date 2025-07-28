import React from "react"

function WhatsappIcon({ size = 28, className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="16" fill="#2563eb" />
      <path
        d="M16 6c-5.5 0-10 3.9-10 8.7 0 2.2.8 4.3 2.2 5.9l-1.5 3.9 4-1.2a11 11 0 0 0 5.3 1.4c5.5 0 10-3.9 10-8.7S21.5 6 16 6z"
        fill="#1e40af"
      />
      <path
        d="M21.2 19.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1l-.8.8c-.2.2-.5.3-.8.2-1.4-.7-3.5-2.7-4.4-4.1-.2-.3-.1-.6.1-.8l.7-.8c.2-.2.3-.5.2-.7-.1-.3-.6-1.6-.9-2.4-.2-.5-.4-.5-.7-.5l-1.1-.1c-.2 0-.5.1-.7.3-.4.4-1.2 1.2-1.2 2.9 0 1.6 1.2 3.4 1.3 3.6.2.2 2.4 3.7 6 5.3.8.3 1.4.5 1.9.7.8.3 1.5.2 2 .1.6-.1 1.3-.8 1.5-1.4.2-.6.2-1.1.1-1.2-.1-.2-.3-.3-.6-.5z"
        fill="#ffffff"
      />
    </svg>
  )
}

export { WhatsappIcon }
