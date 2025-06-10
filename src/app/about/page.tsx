import { Exchange } from '@/components/Exchange';

export default function Home() {

  return (
    <>
    <h2 className="text-md text-slate-300 font-bold mb-px pt-4">About</h2>
    <div className="text-base font-sans space-y-5 justify-center">
      <p>
        I am a final-year computer science student expected to graduate in December 2025. 
        With this in mind, I am looking for internships and graduate roles where I can apply the skills 
        from my studies and leverage my impact.
      </p>
      <p>
        For more information, you can take a look at my <a 
          href="/assets/Lim_ZhenYi_Resume.pdf"
          className="link">
          resume
          </a> and I am always available via <a 
          href="mailto:zhenyi.lim.mail@gmail.com" 
          className="link">
          Email
          </a> and <a 
            href="https://linkedin.com/in/l-zhenyi" 
            target="_blank"
            className="link">
              LinkedIn</a>.<br></br>
          You can also find all my projects and academic coursework on my <a
            href="https://github.com/l-zhenyi"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a> and <a
            href="/projects"
            className="link"
            >
              Projects
            </a> page.
      </p>

      <h2 className="text-md text-slate-300 font-bold mb-px pt-8 mt-10">Further Reading</h2>
      <div>
      <Exchange exchange="In another life— // There is no other life. // This is all we have." />
      </div>
      <p>
        In a world where our lives are already so visually-saturated, I wanted to create a portfolio that focused
        on the content and reading experience itself.
      </p>
      <p>
        When not busy with real-world tasks and responsibilites, I enjoy baking brownies and consuming all 
        types of fiction and art. 
      </p>
    </div>
    </>
  )
}
