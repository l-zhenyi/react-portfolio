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
          Hi. You’ve stumbled across my website. In case you're feeliing a little lost, have no fear. You're just on the homepage.<br></br>
          Feel free to venture further with the trusty navigation bar at the top. <br></br>
        </p> 
        <p>
          Reading sparked my preference for minimalist, text-based mediums, which heavily 
          influenced the style of this website.
        </p>
        <p>
          It’s my earnest hope you'll find some interesting snippets to read around here. The quote at the 
          top might be a good place to start.
        </p>
        <p>
          You’re welcome to stay for as long as you need. Thanks for stopping by.
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
