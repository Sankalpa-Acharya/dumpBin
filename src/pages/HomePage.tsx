import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import TagsContainer from '@/components/TagsContainer';
import { useToast } from '@/components/ui/use-toast';

export default function HomePage() {
    const { toast } = useToast();

    return (
        <div>
            <div>
                <label className='text-gray-300'>Enter Your Title</label>
                <Input type="text" placeholder="Title" className='mt-3' />
            </div>
            <div className='mt-10'>
                <label className='text-gray-300'>Enter Your Content</label>
                <Textarea placeholder='Content' className='h-[20rem] mt-3'></Textarea>
            </div>
            <div className='mt-5 flex gap-5 text-sm flex-wrap'>
                <TagsContainer></TagsContainer>
            </div>
            <div className='md:mt-10 my-5 '>
                <Button onClick={() => { toast({ description: 'You are not authorized to Create Bin', variant: 'destructive' }) }}>Create Bin</Button>
            </div>
        </div>
    );
}
