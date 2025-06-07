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
        For more information, you can find my 
        <a href="/assets/Lim_ZhenYi_Resume.pdf" className="text-slate-400 font-bold  hover:underline"> resume </a>     
        and I am always available via 
        <a href="mailto:zhenyi.lim.mail@gmail.com" className="font-bold text-slate-400 hover:underline"> Email </a> 
        and  
        <a href="https://linkedin.com/in/l-zhenyi" target="_blank" className="font-bold text-slate-400 hover:underline"> LinkedIn</a>{' '}<br></br>
        You can also find all my projects and academic coursework at <a
            href="https://github.com/l-zhenyi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-slate-400 hover:underline"
          >
            GitHub
          </a>
      </p>

    <h2 className="text-md text-slate-300 font-bold mb-px pt-4 md:pt-15">Further Reading</h2>
    <div>
     <Exchange exchange="In another life— // There is no other life. This is all we have." />
    </div>
    <p>
    When not occupied with real-world tasks and responsibilities, I devour fiction in books and media for 
    escapism. I started baking in 2020 and enjoyed baking (and eating) brownies the most, a passion which 
    continues to this day.
    </p>
    </div>
    </>
  )
}
