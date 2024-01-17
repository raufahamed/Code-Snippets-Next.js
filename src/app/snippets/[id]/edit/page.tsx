import SnippetEditForm from '@/components/snippets-edit-form';
import {db} from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPage{

    params:{
        id:string 
    }
}

export default  async function SnippetEditPage(props:SnippetEditPage){
   const id = parseInt(props.params.id);
   const snippet = await db.snippet.findFirst({
    where:{id}
   }) 

   if(!snippet){
    return notFound()
   }
   return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}