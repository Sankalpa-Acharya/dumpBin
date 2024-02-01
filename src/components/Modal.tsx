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

                        create table PRODUCT_MASTER(PRODUCTNO VARCHAR(6),
                        DESCRIPTION VARCHAR (15),
                        PROFITPERCENT DECIMAL (4,2),
                        UNIT_MEASURE VARCHAR(10),
                        QTYONHAND INT,
                        REORDERL_VL INT,
                        SELLPRICE DECIMAL(8,2),
                        COSTPRICE DECIMAL(8,2)
                        );

                        CREATE TABLE SALESMAN_MASTER(SALESMANNO VARCHAR(6),
                        SALESMANNAME VARCHAR(20),
                        ADDRESS_1 VARCHAR(30),
                        ADDRESS_2 VARCHAR(30),
                        CITY VARCHAR(20),
                        PINCODE INT,
                        STATE VARCHAR(20),
                        SALAMT REAL,
                        TGTTOGET DECIMAL,
                        YTDSALES DOUBLE(6,2),
                        REMARKS VARCHAR(60)
                        );


                        INSERT INTO client_master (ClientNo, Name, City, Pincode, State, BalDue)
                        VALUES
                        ('C00001', 'Ivan bayross', 'Mumbai', 400054, 'Maharashtra', 15000),
                        ('C00002', 'Mamta muzumdar', 'Madras', 780001, 'Tamil nadu', 0),
                        ('C00003', 'Chhaya bankar', 'Mumbai', 400057, 'Maharashtra', 5000),
                        ('C00004', 'Ashwini joshi', 'Bangalore', 560001, 'Karnataka', 0),
                        ('C00005', 'Hansel colaco', 'Mumbai', 400060, 'Maharashtra', 2000),
                        ('C00006', 'Deepak sharma', 'Mangalore', 560050, 'Karnataka', 0);



                        insert into product_master(PRODUCTNO, DESCRIPTION, PROFITPERCENT, UNIT_MEASURE, QTYONHAND, REORDERL_VL, SELLPRICE, COSTPRICE)
                        values('P00001', 'T-Shirts', 5, 'Piece', 200, 50, 350, 250),
                        ('P0345', 'Shirts', 6, 'Piece', 150, 50, 500, 350),
                        ('P06734', 'Cotton jeans', 5, 'Piece', 100, 20, 600, 450),
                        ('P07865', 'Jeans', 5, 'Piece', 100, 20, 750, 500),
                        ('P07868', 'Trousers', 2, 'Piece', 150, 50, 850, 550),
                        ('P07885', 'Pull Overs', 2.5, 'Piece', 80, 30, 700, 450),
                        ('P07965', 'Denim jeans', 4, 'Piece', 100, 40, 350, 250),
                        ('P07975', 'Lycra tops', 5, 'Piece', 70, 30, 300, 175),
                        ('P08865', 'Skirts', 5, 'Piece', 75, 30, 450, 300);

                        INSERT INTO SALESMAN_MASTER (SALESMANNO, SALESMANNAME, ADDRESS_1, ADDRESS_2, CITY, PINCODE, STATE, SALAMT, TGTTOGET, YTDSALES, REMARKS)
                        VALUES
                        ('S00001', 'Aman', 'A/14', 'Worli', 'Mumbai', '400002', 'Maharashtra', 3000, 100, 50, 'Good'),
                        ('S00002', 'Omkar', '65', 'Nariman', 'Mumbai', '400001', 'Maharashtra', 3000, 200, 100, 'Good'),
                        ('S00003', 'Raj', 'P-7', 'Bandra', 'Mumbai', '400032', 'Maharashtra', 3000, 200, 100, 'Good'),
                        ('S00004', 'Ashish', 'A/5', 'Juhu', 'Mumbai', '400044', 'Maharashtra', 3500, 200, 150, 'Good');
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
