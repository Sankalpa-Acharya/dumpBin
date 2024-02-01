import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Clipboard, Calendar, Eye } from 'lucide-react'
import { Button } from "./ui/button"
import { useToast } from "@/components/ui/use-toast"
import Modal from "./Modal"
type Props = {}

export default function BinCard({ }: Props) {
    const { toast } = useToast();

    return (
        <Card className="hover:bg-[#27272a39] transition-colors">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <p className="gradient-dark text-gradient">DBMS-EXP 1</p>
                    <div className="flex gap-3">
                        <Button onClick={() => { toast({ description: 'Copied to ClipBoard' }) }} variant='secondary'>
                            <Clipboard size={18} />
                        </Button>
                        <Modal>
                            <Button variant='secondary'>
                                <Eye size={18} />
                            </Button>
                        </Modal>
                    </div>
                </CardTitle>
                <CardDescription className="flex gap-2">
                    <Calendar size={18}></Calendar>
                    February 1th, 2024
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <span className="bg-[#27272A] px-3 py-1 text-sm rounded-full">Database</span>
            </CardFooter>
        </Card>

    )
}