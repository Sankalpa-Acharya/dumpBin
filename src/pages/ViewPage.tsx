import BinCard from "@/components/BinCard";
import BinSkeleton from "@/components/BinSkeleton";
import TagsContainer from "@/components/TagsContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import useFetchBins from "@/hooks/useFetchBins";
import { Search } from 'lucide-react';
import { useState } from "react";

type Bin = {
    id: string,
    date: string,
    title: string,
    description: string,
    tag: string
}

type Tag = 'DBMS' | 'DAA' | 'OS' | 'Design Pattern' | ''

export default function ViewPage() {
    const { isLoading, data } = useFetchBins('bin');
    const [selectedTag, setTagSelected] = useState<Tag>('');


    return (
        <div className="">
            <div className="sticky top-0 rounded-xl  glassmorphism shadow-xl p-5 ">
                <div className="flex items-center gap-3">
                    <Input placeholder="search your bin"></Input>
                    <Button variant='secondary'>
                        <Search></Search>
                    </Button>
                </div>
                <div className="mt-5">
                    <TagsContainer toggleChange={setTagSelected}></TagsContainer>
                </div>
            </div>
            <div className="mt-10 mb-10 flex flex-col gap-5">
                {isLoading ? (
                    <BinSkeleton></BinSkeleton>
                ) : (
                    data.map((bin: Bin, index: number) => (
                        (selectedTag !== '' && selectedTag === bin.tag ?
                            <BinCard title={bin.title} key={index} description={bin.description} tag={bin.tag} date={bin.date}></BinCard> : null
                        )
                    ))
                )
                }
                {isLoading ? (
                    <BinSkeleton></BinSkeleton>
                ) : (
                    data.map((bin: Bin, index: number) => (
                        (selectedTag === '' ?
                            <BinCard title={bin.title} key={index} description={bin.description} tag={bin.tag} date={bin.date}></BinCard> : null
                        )
                    ))
                )
                }
            </div>
        </div>
    )
}
