import BinCard from "@/components/BinCard";
import BinSkeleton from "@/components/BinSkeleton";
import TagsContainer from "@/components/TagsContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import useFetchBins from "@/hooks/useFetchBins";
import { Search } from 'lucide-react';

type Bin = {
    id: string,
    date: string,
    title: string,
    description: string
}

export default function ViewPage() {
    const { isLoading, data } = useFetchBins('bin');

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
                {isLoading ? (
                    <BinSkeleton></BinSkeleton>
                ) : (
                    data.map((bin: Bin, index: number) => (
                        <BinCard title={bin.title} key={index} description={bin.description}></BinCard>
                    ))
                )}
            </div>
        </div>
    )
}
