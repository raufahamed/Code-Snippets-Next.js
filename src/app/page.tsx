import {db} from '@//db';
import Link from 'next/link';


export default async  function Home() {
  
  const Snippets = await db.snippet.findMany();
  const renderedSnippets = Snippets.map((snippet)=>{
     return <Link 
     href={`/snippets/${snippet.id}`} 
     key={snippet.id}
     className='flex justify-between items-center p-2 border rounded'
     > <div>{snippet.title}</div>
       <div>view</div>
     </Link>
  })
  
  return (
   <div>
    <div className='flex m-2 justify-between items-center'>
       <h1 className='text-xl font-bold'>snippets</h1>
          <Link 
             href={"/snippets/new"} 
             className='border p-2 rounded'>
                   New
          </Link>
    </div>
    <div className='felx flex-col gap-2'>
    {renderedSnippets}
    </div>
   
   </div>
  )
}
