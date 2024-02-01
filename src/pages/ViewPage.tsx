import BinCard from "@/components/BinCard";
import TagsContainer from "@/components/TagsContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';

export default function ViewPage() {
    return (
        <div>
            <div className="flex items-center gap-3">
                <Input placeholder="search your bin"></Input>
                <Button variant='secondary'>
                    <Search></Search>
                </Button>
            </div>
            <div className="mt-5">
                <TagsContainer></TagsContainer>
            </div>
            <div className="mt-10 mb-10 flex flex-col gap-5">
                <BinCard></BinCard>
            </div>
        </div>
    )
}
