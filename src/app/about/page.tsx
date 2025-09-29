import { Exchange } from '@/components/Exchange';

export default function Home() {

  return (
    <>
    <h2 className="text-md text-slate-300 font-bold mb-px pt-4">About</h2>
    <div className="text-base font-sans space-y-5 justify-center">
      <p>
        I’m a software engineer and final-year computer science student. 
      </p>
      <p>
        You can find full details in my <a 
          href="/assets/Lim_ZhenYi_Resume.pdf"
          className="link"
          target="_blank">
          resume
          </a>.
      </p>

      <h2 className="text-md text-slate-300 font-bold mb-px pt-8 mt-10">Further Reading</h2>
      <div>
      <Exchange exchange="In another life— // There is no other life. // This is all we have." />
      </div>
      <p>
        When not busy with real-world tasks and responsibilites, I enjoy baking brownies and consuming all 
        types of fiction and art. 
      </p>
    </div>
    </>
  )
}
