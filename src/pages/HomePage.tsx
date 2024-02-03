import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import TagsContainer from '@/components/TagsContainer';
import { useToast } from '@/components/ui/use-toast';
import { Loader, Users } from "lucide-react";
import useCreateBin from "@/hooks/useCreateBin";
import { useState } from "react";
import { getDate } from "@/helper";


type Tag = 'DBMS' | 'DAA' | 'OS' | 'Design Pattern' | ''

export default function HomePage() {
    const { toast } = useToast();
    const [title, setTitle] = useState<string>('');
    const [tagSelected, setTagSelected] = useState<Tag>('');
    const [content, setContent] = useState<string>('');
    const { buttonState, createBin } = useCreateBin();


    return (
        <div>
            <div>
                <label className='text-gray-300'>Enter Your Title</label>
                <Input onChange={(event) => setTitle(() => event.target.value)} type="text" placeholder="Title" className='mt-3' />
            </div>
            <div className='mt-10'>
                <label className='text-gray-300'>Enter Your Content</label>
                <Textarea onChange={(event) => setContent(() => event.target.value)} placeholder='Content' className='h-[20rem] mt-3'></Textarea>
            </div>
            <div className='mt-5 flex gap-5 text-sm flex-wrap'>
                <TagsContainer toggleChange={setTagSelected}></TagsContainer>
            </div>
            <div className='md:mt-10 my-5 '>
                <Button className="flex gap-2" onClick={() => { createBin({ description: content, title: title, tag: tagSelected, date: getDate() }) }}>
                    {
                        buttonState === 'loading' ?
                            <Loader size={18} className='animate-spin' /> : null
                    }
                    Create Bin
                </Button>
            </div>
        </div>
    );
}
