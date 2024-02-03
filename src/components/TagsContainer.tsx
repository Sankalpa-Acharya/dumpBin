import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Code, Target, Database, Laptop } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';


type Tag = 'DBMS' | 'DAA' | 'OS' | 'Design Pattern' | '';

type Props = {
    toggleChange: Dispatch<SetStateAction<Tag>>;
};

export default function TagsContainer({ toggleChange }: Props) {

    return (
        <ToggleGroup onValueChange={(value: Tag) => toggleChange(value)} type="single" className="flex flex-wrap justify-start">
            <ToggleGroupItem value="DAA" className="flex gap-3"><Target size={18} /> DAA</ToggleGroupItem>
            <ToggleGroupItem value="Design Pattern" className="flex gap-3"><Code size={18} /> Design Pattern</ToggleGroupItem>
            <ToggleGroupItem value="DBMS" className="flex gap-3"><Database size={18} /> DBMS</ToggleGroupItem>
            <ToggleGroupItem value="OS" className="flex gap-3"><Laptop size={18} /> OS</ToggleGroupItem>
        </ToggleGroup>

    )
}