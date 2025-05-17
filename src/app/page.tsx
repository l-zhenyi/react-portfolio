// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>L. Zhen Yi</title>
      </Head>

    <div className="max-w-xl mx-auto px-4 py-4">
    <h2 className="text-base text-slate-300 font-bold mb-2">About</h2>
    <div className="text-sm font-sans">
    <p>I am a final-year computer science student expected to graduate in December 2025. 
      With this in mind, I am looking for internships and graduate roles where I can apply 
      the skills from my studies and leverage my impact. Feel free to reach out!</p>
    </div>
  </div>
    </>
  )
}
