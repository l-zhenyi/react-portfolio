// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <h2 className="text-md text-slate-300 font-bold mb-2 mt-5">Miscellaneous (Misc.)</h2>
    <div className="text-base font-sans space-y-5">
        <p>
          Who would I be if I didn't list down a few books I've read or planned to read?
        </p>

        <ul className="text-base font-sans space-y-5 list-disc list-inside mt-6 md:my-10">
          <li>The Book of Goose, Yi Yun Li</li>
          <li>The Emperor of Gladness, Ocean Vuong</li>
          <li>Gideon the Ninth, Tamsyn Muir</li>
          <li>The Green Bone Saga, Fonda Lee</li>
        </ul>

    </div>
    </>
  )
}
