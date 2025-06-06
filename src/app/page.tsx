import Head from 'next/head'
import { Quotes } from '../../components/Quotes';

export default function Home() {
    const quotes = [
    "\"People like you must create. If you don't create, (...), you will become a menace to society.\"\nMaria Semple, Where'd You Go, Bernadette",
    "\"...monsters, I believe, are patron saints of our blissful imperfection, and they allow and embody the possibility of failing.\"\nGuillermo del Toro",
    "\"Whenever you feel afraid, just remember. Courage is the root of change - and change is what we're chemically designed to do.\"\nBonnie Garmus, Lessons in Chemistry",
    "\"The only thing I do know is that we have to be kind. Please, be kind. Especially when we don't know what's going on.\"\nKe Huy Quan, Everything Everywhere All At Once",
  ];

  return (
    <>
      <h2 className="text-md text-slate-300 font-bold mb-px">Home</h2>
      <Quotes quotes={quotes} />
      <div className="text-base font-sans space-y-5">
        <p>
          Hi. It seems you’ve stumbled across my website. In case you’re a bit lost, you’re currently on the homepage. 
        </p>
        <p>
          Feel free to venture further with the trusty navigation bar at the top. 
        </p>
        <p>
          My enthusiasm for reading sparked my preference for minimalist, text-based styles, which in turn,
          has heavily influenced this website. It’s my earnest hope you find some small interesting snippets 
          to read around here.
        </p>
        <p>
            Maybe the quote at the top would be an interesting place to start?
        </p>
        <p>
          You’re welcome to stay for as long as you want. Thanks for stopping by.
        </p>
        <p>
          I can always be found at: email linkedin github
        </p>
    </div>
    </>
  )
}
