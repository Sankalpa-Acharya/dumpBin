import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Clipboard, Calendar, FileText } from 'lucide-react'
import { Button } from "./ui/button"
import { useToast } from "@/components/ui/use-toast"
import { generateDocx } from "@/helper"
type Props = {
    title: string,
    description: string,
    date: string,
    tag: string
}

export default function BinCard({ title, description, date, tag }: Props) {
    const { toast } = useToast();
    return (
        <Card className="hover:bg-[#27272a39] transition-colors">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <p className="gradient-dark text-gradient">{title.toUpperCase()}</p>
                    <div className="flex gap-3">
                        <Button onClick={() => {
                            toast({ description: 'Copied to ClipBoard' });
                            navigator.clipboard.writeText(description);
                        }} variant='secondary'>
                            <Clipboard size={18} />
                        </Button>
                        <Button variant='secondary' onClick={() => generateDocx(description, title)}>
                            <FileText size={18} />
                        </Button>
                    </div>
                </CardTitle>
                <CardDescription className="flex gap-2">
                    <Calendar size={18}></Calendar>
                    {date}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <span className="bg-[#27272A] px-3 py-1 text-sm rounded-full">{tag}</span>
            </CardFooter>
        </Card>

    )
}