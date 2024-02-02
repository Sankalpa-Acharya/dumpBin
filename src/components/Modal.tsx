import { ReactNode } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
    children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>DBMS EXP-1</DialogTitle>
                    <DialogDescription>

                        create table CLIENT_MASTER( CLIENTNO varchar(6),
                        NAME varchar(20),
                        ADDRESS_1 varchar(30),
                        ADDRESS_2 varchar(30),
                        CITY  varchar(15),
                        PINCODE varchar(15),
                        STATE varchar(15),
                        BALDUE decimal(10,2)
                        );

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
