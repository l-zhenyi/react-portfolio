import ProjectItem from '@/components/ProjectItem';
import { Exchange } from '@/components/Story';

const narration = [
  'You open the doors to an ancient library',
  'Shelves of books and bound scrolls tower over you',
  'This place greets you like an old friend',
  'Intigued, you walk over to the nearest shelf',
];

export default function Home() {
  return (
    <>
    <div className="md:py-8"><Exchange lines={narration} /></div>
    
<h2 className="text-md text-slate-300 font-bold mb-px mt-4">Projects</h2>
<div className="text-base font-sans space-y-5 justify-center">      
  <p>
    There's bound to be something here that will pique your curiosity. 
    You can tap on the links to examine them further. 
  </p>

</div>

<ul className="text-base font-sans space-y-5 list-disc list-inside mt-6 md:my-10">
      <ProjectItem
        title="Forum"
        description="A forum built with user posts, comments, and discussions, guided by a tutorial."
        techStack="HTML, CSS, JavaScript, Python, Jinja, Flask, SQLite"
        sourceLink="https://github.com/l-zhenyi/Forum"
      />
      <ProjectItem
        title="Go Interpreter"
        description="Implemented a custom interpreter in Golang, with parsing and syntax interpretation."
        techStack="Golang"
        sourceLink="https://github.com/l-zhenyi/Go_Interpreter"
      />
      <ProjectItem
        title="Mini-Language to C Transpiler"
        description="Built a transpiler in C to convert custom mini-language syntax into C code."
        techStack="C"
        note="No source code due to academic conduct rules"
      />
      <ProjectItem
        title="SQL Series"
        description="SQL projects for cleaning, querying, and visualizing data."
        techStack="SQL, Tableau"
        sourceLink="https://github.com/l-zhenyi/SQL"
        additionalLink={{
          label: 'Tableau Dashboards',
          href: 'https://public.tableau.com/app/profile/zhen.yi.lim/vizzes',
        }}
      />
      <ProjectItem
        title="Portfolio Evolution"
        description="Previous portfolio iterations showing progress in design and skills."
        techStack="HTML, CSS, JavaScript"
        sourceLink="https://github.com/l-zhenyi/OldPortfolios"
      />
    </ul>
    </>
  )
}
