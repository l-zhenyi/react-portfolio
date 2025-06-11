// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <h2 className="text-md text-slate-300 font-bold mb-2 mt-5">Miscellaneous (Misc.)</h2>
    <div className="text-base font-sans space-y-5">
        <p>
          It would make sense for me to include a list of books I reccomend or plan to read but 
          there's a lot of pressure given how frequently and sporadically they change. The same 
          goes for music and sharing playlists.
        </p>
        <p>
          Hence, I've decided to list down the books that have been on my mind at the time of 
          writing. 
        </p>
        <h2 className="text-md text-slate-300 font-bold mt-15 mb-2">Books that have been on my mind</h2>
        <ul className="text-base font-sans space-y-5 list-disc list-inside">
          <li>The Greenbone Saga, Fonda Lee</li>
          <li>The Emperor of Gladness, Ocean Vuong</li>
          <li>Gideon the Ninth, Tamsyn Muir</li>
          <li>The Book of Goose, Yi Yun Li</li>
        </ul>

    </div>
    </>
  )
}
