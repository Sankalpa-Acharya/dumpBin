import { useToast } from "@/components/ui/use-toast"
import { db } from "@/config/Firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"

type Bin = {
    date: string,
    title: string,
    description: string,
    tag: string
}

type ButtonState = 'idle' | 'loading'


const useBin = () => {
    const { toast } = useToast();
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const createBin = async (data: Bin) => {
        if (data.description === '') {
            toast({ description: 'content can\'t be empty ', variant: 'destructive' });
            return;
        }
        if (data.title === '') {
            toast({ description: 'title can\'t be empty ', variant: 'destructive' });
            return;
        }
        if (data.tag === '') {
            toast({ description: 'select at least one tag', variant: 'destructive' });
            return;
        }
        setButtonState(() => 'loading');
        try {
            const docRef = await addDoc(collection(db, 'bin'), data);
            console.log(docRef.id);
            toast({ description: 'Bin Created Sucessfully 🎉' });
            setButtonState(() => 'idle');
        }
        catch (e) {
            toast({ description: 'Something went Wrong 😔', variant: 'destructive' });
        }
    }

    return { buttonState, createBin }
}

export default useBin;