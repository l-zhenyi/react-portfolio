// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>

<ul className="text-sm font-sans space-y-5 list-disc list-inside">
        <li>
          <span className="font-semibold">Battleship Server</span>: A multiplayer Battleship server with reconnection and spectators.
          <div className="text-slate-400 text-sm ml-5">
            <a
              href="https://github.com/yourusername/battleship-server"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Source code ↗
            </a>
          </div>
        </li>
        <li>
          <span className="font-semibold">Fantasy Tracker</span>: A reading tracker app built with Flask and SQLAlchemy.
          <div className="text-slate-400 text-sm ml-5">
            <a
              href="https://github.com/yourusername/fantasy-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Source code ↗
            </a>
          </div>
        </li>
      </ul>
    </>
  )
}
