import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Code, Target, Database, Laptop } from 'lucide-react';

type Props = {}

export default function TagsContainer({ }: Props) {

    return (
        <ToggleGroup onValueChange={(e) => console.log(e)} type="single" className="flex flex-wrap justify-start">
            <ToggleGroupItem value="daa" className="flex gap-3"><Target size={18} /> DAA</ToggleGroupItem>
            <ToggleGroupItem value="designpattern" className="flex gap-3"><Code size={18} /> Design Pattern</ToggleGroupItem>
            <ToggleGroupItem value="database" className="flex gap-3"><Database size={18} /> DBMS</ToggleGroupItem>
            <ToggleGroupItem value="database" className="flex gap-3"><Laptop size={18} /> OS</ToggleGroupItem>
        </ToggleGroup>

    )
}