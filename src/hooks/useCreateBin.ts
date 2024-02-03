import { useToast } from "@/components/ui/use-toast"
import { db } from "@/config/Firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"
type Bin = {
    id: string,
    date: string,
    title: string,
    description: string
}

type ButtonState = 'idle' | 'loading'


const useBin = (data: Bin) => {
    const { toast } = useToast();
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const createBin = async () => {
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