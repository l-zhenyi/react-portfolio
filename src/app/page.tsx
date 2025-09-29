import { Quotes } from '@/components/Quotes';

export default function Home() {
const quotes = [
  {
    text: "People like you must create. If you don't create, (...), you will become a menace to society.",
    author: "Maria Semple, Where'd You Go, Bernadette",
  },
  {
    text: "...monsters, I believe, are patron saints of our blissful imperfection, and they allow and embody the possibility of failing.",
    author: "Guillermo del Toro",
  },
  {
    text: "Whenever you feel afraid, just remember. Courage is the root of change - and change is what we're chemically designed to do.",
    author: "Bonnie Garmus, Lessons in Chemistry",
  },
  {
    text: "The only thing I do know is that we have to be kind. Please, be kind. Especially when we don't know what's going on.",
    author: "Ke Huy Quan, Everything Everywhere All At Once",
  },
];


  return (
    <>
      <div className="md:py-6">
      <Quotes quotes={quotes} />
      </div>


      <h2 className="text-md text-slate-300 font-bold mb-px">Home</h2>
      <div className="text-base font-sans space-y-5 justify-center">
        <p>
          This portfolio combines my partiality towards minimalist, text-based mediums and reading 
          in dark mode.
        </p>
        <p>
          I can always be found at: {' '}
          <span className="inline-flex space-x-4">
          <a
            href="mailto:zhenyi.lim.mail@gmail.com"
            className="md:pl-4 link"
          >
           Email
          </a>{' '}
          <a
            href="https://linkedin.com/in/l-zhenyi"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>{' '}
          <a
            href="https://github.com/l-zhenyi"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          </span>
        </p>
    </div>
    </>
  )
}
